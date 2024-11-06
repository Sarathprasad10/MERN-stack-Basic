import logo from './logo.svg';
import './App.css';
import React from 'react';
//import './Signup.css';
import Signup from './Signup';
import State from './State';
import Counter from'./Counter';
import Amazon from './Amazon';
import './Amazon.css'
import Top from './Top';
import './top.css'  

function App() {

  return( 
    <div className="App">
        <h1>Product List</h1>
   <div>
    
      <Top productname="laptop"price="999" Description="high performance lapttop"/>
   
   </div>

   <div>
          <Top productname="SMARTPHONE"price="699"Description="LATEST SMARTPHONE WITH POWERFUL FEATURES"/>
   </div>

   <div>
      <Top productname="HEADPHONES"price="199"Description="NOICE CANCLATION"/>
   </div>

   </div>
  );

}

export default App;
