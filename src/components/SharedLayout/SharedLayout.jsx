import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from './SharedLayout.module.css';

export const SharedLayout = () => {
  const toggleStyleLink = ({ isActive }) =>
    isActive ? styled.activeLink : styled.link;

  return (
    <>
      <div className={styled.header}>
        <nav className={styled.navigation}>
          <NavLink to="/" className={toggleStyleLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={toggleStyleLink}>
            Movies
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
