import s from './Uikit.module.scss'; // modified
import { FC } from 'react';

export interface UikitProps {
  name: string;
}

export const Uikit: FC<UikitProps> = ({ name }) => {
  return (
    <div className={s['background']}>
      <h1>Welcome to Uikit! {name}</h1>
    </div>
  );
};

export default Uikit;
