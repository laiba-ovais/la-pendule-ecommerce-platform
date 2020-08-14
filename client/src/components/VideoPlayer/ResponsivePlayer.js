import ReactPlayer from 'react-player';
import React from 'react';
import './ResponsivePlayer.css';

const ResponsivePlayer =({url,onProgress})=> {
    
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            controls ={true}
            onProgress ={onProgress}
          />
        </div>
      );
    }
export default ResponsivePlayer;