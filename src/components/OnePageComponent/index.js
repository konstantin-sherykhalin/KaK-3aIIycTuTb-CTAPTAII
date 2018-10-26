import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div className="">
          <div className="">
              <h1>Начни составлять свой бизнес-план сейчас</h1>
              <label className="">Автор идеи</label>
              <input className="" alt="logo" />
              <label className="">Инвестор</label>
              <input className="" alt="logo" />
          </div>
          <div className="">
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
  }
}
