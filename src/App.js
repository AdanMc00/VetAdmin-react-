import React, {Fragment, useState, useEffect} from 'react'
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";


function App() {
    // Citas en LocalStorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
        citasIniciales = [];
    }
    const [citas, setCitas] = useState([citasIniciales]);
// UseEffect para agregar las citas a LocalStorage
    useEffect(() => {
        if (citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas))
        } else {
            localStorage.setItem('citas', JSON.stringify([]))
        }
    })
    // Funcion para crear Citas
    const createCita = cita => {
        setCitas([
            ...citas,
            cita,

        ])
    }
    //Funcion para borrar de pantalla una cita por id
    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        setCitas(nuevasCitas)
        console.log(citas)
    }

    // Mensaje Condicional
    const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administra tus Citas'

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario
                            createCita={createCita}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {citas.map(cita => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
