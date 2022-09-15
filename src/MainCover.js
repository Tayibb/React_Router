import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/common/Header";

const MainCover = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainCover;
