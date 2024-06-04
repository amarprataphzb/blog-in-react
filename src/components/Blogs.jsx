import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';
import { Card } from './Card';

export const Blogs = () => {

  //consuming data
  const {posts,loading}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] py-2'>
      {loading ? (<Spinner/>):
      (
        posts.length===0? (<div>No Post here</div>):
        (posts.map((post)=>(
          <div key={post.id}>
            <p className="font-bold text-xs">{post.title}</p>
            <p className='text-[10px]'>
              By <span className='italic'>{post.author}</span>on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-[10px]'>Posted On {post.date}</p>
            <p className='text-[12px] mt-[10px]' >{post.content}</p>

            {
              post.tags.map((tag,index)=>{
                return <span key={index} className='text-blue-500 underline font-bold text-[10px] m-[2px] '>{`#${tag}`}</span>
              })
            }
          </div>
        )))
      )}
    </div>
  )
}
