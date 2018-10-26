import React from 'react';

export default (props) =>  (
	<div className="container">
		<div className="first-q">
			<h2>Давай познакомимся</h2>
			<p>
				loreAdipisicing cupidatat ut officia aute proident mollit sunt consequat eiusmod
				excepteur ut sit velit aute consectetur ex aliquiproident amet duis fugiat et quis
				amet sint dolore amet exercitation veniam dolore veniam anim duis.</p>
			<h3>Какая у тебя идея?</h3>
			<textarea rows="10" onChange={({target}) => props.set_idea(target.value)}></textarea>
			<input className="button" type="submit" value="Готово" onClick={props.next} />
		</div>
    </div>
);
