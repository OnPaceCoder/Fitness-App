import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Box, Typography } from "@mui/material";


import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png'


import LeftArrowIcon from '../assets/icons/left-arrow.png'
import ExerciseCard from './ExerciseCard';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow'>
            <img src={LeftArrowIcon} alt="" />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className='left-arrow'>
            <img src={RightArrowIcon} alt="" />
        </Typography>
    )
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
    return (
        <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >

            {data.map((item) => (
                <Box key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0px 40px"
                >
                    {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
                </Box>
            ))
            }

        </ScrollMenu>
    )
}

export default HorizontalScrollbar