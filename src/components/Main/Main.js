import React from 'react';
import './Main.css';

function Main(props) {
  const main = {width:'96vw'}
  if(props.isOpen){
    main.width = '85.5vw'
  }
  return (
    <div className='main-container' style={main}>
      Hello
    </div>
  )
}

export default Main
