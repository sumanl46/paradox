import React, { useContext } from "react";
import { Context } from "../context";

export default function Features() {
	const { width } = useContext(Context);

	return (
		<>
			<div className="w-full h-auto grid gap-6 justify-items-center">
				<div
					className="w-full h-32 overflow-hidden"
					style={{
						background: "url(/images/original.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "center center",
					}}>
					<div className="w-full text-center text-3xl font-extrabold text-gray-900 p-4">
						<span>Building The Future</span>
					</div>
				</div>

				<div className="w-full h-auto grid gap-6 2xl:px-40 xl:px-40 lg:px-40 md:px-24 sm:px-14 px-6 py-6">
					<div
						className={
							"w-full h-auto grid gap-6 " +
							(width <= 520 ? "grid-cols-1" : "grid-cols-2")
						}>
						<div className="w-full h-64 overflow-hidden rounded-lg bg-gray-50 shadow-md">
							<img
								alt=""
								src="/images/work-culture.png"
								className="relative w-full h-full object-cover object-center overflow-hidden rounded-lg"
							/>
						</div>

						<div className="w-full h-full text-left font-bold 2xl:text-7xl xl:text-7xl lg:text-7xl sm:text-5xl text-6xl text-gray-900">
							Features <span className="text-orange-400">Ought</span> to Partake
						</div>
					</div>

					<div
						className={
							"w-full h-auto grid gap-6 " +
							(width <= 520 ? "grid-cols-1" : "grid-cols-2")
						}>
						<div className="w-full h-64 overflow-hidden rounded-lg bg-gray-50 shadow-md">
							<img
								alt=""
								src="/images/1542298796.jpg"
								className="relative w-full h-full object-cover object-center overflow-hidden rounded-lg"
							/>
						</div>

						<div className="w-full h-64 overflow-hidden rounded-lg bg-gray-50 shadow-md">
							<img
								alt=""
								src="/images/earth.png"
								className="relative w-full h-full object-cover object-center overflow-hidden rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
