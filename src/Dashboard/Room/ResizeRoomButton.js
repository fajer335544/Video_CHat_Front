import React from 'react';
import { styled } from '@mui/system'
import  IconButton  from '@mui/material/IconButton';

import  CloseFullscreen  from '@mui/icons-material/CloseFullscreen'; 

import  OpenInFullIcon  from '@mui/icons-material/OpenInFull';
import  colors  from '@mui/material';
const MainContainer =styled('div')(
    {
    position : 'absolute',
   
    bottom:'10px',
    right:'10px',

    })
const ResizeRoomButton =({isRoomMinimized,handelRoomResize})=>{
return (

<MainContainer>
    <IconButton styled={{color:'white'}} onClick={handelRoomResize}>
        {isRoomMinimized?<OpenInFullIcon/> : <CloseFullscreen/>}
    </IconButton>
    </MainContainer>
)

}


export default ResizeRoomButton;