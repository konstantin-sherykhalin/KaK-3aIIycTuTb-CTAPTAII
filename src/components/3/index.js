import React,{Component} from 'react';
import {Redirect} from 'react-router';

import Layout from './layout';

export default class App extends Component {
	state = {
		redirect: false,
	};

	next = () => {
		if(this.state.me.length && this.state.idea.length) this.setState({redirect:'/four'});
	}

	render() {
		return this.state.redirect ? <Redirect to={this.state.redirect} /> : <Layout/>;
	}
}
