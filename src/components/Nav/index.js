import React, { Component } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        components = [],
        setCurrentComponent,
        currentComponent
    } = props;




    return (
        <nav>
            <ul className="flex-row">
                {components.map((Component) => (
                    <li className={`mx-2 ${currentComponent.name === Component.name && 'navActive'}`}>
                        <span onClick={() => {
                            setCurrentComponent(Component)
                        }}
                        >
                            {capitalizeFirstLetter(Component.name)}
                        </span>
                    </li>
                ))}

                {/* <li className="mx-2">
                    <a href="#about">About Me</a>
                </li>

                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li>
                    <a href="#contact">Contact Me</a>
                </li>

                <li>
                    <a href="#resume">Resume</a>
                </li> */}
            </ul>
        </nav>         
    );
}

export default Nav;