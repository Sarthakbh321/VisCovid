import React, { useState, useEffect } from "react";
import { getDaily } from '../../api';
import {Line, Bar} from "react-chartjs-2";
import styles from './Chart.module.css';

function Chart() {
	const [dailyData, setDailyData] = useState(null);
	
	const getDailyData = async () => {
		const data = await getDaily();
		setDailyData(data.data);
	}

	useEffect(() => {
		getDailyData();
	}, [])

	const lineGraph = (
		dailyData[0] ?
			<Line data={{
				labels: '',
				datasets: [{}, {}],
			}} />
			: null
	);

	return (
		<div>
			<h1>Charts</h1>
		</div>
	)
}

export default Chart;