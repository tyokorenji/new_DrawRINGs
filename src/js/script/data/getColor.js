//@flow
"use strict";

export function getColor(color: string): string  {
    switch (color) {
        case "white": return "rgb(255, 255, 255)";
        case "blue": return "rgb(0, 144, 188)";
        case "green": return "rgb(0, 166, 81)";
        case "yellow": return "rgb(255, 212, 0)";
        case "orange": return "rgb(244, 121, 32)";
        case "pink": return "rgb(246, 158, 161)";
        case "purple": return "rgb(165, 67, 153)";
        case "light_blue": return "rgb(143, 204, 233)";
        case "brown": return "rgb(161, 122, 77)";
        case "red": return "rgb(237, 28, 36)";
        case "black": return "rgb(0, 0, 0)";
        default: return "";
    }

}