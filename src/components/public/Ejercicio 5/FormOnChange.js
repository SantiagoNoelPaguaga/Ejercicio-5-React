import React, { useState } from "react";

export const FormOnChange = () => {

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  // const email = formValues.email;
  // const password = formValues.password;

  const { email, password } = formValues;

  const handleInputChange = ({ target: { name, value} }) => {


    //const {name, value} = target;
    //console.log(e.target.name, e.target.value)

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formValues);
  }

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
      <h1 className="mt-5">Formulario Registro</h1>
      <form className="mt-5" onSubmit={ handleSubmit }>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email 
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoComplete="false"
            name="email"
            value={ email }
            onChange={ handleInputChange }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            autoComplete="false"
            name="password"
            value={ password }
            onChange={ handleInputChange }
          />
        </div>
       
        <button type="submit" className="btn btn-primary mt-2">
          Registrarse
        </button>
      </form>
      </div>
      <div className="col-4"></div>
      
    </div>
  );
};
