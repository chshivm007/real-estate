import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth.jsx';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset Link Sent Successfully.")
    } catch (error) {
      toast.error("Something went Wrong.");      
    }
  }

  return (
    <section>
      <h1 className = "text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className = "flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto lg:ml-20">
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="key-image" 
          className='w-full rounded-2xl '/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input className = "mb-6 w-full px-4 py-2 text-xl text-grey-700 bg-white border-gray-300 rounded transition ease-in-out" type="email" id="email" value={email} onChange={onChange} placeholder='Email Address'/>
            <div class = "flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className='mb-6 '>Don't Have an Account?
                <Link to = "/sign-up" className = "text-red-600 hover:text-red-700 transition duration-200 ease-in-out active:text-red-800 ml-1"> Register</Link>
              </p>
              <p><Link to ="/sign-in" className = "text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out active:text-blue-900"> Sign-In Instead?</Link></p>
            </div>
            <button type="submit" class="w-full bg-blue-600 px-7 py-3 rounded text-white hover:bg-blue-700 transition duration-200 text-sm hover:shadow-lg shadow-md font-medium uppercase ease-in-out active:bg-blue-800">send reset link</button>
            <div class = "my-4 items-center flex before:border-t before:flex-1 before:border-grey-300 after:border-t after:flex-1 after:border-grey-300">
              <p className='text-center font-semibold mx-4 '>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
    
  )
}
