//Fomulario.jsx
import React, { useState } from 'react';
import swall from 'sweetalert';
const Formulario = () => {
//Estados del formulario
const [nombre, setNombre] = useState('');
const [password, setPassword] = useState('');
//Estado para los errores
const [error, setError] = useState(false);
//Función antes de enviar el formulario
const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (nombre === '' || password === '')
    {
        setError(true);
        return;
    }
    setError(false);
    setNombre('');
    setPassword('');
};
let classButton = "btn btn-primary disabled";

const truePassword = (e) => {
    //e.preventDefault();
    if(password === '252525') {
        classButton = "btn btn-primary"
    } else {
        classButton = "btn btn-primary disabled"
    }
}
truePassword()

return (
    <div>
        <form className="formulario" onSubmit={validarDatos}>
            {error ? swall("Oops!","Favor ingresa todos los datos","warning") : null}
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" 
                name="nombre" 
                className="form-control" 
                onChange={(e) => setNombre(e.target.value)} value={nombre}  />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                />
            </div>
            <button type="submit" className={classButton} >Submit</button>
        </form>
        {/* <hr />
        <h3>Datos ingresados</h3>
        {nombre} - {password} */}
    </div>
    );
};
export default Formulario;