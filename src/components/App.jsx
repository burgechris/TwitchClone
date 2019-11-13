import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

// import { Switch, Route } from 'react-router-dom';

export function App(){
  return(
    <div>
      <NavBar/>
      <div className="row">
        <div className="col-md-2">
          {/* <SideBar/> */}
        </div>
        <div className="col-md-10">
          {/* <Switch>
            <Route exact path='/' component={Discover} />
            <Route path='/Browse' component={Browse} />
          </Switch> */}
        </div>
      </div>
    </div>
  );
}

export default App;