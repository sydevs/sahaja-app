import React from "react";
import { SvgXml } from "react-native-svg";

export default function Arrow(){
    const arrow = `<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 17.2727L12.9823 9.50681L1 2V17.2727Z" stroke="#7B7B7B" stroke-width="2"/>
</svg>`

    const ArrowSvg = () => <SvgXml xml={arrow} width="16" height="12"/>
    return  <ArrowSvg/>;
}