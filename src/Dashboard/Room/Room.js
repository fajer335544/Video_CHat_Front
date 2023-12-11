
import React, { Component , useState } from 'react'
import { styled } from '@mui/system'
import ResizeRoomButton from './ResizeRoomButton'
import VideoContainer from './VideoContainer';
import RoomButtons from './RoomButtons/RoomButtons';
const MainContainer =styled('div')(
{
position : 'absolute',
borderRadius :  '8px',
display:'flex',
flexDirection : 'column',
alignItems:'center',
justifyContent : 'center',
backgroundColor :'#202225'
})

const fullScreenRoomStyle = {

    width:'100%',
    height:'100vh',
};

const minimizedRoomStyle = {
    bottom:'0px',
    width:'30%',
    right:'0px',
    height:'40vh',
}
const  Room =()=> {
 const [isRoomMinimized,setIsRoomMinimized]=useState(true);
 const roomResizerHandler=()=>{
    setIsRoomMinimized(!isRoomMinimized);
 }
    return (
      <MainContainer style=
      {isRoomMinimized? minimizedRoomStyle : fullScreenRoomStyle}>

        <VideoContainer/>
        <RoomButtons/>
        <ResizeRoomButton

 isRoomMinimized={isRoomMinimized} 
 handleRoomResize={roomResizerHandler}          
        />
        </MainContainer>
    );
  
}

export default Room;