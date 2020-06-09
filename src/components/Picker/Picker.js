import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";

function Picker() {
	return (
		<FormControl>
			<NativeSelect>
				<option>All Countries</option>
				<option>India</option>
			</NativeSelect>
		</FormControl>
	)
}

export default Picker;