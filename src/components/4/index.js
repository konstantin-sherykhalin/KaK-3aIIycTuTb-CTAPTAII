import React,{Component} from 'react';

import Layout from './layout';

export default class App extends Component {
	state = {
		step: [
			{
				name: 'Проблема и решение',
<<<<<<< HEAD
				question: 'Вы решили запустить сервис онлайн бухгалтерии. Укажите, что относится к преимуществам',
				answers: ['Электронный документооборот','Дешево','Удаленный доступ','Автоматизация учета'],
				answer: -1,
				true_answer: 2,
=======
				question: '',
				active: true,
				available: true,
>>>>>>> 044b4344046ce04886fc4a1d9bb0e4f08968d9bb
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

	set_answer = (answer) => {
		let step = this.state.step;
		step[this.state.active].answer = answer;
		this.setState({step});
	}

	next_step = () => {
		if(this.state.step[this.state.active].answer === this.state.step[this.state.active].true_answer) {
			this.setState(prev => ({active:prev.active+1,available:prev.available+1}));
		}
	}

	render() {
		return (<Layout state={this.state} />);
	}
}
