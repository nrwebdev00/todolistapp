import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => 
    <table className="counter">
        <tbody>
            <tr>
                <td>Task To Do:</td>
                <td>{props.numberUncompleted}</td>
            </tr>
            <tr>
                <td>Task Completed:</td>
                <td>{props.numberCompleted}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{props.numberTotal}</td>
            </tr>
        </tbody>
    </table>;

    Counter.propTypes ={
        numberUncompleted: PropTypes.number,
        numberCompleted: PropTypes.number,
        numberTotal: PropTypes.number
    }

export default Counter