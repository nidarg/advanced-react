import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuButton';
import MenuDropdown from './Menu/MenuDropdown';
import MenuItem from './Menu/MenuItem';

const WrapperMenu = () => {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>

      <MenuDropdown>
        {sports.map((sport) => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
};

export default WrapperMenu;
