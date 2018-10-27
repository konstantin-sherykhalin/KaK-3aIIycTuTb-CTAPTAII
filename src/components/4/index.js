import React,{Component} from 'react';

import Layout from './layout';

export default class App extends Component {
	state = {
		step: [
			{
				name: 'Проблема и решение',
				title: 'Что такое бизнес канвас?',
				text: 'Это какая-то дичь.',
				test: false,
				question: 'Вы решили запустить сервис онлайн бухгалтерии. Укажите, что относится к преимуществам',
				answers: ['Электронный документооборот','Дешево','Удаленный доступ','Автоматизация учета'],
				answer: -1,
				true_answer: 2,
				canvas: false,
			},
			{
				name: 'Рынок и конкуренты',
			},
			{
				name: 'Проверка гипотезы',
			},
			{
				name: 'Показатели успеха',
			},
			{
				name: 'Юнит-экономика',
			},
			{
				name: 'Роадмап',
			},
		],
		active: 0,
		available: 0,
	};

	start_test = () => {
		let step = this.state.step;
		step[this.state.active].test = true;
		this.setState({step});
		console.log(this.state);
	}

	set_answer = (answer) => {
		let step = this.state.step;
		step[this.state.active].answer = answer;
		this.setState({step});
	}

	start_canvas = () => {
		let step = this.state.step;
		step[this.state.active].canvas = true;
		this.setState({step});
	}

	next_step = () => {
		if(this.state.step[this.state.active].answer === this.state.step[this.state.active].true_answer) {
			this.setState(prev => ({active:prev.active+1,available:prev.available+1}));
		}
	}

	render() {
		return (
			<Layout
				state={this.state}
				start_test={this.start_test}
				set_answer={this.set_answer}
				next_step={this.next_step}
			/>
		);
	}
}
