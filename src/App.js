import React from 'react';
import Form from "./components/Form";
import Appointments from "./components/Appointments";
import useLocalStorage from "./hooks/localStorage";

const App = () => {

    const [appointments, setAppointments] = useLocalStorage('appointments', []);

    return (
        <>
            <h1>Patient Administrator</h1>
            <main className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <Form
                            appointments={appointments}
                            setAppointments={setAppointments}
                        />
                    </div>
                    <div className='one-half column'>
                        <Appointments
                            appointments={appointments}
                            setAppointments={setAppointments}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
