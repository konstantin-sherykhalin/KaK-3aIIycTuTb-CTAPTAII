import React			from 'react';
import {Route,Switch}	from 'react-router-dom';

import './App.css';

import MainComponent	from './components/main';
import Page1Component	from './components/1';
import Page2Component	from './components/2';
import Page3Component	from './components/3';
import Page4Component	from './components/4';

var routes = [
	<Route key="0" exact {...{path:'/',		component: MainComponent }} />,
	<Route key="1" exact {...{path:'/one',	component: Page1Component}} />,
	<Route key="2" exact {...{path:'/two',	component: Page2Component}} />,
	<Route key="3" exact {...{path:'/three',component: Page3Component}} />,
	<Route key="4" exact {...{path:'/four',	component: Page4Component}} />,
];

export default () => <Switch>{routes}</Switch>;
