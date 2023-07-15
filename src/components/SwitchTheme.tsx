import React, { useEffect, useState } from "react";
import { IconContext } from 'react-icons'
import {BiPaint} from "react-icons/bi";
/**
 * Switch theme button
 * 
 * @returns {JSX.Element} The switch theme button
 */
const SwitchTheme = () => {
	const supportedThemes = [
		// Add more themes here
		"bookworm"
	];
	const [theme, setTheme] = useState("bookworm");

	// TODO: Add a way to save the theme in local storage or to the user's account

	const switchTheme = () => {
		setTheme(supportedThemes[(supportedThemes.indexOf(theme) + 1) % supportedThemes.length] as string);
	};

	useEffect(() => {
		const body = document.body;
		body.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<>
			<button className="btn btn-circle bg-primary-focus hover:bg-accent border-none" onClick={switchTheme}>
				<IconContext.Provider value={{ size: '2rem', className: "text-base-100"}}>
					<BiPaint />
				</IconContext.Provider>
			</button>
		</>
	);
};

export default SwitchTheme;