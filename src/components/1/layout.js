import React, { Component } from 'react';


export default () => (
      <div className="container">
      	  <h1>Начни составлять свой бизнес-план сейчас</h1>
          <div className="first-q">
              <h2>Кто ты. Я -</h2>
              <input id="one" type="radio" checked="true" />
              <label for="one">Автор идеи</label>
              <input id="two" type="radio" />
              <label for="two">Инвестор</label>
          </div>
          <div className="second-q">
              <h2>С чем связана твоя идея?</h2>
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