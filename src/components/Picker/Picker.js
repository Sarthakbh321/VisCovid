import React, { useEffect, useState } from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from "./Picker.module.css";
import { getCountries } from '../../api';

function Picker({handleCountryChange}) {
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
			<NativeSelect onChange={(event) => handleCountryChange(event.target.value)}>
				<option value="global">Global</option>
				{countries.map((country, i) => {
					return(
						<option value={country.name} key={i}>{country.name}</option>
					)
				})}
			</NativeSelect>
		</FormControl>
	)
}

export default Picker;