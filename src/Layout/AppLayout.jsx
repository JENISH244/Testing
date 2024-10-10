import React, { Suspense } from 'react'
import Header from '../Componant/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Componant/Footer'

export default function AppLayout() {
  return (
    <div>
        <Header />
        <div className=''>
            <Suspense fallback={<div> Page is loading..</div>}>
                <Outlet />
            </Suspense>
        </div>
        <Footer />
    </div>
  )
}
