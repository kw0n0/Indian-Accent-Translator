/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Space({ top, right, bottom, left }) {
  return (
    <div
      css={css`
        padding-top: ${top}px;
        padding-right: ${right}px;
        padding-bottom: ${bottom}px;
        padding-left: ${left}px;
      `}
      aria-hidden="true"
    />
  );
}
