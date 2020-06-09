import React, { useState, useEffect } from "react";
import { getDaily } from '../../api';
import {Line, Bar} from "react-chartjs-2";
import styles from './Chart.module.css';

function Chart() {
	const [dailyData, setDailyData] = useState([]);
	
	const getDailyData = async () => {
		const data = await getDaily();
		setDailyData(data.data);
	}

	useEffect(() => {
		getDailyData();
	}, [])

	const lineGraph = (
		dailyData.length !== 0 ?
			<Line data={{
				labels: dailyData.map(({reportDate}) => reportDate),
				datasets: [{
					data: dailyData.map(({confirmed}) => confirmed.total),
					label: "Infected",
					borderColor: "#3333ff",
					fill: true
				}, {
					data: dailyData.map(({deaths}) => deaths.total),
					label: "Deaths",
					borderColor: "red",
					backgroundColor: 'rgba(255, 0,0, 0.5',
					fill: true
				}],
			}} />
			: null
	);

	return (
		<div className={styles.container}>
			{lineGraph}
		</div>
	)
}

export default Chart;