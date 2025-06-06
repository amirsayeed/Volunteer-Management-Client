import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
    }

    return (
         <div className='my-20'>
            <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-800">
            <h1 className="my-3 text-4xl font-bold text-center">Register</h1>
                
            <form onSubmit={handleRegister} className="fieldset">
                <label className="text-sm">Name*</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required/>

                <label className="text-sm mt-2">Photo URL</label>
                <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                <label className="text-sm mt-2">Email address*</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required/>
                    
                
                <label className="text-sm mt-2">Password*</label> 
                <div className='relative'>      
                <input
                    type='text' 
                    name='password'
                    className="input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                    placeholder="Password" required />
                </div>

                <p className="my-1 text-sm text-center dark:text-gray-600">Already have an account?
                <Link to='/auth/login' className="hover:underline text-blue-400"> Login</Link>
                </p>
                
                <button type='submit' className="btn btn-primary w-full text-white rounded-md">Register</button>
            </form>
            <div className="mt-2">
                <button className="btn w-full bg-primary text-white border-[#e5e5e5]">
                <FcGoogle size={20}/> Login with Google</button>
            </div>
        </div>
        </div>
    );
};

export default Register;