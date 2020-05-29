import React, { useEffect } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import {fetch} from './api/index';
import {CircularProgress} from "@material-ui/core";

function App() {
	const [data, changeData] = React.useState("Getting Data");
	const [isLoading, setLoading] = React.useState(true);

	const getData = async () => {
		try {
			const data = await fetch();
			changeData(data);
			setLoading(false);
		} catch(error) {
			console.log(error);
		}
	}

	const getDailyData = async () => {
	}

	useEffect(() => {
		getData();
	});

	return (
		<div className={styles.container}>
			{isLoading === true ? <CircularProgress />:
				<Cards data={data}/>
			}
		</div>
	);
}

export default App;
