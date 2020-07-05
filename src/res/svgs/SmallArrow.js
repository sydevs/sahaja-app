import React from "react";
import { SvgXml } from "react-native-svg";

export default function SmallArrow(){
    const arrow = `<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 10.49L5.491 6.00001L0.5 1.51001V10.49Z" fill="#7B7B7B" stroke="#7B7B7B"/>
    </svg>
    `

    const SmallArrowSvg = () => <SvgXml xml={arrow} width="20" height="20" />
    return  <SmallArrowSvg/>;
}