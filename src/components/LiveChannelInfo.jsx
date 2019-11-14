import React from 'react';
import LiveChannel from './LiveChannel';
import Need4Speed from '../img/needforspeed.jpg';
import WOW from '../img/World-of-Warcraft.jpg'
import OverWatch from '../img/Overwatch.jpg'
import FortNight from '../img/FortNight.jpg'

var infoForLiveChannel = [
    { 
        IMG : Need4Speed,
        Name : 'CRAZYMIKEXOXO42069',
        Game : 'League of Legends',
        Watching: '1789992.2K'
      },
      { 
        IMG : WOW,
        Name : 'SOFIAGETSOMEMUFFUCKA!!',
        Game : 'Call of Duty',
        Watching: '16.7K'
      },
      { 
        IMG : OverWatch,
        Name : 'BILLY the GOAT JOEL',
        Game : 'Call of Duty',
        Watching: '16.7K'
      },
      { 
        IMG : FortNight,
        Name : 'LAURENDERORDIE!!',
        Game : 'Call of Duty',
        Watching: '16.7K'
      }
    ];

function LiveChannelInfo () {
    return(
        <div>
            <h5 className="channelTitle">Recommended live channels</h5>
            <div className="row">
            {infoForLiveChannel.map((liveChannel, index) => 
                <LiveChannel
                img={liveChannel.IMG}
                name={liveChannel.Name}
                game={liveChannel.Game}
                watching={liveChannel.Watching}
                key={index}/>
                )}
            </div>
        </div>
    )
}

export default LiveChannelInfo;