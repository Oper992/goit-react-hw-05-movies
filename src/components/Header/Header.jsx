import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';

export const Header = () => {
  return (
    <div className={styled.header}>
      <nav className={styled.navigation}>
        <NavLink to="/" className={styled.link} >
          Home
        </NavLink>
        <NavLink to="/movies" className={styled.link} >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
