import React, { useRef } from 'react';

export const SearchBar = () => {
  const inputPokemon = useRef<HTMLInputElement | null>(null);

  const inputSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        ref={inputPokemon}
        onChange={inputSearchBar}
        type="text"
        placeholder="  Search Pokemon"
        className="h-10 w-80 border-2 rounded-md"
      />
    </div>
  );
};
