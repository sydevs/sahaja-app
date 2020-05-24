import React from "react";
import { SvgXml } from "react-native-svg";

export default function BackArrow(){
    const arrow = `<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='328 112 184 256 328 400' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg>`

    const BackArrowSvg = () => <SvgXml xml={arrow} width="30" height="35" />
    return  <BackArrowSvg/>;
}