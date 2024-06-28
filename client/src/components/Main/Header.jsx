/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { convertTime } from '../../utils/convertTime';
import { Space } from '../../common/Space';

export const Header = ({
  stopRecording,
  startRecording,
  seconds,
  isTaskFinished,
  changeTaskStatus,
  sConnected,
}) => {
  function handleClick() {
    if (isTaskFinished) {
      startRecording();
      changeTaskStatus();
    } else {
      stopRecording();
      changeTaskStatus();
    }
  }

  return (
    <Container>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Space right={20} />
        <img src={`/images/mic.svg`} width={60} height={60} />
        <Space right={15} />
        <span
          css={css`
            font-size: 40px;
            font-weight: 700;
            color: white;
          `}
        >
          INTOENG
        </span>
      </div>

      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Space right={10} />
        {sConnected && (
          <img
            src={isTaskFinished ? '/images/start.svg' : '/images/stop.svg'}
            width={40}
            height={40}
            onClick={handleClick}
          />
        )}
        <Space right={20} />
        <Timer>{convertTime(seconds)}</Timer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: #ffb800;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 30px;
  box-sizing: border-box;
  z-index: 2;
`;

const Timer = styled.div`
  width: 42px;
  height: 16px;
  color: #909093;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
`;
