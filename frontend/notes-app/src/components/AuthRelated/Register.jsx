import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Register = ({registrationStatus}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmission = async (event) => {
        const emailInput = document.querySelector(".emailInput");
        const passwordInput = document.querySelector(".passwordInput");
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/app/auth/register" , { email , password});
            console.log("Registered Successfully" , response.data);

            // emailInput.value = "";
            // passwordInput.value = "";
            // registrationStatus();
        } catch (error) {
            console.log(`An error was found ${error}`);
        }
    }
    <Navigate to={"/Home"}/>

    return (
        <div className="h-[32rem] bg-[#ffffff] w-100% flex justify-center items-center">
            <div className="h-[21rem] w-[32rem] p-6 max-w-sm mx-auto bg-[#ebebeb] rounded-lg border border-[#a28dc3] shadow-2xl flex justify-center items-center">
                <div className="h-[270px] w-[480px]">
                    <form method="POST" onSubmit={handleSubmission}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input htmlFor="email" type="email" value={email} className="emailInput form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input htmlFor="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="passwordInput form-control" id="exampleInputPassword1" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}