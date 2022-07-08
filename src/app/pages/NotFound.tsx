import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';

export const NotFound = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col items-center gap-y-3">
        <div className="text-9xl">404</div>
        <span>OOPS, SORRY WE CAN&apos;T FIND THAT PAGE!</span>
        <span className="">Page not Found</span>
        <Link to={AppRoute.ROOT} className="border-2 p-2 rounded-md border-current">
          Home Page
        </Link>
      </div>
    </div>
  );
};
