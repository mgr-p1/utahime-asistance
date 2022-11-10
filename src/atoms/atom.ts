import { atom } from 'recoil';

const counterAtomState = atom<number>({
  key: 'counter',
  default: 0,
});

export {
  counterAtomState,
};
