import { createContext, useEffect, useState } from "react";
//step1  : createContext methd ke help se ham context create karenge
const AppContext=createContext();  


//step2:  provider - ek function banaya hai jisko provider banaya jayega
export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const[page,setPage]=useState(1)
    const[totalPages,setTotalPages]=useState(null)

    //data filling pending to the all the states
 
    const baseUrl="https://codehelp-apis.vercel.app/api/get-blogs";
    async function  fetchBlogPosts(page=1){
        setLoading(true)    
        let url=`${baseUrl}?page=${page}`
        try{
            const result=await fetch(url);
            const data=await result.json();
           
            setPage(data.page);
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }catch(error){
            console.log('Error in fetching data')
            setPage(1);
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false);
    }

   function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    } 

    //step2 : AppContext.provider ke help se ham value me jitne bhi data hai context ke children ko  provide kar rahe hai aur hamara value me jitna bhi data hai wo direct jis bhi component ko chahoge mil jayega 
    return <AppContext.Provider  value={value}>
        {children}
    </AppContext.Provider>
} 
export {AppContext} 