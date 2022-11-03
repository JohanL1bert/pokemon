import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LOADSTATUS } from 'common/enums/enum-status';
import { AppRoute } from 'common/enums/app-route.enum';
import { limitPokemon } from 'common/const/app.const';
import { PokeCard } from 'app/components/PokeCard';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { getPokemonActionCreator } from 'app/store/getPokemon/getPokemon.reducer';
import { Pagination } from 'app/components/additional/Pagination';
import { BounceLoaderHelper } from 'app/components/loader/BounceLoaderHelper';

export const PokedexList = () => {
  console.log('RENDER');
  const navigate = useNavigate();
  const params = useParams();
  console.log(params, 'params');

  const pokemonStore = useAppSelector((store) => store.getPokemon);

  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offsetPokemon, setOffsetPokemon] = useState<number>(0);

  useEffect(() => {
    dispatch(getPokemonActionCreator.getPokemon(offsetPokemon));
  }, [offsetPokemon, dispatch]);

  if (pokemonStore.loadStatus === LOADSTATUS.loading) {
    return <BounceLoaderHelper />;
  }

  if (pokemonStore.loadStatus === LOADSTATUS.fail) {
    navigate(AppRoute.NOT_FOUND);
  }

  console.log(offsetPokemon, 'offsetPokemon');

  return (
    <div className="screen-height">
      <ul className="wrapper justify-items-center justify-center">
        {pokemonStore.results.map((el, index: number) => {
          return (
            <PokeCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              {...el}
              types={pokemonStore.types[index]}
              pokeImage={pokemonStore.PokemonImage[index]}
            />
          );
        })}
      </ul>
      <div className="flex justify-center items-center h-14">
        <Pagination
          currentPage={currentPage}
          totalCount={pokemonStore.count}
          pageSize={limitPokemon}
          onPageChange={(page: number) => setCurrentPage(page)}
          onOffsetChange={(offset: number) => setOffsetPokemon(offset)}
        />
      </div>
    </div>
  );
};
