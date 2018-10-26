import React,{Component} from 'react';
import {Redirect} from 'react-router';

import Layout from './layout';

export default class App extends Component {
	state = {
		redirect: false,

		idea: '',
	};

	set_idea = (idea) => this.setState({idea});

	next = () => {
		if(this.state.idea.length) this.setState({redirect:'/three'});
	}

	render() {
		return this.state.redirect ? <Redirect to={this.state.redirect} /> : <Layout/>;
	}
}
