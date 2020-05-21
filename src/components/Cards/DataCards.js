import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

function DataCards(props) {
    let allData = props.data.data;
    console.log(allData);
    let data = {
        infected: {
            head: "Infected",
            data: allData["confirmed"].value,
            date: "DATE",
            text: "Number Of active COVID cases"
        },
        recovered: {
            head: "Recovered",
            data: allData["recovered"].value,
            date: "DATE",
            text: "Number of people recovered"
        },
        deaths: {
            head: "Deaths",
            data: allData["deaths"].value,
            date: "DATE",
            text: "Number of deaths"
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

export default DataCards;