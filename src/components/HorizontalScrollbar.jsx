import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import Excercises from './Exercises';
import {ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';



const LeftArrow =() =>{
  const {scrollPrev}= useContext(VisibilityContext);

  return (
    <Typography onClick = { ()=> scrollPrev()} className='left-arrow' >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  )
}


const RightArrow =() =>{
  const {scrollNext}= useContext(VisibilityContext);
 
  return (
    <Typography onClick = { ()=> scrollNext()} className='right-arrow' >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  )
}


export const HorizontalScrollbar = ({data,bodyPart,setBodyPart,BodyParts}) => {
  return (

      
    <ScrollMenu LeftArrow ={LeftArrow} RightArrow={RightArrow} >
        {data.map((item)=>
        (
           <Box
           key={item.id || item}
           itemID={item.id || item}
           title={item.id || item}
           m='0 40px'
           >
          
           <BodyPart bodyPart={bodyPart} item={item} setBodyPart={setBodyPart} />    
           </Box> 
        )
        
        )}
    </ScrollMenu>
  )
}
 