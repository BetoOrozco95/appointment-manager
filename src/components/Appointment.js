import React from 'react';
import PropTypes  from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {
    const { id, name, age, gender, date, observations} = appointment;
    return (
        <div className='appointment'>
            <p>Name: <span>{name}</span></p>
            <p>Age: <span>{age}</span></p>
            <p>Gender: <span>{gender}</span></p>
            <p>Date: <span>{date}</span></p>
            <p>Observations: <span>{observations}</span></p>

            <button
                type='button'
                className='button delete u-full-width'
                onClick={() => deleteAppointment(id)}
            >
                &times; Eliminar
            </button>
        </div>
    );
};

Appointment.propTypes = {
    appointment: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        observations: PropTypes.string.isRequired,
    }).isRequired,
    deleteAppointment: PropTypes.func.isRequired
};

export default Appointment;