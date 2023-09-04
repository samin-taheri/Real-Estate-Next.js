/* eslint-disable react/jsx-no-undef */
// Routes.tsx
import About from '@/pages/about';
import Home from '@/app/page';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const Routes: React.FC = () => (
  <Router>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
  </Router>
);

export default Routes;
