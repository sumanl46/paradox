import * as React from "react";

export default function PlayYoutubeVideo() {
	const videoContainerRef = React.useRef();

	return (
		<>
			<section className="w-full h-100 min-h-fit p-4">
				<div
					ref={videoContainerRef}
					className="w-full h-full rounded-lg overflow-hidden">
					<iframe
						className="relative duration-200 ease-linear overflow-hidden rounded-lg w-full h-full"
						src="https://www.youtube-nocookie.com/embed/dpEPNioJ1Ik"
						title="Paradox Teaser"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</section>
		</>
	);
}
