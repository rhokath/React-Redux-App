import React from 'react';

const Dog = (props) => {
    return (
        <div className="dog-container">
            <img src ={props.dog}alt="image of dalmation" />
        </div>
    )
}

export default Dog;