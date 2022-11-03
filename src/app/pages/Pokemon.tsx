import React, { useEffect } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { LOADSTATUS } from 'common/enums/enum-status';
import { AppRoute } from 'common/enums/app-route.enum';
import { PokeAvatar } from 'app/components/PokeAvatar';
import { pokemonInfoActionCreator } from 'app/store/PokemonInfo/pokemonInfo.reducer';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { BounceLoaderHelper } from 'app/components/loader/BounceLoaderHelper';
import { getPokemonImagesCreateAction } from 'app/store/PokemonImages/pokemonImages.reducer';
import { PokeInfo } from 'app/components/PokeInfo';

export const PokemonPage = () => {
  const { pokeName } = useParams();
  const navigate = useNavigate();

  const getPokemonInfo = useAppSelector((store) => store.getPokemonInfo);
  const getPokemonImage = useAppSelector((store) => store.getPokemonImages);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(pokemonInfoActionCreator.getPokemonInfo(pokeName!));
    dispatch(getPokemonImagesCreateAction.getPokemonImages(pokeName!));
  }, []);

  if (getPokemonInfo.loadStatus === LOADSTATUS.loading) {
    return <BounceLoaderHelper />;
  }

  if (
    getPokemonInfo.loadStatus === LOADSTATUS.fail ||
    getPokemonImage.loadStatus === LOADSTATUS.fail
  ) {
    navigate(AppRoute.NOT_FOUND);
  }

  return (
    <section className="screen-pokemonPage">
      <div className="bg-backgroundEveryPokemon background-stretch bg-no-repeat resize h-full w-full fixed ">
        <div className="flex flex-col items-center h-full justify-center gap-5">
          <PokeAvatar />
          <PokeInfo {...getPokemonInfo} />
          <NavLink to={AppRoute.ROOT} className="border-2 p-5 bg-black text-yellow-50 rounded-lg">
            Return Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};
