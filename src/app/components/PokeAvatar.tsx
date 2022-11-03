import React from 'react';

export const PokeAvatar = () => {
  return (
    <div className="flex items-center -mt-16">
      <button type="button" aria-label="prev" className="h-28 w-28 bg-black" />
      <div className="border-2 w-80 h-80 border-solid border-current border-r-2 flex justify-center items-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="pokemon"
          className=""
        />
      </div>
      <button type="button" aria-label="next" className="h-28 w-28 bg-black" />
    </div>
  );
};
