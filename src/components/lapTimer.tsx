/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  laptimer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (orientation: portrait) {
      grid-row: 4 / 6;
      grid-column: 2 / 2;
    }
    @media (orientation: landscape) {
      grid-row: 2 / 2;
      grid-column: 4 / 6;
    }
  `
}

const LapTimer = (): JSX.Element => {
  return (
    <div css={styles.laptimer}>
      ラップタイム
    </div>
  );
};

export default LapTimer;
