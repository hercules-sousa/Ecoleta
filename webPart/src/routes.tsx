import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import FeedBack from "./pages/feedBack";

import Home from "./pages/home";
import CreatePoint from "./pages/createPoint";

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Home} path="/" exact />
			<Route component={CreatePoint} path="/create-point" />
			<Route component={FeedBack} path="/feedback" />
		</BrowserRouter>
	);
};

export default Routes;
