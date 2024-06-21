import React from "react";
import use_ from "./adapters/use_";

function App() {
	const { data } = use_();
	return (
		<div className="h-screen w-screen">
			<h1>¡Hola!</h1>
		</div>
	);
}

export default App;
