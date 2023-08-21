import React from 'react'
import { Typography, Box, Stack } from '@mui/material';


import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} isBodyPart={false} /> : <Loader />}
            </Box>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Box>
        </Box>
    )
}

export default SimilarExercises