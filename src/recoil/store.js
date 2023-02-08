import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'; //persist1

const { persistAtom } = recoilPersist(); //persist2

export const authenticatedState = atom({
  key: 'authenticatedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
}); //persist3
