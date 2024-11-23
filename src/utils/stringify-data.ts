import type {
	DeviceType,
	ResponsiveData,
	ResponsiveDataInput,
} from "@/types/responsive-data";

export function stringifyData({ height, width }: ResponsiveDataInput) {
	const orientation = height > width ? "portrait" : "landscape";
	const resolution = [width, height].map((size) => `${size}px`).join(" - ");

	let model: DeviceType;

	if (width <= 480) model = "phone";
	else if (width <= 768) model = "tablet";
	else if (width <= 1280) model = "notebook";
	else model = "desktop";

	const responsiveData: ResponsiveData = {
		width,
		height,
		orientation,
		resolution,
		model,
	};

	return JSON.stringify(responsiveData);
}
