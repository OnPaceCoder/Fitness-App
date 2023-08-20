import React, { useEffect, useState } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material';
import Loader from './Loader';
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard2 from './ExerciseCard2';
const Exercises2 = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);



    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            // if (!bodyPart) {
            //     exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            // } else {
            //     exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            // }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    //Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercise = ["a", "b", "c"]
    // = exerci


    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    if (!currentExercise.length) { return <Loader /> }
    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant='h4' fontWeight={"bold"}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb={"46px"}
            >
                Showing Results
            </Typography>

            <Stack>
                {
                    currentExercise.map((exercise, index) => (
                        <ExerciseCard2 exercise={exercise} />
                    ))
                }


            </Stack>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > exercisesPerPage && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises2