import React from 'react';
import PropTypes from 'prop-types';

function SideBarProfile(props){
  return (
    <div className="row">
        <div className="col l8">
            <h5 id="userName">{props.name}</h5>
            <p id="userGame">{props.game}</p>
            <style jsx>{`
                #userName{
                    margin-top: 0px;
                    font-size: 14px;
                    font-weight: bold;
                    font-family: Helvetica Neue;
                }
                #userGame{
                    margin-top: -10px;
                    font-size: 13px;
                    font-family: Helvetica Neue;
                    color: gray;
                }
                `}
            </style>
        </div>
        <div className="col l2">
            <p id="userWatch">{props.watching}</p>
            <style jsx>{`
                #userWatch{
                    font-size: 13px;
                    font-family: Helvetica Neue;
                    color: gray;
                }
                `}
            </style>
        </div>
    </div>
  );
}

SideBarProfile.propTypes = {
  name: PropTypes.string,
  game: PropTypes.string,
  watching: PropTypes.string
};

export default SideBarProfile;