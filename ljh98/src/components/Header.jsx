import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { AppBar, Toolbar } from "@mui/material";

function Header() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <div className="flex-1"></div>
                <NavLink 
                    to="/main"
                    className="font-bold select-none self-stretch flex items-center"
                >
                    Challenge App
                </NavLink>
                <div className="flex-1 self-stretch flex justify-end">
                    <NavLink
                        to="/history"
                        className="select-none flex items-center"
                    >
                        히스토리
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;