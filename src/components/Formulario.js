import React, {Fragment, useState} from 'react';
const  cryptoRandomString = require ( "crypto-random-string");
const Formulario = ({createCita}) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
        id:''
    });
    const [error, setError] = useState(false)
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log(cita)
    }
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || sintomas.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        createCita(cita)
        const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
        cita.id= randomId;
        console.log(cita)

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
            id:''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null }
            <form
                onSubmit={submitCita}
            >
                <label>Responsable</label>
                <input
                    type={'text'}
                    name={'propietario'}
                    className={'u-full-width'}
                    placeholder={'Nombre dueño de la Mascota'}
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Nombre de la Mascota</label>
                <input
                    type={'text'}
                    name={'mascota'}
                    className={'u-full-width'}
                    placeholder={'Nombre de la Mascota'}
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Fecha</label>
                <input
                    type={'Date'}
                    name={'fecha'}
                    className={'u-full-width'}
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type={'Time'}
                    name={'hora'}
                    className={'u-full-width'}
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className={'u-full-width'}
                    name={'sintomas'}
                    onChange={handleChange}
                    value={sintomas}
                >
            </textarea>
                <button
                    type={'submit'}
                    className={'u-full-width'}
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    )
}
export default Formulario;