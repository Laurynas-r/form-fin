import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import PlacesAutocomplete from 'react-places-autocomplete';

import SignUpButton from '../../components/sing-up-button/sign-up-button.component';
import Suggestions from '../../components/suggestions/suggestions.component';
import FormInput from '../../components/input/form-input.component';

import './registration-page.styles.scss';

function RegistrationPage() {
    let getLocalStorageData = localStorage.getItem('allUsers');
    let allRegisteredUsers = JSON.parse(getLocalStorageData);
    
    const { register, handleSubmit, errors } = useForm();
    const [users, setAllUsers] = useState(allRegisteredUsers)
    const [address, setAddress] = useState('');
    const [updateUser, setUpdateNewUser] = useState({
        name: '',
        lastName: '',
        email: '',
        location: ''
    });

    console.log(updateUser);

    const handleSelect = value => {
        setAddress(value);
    }

//push new registration object to localStorage by creating ar adding a new object to an array
    const addNewUser = data => {
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []; 
        allUsers.push(data);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }

    const onUpdate = (user) => {
        let index = allRegisteredUsers.indexOf(user)
        let user2 = JSON.parse(localStorage.getItem('allUsers'))

        user2[index] = updateUser;
        localStorage.setItem('allUsers', JSON.stringify(user2))
        setAllUsers(JSON.parse(localStorage.getItem('allUsers')))
    }


//Submit form and add data to localStorage and clear inputs
    const onSubmit = (data, e) => {
        e.preventDefault();

        addNewUser(data);
        e.target.reset();
    };
 
    return (
    <div>
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
    </div>

                { allRegisteredUsers.map((u, index) => {
                    return (
                        <div className="container" key={index}>      
                            <h3>{u.name} {u.lastName}</h3>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        className="form-control" 
                                        onChange={(e) => (setUpdateNewUser({name: e.target.value}))} 
                                        placeholder={u.name} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                    <input 
                                        className="form-control" 
                                        onChange={(e) => (setUpdateNewUser({lastName: e.target.value}))} 
                                        placeholder={u.lastName} 
                                    />
                            </div>
                            <div className="form-group">
                                <label>E-mail</label>
                                    <input 
                                        className="form-control" 
                                        onChange={(e) => (setUpdateNewUser({email: e.target.value}))} 
                                        placeholder={u.email} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                    <input 
                                        className="form-control" 
                                        onChange={(e) => (setUpdateNewUser({location: e.target.value}))} 
                                        placeholder={u.location} />
                            </div>
                            <button 
                                type="button"
                                className="btn btn-dark"
                                onClick={() => onUpdate(u)}
                                    >Update
                            </button>
                        </div>
                    )
                })}
    </div>
    )}


export default RegistrationPage;
