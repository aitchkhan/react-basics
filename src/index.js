import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import './index.css';

function UserGreetings() {
  return <h1>Welcome back</h1>
}

function GuestGreetings() {
  return <h1>Please sign up</h1>
}

function Greetings(props) {
  if(props.isLoggedIn) {
    return <UserGreetings />
  } else {
    return <GuestGreetings />
  }
}

const numbers = [2,4,5,7];

function ListElements(props) {
  const numbers = props.numbers;

  var listItems = numbers.map(number => 
    <li key={number.toString()}>{ number * 2 }</li>
  );

  return (<ul>{ listItems }</ul>);
}



function tick() {
  ReactDOM.render(
       <ListElements numbers={numbers} />,
       //<Greetings isLoggedIn={true} />,
       //<Clock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000); 

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
