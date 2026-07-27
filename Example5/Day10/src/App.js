import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import OnClick from './components/OnClick';
import SidebarContent from './components/sidebar/SidebarContent';
import SidebarAwards from './components/sidebar/SidebarAwards';
import SidebarPromotions from './components/sidebar/SidebarPromotions';

function App() {
	return (
		<Router>
			<React.Fragment>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="about" element={<Aboutus />} />
						<Route path="user/:id" element={<User />} />
						{/* Parent route for sidebar */}
						<Route path="sidebar">
							{/* Nested child routes */}
							<Route index element={<SidebarContent />} />
							<Route path="awards" element={<SidebarAwards />} />
							<Route path="promotions" element={<SidebarPromotions />} />
						</Route>
						<Route path="onclick" element={<OnClick />} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Route>
				</Routes>
			</React.Fragment>
		</Router>
	);
}

export default App;
