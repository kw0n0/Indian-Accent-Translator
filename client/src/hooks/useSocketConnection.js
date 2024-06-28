import { useRef, useEffect, useState } from 'react';

export default function useSocketConnection() {
  const [sConnected, setSConnected] = useState(false);
  const socketRef = useRef(null);

  const sendMessage = (data) => {
    if (socketRef.current) {
      socketRef.current.send(data);
    }
  };
  const onMessage = (callback) => {
    if (socketRef.current) {
      socketRef.current.onmessage = (event) => {
        callback(event.data);
      };
    }
  };

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8080/ws/intoeng/');
    socketRef.current.onopen = () => {
      console.log('WebSocket 연결 성공');
      setSConnected(true);
    };
    socketRef.current.onclose = () => {
      console.log('WebSocket 연결 종료');
    };
    socketRef.current.onerror = (error) => {
      console.error('WebSocket 오류:', error);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return {
    sendMessage,
    onMessage,
    sConnected,
  };
}
