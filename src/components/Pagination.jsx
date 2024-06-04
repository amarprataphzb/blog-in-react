import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


export const Pagination = () => {

  const {page,handlePageChange,totalPages}=useContext(AppContext);
  
  return (
    <div className='w-full flex justify-center item-center border'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2' >
      { page>1 &&
       ( <button className='rounded-md border px-4'
           onClick={()=>handlePageChange(page-1)}>
            Previous
         </button>)
      }
      {
        page<totalPages &&
        (<button className='rounded-md border px-4'
          onClick={()=>handlePageChange(page+1)
        }>
           Next
        </button>)
      }
      </div>
            
      </div>
      <p>{page} of {totalPages}</p>
      
    </div>

  )
}
