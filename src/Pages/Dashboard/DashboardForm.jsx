import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../Componant/Input';
import Submit from '../../Componant/Submit';
import { loginConst, navbarTitle } from '../../Constants/Constants';

export default function DashboardForm({closeHandler}) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
      }

  return (
    <>
    <div >
       <header className="bg-white rounded-t-2xl ">
        <div className="flex justify-between mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 py-5 items-center rounded-t-2xl bg-black bg-opacity-40  tracking-tight text-cyan-950 ">
          <h1 className="text-3xl font-bold ">{navbarTitle.dashboard}</h1>
          <button className="text-gray-900 text-3xl " onClick={() => {closeHandler(false)}}><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
        
      </header> 
      <div className='bg-gray-50 items-center flex-col flex justify-center rounded-b-2xl'>
      <div className='px-4 max-w-[500px] bg-black bg-opacity-10 py-4 shadow-xl rounded-b-2xl'>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-around w-full">
        <div className="grid grid-cols-2 gap-3 mb-1">
          <div className="mb-2"><Input register={register} type='text' label="Site name" name="Site_name" placeholder='Enter Site name' required={true} /></div>
          <div className="mb-2"><Input register={register} type='text' label="Block name" name="Block_name" placeholder='Enter block name' required={true} /></div>
          <div className="mb-2"><Input register={register} type='text' label="House number" name="House_number" placeholder='Enter house number' required={true} /></div>
          <div className="mb-2"><Input register={register} type='number' label="Rate" name="Rate" placeholder='Enter rate' required={true} /></div>
          <div className="mb-2"><Input register={register} type='number' label="Total cost" name="Total_cost" placeholder='Enter total cost' required={true} /></div>
          <div className="mb-2"><Input register={register} type='number' label="Final cost" name="Final_cost" placeholder='Enter final cost' required={true} /></div>
          <div className="mb-2"><Input register={register} type='number' label="Advance amount" name="Advance_amount" placeholder='Enter advance amount' required={true} /></div>
          <div className="mb-2"><Input register={register} type='number' label="Next installment" name="Next_installment" placeholder='Enter next installment' required={true} /></div>
          </div>
          <div className="w-1/2 my-2">
          <Submit>{loginConst.submit}</Submit>
          </div>
        </form>
       
      </div>
    </div>
      </div>
    </>
  )
}
