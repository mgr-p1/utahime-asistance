/** @jsx jsx */
import { RecoilRoot } from 'recoil';
import { css, jsx } from '@emotion/react';
import V3Timer from '@/components/v3Timer';
import LapTimer from '@/components/lapTimer';
import Counter from '@/components/counter';

const gridStyle = css`
  display: grid;
  height: 100vh;
  width: 100vw;
  @media (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media (orientation: landscape) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Main = (): JSX.Element => {
  return (
    <RecoilRoot>
      <div css={gridStyle}>
        <V3Timer />
        <Counter />
        <LapTimer />
      </div>
    </RecoilRoot>
  );
};

export default Main;
