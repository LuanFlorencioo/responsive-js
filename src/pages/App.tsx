import { Painel } from "@/components/painel";

export default function App() {
	return (
		<main className="w-full min-h-screen bg-[url('/blob.svg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-8 relative">
			<h1 className="font-bold text-3xl sm:text-6xl md:text-7xl lg:text-8xl">
				Responsive<span className="text-accent">.</span>js
			</h1>

			<p className="w-full max-w-[420px] text-center">
				Do you want to make a component responsive? Then you are in the right
				place, here we will help you.
			</p>

			<div className="w-max flex flex-wrap items-center justify-center gap-4">
				<button
					type="button"
					className="w-max h-9 px-4 rounded-sm bg-primary font-semibold text-background flex items-center gap-2 transition hover:bg-accent hover:text-foreground"
				>
					Get Started
				</button>

				<button
					type="button"
					className="w-max h-9 px-4 rounded-sm border border-muted bg-transparent font-medium text-foreground transition hover:border-foreground"
				>
					Documentation
				</button>
			</div>

			<Painel />
		</main>
	);
}
