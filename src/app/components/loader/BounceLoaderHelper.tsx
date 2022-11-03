import React, { CSSProperties } from 'react';
import { BounceLoader } from 'react-spinners';
import { SpinnerColor, SpinnerSize, CSSOveride } from 'common/helpers/spinnerStyle';

type TBounceLoadProps = {
  override: CSSProperties;
  color: string;
  size: number;
};

export const BounceLoaderHelper = () => {
  return <BounceLoader color={SpinnerColor} cssOverride={CSSOveride} size={SpinnerSize} />;
};

export const BounceLoaderHelperWithPropery = ({ color, override, size }: TBounceLoadProps) => {
  return <BounceLoader color={color} cssOverride={override} size={size} />;
};
