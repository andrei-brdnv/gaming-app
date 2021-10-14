import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../reducers/ui/ac";
// Styles
import styled from "styled-components";

const HeaderNavItem = (props) => {
    const dispatch = useDispatch()
    const { open } = useSelector(store => store.ui)

    const toggleDropdown = () => {
        dispatch(toggleOpen())
    }

    return (
        <NavItem>
            <IconButton onClick={toggleDropdown}>
                {props.icon}
            </IconButton>

            {open && props.children}
        </NavItem>
    );
}

const NavItem = styled.li`
  //width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconButton = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #707070;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter .25s;
  //color: #dadce1;
  color: #E8E8E8;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    filter: brightness(1.25);
  }

  svg {
    font-size: 1.5rem;
  }
`

export default HeaderNavItem