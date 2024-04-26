import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs"
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    
    const {createUser }= useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()
    const handleRegister = (data) => {
        const { email, password, image, fullName } = data
        console.log(image, fullName, email, password);
        createUser(email, password)
        .then(result =>{
            alert('register success')
            console.log(result);
        })
    }
    useEffect(()=>{
        window.scroll(0, 0)
    },[])
    // createUser

    return (
        <>

            <div className="card shrink-0 md:w-[448px] md:mt-28 mx-auto shadow-2xl bg-base-100">
                <h1 className="font-bold text-4xl mt-6 text-center">Register</h1>
                <p className="text-base text-center mt-3">Already have an account?<span className="text-blue-600"> <NavLink to='/login'>Log In</NavLink> </span></p>
                <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                    <div className="form-control -mt-5">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register('fullName', {
                            required: {
                                value: true,
                                message: 'You must fill the full name  field'
                            },
                            minLength: {
                                value: 3,
                                message: 'This inputs value must be at least 3 characters'
                            },
                            maxLength: {
                                value: 30,
                                message: 'This inputs value must be max 30 characters'
                            }

                        })} type="text" placeholder="full name" className="input input-bordered" />
                        <div className="">
                            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" placeholder="image url" className="input input-bordered"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image url add'
                                    }
                                })} />
                            <div className="">
                                {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', {
                            required: {
                                value: true,
                                message: 'You must fill the email field'
                            },
                        })} type="email" placeholder="email" className="input input-bordered" />
                        <div className="">
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            required: {
                                value: true,
                                message: 'You must fill the password field'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            },
                            maxLength: {
                                value: 50,
                                message: 'This inputs value must be max 50 characters'
                            },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                                message: 'must include Uppercase & Lowercase letter'
                            }
                        })} type={showPassword ? "text" : "password"}
                            placeholder="password"
                            className="input input-bordered " />
                        <div className="">
                            <div className="relative">
                                <p onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer absolute bottom-4 md:left-[350px] left-[290px]"> {showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEyeFill></BsEyeFill>} </p>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <label className="label mt-1">
                            <input
                                type="checkbox"
                                name="tram" id="" /> <p className="text-xs ml-2"> I accept the <NavLink>Terms and condition</NavLink></p>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-violet-900 text-white text-base font-bold hover:bg-violet-800 hover:scale-105">Register</button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Register;