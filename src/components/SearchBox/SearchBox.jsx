import React from 'react';

import './serach-box-styled.jsx/index.js.js.js';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder= {props.placeholder}
    onChange={props.onSearchChange}
  />
);
