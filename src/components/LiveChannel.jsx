import React from 'react';
import PropTypes from 'prop-types';

function LiveChannel(props) {
    return(
        <div>
            <div className="col l3">
                
                    <img src={props.img} alt="game image"></img>
                    <p>{props.name}</p>
                    <p>{props.game}</p>
                    <h5>{props.watching}</h5>
                </div>
            </div>
    )
}

LiveChannel.propTypes = {
    img: PropTypes.element,
    name: PropTypes.string,
    game: PropTypes.string,
    watching: PropTypes.string,
};

export default LiveChannel