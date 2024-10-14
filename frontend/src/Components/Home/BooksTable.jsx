import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

function BooksTable({books}) {
  return (
    <div>
      <table className='w-full border-separate border-spacing-2'>
            <thead className='bg-slate-200'>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                    <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book,index)=>
                        <tr key={book._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index+1}
                            </td>

                            <td className='border border-slate-700 rounded-md text-center'>
                                {book.title}
                            </td>

                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {book.author}
                            </td>

                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {book.publishYear}
                            </td>

                            <td>
                                <div className='flex justify-center items-center gap-x-4 border border-slate-700 rounded-md text-center h-8'>
                                    <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800  hover:text-black'/>
                                    </Link>

                                    <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600  hover:text-black'/>
                                    </Link>

                                    <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600  hover:text-black'/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default BooksTable
