import styled from "styled-components";

export const NavbarStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // background: turquoise;
  background: #f46b45;
  background: -webkit-linear-gradient(225deg, #f46b45, #ff6a00 , #ee0979);
  background: -o-linear-gradient(225deg, #f46b45, #ff6a00 , #ee0979);
  background: linear-gradient(225deg, #f46b45, #ff6a00 , #ee0979);
  position: fixed;
  top: ${props => (props.open ? "0" : "-120%")};
  right: 0;
  width: 100%;
  height: 100vh;
  // clip-path: polygon(0 100%, 0 0, 100% 0, 100% 93%, 65% 100%, 32% 93%);
  transition: top 0.3s linear;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    position: initial;
    height: 10vh;
    justify-content: flex-end;
    background: #000000;
  }

  a {
    cursor:pointer;
    margin: 0.5rem 1rem;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    padding: 4px 0;
    transition: 0.7s ease-out;
    color: #FFFFFF;
    text-decoration: none;
  }

  a:hover
  {
    border-top: 2px solid coral;
    border-bottom: 2px solid coral;
  }
`;
