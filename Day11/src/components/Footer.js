import React from 'react'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Footer = () => {
    const {user,setuser} = useContext(UserContext);
  return (
    <>
    <h4 className='p-10 m-10 text-white bg-slate-700'>This site is developed by {user.name} - {user.email}</h4>
    <input className='border border-solid border-black' value={user.name} onChange={
            e=> setuser({
              ...user,
              name:e.target.value,
            })
    } />
    <input className='border border-solid border-black' value={user.email} onChange={
            e=> setuser({
              ...user,
              email:e.target.value,
            })
    } />
    </>
  )
}

export default Footer