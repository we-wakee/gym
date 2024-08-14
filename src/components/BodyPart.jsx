import React from 'react'
import { Stack,Typography } from '@mui/material'
import { Widgets } from '@mui/icons-material'

import Icon from '../assets/icons/gym.png'

export default function BodyPart({item,setBodyPart,bodyPart}) {
  return (
   

    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    class-name='bodyPart-card'
    sx={{
        borderTop : bodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          width: '270px',
          height:'280px',
          cursor: 'pointer',
          gap: '47px'

        }}
    
    > 
   
    <img src={Icon} alt="dumbbell" style={{width: '40px',height: '40px'}}  />
    
    <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
      {item}
    </Typography>


    </Stack>
  )
}
 