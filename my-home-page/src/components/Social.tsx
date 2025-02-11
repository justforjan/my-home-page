import {Social as SocialType } from "../models/models.ts";
import React from "react";

function Social({name, url, image}: SocialType) {
    return (
        <div >
            <a href={url} target="_blank" rel="noopener noreferrer">{React.createElement(image, {size: 34 , title: name, className: "text-gray-400 hover:text-secondary duration-150"})}</a>
        </div>
    )
}

export default Social