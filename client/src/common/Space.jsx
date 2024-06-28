/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Space({ top, right, bottom, left }) {
  return (
    <div
      css={css`
        margin-top: ${top}px;
        margin-right: ${right}px;
        margin-bottom: ${bottom}px;
        margin-left: ${left}px;
      `}
      aria-hidden="true"
    />
  );
}
