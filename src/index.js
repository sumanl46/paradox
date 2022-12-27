import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Lets wrap with the ContextProvider to use width value */}
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
