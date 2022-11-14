import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOADSTATUS } from 'common/enums/enum-status';
import { AppRoute } from 'common/enums/app-route.enum';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getPokemonTypesActionCreator } from 'app/store/pokemonTypes/pokemonTypes.reducer';
import { BounceLoaderHelper } from 'app/components/loader/BounceLoaderHelper';

export const Setting = () => {
  const dispatch = useAppDispatch();
  const pokemonTypes = useAppSelector((store) => store.getPokemonTypes);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPokemonTypesActionCreator.getPokemonTypes());
  }, [dispatch]);

  if (pokemonTypes.loadStatus === LOADSTATUS.loading) {
    return <BounceLoaderHelper />;
  }

  if (pokemonTypes.loadStatus === LOADSTATUS.fail) {
    navigate(AppRoute.NOT_FOUND);
  }

  return (
    <div className="setting">
      <div className="setting__inner">
        <div className="setting__filter-types">1</div>
      </div>
    </div>
  );
};
