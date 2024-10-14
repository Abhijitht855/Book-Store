import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'

function ShowBooks() {
    const [book,setBook]=useState([])
    const [loading,setLoading]=useState(false)
    const {id}=useParams()

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response)=>{
            setBook(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    }, [])
  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-8'>Show Book</h1>
        {loading ? (
            <Spinner/>
        ):(
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 shadow-xl'>
                <div className='my-4 text-xl'>
                    <span className=' mr-4 text-gray-500'>ID:</span>
                    <span>{book._id}</span>
                </div>

                <div className='my-4 text-xl'>
                    <span className=' mr-4 text-gray-500'>Title:</span>
                    <span>{book.title}</span>
                </div>

                <div className='my-4 text-xl'>
                    <span className=' mr-4 text-gray-500'>Author:</span>
                    <span>{book.author}</span>
                </div>

                <div className='my-4 text-xl'>
                    <span className=' mr-4 text-gray-500'>Publissh Year:</span>
                    <span>{book.publishYear}</span>
                </div>

                <div className='my-4 text-xl'>
                    <span className=' mr-4 text-gray-500'>Create Time:</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>

                <div className='my-4 text-xl'>
                    <span className=' mr-4 text-gray-500'>Last update Time:</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default ShowBooks