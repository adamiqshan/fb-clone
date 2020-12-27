import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar"
import Feed from './Feed';
import "./App.css"
import Widgets from './Widgets';

function App() {

  const user = 'adam';

  return (
    <div className="app">

      {!user ? (<h1>Login please!</h1>) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>)
      }
    </div>
  );
}

export default App;
