import App from "@/pages/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);