import React from 'react';
import { SearchBar } from 'app/components/SearchBar';
import { HomeButton } from 'app/components/button/HomeButton';

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center h-20">
        <HomeButton />
        <div className="flex justify-center items-center">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
