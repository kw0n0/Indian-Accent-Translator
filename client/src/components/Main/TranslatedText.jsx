import Lottie from 'lottie-react';
import { Space } from '../../common/Space';
import styled from '@emotion/styled';
import loading from '../../assets/lottie/loading.json';

export const TranslatedText = ({ text, isRecording, msgCount }) => {
  if (text.length === 0) return;

  const copyContent = () => {
    navigator.clipboard.writeText(text.join('\n'));
  };

  return (
    <Container>
      <div>
        {text.join('\n')}
        <Space top={10} />
        {!isRecording && text.length === 0 && (
          <CopyBox>
            <img src={'/images/copy.svg'} width={17} height={17} />
            <div onClick={copyContent}>간편 복사하기</div>
          </CopyBox>
        )}
      </div>
      {msgCount > 0 && (
        <Lottie
          style={{ width: '200px', height: '100px' }}
          animationData={loading}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 20px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-of-type {
    width: 90%;
    border-radius: 20px;
    background: #ffb800;
    color: #fff;
    white-space: pre-wrap;
    padding: 30px;

    font-size: 20px;
    font-weight: 700;
    line-height: 150%; /* 24px */
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
  }
`;

const CopyBox = styled.div`
  display: inline-flex;
  height: 24px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 4px solid var(--colors-grey-4-border, #ffb800);
  background: var(--colors-White, #fff);
  color: #313131;

  font-size: 17px;
  font-weight: 500;
  line-height: 16px;

  position: absolute;
  bottom: -15px;
  left: -10%;
  cursor: pointer;
`;
