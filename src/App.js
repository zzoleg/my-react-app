import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Button from 'react-bootstrap/lib/Button'; //вставляем Button без фигурных скобок так как подянеться весь комплект что повлияет на скорость
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    <div className="Wrapper">
			<SayFullName name="Oleg" surname="Ded" link="vk.com" />
			<SayFullName name="Dima" surname="Ded" link="@" />
			<SayFullName name="Yulya" surname="Nosenk" link="facebook.com" />

		</div>
      
    );
  }
}


function SayFullName(props) {
	return (
		<div>
		<h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
		<a href={props.link}>Ссылка на мой профиль</a>
		</div>
	)
}

/*function MeetAll () {
	return (
		<div>
			<SayFullName name="Oleg" surname="Ded" link="vk.com" />
			<SayFullName name="Dima" surname="Ded" link="@" />
			<SayFullName name="Yulya" surname="Nosenk" link="facebook.com" />

		</div>
	)
}*/
export default App;
