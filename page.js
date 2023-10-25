"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle] = useState("")
  const [desc,setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
   e.preventDefault();
   setMainTask([...mainTask, {title,desc}]);
   
   settitle(" ")
   setdesc(" ")
   console.log(mainTask)

  };
 
  
const deleteHandler=(i)=>{
  const copytask=[...mainTask]
  copytask.splice(i,1)
  setMainTask(copytask)

};

const up=(i)=>{
  if(i>0){
    const copytask=[...mainTask];
    const temp=copytask[i];
    copytask[i]=copytask[i-1];
    copytask[i-1]=temp;
    setMainTask(copytask);
    console.log(copytask)
  }
  
};


  let renderTask=<h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-8 w-3/4">
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-lg font-semibold">{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className="bg-red-400 text-white px-4 py-2 rounded font-extrabold">Delete</button>
      <button
       onClick={()=>{ up(i)}} disabled={i===0} className="bg-slate-600 text-black px-3 py-2 rounded">⬆</button>
      <button
       class="down" className="bg-slate-600 text-black px-3 py-2 rounded">⬇</button>
      </li>
  
      );
  
    });
  } 

  return (
    
     <>
     <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
      My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className="text-2xl border-zinc-800
         border-2  px-4 py-2 rounded ml-40 "
         placeholder="Enter Task here"
         value={title}
         onChange={(e)=>{
          settitle(e.target.value)
         }}
         />
         <input type="text" className="text-2xl border-zinc-500
         border-2 m-5 px-8 py-2  "
         placeholder="Enter Description here"
         value={desc}
         onChange={(e)=>{
          setdesc(e.target.value)
         }}
         />
         <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded me-8">Add Task</button>
         </form>
         <hr/>
         <div className="p-8 bg-slate-200">
          <ul>
            {renderTask}
          </ul>


         </div>
         </>
    
  )
}

export default page
