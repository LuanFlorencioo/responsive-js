import type { ResponsiveData } from "@/types/responsive-data";
import { generateData } from "@/utils/generate-data";
import { useEffect, useState } from "react";

export function useResponsive() {
	const [responsiveData, setResponsiveData] = useState<ResponsiveData>(
		generateData({ width: window.innerWidth, height: window.innerHeight }),
	);

	useEffect(() => {
		const handleResize = () => {
			const { innerWidth, innerHeight } = window;
			const data = {
				width: innerWidth,
				height: innerHeight,
			};
			setResponsiveData(generateData(data));
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return responsiveData;
}
