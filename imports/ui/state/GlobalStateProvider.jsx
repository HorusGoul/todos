import React from 'react';
import PropTypes from 'prop-types';

import { LocaleProvider } from './LocaleState';
import { MenuOpenProvider } from './MenuOpenState';

export const GlobalStateProvider = ({
  menuOpen,
  ...props,
}) => (
  <LocaleProvider>
    <MenuOpenProvider menuOpen={menuOpen} {...props} />
  </LocaleProvider>
);

GlobalStateProvider.propTypes = {
  menuOpen: PropTypes.bool,
};

GlobalStateProvider.defaultProps = {
  menuOpen: false,
};