import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header className="Nav">
    <h1 className="Logo">Nice Numbers</h1>
    <ul>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/">
          Rate
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </header>
);