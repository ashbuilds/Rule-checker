import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.css';

export default () => (
  <header className={style.header}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </header>
);
