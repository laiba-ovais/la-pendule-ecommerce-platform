// import React, {useState} from 'react';
// import ReactPlayer from 'react-player';
// import VideoCard from '../../components/Playlist/VideoCard'
// import  'react-bootstrap'



// class Playlist extends React.Component{
//     state={
//         num: 1
//     }

// setUrl = (key) =>{
//     this.setState({num: key})
// }
//     //const setUrl =1;
// render(){
//     console.log(this.state.num)
//     return(
        
//         <div >
//         <VideoCard onClick = {this.setUrl} num={this.state.num} className=" float-right"></VideoCard>
//         <div className="player-wrapper">
//         <ReactPlayer
//           className=' react-player'
//           url={require(`../../videos/technology/${this.state.num}.mp4`)}
//           light={require('../../videos/technology/html.png')}
//           width='500px'
//           height='500px'
//           controls ={true}
          
//         />

//         </div>
        
        
//       </div>
//     )

// }
// }

// export default Playlist;