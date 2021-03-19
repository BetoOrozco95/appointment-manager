import React from 'react';
import Appointment from "./Appointment";
import PropTypes  from 'prop-types';

const Appointments = ({appointments, setAppointments}) => {

    const deleteAppointment = id => {
        setAppointments(appointments.filter(({id: _id}) => _id !== id));
    };

    return (
        <>
            <h1>Appointments</h1>
            {
                appointments && appointments.length > 0
                    ? appointments.map(appointment => (
                        <Appointment
                            key={appointment.id}
                            appointment={appointment}
                            deleteAppointment={deleteAppointment}
                        />
                    ))
                    : <p>No found appointments</p>
            }
        </>
    );
};

Appointments.propTypes = {
    setAppointments: PropTypes.func.isRequired,
    appointments: PropTypes.array.isRequired
};

export default Appointments;