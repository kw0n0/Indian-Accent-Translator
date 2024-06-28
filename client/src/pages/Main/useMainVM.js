import useSocketConnection from '../../hooks/useSocketConnection';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function useMainVM() {
  const { onMessage, sendMessage, sConnected } = useSocketConnection();

  const [isTaskFinished, setIsTaskFinished] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  const [text, setText] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [msgCount, setMsgCount] = useState(0);

  const mediaRecorderRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chunkRef = useRef([]);
  const isTaskFinishedRef = useRef(true);

  const checkVolume = (stream) => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let silenceStart = Date.now();
    let flag = false;

    async function recordAudio() {
      await stopRecording();
      await startRecording();
    }

    const analyze = () => {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const average = sum / bufferLength;

      let threshold = 128;
      const SILENCE_DURATION = 1000;

      if (average > threshold) {
        silenceStart = Date.now();
        flag = true;
      } else {
        if (
          Date.now() - silenceStart > SILENCE_DURATION &&
          flag &&
          !isTaskFinishedRef.current
        ) {
          recordAudio();
          return;
        }
      }

      requestAnimationFrame(analyze);
    };

    analyze();
  };

  async function startRecording() {
    chunkRef.current = [];

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = function (e) {
          if (isTaskFinishedRef.current) return;

          chunkRef.current.push(e.data);
          const blob = new Blob(chunkRef.current, {
            type: 'audio/ogg; codecs=opus',
          });
          sendMessage(blob);
          setMsgCount((prev) => prev + 1);
        };

        mediaRecorderRef.current.onstop = function () {
          console.log('오디오 멈춤');
        };

        mediaRecorderRef.current.start();
        checkVolume(stream);
      })
      .catch(function (err) {
        console.log('마이크에 접근하는 중에 오류가 발생했습니다: ' + err);
      });

    setIsRecording(true);
  }

  async function stopRecording() {
    if (mediaRecorderRef.current && mediaRecorderRef.current.stream) {
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }

    setIsRecording(false);
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const changeTaskStatus = () => {
    setIsTaskFinished((prev) => !prev);
  };

  useEffect(() => {
    onMessage((data) => {
      let msg = JSON.parse(data).message;
      setText((text) => [...text, msg]);
      setMsgCount((prev) => prev - 1);
    });
  }, []);

  useEffect(() => {
    let interval = null;

    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isRecording && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRecording, seconds]);

  useEffect(() => {
    scrollToBottom();
  }, [text]);

  useEffect(() => {
    isTaskFinishedRef.current = isTaskFinished;
  }, [isTaskFinished]);

  return {
    isRecording,
    startRecording,
    stopRecording,
    seconds,
    text,
    messagesEndRef,
    isTaskFinished,
    changeTaskStatus,
    msgCount,
    sConnected,
  };
}
