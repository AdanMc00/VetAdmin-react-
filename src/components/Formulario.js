import React, {Fragment, useState  } from 'react';


const Formulario = () => {

    const [cita,setCita] = useState ({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
});
const handleChange = e => {
    setCita({
        ...cita,
        [e.target.name] : e.target.value
    })
    console.log(e.target.value)
    console.log(cita)
}
const { mascota, propietario, fecha, hora, sintomas } = cita;

const submitCita = e => {
    e.preventDefault();

}
    return (
        <Fragment>
        <form>
            <label>Responsable</label>
            <input
                type={'text'}
                name={'propietario'}
                className={'u-full-width'}
                placeholder={'Nombre dueño de la Mascota'}
                onChange={handleChange}
            />
            <label>Nombre de la Mascota</label>
            <input
                type={'text'}
                name={'mascota'}
                className={'u-full-width'}
                placeholder={'Nombre de la Mascota'}
                onChange={handleChange}
            />
            <label>Fecha</label>
            <input
                type={'Date'}
                name={'fecha'}
                className={'u-full-width'}
                onChange={handleChange}
            />
            <label>Hora</label>
            <input
                type={'Time'}
                name={'hora'}
                className={'u-full-width'}
                onChange={handleChange}
            />
            <label>Sintomas</label>
            <textarea
                className={'u-full-width'}
                name={'sintomas'}
                onChange={handleChange}
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