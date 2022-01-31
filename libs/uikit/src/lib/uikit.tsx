import s from './uikit.module.scss';
import { FC } from 'react';

export interface UikitProps {
  name: string;
}

export const Uikit: FC<UikitProps> = ({ name }) => {
  return (
    <div className={s['background']}>
      <h1>Welcome {name} to my UI Kit</h1>
      <p className={s['red-letters']}>I am red!!!</p>
    </div>
  );
};

export default Uikit;
