import React from 'react';

import Canvas from './canvas';

export default (props) => {
	let data = props.state.step[props.state.active];
	return (
		<div className="var-container" style={{display:'flex',flexDirection:'row'}}>
			<div className="left-container">
				<ul>
				{props.state.step.map((e,i) => (
					<li key={i}>{e.name} ></li>
				))}
				</ul>
			</div>
			<div className="middle-container">
				<h1>{data.name}</h1>
				{
					!data.canvas ? (
						!data.test ? (
						<div>
							<h2>{data.title}</h2>
							<p>{data.text}</p>
							<input type="submit" className="button" value="Я готов пройти тест" onClick={props.start_test} />
						</div>
					) : (
						(data.answer === -1 || data.answer !== data.true_answer) ? (
							<div>
								<h2>{data.question}</h2>
								{data.answers.map((e,i) => (<p key={i} onClick={_ => props.set_answer(i)}>{e}</p>))}
								{(data.answer !== -1 && data.answer !== data.true_answer) && (<p>Неправильный ответ!</p>)}
							</div>
						) : (
							<div>
								<p>Правильный ответ!</p>
								<input type="submit" className="button" value="Заполнить канвас доску" onClick={props.start_canvas} />
							</div>
						)
					)
				) : (
					<Canvas send={props.set_canvas} />
				)
			}
			</div>
			<div className="right-container">
				<div>Стоимость идеи:</div>
				<div>1$</div>
			</div>
		</div>
	);
}
