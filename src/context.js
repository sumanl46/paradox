import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
	const [width, setWidth] = useState(0);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		setWidth(window.innerWidth);
		window.addEventListener("resize", updateWidth);

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);

	return <Context.Provider value={{ width }}>{children}</Context.Provider>;
}
