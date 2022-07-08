import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';
import { Home } from 'app/pages/Home';
import { NotFound } from 'app/pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<Home />} />
      <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};
