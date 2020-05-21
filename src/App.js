import React, { useEffect } from 'react';
import styles from './App.module.css';

import Cards from './components/Cards/Cards';
import {fetch} from './api/index';

function App() {
	const [data, changeData] = React.useState("Getting Data");
	const [isLoading, setLoading] = React.useState(true);

	const getData = async () => {
		const data = await fetch();
		await changeData(data);
		setLoading(false);
	}

	useEffect(() => {
		getData();
	});

	return (
		<div className={styles.container}>
			{isLoading === true ? <h1>Getting Data</h1>:
				<Cards data={data}/>
			}
		</div>
	);
}

export default App;
