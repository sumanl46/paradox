import * as React from "react";
import Footer from "./Footer";
import Nav from "./nav";
import Features from "./sections/features";
import PlayYoutubeVideo from "./sections/youtube";

function App() {
	return (
		<>
			<div className="relative w-screen h-screen bg-white">
				<Nav />

				{/* This will take the remaining height of container after subtracting the height of header */}
				<div className="relative w-full h-[calc(100%-3.5rem)] mx-auto overflow-auto">
					<div className="2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-10/12 w-full mx-auto h-auto">
						<main className="w-full h-auto">
							<PlayYoutubeVideo />

							{/* Features */}
							<Features />
						</main>

						{/* Footer section */}
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
