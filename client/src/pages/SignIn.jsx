//stateful FUNCTIONAL COMPONENT

import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

//SIGN UP FUNC
export default function SignIn() {
  //save form data state
  const [formData, setFormData] = useState({});
  // //error message state
  // const [error, setError] = useState(false);
  // //loading UI state
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //TRACK INPUT FIELD VALUES
  const handleChange = (e) =>  {
    //updating the form data state with a new object.
    //e.target.value givees you the 'key' what is pressed. event(object) -> target(property) -> value(property)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  //form's event listener function (SUBMIT BUTTON)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      // setLoading(true);
      // setError(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // setLoading(false);
      if (data.success === false) {
        dispatch(signInFailure(data));
       // setError(true);
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/certs')
    } catch (error) {
      dispatch(signInFailure(error));
      // setLoading(false);
      // setError(true);
    }
  }


// FORM UI
  return ( 
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold
      my-7'>
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder='Email' 
          id='email' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder='Password' 
          id='password' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange={handleChange}
        />
        {/* BUTTONS */}
        <button disabled={loading}
          className="
            bg-slate-700 
            text-white 
            p-3 
            rounded-lg 
            uppercase 
            hover:opacity-95
            disabled:opacity-80
            ">
              {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to='/sign-up'>
        <span 
          className="text-blue-500">
            Sign up
        </span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}
