import logo from './logo.svg';
import './App.css';
import React from 'react'
import banner from './images/banner-1.jpg';


const currentDate = new Date();
const myData = {
  url:'https://hallofinsch.com/',
  name:'Hallo Finsch',
  hobbies:['Learning', 'Working', 'Traveling', 'Blogging'],
  courseUrl:'https://www.linkedin.com/learning/react-js-essential-training/'
}

function Header(props) {
  console.log(props);
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      
    </header>
  );
}

function Banner(props) {
  return (
    <section className="banner" style={{ backgroundImage:'url(' + banner + ')', minHeight:'650px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
      <h1>{props.appName} with {props.name}</h1>
      <p>This page is the Playground of <a href={myData.courseUrl} target="_blank">React.js Essential Training Course</a> on LinkedIn</p>
      
    </section>
  )
}
function Main(props) {
  console.log(props);
  return (
    <section className="main-content">
      <h2>What I do</h2>
      <ul style={{listStyleType:'none'}}>
      {
      props.hobbies.map((hobby) => (
        <li key={hobby.id}>{hobby.title}</li>
      ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  console.log(props);
  let currentYear = currentDate.getFullYear();
  
  return (
    <footer>
      <p>&copy;{currentYear} <a href={props.url} target="_blank">{props.name}</a></p>
    </footer>
  )
}
const hobbiesObj = myData.hobbies.map((hobby,i) => ({ id:i, title:hobby}));
console.log('Hobbies Obj', hobbiesObj);
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner name="Finsch Belserion" appName="React Essentials"/>
      <Main hobbies={hobbiesObj}/>
      <Footer name={myData.name} url={myData.url}/>
    </div>
  );
}

export default App;
