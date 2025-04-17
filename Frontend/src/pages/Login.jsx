import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();
    const createAccount = async (e)=>{
        e.preventDefault();

        if(!login) return;
        try {
            const loginResponse = await fetch("http://127.0.0.1:8000/authroutes/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(login)
            })

            console.log(`login form response : ${loginResponse}`);
            
            if(loginResponse.ok){
                setLogin({
                    email : "",
                    password : ""
                });
                alert("Login Successfully");
                navigate("/");
            }
            else{
                alert(`Invalid Creditial`);
            }
            
        } catch (error) {
            console.error(`login page error ${error}`);
        }

       
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
                
                <button type="submit" className="w-[420px] py-1 bg-blue-800 hover:bg-blue-700 my-2 text-lg font-semibold">Submit</button>

                <div className="flex text-lg my-2">
                    <p className="font-medium text-xl">Don't have an account?<Link to="/register" className="text-indigo-700 font-semibold">Register</Link></p>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;