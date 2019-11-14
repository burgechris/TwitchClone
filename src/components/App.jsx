import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import '../css/globalStyles.css'
import Discover from './Discover'

import { Switch, Route } from 'react-router-dom';

export function App(){
  return(
    <div className="fullHeightRow">
      <NavBar/>
      <div className="fullHeightRow row">
        <div className="col l2 sidebar fullHeightRow">
          <SideBar/>
        </div>
        <div className="col l10">
          <Switch>
            <Route exact path='/' component={Discover} />
            {/* <Route path='/Browse' component={Browse} /> */}
          </Switch>
        </div>
      </div>
        <style jsx>{`
                .sidebar{
                  background-color: lightgray;
                }
                .fullHeightRow{
                  height: 100%;
                }
                `}
         </style>
    </div>

  );
}

export default App;