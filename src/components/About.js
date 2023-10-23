import React from "react";
function About(props){
    return (
        <aside>
            <img src={props.logoSrc} alt ="blog logo" /> 
            <p> {props.aboutText}</p>
        </aside>
    );
}
export default About;