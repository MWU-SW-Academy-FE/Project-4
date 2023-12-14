import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { AppBar, Toolbar } from "@mui/material";

export default function Nav() {
    return(
        <>
            <AppBar position=" fixed">
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
            <header className="flex flex-shrink-0">
                <NavLink 
                    to="/"
                    className="mr-auto p-3 font-bold hover:text-red-500 cursor-pointer"
                >
                    RC
                </NavLink>
                <ul className="flex">
                    <li>
                        <NavLink 
                            to="/main"
                            className={({ isActive }) => classNames(
                                `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                                {"text-red-500":isActive}
                                )
                            }
                        >
                            메인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/history"
                            className={({ isActive }) => classNames(
                                `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                                {"text-red-500":isActive}
                                )
                            } 
                        >
                            히스토리
                        </NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}