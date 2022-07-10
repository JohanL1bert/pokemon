import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';
import { Home } from 'app/pages/Home';
import { NotFound } from 'app/pages/NotFound';
import { PokemonPage } from 'app/pages/PokemonPage';
import { Layout } from 'app/pages/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
        <Route path={AppRoute.NAME_POKEMON} element={<PokemonPage />} />
      </Route>
    </Routes>
  );
};
