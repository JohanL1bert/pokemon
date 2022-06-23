import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { TrootStore, AppDispatch } from 'app/store/storeConfig';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TrootStore> = useSelector;
