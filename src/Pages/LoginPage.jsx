import React from 'react'
import Input from '../Componant/Input'
import { useForm } from 'react-hook-form';
import Submit from '../Componant/Submit';
import { Link } from 'react-router-dom';
import { language, loginConst } from '../Constants/Constants';

export default function () {
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
          <div className=' pb-8 min-w-[400px] max-w-full bg-opacity-80 bg-white shadow-xl rounded-2xl'>
            
              <h2 className="py-4 px-8 rounded-t-2xl  w-full bg-black bg-opacity-20 text-3xl font-bold leading-9 tracking-tight text-cyan-950">
                {loginConst.login}
              </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap justify-around w-full mt-6">
              <div className='mb-3 mx-8'><Input register={register} label={language.email} name={language.email} type='text' placeholder={language.enter + " " + language.userId} required={true} /></div>
              <div className='mb-3 mx-8'><Input register={register} type='password' label={language.password} name={language.password} placeholder={language.enter + " " + language.password} required={true} /></div>
              <div className="text-sm flex justify-end mb-3 mx-8">
              <Link to={'/forgot-password'} className=" font-semibold text-cyan-950 hover:text-cyan-900">{loginConst.forgotPassword}</Link>
              </div>
              <div className=' my-5 mx-8'>
              <Submit>{loginConst.btnLogin}</Submit>
              </div>  
            </form>

          </div>
        </div>
      )
}
