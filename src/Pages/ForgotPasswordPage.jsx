import React from 'react';
import Input from '../Componant/Input';
import Submit from '../Componant/Submit';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { forgotConst, language, loginConst } from '../Constants/Constants';

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (

    <div className='bg-cyan-950   items-center flex-col  flex h-screen justify-center'>
      <div className=' pb-8 min-w-[400px] max-w-[400px] bg-opacity-80 bg-white shadow-xl rounded-2xl'>

        <div className='py-4 px-8 rounded-t-2xl bg-black bg-opacity-20 text-cyan-950'>
          <h2 className="font-bold text-3xl  tracking-tight mb-2">
            {language.password + " " + forgotConst.reset}
          </h2>
          <p className='text-sm tracking-wide font-normal'>
            provide the email address associated with your account to recover yoyr passeord.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap justify-around w-full mt-6">
          <div className="mb-3 mx-8"><Input register={register} type='email' label="Email Id" name="email" placeholder={language.enter + " " + language.email} required={true} /></div>
          <div className=" my-3 mx-8 ">
            <Submit>{forgotConst.reset + " " + language.password}</Submit>
          </div>
        </form>
        <div className="text-sm flex justify-end my-3 mx-8 font-medium pr-1">
          <span className='text-cyan-800'>Back to</span><Link to={'/'} className=" pl-2 font-semibold text-cyan-950 hover:text-cyan-900">
            {loginConst.login}
          </Link>
        </div>
      </div>
    </div>
  )
}
