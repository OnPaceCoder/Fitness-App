import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
    const [bodyPart, setBodyPart] = useState()
    const [exercises, setExercises] = useState([]);


    return (

        <Box>
            <HeroBanner />
            <SearchExercise bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Home