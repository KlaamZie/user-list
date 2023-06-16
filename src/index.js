import "react-loading-skeleton/dist/skeleton.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
