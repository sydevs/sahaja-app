import React from "react";
import { SvgXml } from "react-native-svg";

export default function HomePage(){
    const home = `<svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.9668 10.6642L15.6094 0.152006C15.3325 -0.0506688 14.9564 -0.0506688 14.6797 0.152006L0.322149 10.6642C-0.0285391 10.921 -0.104735 11.4134 0.15207 11.7641C0.408875 12.1148 0.901365 12.1909 1.25199 11.9342L15.1445 1.76235L29.037 11.9341C29.177 12.0368 29.3398 12.0862 29.5012 12.0862C29.7435 12.0862 29.9827 11.9747 30.1368 11.7641C30.3937 11.4134 30.3175 10.921 29.9668 10.6642Z" fill="#7B7B7B"/>
    <path d="M26.1624 12.1123C25.7279 12.1123 25.3755 12.4646 25.3755 12.8993V25.4259H19.0798V18.5881C19.0798 16.4182 17.3144 14.6529 15.1446 14.6529C12.9748 14.6529 11.2094 16.4183 11.2094 18.5881V25.426H4.91362V12.8993C4.91362 12.4647 4.56121 12.1124 4.12664 12.1124C3.69206 12.1124 3.33966 12.4647 3.33966 12.8993V26.213C3.33966 26.6476 3.69206 27 4.12664 27H11.9964C12.4102 27 12.7489 26.6802 12.7803 26.2743C12.7822 26.2559 12.7833 26.2358 12.7833 26.213V18.5881C12.7833 17.2861 13.8426 16.2269 15.1446 16.2269C16.4466 16.2269 17.5058 17.2862 17.5058 18.5881V26.213C17.5058 26.2357 17.507 26.2554 17.5089 26.2736C17.5399 26.6798 17.8787 27 18.2928 27H26.1625C26.5971 27 26.9495 26.6476 26.9495 26.213V12.8993C26.9494 12.4646 26.5971 12.1123 26.1624 12.1123Z" fill="#7B7B7B"/>
    </svg>`

    const HomePageSvg = () => <SvgXml xml={home} width="35" height="35"/>
    return  <HomePageSvg/>;
}