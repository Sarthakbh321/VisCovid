import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

function DataCard(props) {
    let data = {
        infected: {
            head: "Infected",
            data: "DATA",
            date: "DATE",
            text: "Number Of active COVID cases"
        }
    };

    let type = props.type;

    return (
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{data[type].head}</Typography>
                <Typography variant="h5">{data[type].data}</Typography>
                <Typography color="textSecondary">{data[type].date}</Typography>
                <Typography variant="body2">{data[type].text}</Typography>
            </CardContent>
        </Grid>
    )
}

export default DataCard;