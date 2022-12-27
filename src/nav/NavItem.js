import React from "react";

export default function NavItem({ nav: { active, title } }) {
	return (
		<>
			<a
				href="/"
				className={
					"text-sm duration-100 no-underline " +
					(active
						? "text-white font-medium"
						: "font-normal text-gray-300 hover:text-white")
				}>
				<span>{title}</span>
			</a>
		</>
	);
}
