//Fomulario.jsx
import React, { useState } from 'react';
import swall from 'sweetalert';
const Form = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    //Estado para los errores
    const [error, setError] = useState(false);
    //Función antes de enviar el formulario
    const validateData = (e) => {
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
    let statePassword = "Ingrese Contraseña";

    const truePassword = (e) => {
        //e.preventDefault();
        if(password === '252525') {
            classButton = "btn btn-primary";
            statePassword = "Contraseña Correcta";
        } else if (password === ''){
            classButton = "btn btn-primary disabled";
            statePassword = "Ingrese Contraseña";
        } else {
            classButton = "btn btn-primary disabled";
            statePassword = "Contraseña Incorrecta";
        }
    }
    truePassword()

    return (
        <div>
            <form className="formulario" onSubmit={validateData}>
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
            <h3>Datos ingresados</h3>*/}
            {statePassword} 
        </div>
        );
};
export default Form;