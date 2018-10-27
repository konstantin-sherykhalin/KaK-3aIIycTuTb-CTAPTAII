import React from 'react';

export default (props) =>  (
	<div className="var-container" style={{display:'flex',flexDirection:'row'}}>
		<div className="left-container">
			<ul>
				<li>Проверка идеи ></li>
				<li>Построение гипотезы ></li>
				<li>Проверка гипотезы ></li>
				<li>Показатели успеха ></li>
				<li>Юнит-экономика</li>
				<li>Роадмап</li>
			</ul>
		</div>
		<div className="middle-container">
			<h1>Проверка идеи</h1>
			<h2>Что такое бизнес-канвас?</h2>
			<p>Dolore commodo excepteur dolore dolor sit exercitation non officia
			 laboris sed eiusmod esse ullamco ullamco fugiat id ad 
			  qui excepteur anim exercitation mollit esse tempor est ut 
			  proident proident minim tempor tempor deserunt com
			  modo qui deserunt incididunt dolore cupidatat sunt dolore
			   consequat fugiat ea dolor aliqua culpa duis cupidatat vo
			   luptate incididunt ullamco incididunt adipisicing sed te
			   mpor sed tempor exercitation consectetur ut ut adipisicing
			    id commodo ullamco anim nisi exercitation ut ex cillum vol
			</p>
			<div>Лекция о бизнес-канвас</div>
			<input type="submit" className="button" value="Я готов пройти тест" />
		</div>
		<div className="right-container">
			<div>Стоимость идеи:</div>
			<div>1$</div>
		</div>
	</div>
);
