import {React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    const [sidebar, setSidebar] = useState(false);
    
    const getSideBar = () =>{
      if(sidebar){
        return <Sidebar/>
      }
      else{
        return <></>
      }
    }

    const toggleSidebar = ()=>{
      setSidebar(!sidebar);
    }
    
    return (
      <div className="App">
        {getSideBar()}
        <div> 
          <Navbar toggleSidebar = {toggleSidebar} isOpen ={sidebar}/>
          <Main isOpen={sidebar}/>
        </div>
      </div>
    );
}

export default App;
