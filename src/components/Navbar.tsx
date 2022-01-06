// components
import { Link } from "react-router-dom";
import styled from "styled-components";

// CSS-in-JS styles using styled-components & inline styles
const NavDiv = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <NavDiv>
      <Link to="/show">
        <strong style={{ color: "white" }}>My Movie App</strong>
      </Link>
      <em>Pedro Tavares</em>
    </NavDiv>
  );
};

export default Navbar;
