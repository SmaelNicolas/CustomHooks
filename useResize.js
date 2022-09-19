import { useEffect, useState } from "react";

export const useResize = () => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < 750 ? true : false
	);

	const handleResize = () => {
		window.innerWidth < 750 ? setIsMobile(true) : setIsMobile(false);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	});

	return { isMobile };
};
