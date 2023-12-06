import { NavLink } from "react-router-dom"
import classNames from "classnames"

function Header() {
    return(
        <>
            <header className="flex flex-shrink-0">
                <NavLink 
                    to="/"
                    className="mr-auto p-3 font-bold hover:text-red-500 cursor-pointer"
                >
                    로고
                </NavLink>
                <ul className="flex">
                    <li>
                        <NavLink 
                            to="/list"
                            className={({ isActive }) => classNames(
                                `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                                {"text-red-500":isActive}
                                )
                            }
                        >
                            리스트
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/write"
                            className={({ isActive }) => classNames(
                                `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                                {"text-red-500":isActive}
                                )
                            } 
                        >
                            작성
                        </NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;