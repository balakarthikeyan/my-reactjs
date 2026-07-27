import React from 'react';
import { Routes, Route } from "react-router-dom";

import SidebarAwards from './SidebarAwards';
import SidebarPromotions from './SidebarPromotions';

const SidebarContent = () => {
    return (
        <React.Fragment>
            <h3>Please select a menu item</h3>
            <Routes>
                <Route path="/sidebar/awards" element={<SidebarAwards />} />
                <Route path="/sidebar/promotions" element={<SidebarPromotions />} />
            </Routes>
        </React.Fragment>
    );
};

export default SidebarContent;