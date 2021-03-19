import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes  from 'prop-types';

const initialAppointment = {
    id: '',
    name: '',
    age: '',
    gender: '',
    date: '',
    observations: ''
};

const Form = ({appointments, setAppointments}) => {

    const [appointment, setAppointment] = useState(initialAppointment);

    const [error, setError] = useState(false);

    const {name, age, gender, date, observations} = appointment;

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Prevent blank fields
        for (const index in appointment) {
            if (index === 'id') continue;
            if (appointment[index].trim() === '') {
                setError(true);
                return;
            }
        }

        //Clear error validation
        setError(false);

        //Create new appointment width id
        setAppointments([
            ...appointments,
            {
                ...appointment,
                id: uuidv4()
            }
        ]);

        //Reset form
        setAppointment(initialAppointment);
    };

    return (
        <>
            <h1>Form</h1>
            {
                error && <p className='alert-error'>All fields are required</p>
            }
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        placeholder='Patient name'
                        className='u-full-width'
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input
                        type='number'
                        name='age'
                        onChange={handleChange}
                        placeholder='Patient age'
                        className='u-full-width'
                        value={age}
                    />
                </div>
                <div>
                    <label htmlFor='gender'>Gender</label>
                    <select
                        name='gender'
                        onChange={handleChange}
                        className='u-full-width'
                        value={gender}
                    >
                        <option value=''/>
                        <option value='male'>MALE</option>
                        <option value='female'>FEMALE</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        name='date'
                        onChange={handleChange}
                        className='u-full-width'
                        value={date}
                    />
                </div>
                <div>
                    <label htmlFor='observations'>Observations</label>
                    <textarea
                        placeholder='Patient observations'
                        name='observations'
                        onChange={handleChange}
                        className='u-full-width'
                        value={observations}
                    />
                </div>
                <div className='text-center'>
                    <button
                        type='submit'
                        className='button-primary'
                    >
                        Create new patient
                    </button>

                </div>
            </form>
        </>
    );
};

Form.propTypes = {
    setAppointments: PropTypes.func.isRequired,
    appointments: PropTypes.array.isRequired
};

export default Form;