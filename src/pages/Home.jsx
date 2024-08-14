import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { Box } from '@mui/material'

export const Home = () => {
  const [exercises,setExercises]= useState([])
  const [bodyPart,setBodyPart] = useState('all')
  return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
        <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
      </Box>
    </div>
  )
}
