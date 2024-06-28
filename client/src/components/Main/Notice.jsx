/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Space } from '../../common/Space';
import styled from '@emotion/styled';

import { Fragment } from 'react';

export const Notice = ({ isStopStatus, msgCount }) => {
  if (isStopStatus) {
    return (
      <Fragment>
        <Container>
          <img
            src={'/images/mic.svg'}
            width={75}
            height={86}
            css={css`
              position: absolute;
              top: 0;
              left: -100px;
            `}
          />
          {msgCount > 0
            ? `멈춤버튼을 누른 시점까지의 결과를 받아오고 있습니다.\n조금만 기다리시면 모든 결과가 입력됩니다!`
            : `모든 결과를 받아왔습니다!`}
        </Container>
        <Space top={30} />
      </Fragment>
    );
  } else {
    return (
      <Container>
        <img
          src={'/images/mic.svg'}
          width={75}
          height={86}
          css={css`
            position: absolute;
            top: 0;
            left: -100px;
          `}
        />
        <div>
          {`안녕하세요 😄\n저는 당신의 인도 아대륙 영어 이해를 도와줄 도우미 `}
          <span
            css={css`
              color: #ffb800;
              font-weight: 800;
              line-height: 150%;
            `}
          >
            INTOENG
          </span>
          {`입니다. \n녹음 방법과 주의사항을 안내해 드리겠습니다.\n\n📌 녹음 방법\n1) 우측 상단의 `}
          <span
            css={css`
              color: #ff4733;
              font-weight: 800;
              line-height: 150%;
            `}
          >
            빨간 동그라미 버튼
          </span>
          {`을 클릭하면 녹음이 시작됩니다.\n2) 녹음을 중단하고 싶으시면, 동일한 위치의 멈춤 버튼을 눌러주세요.\n\n📌 주의사항`}
          {`\n녹음 내역은 저장되지 않습니다.`}
        </div>
      </Container>
    );
  }
};

const Container = styled.div`
  width: 489px;
  height: auto;
  border-radius: 20px;
  background: #f5f7fa;
  white-space: pre-wrap;
  padding: 30px;
  margin: 50px 0 0 150px;
  position: relative;

  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
