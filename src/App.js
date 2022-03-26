import logo from './logo.svg';
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

import './App.css';
const App = () => {
// if you are not logged in that return login form
  if(!localStorage.getItem('username')) return <LoginForm/>





  return (
    <ChatEngine
    height = "100vh"
    projectID ="dcf08020-a2f2-4153-adaa-8a8f6acd15a7"
    userName ="ndumisozuma99@gmail.com"
    userSecret ="Sphamandla@12"
    // Render your own component for the chat feed
    renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}

    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


    />
  
  );
}







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
