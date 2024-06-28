import React from 'react';
import { Header } from '../../components/Main/Header';
import { Space } from '../../common/Space';
import { Notice } from '../../components/Main/Notice';
import { TranslatedText } from '../../components/Main/TranslatedText';
import useMainVM from './useMainVM';

export const Main = () => {
  const {
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
  } = useMainVM();

  return (
    <div>
      <Header
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        seconds={seconds}
        isTaskFinished={isTaskFinished}
        changeTaskStatus={changeTaskStatus}
        sConnected={sConnected}
      />
      <Space top={120} />
      <Notice isStopStatus={false} msgCount={msgCount} />
      <TranslatedText
        text={text}
        isRecording={isRecording}
        msgCount={msgCount}
      />
      {!isRecording && text.length !== 0 && (
        <Notice isStopStatus={true} msgCount={msgCount} />
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
