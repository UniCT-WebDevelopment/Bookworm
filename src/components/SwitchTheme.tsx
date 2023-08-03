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
		"bookworm",
		"bookworm_cupcake",
		"bookworm_mint",
		"bookworm_dark",
	];

	const [theme, setTheme] = useState("");

	useEffect(() => {
		const localTheme = localStorage.getItem("bookwormTheme");
		if(localTheme) {
			setTheme(localTheme);
		}
	}, []);


	const switchTheme = () => {
		setTheme(supportedThemes[(supportedThemes.indexOf(theme) + 1) % supportedThemes.length] as string);
		localStorage.setItem("bookwormTheme", supportedThemes[(supportedThemes.indexOf(theme) + 1) % supportedThemes.length] as string);
	};

	useEffect(() => {
		if(!theme) return;
		document.body.setAttribute("data-theme", theme);
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