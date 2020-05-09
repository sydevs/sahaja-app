import React from "react";
import { SvgXml } from "react-native-svg";

export default function Meditate(){
    const arrow = `<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8 23.8999C14.8 23.8999 8.39997 26.2999 5.49997 26.0999C2.09997 25.8999 2.59997 23.2999 3.99997 22.4999C6.19997 21.1999 11.2 18.8999 11.2 18.8999" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.9 23.8999C14.9 23.8999 21.3 26.2999 24.2 26.0999C27.6 25.8999 27.1 23.2999 25.7 22.4999C23.5 21.1999 18.5 18.8999 18.5 18.8999" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.3 13.7V18.6" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.5 13.7V18.6" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 19.7C1 19.7 5.2 17.5 6 16.9C6.8 16.3 10 10.2 10.4 10C10.9 9.80002 12.8 9.40002 12.9 9.40002" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.9 19.7C28.9 19.7 24.3 17.5 23.5 16.9C22.7 16.3 19.5 10.2 19.1 10C18.6 9.8 17.1 9.5 17 9.5" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.9 7C16.5569 7 17.9 5.65685 17.9 4C17.9 2.34315 16.5569 1 14.9 1C13.2432 1 11.9 2.34315 11.9 4C11.9 5.65685 13.2432 7 14.9 7Z" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `

    const MeditateSvg = () => <SvgXml xml={arrow} width="40" height="40"/>
    return  <MeditateSvg/>;
}