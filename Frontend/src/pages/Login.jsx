import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [login, setLogin]= useState({
        email : "",
        password : ""

    });


    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [name]: value,
            
        });
    }

    const createAccount = (e)=>{
        e.preventDefault();

        try {
            
        } catch (error) {
            console.error(`login page error ${error}`);
        }

        if(!login) return;

        console.log(login);
        setLogin({
            email : "",
            password : ""
        });
    }
    
    return(
        <>
        <div className="relative w-full flex justify-center items-center my-16">
            <form onSubmit={createAccount} className="w-[500px] border-2 border-black p-8">
                <h1 className="text-4xl text-black text-center text-black m-4 ">Login</h1>
                
                <div>
                    <label htmlFor="email" className="text-lg text-black  block text-left ">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        autoComplete ="off"
                        value={login.email}
                        onChange={handleInput} required
                        className="bg-gray-300 w-[420px] px-4 py-2 my-1 block"
                        />
                </div>
                
                <div>
                    <label htmlFor="password" className="text-lg text-black block text-left ">Password :</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        autoComplete ="off"
                        value={login.password}
                        onChange={handleInput} required
                        className="bg-gray-300 w-[420px] px-4 py-2 my-1 block"
                        />
                </div>
                
                <button type="submit" className="w-[420px] py-1 bg-blue-800 hover:bg-blue-700 my-4 text-lg font-semibold">Submit</button>

                <div className="flex text-lg my-4">
                    <p>Don't have an account?<Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;