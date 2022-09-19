import { useEffect, useState } from "react";

export const useSlidesInView = () => {
	const [manyInView, setManyInView] = useState(
		window.innerWidth < 500
			? 1
			: window.innerWidth < 600
			? 1.5
			: window.innerWidth < 900
			? 1.8
			: window.innerWidth < 1300
			? 2.3
			: window.innerWidth < 1600
			? 3
			: 4
	);

	const handleResize = () => {
		window.innerWidth < 500
			? setManyInView(1)
			: window.innerWidth < 600
			? setManyInView(1.5)
			: window.innerWidth < 900
			? setManyInView(1.8)
			: window.innerWidth < 1300
			? setManyInView(2.3)
			: window.innerWidth < 1600
			? setManyInView(3)
			: setManyInView(4);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	});

	return { manyInView };
};
