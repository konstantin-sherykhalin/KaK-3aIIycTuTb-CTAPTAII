import React,{Component} from 'react';

const me = [
	'Автор идеи',
	'Инвестор',
];
const idea = [
	'IT-стартап',
	'Салон красоты',
	'Пекарня',
	'Интернет-магазин',
	'Рекламное агенство',
];

export default class Layout extends Component {
	state = {
		me: -1,
		idea: -1,
	};

	set_me	 = (value) => {
		this.setState({me:value});
		this.props.set_me(me[value]);
		console.log(this.state);
	};
	set_idea = (value) => {
		this.setState({idea:value});
		this.props.set_idea(idea[value]);
	}

	render() {
		return (
			<div className="container">
				<h1>Начни составлять свой бизнес-план сейчас</h1>
				<div className="block-q">
					<h2>Кто ты. Я -</h2>
					{me.map((e,i) => (
						<label key={i} className={this.state.me==i ? 'checked' : 'unchecked'} onClick={_ => this.set_me(i)}>{e}</label>
					))}
				</div>
				<div className="block-q">
					<h2>С чем связана твоя идея?</h2>
					<select defaultValue={this.state.idea} onChange={({target}) => this.set_idea(target.value)}>
						<option value={-1} disabled>Выберите ваше сферу деятельности</option>
						{idea.map((e,i) => (<option key={i} value={i}>{e}</option>))}
					</select>
				</div>
				<input type="button" className="button" value="Дальше" onClick={this.props.next} />
			</div>
		);
	}
}
