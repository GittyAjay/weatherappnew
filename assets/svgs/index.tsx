import React from 'react';
import BackButton from './back_button.svg';
import ClearIcon from './clear_icon.svg';
import CloseCircleIcon from './close_circle_icon.svg';
import CloudyIcon from './cloudy_icon.svg';
import MenuIcon from './menu_icon.svg';
import RainyIcon from './rainy_icon.svg';
import SearchIcon from './search_icon.svg';
import SunIcon from './sun_icon.svg';
export interface SvgProps {
  name: string;
  width?: number;
  height?: number;
}

export const Svg = ({ name, width = 24, height = 24 }: SvgProps) => {
  switch (name) {
    case 'back_button':
      return <BackButton width={width} height={height} />;
    case 'menu_icon':
      return <MenuIcon width={width} height={height} />;
    case 'sun_icon':
      return <SunIcon width={width} height={height} />;
    case 'search_icon':
      return <SearchIcon width={width} height={height} />;
    case 'clear_icon':
      return <ClearIcon width={width} height={height} />;
    case 'cloudy_icon':
      return <CloudyIcon width={width} height={height} />;
    case 'rainy_icon':
      return <RainyIcon width={width} height={height} />;
    case 'close_circle_icon':
      return <CloseCircleIcon width={width} height={height} />;
    default:
      return null;
  }
};
