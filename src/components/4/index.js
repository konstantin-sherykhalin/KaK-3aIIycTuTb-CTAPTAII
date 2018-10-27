import React,{Component} from 'react';

import Layout from './layout';

export default class App extends Component {
	state = {
		step: [
			{
				name: 'Проблема и решение',
				question: '',
				active: true,
				available: true,
			},
			{
				name: 'Рынок и конкуренты',
				active: false,
				available: false,
			},
			{
				name: 'Проверка гипотезы',
				active: false,
				available: false,
			},
		],
	};

	render() {
		return (<Layout state={this.state} />);
	}
}
