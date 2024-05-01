import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";

import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

export default router;
