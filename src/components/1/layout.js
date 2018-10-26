import React from 'react';

export default () =>  (
	<div className="first-q">
	  <div className="">
	      <h1>Начни составлять свой бизнес-план сейчас</h1>
	      <input id="one" type="radio" />
	      <label for="one">Автор идеи</label>
	      <input id="two" type="radio" />
	      <label for="two">Инвестор</label>
	  </div>
	  <div className="second-q">
	      <h1>С чем связана твоя идея?</h1>
	      <select>
	        <option>IT-стартап</option>
	        <option>Салон красоты</option>
	        <option>Пекарня</option>
	        <option>Интернет-магазин</option>
	        <option>Рекламное агенство</option>
	      </select>
	  </div>
	</div>
);