import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { toast } from "react-toastify";


const Login = () => {
    const { logInUser, googleLogIn, githubLogIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();




    // google login
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : '/')
                    toast.success('Login Successful')
                }
                // toast.success('Register Successful')
                // navigate('/')
            })
    }

    // google login
    const handlegithubLogin = () => {
        githubLogIn()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : '/')
                    toast.success('Login Successful')
                }
                // toast.success('Register Successful')
                // navigate('/')
            })
    }



    // 
    const onSubmit = data => {
        const { email, password } = data
        logInUser(email, password)
            .then(result => {
                toast.success('User LogIn Successfully')
                console.log('ii',result.user);
                // navigate after login
                navigate(location?.state ? location.state : '/')
                const user = {email}
                
                fetch('https://assignment-ten-server-five.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            })
            .catch(errors => {
                toast.error(errors, 'invalid password try again')
                console.log(errors);
            })
    }

    return (
        <div className="card shrink-0 md:w-[448px] md:mt-28 mx-auto shadow-2xl bg-base-100">
            <h1 className="font-bold text-4xl mt-6 text-center">Log In</h1>
            <p className="text-base text-center mt-3">Don&apos;t have an account?<span className="text-blue-600"> <NavLink to='/register'>Sign up</NavLink> </span></p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control -mt-5">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    <div className="">
                        {errors.email && <p className="text-red-500 text-sm">This filed is required </p>}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} {...register("password", { required: true })}
                        placeholder="password" className="input input-bordered" required />
                    <div className="relative">
                        <p onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer absolute bottom-4 md:left-[350px] left-[290px]"> {showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEyeFill></BsEyeFill>} </p>
                    </div>
                    <div className="">
                        {errors.password && <p className="text-red-500 text-sm">This filed is required </p>}
                    </div>
                    <label className="label">
                        <div className="relative">
                            <p className=" cursor-pointer absolute bottom-7 md:left-[350px] left-[290px]"> </p>
                        </div>
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <input type="submit" value="Log In" className="btn bg-violet-900 text-white text-base font-bold hover:bg-violet-800 hover:scale-105" />
                </div>
                <div className="flex items-center justify-around">
                    <hr className="w-[120px] border  border-slate-600 mt-1" /> <p className="text-base text-gray-700 text-center">or continue with</p> <hr className="w-[120px] border  border-slate-600 mt-1" />
                </div>
            </form>
            <div className="card-body -mt-12">
                <div className="form-control ">
                    <button onClick={() => handleGoogleLogin()}
                        className="btn bg-[#db4437] text-white text-base font-bold hover:bg-[#db4437] hover:scale-105">Login with Google</button>
                </div>
                <div className="form-control ">
                    <button onClick={() => handlegithubLogin()}
                        className="btn bg-[#4d4d4ddf] text-white text-base font-bold hover:bg-[#4d4d4ddf] hover:scale-105">Login with Github</button>
                </div>
            </div>

        </div>
    );
};

export default Login;