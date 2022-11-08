/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const counterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (orientation: portrait) {
    grid-column: 1 / 1;
    grid-row: 4 / 6;
  }
  @media (orientation: landscape) {
    grid-column: 4 / 6;
    grid-row: 1 / 1;
  }
`;

const Counter = (): JSX.Element => {
  return (
    <div css={counterStyle}>
      カウンター
    </div>
  );
};

export default Counter;
