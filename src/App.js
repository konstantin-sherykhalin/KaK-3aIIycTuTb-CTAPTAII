import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import OnePageComponent from'./components/OnePageComponent';
import TwoPageComponent from'./components/TwoPageComponent';
import ThreePageComponent from'./components/ThreePageComponent';

import logo from './logo.svg';
import './App.css';

var  routes = [
  <Route key="1" exact { ...{path:'/one',  component: OnePageComponent }} />,
  <Route key="2" exact { ...{path:'/two',  component: TwoPageComponent }} />,
  <Route key="3" exact { ...{path:'/three',  component: ThreePageComponent }} />,
];

export default () => <Switch>{routes}</Switch>



