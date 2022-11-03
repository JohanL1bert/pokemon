import React from 'react';
import { IGetPokemonInfo } from 'app/store/PokemonInfo/interface';

export const PokeInfo = React.memo((props: IGetPokemonInfo) => {
  const { height, weight, types, stats } = props;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 border-2">
        <div className="h-20 w-28 border-r-2">
          <div className="border-b-2 flex justify-center">Type</div>
          <div className="flex justify-center items-center h-5/6">
            {types.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={index} className="self-center">
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="h-20 w-28 border-r-2">
          <div className="border-b-2 flex justify-center">Height</div>
          <div className="flex justify-center items-center h-5/6">{height}</div>
        </div>
        <div className="h-20 w-28">
          <div className="border-b-2 flex justify-center">Weight</div>
          <div className="flex justify-center items-center h-5/6">{weight}</div>
        </div>
      </div>
      <div>2 section</div>
      <div>
        <div className="border-solid border-2">
          <div className="">Stats</div>
          <div className="grid grid-cols-3">
            <div>{stats.hp}</div>
            <div>{stats.attack}</div>
            <div>{stats.defense}</div>
            <div>{stats.special_attack}</div>
            <div>{stats.special_defense}</div>
            <div>{stats.speed}</div>
          </div>
        </div>
      </div>
    </div>
  );
});
