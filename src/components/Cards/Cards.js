import React from "react";
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import DataCards from './DataCards';
import styles from './Cards.module.css';

function Cards() {
    

	return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <DataCards type="infected" />
            </Grid>
        </div>
    );
}

export default Cards;