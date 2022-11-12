/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';

const styles = {
  v3timer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    @media (orientation: portrait) {
      grid-column: 1 / 4;
      grid-row: 1 / 5;
    }
    @media (orientation: landscape) {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
    }
  `,
  warn: css`
    background: yellow;
  `,
  danger: css`
    background: red;
  `,
  list: css`
    list-style: none;
    font-size: 5rem;
    padding: 0;
    margin: 0:
  `,
  item: css`
    text-align: center;
  `
}

const V3Timer = (): JSX.Element => {
  const defaultTime: number = Number(localStorage.getItem('o')) || (Date.now()) - 30000;
  const [prevTappedTime, setPrevTappedTime] = useState<number>(defaultTime);
  const [displayTime, setDisplayTime] = useState<string>('0');
  const [remainTime, setRemainTime] = useState<number>(0);
  const [isDanger, setIsDanger] = useState<boolean>(false);

  useEffect(() => {
    const id = setInterval(() => {
      const passedTime: number = (Date.now() - prevTappedTime) / 1000;
      setDisplayTime(passedTime.toFixed(1));
      setRemainTime(Math.max((30 - passedTime), 0));

      if (remainTime === 0) {
        setIsDanger(false);
      }
    }, 100);

    return (() => {
      clearInterval(id);
    });
  }, [prevTappedTime, isDanger]);

  return (
    <div
      css={remainTime > 0 ? (
        isDanger ?
          css(styles.danger, styles.v3timer) :
          css(styles.warn, styles.v3timer)
      ) : styles.v3timer}
      onClick={() => {
        console.log({isDanger});
        if (remainTime > 0) {
          setIsDanger(true);
        } else {
          setPrevTappedTime(Date.now());
          localStorage.setItem('o', String(Date.now()));
        }
      }}
    >
      <ul css={styles.list}>
        <li>
          <span>残り：</span>
          <span>{remainTime.toFixed(1)}</span>
        </li>
        <li css={styles.item}>{displayTime}</li>
      </ul>
    </div>
  );
};

export default V3Timer;
