/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { counterAtomState } from '@/atoms/atom';

const counterStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 10rem;
  user-select: none;
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
  const [count, setCount] = useRecoilState(counterAtomState);

  const countOne = () => {
    setCount(count => count + 1);
  };

  return (
    <div
      css={counterStyle}
      onClick={() => { countOne(); }}
    >
      {count}
    </div>
  );
};

export default Counter;
