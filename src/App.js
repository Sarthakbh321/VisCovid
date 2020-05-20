import React from 'react';
import styles from './App.module.css';

import Cards from './components/Cards/Cards';

function App() {
	return (
		<div className={styles.container}>
			<h1>Hello World!</h1>
			<Cards />
		</div>
	);
}

export default App;
