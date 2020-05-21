import React, { useEffect } from 'react';
import styles from './App.module.css';

import Cards from './components/Cards/Cards';
import {fetch} from './api/index';

function App() {
	const [data, changeData] = React.useState("Getting Data");
	const [isLoading, setLoading] = React.useState(true);

	const getData = async () => {
		const data = await fetch();
		console.log(data);
	}

	useEffect(() => {
		getData();
	});

	return (
		<div className={styles.container}>
			<Cards />
		</div>
	);
}

export default App;
