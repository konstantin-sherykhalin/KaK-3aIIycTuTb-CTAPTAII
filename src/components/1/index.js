import React,{Component} from 'react';
import {Redirect} from 'react-router';

import Layout from './layout';

export default class App extends Component {
	state = {
		redirect: false,

		me: '',
		idea: '',
	};

	set_me   = (me)   => this.setState({me});
	set_idea = (idea) => this.setState({idea});

	next = () => {
		if(this.state.me.length && this.state.idea.length) this.setState({redirect:'/two'});
	}

	render() {
		return (
			this.state.redirect ? (
				<Redirect to={this.state.redirect} />
			) : (
				<Layout
					state={this.state}
					set_me={this.set_me}
					set_idea={this.set_idea}
					next={this.next}
				/>
			)
		);
	}
}
