import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photos here
// import photo from "../../assets/small/portfolio/.png";

function Portfolio(props) {
    const currentProject = {
        name: "project 1",
        description: "project 1 description"
    };

    return (
        <section>
            <h2>{capitalizeFirstLetter(currentProject.name)}</h2>

            <p>{currentProject.name}</p>

            <div>
                {/* notice use of img-thumbnail here, we may have to write the css? */}
                <img src={photo} alt="Portoflio example" className="img-thumbnail mx-1" />
            </div>
        </section>
    );    
}

export default Portfolio;