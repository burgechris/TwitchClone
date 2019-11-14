import React from 'react';
import SideBarProfile from './SideBarProfile';

var profilesForSideBar = [
  { 
    Name : 'CRAZYMIKEXOXO42069',
    Game : 'League of Legends',
    Watching: '1789992.2K'
  },
  { 
    Name : 'SOFIAGETSOMEMUFFUCKA!!',
    Game : 'Call of Duty',
    Watching: '16.7K'
  },
  { 
    Name : 'BILLY the GOAT JOEL',
    Game : 'Call of Duty',
    Watching: '16.7K'
  },
  { 
    Name : 'LAURENDERORDIE!!',
    Game : 'Call of Duty',
    Watching: '16.7K'
  },
  { 
    Name : 'PassionOfTheChris!!',
    Game : 'Call of Duty',
    Watching: '16.7K'
  },
  { 
    Name : 'OOODevinIsAPlaceOnEarth!!',
    Game : 'Call of Duty',
    Watching: '16.7K'
  },
];

function SideBar () {
  return(
    <div className="SideBar">
      <h5 id="SideBarTitle">RECOMMENDED CHANNELS</h5>
      {profilesForSideBar.map((sideBarProfile, index) =>
        <SideBarProfile name={sideBarProfile.Name}
          game={sideBarProfile.Game}
          watching={sideBarProfile.Watching}
          key={index}/>                   
      )}
      <a id="ShowMore">Show More</a>
      <style jsx>{`
            #ShowMore{
                font-size: 11px;
                color: rgb(119, 44, 232);
            }
            #SideBarTitle{
								color: black;
								font-size: 13px;
								font-family: Helvetica Neue;
								font-weight: bold;
						}
      `}               
      </style>
    </div>
  );
}

export default SideBar;