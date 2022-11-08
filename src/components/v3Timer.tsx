/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  v3timer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (orientation: portrait) {
      grid-column: 1 / 4;
      grid-row: 1 / 5;
    }
    @media (orientation: landscape) {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
    }
  `
}

const V3Timer = (): JSX.Element => {
  return (
    <div css={styles.v3timer}>
      v3タイマー
    </div>
  );
};

export default V3Timer;
