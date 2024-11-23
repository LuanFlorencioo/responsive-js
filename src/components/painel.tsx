import { useResponsive } from "@/hooks/use-responsive";

export function Painel() {
	const { height, orientation, width } = useResponsive();

	return (
		<div className="w-full max-w-[275px] p-8 bg-[#00000010] flex flex-col justify-center items-center gap-8 backdrop-blur-sm">
			<h2 className="font-medium">Painel</h2>

			<div className="w-full text-sm flex flex-col gap-2">
				<p>Width: {width}px</p>
				<p>Height: {height}px</p>
				<p>Orientation: {orientation}</p>
			</div>
		</div>
	);
}
