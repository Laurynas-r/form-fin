import React from 'react';

import './form-input.styles.scss'

const FormInput = ({ register, label, error, className, placeholder, ...inputProps }) => {

    const required = "This field is required";
    const maxLength = "Your input exceed maximum length"; 

    const errorMessage = error => {
        return <div className="error-message">{error}</div>;
      };

      console.log(error);
   
   return(
   <div>
        <input
            ref={register}
            className={className}
            placeholder={placeholder}
            {...inputProps}
        />

                {error && 
                error.type === "required" &&
                errorMessage(required)}
                {error &&
                error.type === "maxLength" &&
                errorMessage(maxLength)}

    </div>
)}

export default FormInput;