/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { counterAtomState } from '@/atoms/atom';

type LapTime = string;

const styles = {
  laptimer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    @media (orientation: portrait) {
      grid-row: 4 / 6;
      grid-column: 2 / 2;
      border-left: 1px solid black;
    }
    @media (orientation: landscape) {
      grid-row: 2 / 2;
      grid-column: 4 / 6;
      border-top: 1px solid black;
    }
  `,
  current: css`
    font-size: 2rem;
    text-align: center;
    width: 50%;
  `,
  list: css`
    font-size: 2rem;
    height: 100%;
    list-style: none;
    margin: 0;
    overflow-y: auto;
    padding: 0;
    text-align: center;
    width: 50%;
  `,
  item: css`
    display: flex;
    justify-content: flex-start;
  `,
  label: css`
    text-align: left;
    width: 80px;

    &::after {
      content: '.';
    }
  `,
}

const LapTimer = (): JSX.Element => {
  const [lapTimes, setLapTimes] = useState<LapTime[]>([]);
  const [tappedTime, setTappedTime] = useState<number>(new Date().getTime());
  const [displayTime, setDisplayTime] = useState<LapTime>('0:00.0');

  const setCount = useSetRecoilState(counterAtomState);

  useEffect(() => {
    const id = setInterval(() => {
      const seconds = (Date.now() - tappedTime) / 1000;
      const minutes = Math.trunc(seconds / 60);
      setDisplayTime(`${String(minutes).padStart(2, '0')}:${(seconds % 60).toFixed(1).padStart(4, '0')}`);
    }, 100);

    return (() => {
      clearInterval(id);
    });
  }, [tappedTime]);

  return (
    <div
      css={styles.laptimer}
      onPointerDown={() => {
        setLapTimes(prev => [displayTime].concat(prev));
        setTappedTime(Date.now());
        setCount(0);
      }}
    >
      <div css={styles.current}>{displayTime}</div>
      <ul css={styles.list}>
        {lapTimes.map((time, index) => (
          <li
            css={styles.item}
            key={index}
          >
            <span css={styles.label}>{lapTimes.length - index}</span>
            <span>{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LapTimer;
