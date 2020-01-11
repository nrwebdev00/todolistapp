import React from 'react';
import PropTypes from 'prop-types';

const PendingTask = props => {
    if(props.name){
        return(
            <li className="pending">
                <span>
                    {props.name}
                </span>
            </li>
        );
    }
    return null;
};

PendingTask.propTypes = {
    name: PropTypes.string.isRequired
};

export default PendingTask;