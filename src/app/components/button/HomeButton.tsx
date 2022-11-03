import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';

export const HomeButton = () => {
  return (
    <div className="flex justify-center items-center">
      <NavLink to={AppRoute.ROOT} className="border-1 border-dashed">
        Return to Home Page
      </NavLink>
    </div>
  );
};
