import React from 'react'

import './sign-up-button.styles.scss';

const SignUpButton = ({children}) => (
    
        <button className="sign-up-button">
            {children}
        </button>
)

export default SignUpButton;