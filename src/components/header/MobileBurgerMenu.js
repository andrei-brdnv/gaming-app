import React, { useState } from "react";
// Styles
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

const MobileBurgerMenu = () => {
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setActive(!active)
    }

    {active ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'}

    return (
        <>
            <BurgerMenu>
                <div className="circle">
                    <svg className={`ham hamRotate ham1 ${active && 'active'}`} viewBox="0 0 100 100" width="50" onClick={handleMenu}>
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"/>
                        <path
                            className="line middle"
                            d="m 30,50 h 40"/>
                        <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"/>
                    </svg>
                </div>
            </BurgerMenu>
            <BurgerMenuHidden active={active}>
                <DropdownMenu />
            </BurgerMenuHidden>
        </>
    )
}

const BurgerMenu = styled.div`
  .circle {
    width: 2rem;
    height: 2rem;
    background: #707070;
    border-radius: 100%;
    position: relative;
    padding: 1.5rem;
  }

  .ham {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform .4s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamRotate.active {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(45deg) translate(-70%, 0);
  }
  .hamRotate180.active {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(180deg) translate(-50%, -50%);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #E8E8E8;
    stroke-width: 3.5;
    stroke-linecap: round;
  }
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }
`

const BurgerMenuHidden = styled.div`
  position: fixed;
  top: 4rem;
  left: ${props => props.active ? '0' : '-105%'};
  opacity: ${props => props.active ? '1' : '0'};
  transition: all 0.25s linear;
  background-color: #F8F8F8;
  overflow: hidden;
  width: 100%;
  height: 100%;
  overscroll-behavior-y: none;
`

export default MobileBurgerMenu