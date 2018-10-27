import React,{Component} from 'react';

import Layout from './layout';

export default class App extends Component {
	state = {
		step: [
			{
				name: 'Проблема и решение',
				question: 'Вопрос',
				answers: [1,2,3],
				true_answer: 0,
			},
			{
				name: 'Рынок и конкуренты',
			},
			{
				name: 'Проверка гипотезы',
			},
		],
		active: 0,
		available: 0,
	};

	render() {
		return (<Layout state={this.state} />);
	}
}
