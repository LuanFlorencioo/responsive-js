export type DeviceOrientation = "portrait" | "landscape";

export type DeviceType = "phone" | "tablet" | "notebook" | "desktop";

export type ResponsiveDataInput = {
	width: number;
	height: number;
};

export type ResponsiveData = ResponsiveDataInput & {
	resolution: string;
	orientation: DeviceOrientation;
	model: DeviceType;
};
