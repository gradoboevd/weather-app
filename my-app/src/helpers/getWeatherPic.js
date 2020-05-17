import React from "react";
import cloud from "../img/cloud.jpg";
import clean from "../img/clean.jpg";
import rain from "../img/Rain.jpg";
import pussycat from "../img/pussycat.png";

export default (weather) => {
    switch (weather) {
        case 'Cloud': return cloud;
        case 'Rain': return rain;
        case 'Clear': return clean;
        default: return pussycat;
    }
}
