import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect,
    useHistory
  } from "react-router-dom";
import App2 from "./page/src/App2";

import { Base64 } from 'js-base64'


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // form validation
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validating the form wasnt empty
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};




class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

 

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = {...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value) ?
                    "" :
                    "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    createAccount = () => {
        console.log("Enter");
        let data = {
            Name: this.state.firstName,
            Email: this.state.email,
        }
        //let historyyy = useHistory();
        console.log(data);

        data = Base64.encode(JSON.stringify(data));
        fetch('http://minor-project.s3-website.ap-south-1.amazonaws.com' + data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(result => result.json())
            .then(resultJson => {
                if (resultJson.status == "Success"){
                  
                    alert("Account Created Successfully");
                    window.location.href = 'about';
                   
        //                return (
        //    <Redirect to = "/about" />
        //                );
                   
                    
                    
                    
                }
            })
            .catch(err => console.log(err));
    };

    render() {
            const { formErrors } = this.state;
           
            return ( <
                    div className = "wrapper" >
                    <
                    div className = "form-wrapper" >
                    <
                    h1 >Sign Up< /h1> <
                    form onSubmit = { this.handleSubmit }
                    noValidate >
                    <
                    div className = "firstName" >
                    <
                    label htmlFor = "firstName" > First Name < /label> <
                    input className = { formErrors.firstName.length > 0 ? "error" : null }
                    placeholder = "First Name"
                    type = "text"
                    name = "firstName"
                    noValidate onChange = { this.handleChange }
                    /> {
                    formErrors.firstName.length > 0 && ( <
                        span className = "errorMessage" > { formErrors.firstName } < /span>
                    )
                } <
                /div> <
            div className = "lastName" >
                <
                label htmlFor = "lastName" > Last Name < /label> <
            input className = { formErrors.lastName.length > 0 ? "error" : null }
            placeholder = "Last Name"
            type = "text"
            name = "lastName"
            noValidate onChange = { this.handleChange }
            /> {
            formErrors.lastName.length > 0 && ( <
                span className = "errorMessage" > { formErrors.lastName } < /span>
            )
        } <
        /div> <
    div className = "email" >
        <
        label htmlFor = "email" > Email < /label> <
    input className = { formErrors.email.length > 0 ? "error" : null }
    placeholder = "Email"
    type = "email"
    name = "email"
    noValidate onChange = { this.handleChange }
    /> {
    formErrors.email.length > 0 && ( <
        span className = "errorMessage" > { formErrors.email } < /span>
    )
} <
/div> <
div className = "password" >
    <
    label htmlFor = "password" > Password < /label> <
input className = { formErrors.password.length > 0 ? "error" : null }
placeholder = "Password"
type = "password"
name = "password"
noValidate onChange = { this.handleChange }
/> {
formErrors.password.length > 0 && ( <
    span className = "errorMessage" > { formErrors.password } < /span>
)
} <
/div> <
div className = "createAccount" >
    <
    button type = "submit"
onClick = { this.createAccount } > Create Account < /button>  < /
div > <
    /form> < /
div > <
    /div>
);
}
}

const Sstruct = ()=> (
    <Router>
    <div>

      <Switch>
        <Route path="/about">
          <App2 />
        </Route>
       
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default Sstruct;