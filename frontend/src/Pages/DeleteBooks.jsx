import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import { useSnackbar } from 'notistack'


function DeleteBooks() {

  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  const {enqueueSnackbar}=useSnackbar()


  const handleDeleteBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar('Book Deleted Successfully',{variant:'success'})

      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      enqueueSnackbar('Error',{variant:'error'})
      console.log(error)
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-8'>Delete Book</h1>
      {loading ? <Spinner/> : ''}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto  shadow-xl'>
        <h3 className='text-2xl'>Are You Sure Want to delete this book ?</h3>


        <button className='py-2 bg-red-500 text-white m-8 w-full hover:bg-red-600 rounded-md shadow-xl' onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBooks
