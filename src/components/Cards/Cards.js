import React, { useEffect } from "react";
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import DataCards from './DataCards';
import styles from './Cards.module.css';

function Cards(props) {
	return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <DataCards type="infected" data={props.data}/>
                <DataCards type="recovered" data={props.data}/>
                <DataCards type="deaths" data={props.data}/>
            </Grid>
        </div>
    );
}

export default Cards;