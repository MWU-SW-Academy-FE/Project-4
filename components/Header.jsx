import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Link to="/">
        <Img
          src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2021/02/urbanbrush-20210203212519588818.jpg"
          alt="로고"
        />
      </Link>

      <StyledLink to="/write">오늘의 할일 정하기</StyledLink>
      <StyledLink to="/list">오늘의 할일 보기</StyledLink>
    </Container>
  );
}

export default Header;

const StyledLink = styled(Link)`
  margin: 0 1rem;
`;

const Img = styled.img`
  width: 250px;
  cursor: pointer;
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around
  margin: 0 

  `;
