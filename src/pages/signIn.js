import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signIn } from "../reducers/auth/ac";
import { useForm } from "react-hook-form";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faExclamation, faTimes } from "@fortawesome/free-solid-svg-icons";
import User from "../images/profile-user.png";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const { authError } = useSelector(store => store.auth)

    const { auth } = useSelector(store => store.firebase)


    const onSubmit = (data) => {
        dispatch(signIn(data))
    }

    if (auth.uid) return <Redirect to={"/"} />

    return (
            <StyledSignIn initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ delay: 0.15, duration: 0.35 }}>
                {/*<h4>Log in</h4>*/}
                <div>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Link>

                </div>
                <img src={User} alt="user" />
                <form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            type="text"
                            name="email"
                            {...register("email", {required: "Email is required"})}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password is too short" }})}
                        />


                    </div>
                    <div className="field">
                        <button>Log in with email</button>
                    </div>
                    <div className="error-message">
                        {errors.email &&
                        <span>
                            <FontAwesomeIcon icon={faExclamation} />
                            {errors.email.message}
                        </span> ||
                        errors.password &&
                        <span>
                            <FontAwesomeIcon icon={faExclamation} />
                            {errors.password.message}
                        </span>
                        }
                    </div>
                    {authError && <p>Login failed</p>}
                </form>
                <div className="create-account">
                    <Link to={"/sign-up"}>Create an account</Link>
                </div>
            </StyledSignIn>

    )
}

/*const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /!*position: fixed;
  top: 0;
  left: 0;*!/

  background: linear-gradient(-45deg, rgba(238, 119, 82, 0.5), rgba(231, 60, 126, 0.5), rgba(35, 166, 213, 0.5), rgba(35, 213, 171, 0.5));
  background-size: 400% 400%;
  animation: Gradient 25s ease infinite;
  overflow: hidden;
`*/

const StyledSignIn = styled(motion.div)`
  width: 25rem;
  height: 35rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(33, 33, 33, 0.5);
  border-radius: 3%;
  position: relative;

  div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
  }
  
  h4 {
    opacity: 1;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  
  img {
    margin: 1rem auto 2rem auto;
    width: 35%;
    opacity: 0.5;
    transition: all .5s ease;
  }
  
  img:hover {
    opacity: 0.75;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .input-field {
    width: 100%;
    margin-bottom: 0.75rem;
    
  }
  
  .input-field:nth-child(2) {
    margin-bottom: 1.5rem;
  }
  
  .error-message {
    text-align: center;
    width: 100%;

    span {
      display: block;
      margin-bottom: 0.5rem;
      text-align: center;
      color: #333;
      font-size: 1rem;
      padding: 0.75rem 2rem;
      background: whitesmoke;
      position: relative;
      
      svg {
        position: absolute;
        left: 0.75rem;
        color: #f4511e;
      }
    }
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    outline: none;
    border: 0;
    border-bottom: 1px solid white;
    border-radius: 0;
    font-size: 1rem;
    color: whitesmoke;
    //text-decoration-color: whitesmoke;
    background-color: transparent;
  }
  
  input::placeholder {
    color: whitesmoke;
  }
  
  input:focus {
    outline: none;
    border-color: cornflowerblue;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: transparent !important;
  }
  
  .field {
    width: 100%;
    margin-bottom: 0.75rem;
  }
  
  button {
    padding: 0.75rem;
    //border-radius: 0.5rem;
    outline: none;
    width: 100%;
    background-color: whitesmoke;
    color: hsl(220, 90%, 56%);
    border: 0;
    //font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all .15s ease;
    
  }
  
  button:hover {
    background: hsl(220, 90%, 40%);
    color: whitesmoke;
    
  }

  button:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px hsla(220, 90%, 56%, 1);
  }

  button:active {
    transform: translateY(2px);
  }
  
  .create-account {
    position: absolute;
    bottom: 1rem;
    text-align: center;
    width: calc(100% - 2rem);
    
    a {
      display: block;
      margin: 0 auto;
      transition: all .15s ease;
    }
    
    a:hover {
      color: white;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
`

export default SignIn
