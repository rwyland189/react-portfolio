import React from 'react';

function Nav(props) {
    const {
        components = [],
        setCurrentComponent,
        currentComponent
    } = props;




    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/">Becca Wyland</a>
            </h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>

                    {}

                    {/* portfolio object here */}

                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>

                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>         
        </header>
    );
}

export default Nav;