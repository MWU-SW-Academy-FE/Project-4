import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header>
    <Link to="/">운동 작성하기</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to="/listpage">운동 내역 확인하기</Link>
      <hr/>
        </header>
     );
}

export default Header;