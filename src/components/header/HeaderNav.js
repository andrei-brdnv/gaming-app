import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeHeaderDropdown } from "../../reducers/ui/ac";
import useClickOutside from "../../utils/clickOutsideFunc";
// Styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// Components
import HeaderNavItem from "./HeaderNavItem";
import DropdownMenu from "./DropdownMenu";

const HeaderNav = () => {
    const dispatch = useDispatch()
    const { isOpenDropdown } = useSelector(store => store.ui)
    const dropdownRef = useRef(null)

    useClickOutside(dropdownRef, () => {
        isOpenDropdown && dispatch(closeHeaderDropdown())
    })

    return (
        <List ref={dropdownRef}>
            <HeaderNavItem icon={<FontAwesomeIcon icon={faCaretDown}/>}>
                <DropdownMenu />
            </HeaderNavItem>
        </List>
    )
}

const List = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export default HeaderNav