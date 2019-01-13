import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

/*function Hello() {
	let phrase = "World!"
	return (
			<h1>Hello {phrase} kiss {4+10}</h1>
		)
}

function SayFullName(props) {
	return (
		<div>
		<h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
		<a href={props.link}>Ссылка на мой профиль</a>
		</div>
	)
}

function MeetAll () {
	return (
		<div>
			<SayFullName name="Oleg" surname="Ded" link="vk.com" />
			<SayFullName name="Dima" surname="Ded" link="@" />
			<SayFullName name="Yulya" surname="Nosenk" link="facebook.com" />

		</div>
	)
}*/

//const element = <SayFullName name="Oleg" surname="Ded" link="vk.com"  />

//ReactDOM.render(<MeetAll />, document.getElementById('root'));
//ReactDOM.render(<SayFullName name="Oleg" surname="Ded" link="vk.com"  />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
