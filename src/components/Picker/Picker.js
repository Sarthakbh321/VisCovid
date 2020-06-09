import React, { useEffect, useState } from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from "./Picker.module.css";
import { getCountries } from '../../api';

function Picker() {
	const [countries, setCountries] = useState([]);

	const fetchCountries = async () => {
		let c = await getCountries();
		setCountries(c);
	}

	useEffect(() => {
		fetchCountries();
	}, [setCountries])

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect>
				<option value="global">Global</option>
				{countries.map((country) => {
					return(
						<option value="global">{country.name}</option>
					)
				})}
			</NativeSelect>
		</FormControl>
	)
}

export default Picker;