import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {

    const {signIn,googleSignIn,setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email,password);

        signIn(email,password).then(result=>{
            setUser(result.user);
            toast.success('Login successful');
            navigate(`${location?.state ? location.state : '/'}`);
        })
        .catch(error=>{
            console.log(error);
            toast.error(error.message);
        })
    }

     const handleGoogleLogin = () =>{
        googleSignIn().then(result=>{
            setUser(result.user);
            toast.success('Login successful');
        })
        .catch(error=>{
            console.log(error);
            toast.error(error.message);
        })
    }

    return (
        <div className='my-20'>
            <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-800">
            <h1 className="my-3 text-4xl font-bold text-center">Log in</h1>
                
            <form onSubmit={handleLogin} className="fieldset">
                <label className="text-sm">Email address</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"  required/>
                    
                <label className="text-sm mt-2">Password</label>       
                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
                <Link className="text-xs my-1 hover:underline dark:text-gray-600">Forgot password?</Link>
                <button type='submit' className="btn btn-primary w-full text-white rounded-md">Log in</button>
            </form>
            <div className="space-y-2 mt-2">
                <button onClick={handleGoogleLogin} className="btn w-full bg-primary text-white border-[#e5e5e5]">
                <FcGoogle size={20}/> Login with Google</button>
                <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                <Link to='/auth/register' className="hover:underline text-blue-400"> Sign up</Link>.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Login;