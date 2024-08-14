import React, { useEffect } from 'react'
import {Box, Button, Stack,TextField,Typography, useScrollTrigger} from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/FetchData'
import { useState } from 'react'
import { HorizontalScrollbar } from './HorizontalScrollbar'

export default function SearchExercises( {setBodyPart,setExercises,bodyPart}) {
  

  const [search,setSearch] = useState('')
  const [bodyParts,setBodyParts] = useState([])


  useEffect(()=>{

    const fetchExercisesData= async ()=>{
      const bodyPartsData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      setBodyParts(['all',...bodyPartsData.map(exercise => exercise.bodyPart)])
      
    }

    fetchExercisesData(); 
  },[])

  const handleSearch = async() =>{
    if(search){
      const exercisesData = await fetchData
       ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

       const searchedExercises = exercisesData.filter(
        (exercise)=> exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyParts.toLowerCase().includes(search)

      );
      
      setSearch('');
      setExercises(searchedExercises);
      
      
    }
  }

  return ( 
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} 
      sx={{ fontSize: {lg: '44px',xs:'30px'}}}
      mb='50px' textAlign="center">
        
        Awesome Exercises You <br/>
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
      <TextField 
      sx={{
        input: {
          fontWeight:'700',border:'none',borderRadius:'4px'
        },
        width:{lg:'800px',xs:'350px'},
        backgroundColor:'#fff',
        borderRadius:'4px'

      }}
      height='76px'
      value={search}
      onChange={(e)=> { 
        setSearch(e.target.value.toLowerCase())
      }}
      placeholder='Search Excercises'
      type='text'
      />
      <Button className='search-btn'
        sx={{
          bgcolor:'#ff2625',
          color:'#fff',
          textTransform:'none',
          fontSize:{lg: '20px',xs:'14px'},
          width:{lg: '175px',xs:'80px'},

          height:'56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handleSearch}
        >
          Search
      </Button>
      </Box>  

      <Box
      sx={{position : 'relative' , width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts}
        setBodyPart={setBodyPart} bodyPart={bodyPart}
        />
      </Box>

    </Stack>
  
  )
}
