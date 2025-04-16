import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {
    const [user, setUser]= useState({
        username: "",
        email : "",
        phoneNo : "",
        password : ""

    });


    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]: value,
            
        });
    }

    const navigate = useNavigate();

    const createAccount = async (e)=>{
        e.preventDefault();

        if(!user) return;

        if (user.phoneNo.length !== 10) return alert("phone must be 10 digit");

        console.log(user);
        try {
            const registerResponse = await fetch("http://127.0.0.1:8000/authroutes/register", {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(user),
            })

            console.log(registerResponse);

            if(registerResponse.ok){
                navigate("/login");
            }
            
        } catch (error) {
            console.error(`Register sending backend failed : ${error}`);
            
        }

        setUser({
            username: "",
            email : "",
            phoneNo : "",
            password : ""
        });
    }
    
    return(
        <>
        <div className="relative w-full flex justify-center items-center my-12">
            <form method="post" onSubmit={createAccount} className="w-[500px] border-2 border-black p-8">
                <h1 className="text-4xl text-black text-center text-black m-4">Register Account</h1>
                <div>
                    <label htmlFor="username" className="text-lg text-black block text-left">Name :</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        autoComplete ="off" 
                        value={user.username}
                        onChange={handleInput}required
                        className="bg-gray-300 w-[420px] px-4 py-2 my-1 block"
                        />
                </div>
                <div>
                    <label htmlFor="email" className="text-lg text-black  block text-left ">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        autoComplete ="off"
                        value={user.email}
                        onChange={handleInput} required
                        className="bg-gray-300 w-[420px] px-4 py-2 my-1 block"
                        />
                </div>
                <div>
                    <label htmlFor="phoneNo" className="text-lg text-black block text-left ">Phone No. :-</label>
                    <input 
                        type="tel" 
                        id="phoneNo" 
                        name="phoneNo"
                        autoComplete ="off"
                        value={user.phoneNo}
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
                        value={user.password}
                        onChange={handleInput} required
                        className="bg-gray-300 w-[420px] px-4 py-2 my-1 block"
                        />
                </div>
                <div className="flex text-lg my-4">
                    <p>Already have an account? <span><Link to="/login" className="">Sign in</Link></span></p>
                    
                </div>
                <button type="submit" className="w-[450px] py-1 bg-blue-800 hover:bg-blue-700 my-4 text-lg font-semibold">Submit</button>
            </form>
        </div>
        </>
    )
}

export default SignUp;