import React,{Component} from 'react';
import {Redirect} from 'react-router';

import Layout from './layout';

export default class App extends Component {
	state = {
		redirect: '/one',
	};

	next = () => {
		this.setState({redirect:'/one'});
	}

	render() {
		return (
			this.state.redirect ? (
				<Redirect to={this.state.redirect} />
			) : (
				<Layout next={this.next} />
			)
		);
	}
}
