import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from '../Components/Home/BooksTable'
import BooksCard from '../Components/Home/BooksCard'


function Home() {
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(false)
    const [showType,setShowType]=useState('table')
    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:5555/books/')
        .then((response)=>{
            setBooks(response.data.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    }, [])
  return (
    <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
            <button className='bg-slate-300 hover:bg-slate-400 px-4 py-1 rounded-lg font-bold' onClick={()=> setShowType('table')}>Table</button>
            <button className='bg-slate-300 hover:bg-slate-400 px-4 py-1 rounded-lg font-bold' onClick={()=> setShowType('card')}>Card</button>

        </div>
      <div className='flex justify-between items-center px-2'>
        <h1 className='text-3xl my-8 '>Books List</h1>
        <Link to='/books/create'>
        <MdOutlineAddBox className='text-sky-700 text-4xl  hover:text-black'/>
        </Link>
      </div>
      {loading ? (
        <Spinner/>
      ): showType === 'table' ? (
        <BooksTable books={books}/>
      ): (
        <BooksCard books={books}/>
      )}
    </div>
  )
}

export default Home
