import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { ConfigPage } from "./pages/ConfigPage";
import { SortPage } from "./pages/SortPage";

function App() {
	return (
		<BrowserRouter>
			<RecoilRoot>
				<Routes>
					<Route
						path="/"
						element={
							<ConfigPage />
						}
					/>
					<Route
						path="/sort"
						element={
							<SortPage />
						}
					/>
				</Routes>
			</RecoilRoot>
		</BrowserRouter>
	);
}

export default App;
