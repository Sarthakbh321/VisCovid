import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import { fetch } from './api/index';
import Chart from './components/Chart/Chart';
import { CircularProgress } from "@material-ui/core";
import Picker from "./components/Picker/Picker";

function App() {
	const [data, changeData] = useState("Getting Data");
	const [currentCountry, setCurrentCountry] = useState("global");
	const [isLoading, setLoading] = useState(true);

	const handleCountryChange = async (country) => {
		console.log(country);
	}

	const getData = async () => {
		try {
			const data = await fetch();
			changeData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	const getDailyData = async () => {
	}

	useEffect(() => {
		getData();
	});

	return (
		isLoading === true ? <CircularProgress /> :
			<div className={styles.container}>
				<Cards data={data} />
				<Picker handleCountryChange={handleCountryChange} />
				<Chart />
			</div>
	);
}

export default App;
