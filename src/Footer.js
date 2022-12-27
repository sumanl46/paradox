import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="w-full h-auto 2xl:px-32 xl:px-32 lg:px-32 md:px-14 px-4 pb-4">
				<div
					className="w-full h-100 flex items-start justify-center p-4 overflow-hidden rounded-xl"
					style={{
						background: "url(/images/nature.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "center center",
					}}>
					{/* Div with white backdrop filter */}
					<div className="2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-11/12 w-full h-4/6 rounded-xl bg-white/50 backdrop-blur-xl grid gap-6 grid-rows-2 justify-items-center">
						<div className="flex items-center justify-center">
							<div className="h-auto grid gap-4 justify-items-center">
								<div className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-xl text-black font-medium">
									<span>Every inspiration from nature</span>
								</div>

								<div className="text-base text-gray-600">
									<span>
										Get started with our services with a 30-days free trial
									</span>
								</div>
							</div>
						</div>

						{/* Button */}
						<div className="flex items-center justify-center">
							<div className="btn">
								<span>Try it free</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
