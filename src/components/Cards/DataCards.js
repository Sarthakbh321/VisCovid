import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from "./DataCards.module.css";
import cx from "classnames";

function DataCards(props) {
	let allData = props.data.data;

	let data = {
		infected: {
			head: "Infected",
			data: allData["confirmed"].value,
			text: "Number Of active COVID cases"
		},
		recovered: {
			head: "Recovered",
			data: allData["recovered"].value,
			text: "Number of people recovered"
		},
		deaths: {
			head: "Deaths",
			data: allData["deaths"].value,
			text: "Number of deaths"
		},
		date: new Date(allData["lastUpdate"]).toDateString(),
	};

	let type = props.type;
	let typeClass = null;
	if(type === "infected") typeClass = styles.infected;
	else if(type === "deaths") typeClass = styles.deaths;
	else if(type === "recovered") typeClass = styles.recovered;

	return (
		<Grid item component={Card} xs={12} md={3} className={cx(styles.card, typeClass)}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>{data[type].head}</Typography>
				<Typography variant="h5">{data[type].data}</Typography>
				<Typography color="textSecondary">{data.date}</Typography>
				<Typography variant="body2">{data[type].text}</Typography>
			</CardContent>
		</Grid>
	)
}

export default DataCards;