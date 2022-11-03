import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';
import { /* imgNotFoundPokemonPagination, */ gifPokemonNotFound } from 'common/const/app.const';
/* import { TPokemonCard } from 'app/store/getPokemon/interface'; */

export const PokeCard = (pokeInfo: any) => {
  const { name, pokeImage, types } = pokeInfo; // url exist
  const [img, setImg] = useState<string>(pokeImage);
  const [isBadRequest, setIsBadRequest] = useState<boolean>(false);

  const navigate = useNavigate();

  const navigatePath = () => {
    navigate(AppRoute.NAME_POKEMON);
  };

  const checkError = () => {
    setIsBadRequest(true);
    setImg(gifPokemonNotFound);
  };

  return (
    <li className="w-36 h-44 flex justify-between mb-5 mt-5">
      <div
        className="w-full border-double border-4 border-indigo-600 rounded-md flex flex-col"
        style={{ borderColor: types[0].color }}
      >
        <div className="p-1">
          <div className=" flex justify-between p-1 items-center">
            <div className="h-12 flex items-center">
              <Link
                to={name}
                onClick={navigatePath}
                className="border-b-2  rounded-sm pb-0.5"
                style={{ borderColor: `${types[0].color}` }}
              >
                {name}
              </Link>
            </div>
            <div className="flex justify-center flex-row-reverse">
              {types.map((item: any) => (
                <img src={item.imgType} alt="type of pokemon" className="w-6 h-6" />
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex justify-center w-full h-36 items-center"
          style={
            types.length === 1
              ? { background: `${types[0].color}` }
              : {
                  background: `linear-gradient(300deg, ${types[0].color} 50%, ${types[1].color} 80%`,
                }
          }
        >
          <img
            src={img}
            alt="pokemon"
            onError={checkError}
            className={!isBadRequest ? 'w-24 h-24' : 'w-full h-full'}
          />
        </div>
      </div>
    </li>
  );
};
