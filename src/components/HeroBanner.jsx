import React from 'react'
import { Box , Stack, Typography} from '@mui/material'
import banner1 from '../assets/images/banner1.jpg'
import { Height } from '@mui/icons-material'

export default function HeroBanner() {
  return (
    <Box sx={{
      mt:{lg : '212px',xs: '70px'},
      ml:{ sm: '50px'}
    }} position="relative" p="20px"
    >
        <Typography color='#FF2625' fontWeight='600'
         fontSize='26px'> 
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize: { lg:'44px' ,xs:  '40px'}}}
        >
        Sweat, Smile <br/> and Repeat

        </Typography>
        <Typography 
        fontSize='22px' lineHeight='35px'
        >
          Check out the most effective excercises
        </Typography>

        <button
        variant='contained' color='red' 
        href='#excercises'
        >Explore Excercises</button>

        <Box
        component='img'
        src={banner1}
        alt='bannerrrr'
        sx={{
          height: { lg: '550px', xs: '350px' },
          position: 'absolute',
          right: 0,
          bottom: 0,
          marginRight: { lg: '100px', xs: '50px' },
          
          
        }}
        className='hero-banner-img'
      />
    
    </Box>
  )
}
