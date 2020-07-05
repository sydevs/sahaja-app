import React from "react";
import { SvgXml } from "react-native-svg";

export default function Back(){
    const back = `<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17L2 8.99887L10 1" stroke="#979797" stroke-width="2"/>
    </svg>`

    const BackSvg = () => <SvgXml xml={back} width="30" height="25" />
    return  <BackSvg/>;
}