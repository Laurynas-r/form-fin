import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import PlacesAutocomplete from 'react-places-autocomplete';


import SignUpButton from '../../components/sing-up-button/sign-up-button.component';
import Suggestions from '../../components/suggestions/suggestions.component';
import FormInput from '../../components/input/form-input.component';
import UsersTable from '../../components/users-table/users-table.component';


import './registration-page.styles.scss';

function RegistrationPage() {
    const { register, handleSubmit, errors } = useForm();
    const [address, setAddress] = useState('');
      
    const handleSelect = value => {
        setAddress(value);
    }

//push new registration object to localStorage by creating ar adding a new object to an array
    const addNewUser = data => {

        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []; 
        allUsers.push(data);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }

//Submit form and add data to localStorage and clear inputs
    const onSubmit = (data, e) => {
        e.preventDefault();

        addNewUser(data);
        e.target.reset();
    
    };

        let getLocalStorageData = localStorage.getItem('allUsers');
        let allRegisteredUsers = JSON.parse(getLocalStorageData);

        console.log(allRegisteredUsers);
    
    return (
    <div className="group">
        <div className="wrapper"> 
        <form className="form"  onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        {/* name input */}
            <FormInput
                placeholder="Name"
                className="form-input"
                name="name"
                register={register({ 
                    required: true, 
                    pattern: /^[A-Za-z]+$/i 
                })}
                error={errors.name}
            />
        
        {/* last name input */}
            <FormInput
                placeholder="Last Name"
                className="form-input"
                name="lastName"
                register={register({ 
                    required: true, 
                    pattern: /^[A-Za-z]+$/i 
                })}
                error={errors.name}           
            />
            
        {/* Email input */}
            <FormInput
                placeholder="Email"
                className="form-input"
                name='email'
                register={register({ 
                    required: true, 
                    pattern: /^\S+@\S+$/i 
                })}
                type='email'
                error={errors.email}  
            />
    
        {/* Google places component */}
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelect}
            >{({ getInputProps, suggestions, loading }) => 
                <div>
                    <FormInput 
                        className="form-input"
                        name="location"
                        {...getInputProps({ placeholder: "Address" })}  
                        register={register({ required: true })}
                        error={errors.location}
                    />
           
                    <div>
                        {loading && <div>Fetching...</div>}
                        {suggestions.map((suggestion) => {
                            const style = suggestion.active ? 
                            { backgroundColor: "lightblue", cursor: "pointer" } :
                            { backgroundColor: "#FFF", cursor: "pointer" }
                            console.log(suggestion);
                            return (
                                // Suggestions component
                                <Suggestions suggestion={suggestion} style={style} key={suggestion.placeId} />
                            )
                        })}
                    </div>
                </div>}
            </PlacesAutocomplete>

            <SignUpButton type="Submit">
                Sign Up
            </SignUpButton>
            
        </form>
        </div>
            <UsersTable allRegisteredUsers={allRegisteredUsers} />
    </div>
    )}


export default RegistrationPage;
