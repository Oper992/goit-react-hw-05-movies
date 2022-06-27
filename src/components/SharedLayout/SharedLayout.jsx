import { NavLink, Outlet } from 'react-router-dom';
import styled from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <div className={styled.header}>
        <nav className={styled.navigation}>
          <NavLink to="/" className={styled.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styled.link}>
            Movies
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
