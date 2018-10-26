import React from 'react';

export default (props) =>  (
	<div className="container">
          <div className="block-qq">
              <h2>Одно правило, которое поможет тебе реализовать идею </h2>
              <h3>У нас есть одно правило, которого ты должен придерживаться всегда</h3>
              <p>'Делай каждый новый шаг не позже, чем через 48 часов'</p>
              <input type="submit" className="button" value="Готово" onClick={props.next} />
          </div>
    </div>
);
