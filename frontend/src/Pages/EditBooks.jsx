import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import { useSnackbar } from 'notistack'


function EditBooks() {

    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [publishYear,setPublishYear]=useState('')
    const [loading,setLoading]=useState(false)
    const Navigate=useNavigate()
    const {id}=useParams()
    const {enqueueSnackbar}=useSnackbar()

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response)=>{
            setAuthor(response.data.author)
            setPublishYear(response.data.publishYear)
            setTitle(response.data.title)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            alert('An error happened please check console')
            console.log(error)
        })
    }, [])

    const handleEditBook=()=>{
        const data={
            title,
            author,
            publishYear
        }
        setLoading(true)
        axios.put(`http://localhost:5555/books/${id}`,data)
        .then(()=>{
            setLoading(false)
            enqueueSnackbar('Book Edited Successfully',{variant:'success'})
            Navigate('/')
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
      <h1 className='text-3xl my-8'>EditBooks</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-blue-500 rounded-xl w-[600px] p-4 mx-auto  shadow-xl'>
        <div className='my-4'>
            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Title</label>
            <input 
            type="text" 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className='border-2 border-gray-500 w-full px-4 py-2 rounded-md'
            />
        </div>
        <div className='my-4'>
            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Author</label>
            <input 
            type="text" 
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            className='border-2 border-gray-500 w-full px-4 py-2 rounded-md'
            />
        </div>
        <div className='my-4'>
            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input 
            type="text" 
            value={publishYear}
            onChange={(e)=> setPublishYear(e.target.value)}
            className='border-2 border-gray-500 w-full px-4 py-2 rounded-md'
            />
        </div>
        <button className='p-2 bg-blue-500 w-full my-8 rounded-md text-white hover:bg-blue-600 text-xl shadow-xl' onClick={handleEditBook}>
            Save
        </button>
      </div>
    </div>
  )
}

export default EditBooks

