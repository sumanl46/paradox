import React from "react";
import NavItem from "./NavItem";
import { navs } from "./navs";

export default function Nav() {
	return (
		<>
			<header className="relative w-full h-14 bg-gray-600">
				<div className="w-full h-full flex items-center justify-center 2xl:gap-24 xl:gap-24 lg:gap-24 md:gap-16 gap-8">
					{navs.map((nav, index) => (
						<NavItem
							key={index}
							nav={nav}
						/>
					))}
				</div>
			</header>
		</>
	);
}
