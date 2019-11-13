import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
      <style jsx>{`
        div{
          background-color: green;
        }
      `}
      </style>
    </div>
  );
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;