import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';
/* import { pageUrl } from 'common/const/app.const'; */

export const HomePage = () => {
  const navigate = useNavigate();

  const navigatePath = () => {
    navigate(AppRoute.URL);
  };

  return (
    <section className="h-screen flex justify-center items-center bg-backgroundHome bg-cover bg-no-repeat">
      <div className="w-52 h-12 border-2 border-solid outline rounded-lg outline-pink-500 transition-all duration-1000 ease-tr-btn-start hover:outline-offset-15 hover:outline-color-outline">
        <NavLink
          to={`${AppRoute.URL}=1`}
          className="flex justify-center items-center text-lg	w-full h-full cursor-pointer text-blue-100"
          onClick={navigatePath}
        >
          Go to Pokemons
        </NavLink>
      </div>
    </section>
  );
};
