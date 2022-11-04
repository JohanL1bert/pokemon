import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'app/components/Header';
import { UpperLine } from 'app/components/additional/UpperLine';

export const Layout = () => {
  return (
    <>
      <Header />
      <UpperLine />
      <Outlet />
    </>
  );
};
