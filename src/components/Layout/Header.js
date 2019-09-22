import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";

export default () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="headline" color="colorSecondary" noWrap>
                        Simple Blog
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};