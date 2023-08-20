import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
    return (
        <Box mt={"80px"} bgcolor="#FF3F4">
            <Stack gap={"40px"} px={"40px"} pt={"24px"}
                flexWrap={"wrap"}
                alignItems={"center"}
            >
                <img src={Logo} alt="" style={{ width: '200px', height: '41px' }} />
                <Typography
                    variant='h5'
                    mt={"41px"}
                    textAlign={"center"}
                    pb={"40px"}
                    sx={{ fontSize: { lg: '28px', xs: '20px' } }}
                >Made with 🖤 by Priyank V</Typography>
            </Stack>
        </Box>
    )
}

export default Footer