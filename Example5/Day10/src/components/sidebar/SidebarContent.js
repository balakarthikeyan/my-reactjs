import React from 'react';
import { Route } from "react-router-dom"

import SidebarAwards from './SidebarAwards';
import SidebarPromotions from './SidebarPromotions';

const SidebarContent = (props) => {
    return (
        <> 
        <Route path="/sidebar/awards" component={SidebarAwards} />
        <Route path="/sidebar/promotions" component={SidebarPromotions} />
        </>
        );
}

export default SidebarContent