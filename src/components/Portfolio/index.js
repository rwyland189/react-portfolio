import React from 'react';

function Portfolio(props) {
    const currentProject = {
        name: "project 1",
        description: "project 1 description"
    };

    return (
        <section>
            <h2>{currentProject.name}</h2>
            <p>{currentProject.name}</p>
        </section>
    );    
}

export default Portfolio;