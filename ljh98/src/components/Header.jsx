import { NavLink } from "react-router-dom";
import classNames from "classnames";

function Header() {
    return (
    <>
        <header className="flex">
            <NavLink 
                to="/main"
                className="mr-auto p-3 font-bold hover:text-red-500 cursor-pointer"
            >
                RC
            </NavLink>
            <ul>
                <li>
                    <NavLink 
                        to="/main"
                        className={({ isActive }) => classNames(
                            `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                            {"text-red-500": isActive}
                            )} 
                    >
                        메인
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/history"
                        className={({ isActive }) => classNames(
                            `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                            {"text-red-500": isActive}
                            )}  
                    >
                        히스토리
                    </NavLink>
                </li>
            </ul>
        </header>
    </>
    );
}

export default Header;