import { AppBar, Container, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <AppBar color='primary' position='static'>
            <Container>
                <Typography>
                    Crypto Watch
                </Typography>

                <Select variant='outlined' style={{ width: 100, height: 40, marginLeft: 15 }}>
                    <MenuItem>USD</MenuItem>
                    <MenuItem>EUR</MenuItem>
                </Select>
            </Container>
        </AppBar>
    )
}

export default Header