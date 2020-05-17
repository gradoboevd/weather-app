import React from "react";
import cloud from "../img/cloud.jpg";
import clear from "../img/clear.jpg";
import rain from "../img/Rain.jpg";
import pussycat from "../img/pussycat.png";

export default (weather) => {
    switch (weather) {
        case 'Clouds': return <img className="picture" src={cloud}/>;
        case 'Rain': return <img className="picture" src={rain}/>;
        case 'Clear': return <img className="picture" src={clear}/>;
        default: return <img className="picture" src={pussycat}/>;
    }
}
