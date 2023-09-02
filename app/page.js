"use client"
import React, { useState } from "react";

const page = () => {
  const [title, setTittle] = useState(" ")
  const [desc, setDesc] = useState(" ")
  const [mainTask , setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title)
    console.log(desc)
    setMainTask([...mainTask , {title , desc}])
    setTittle("")
    setDesc("")

    console.log(mainTask)
  }

  let renderTask = <h1>No Task Available</h1>
  if(mainTask.length > 0){
    renderTask = mainTask.map((t , i ) => {
      return(
       <li key={i} className="justify-between items-center flex mb-5">
        <div className=" justify-between items-center flex w-2/3">
           <h5 className="text-2xl p-2 font-mono font-bold">{i}. {t.title}</h5>
           <h6 className="text-lg p-2 font-thin">{t.desc}</h6>
        </div>

        <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={() => {
          deleteHandler(i)
        }}>Delete</button>
      </li>
      )
     })
  }

  const deleteHandler = (i) => {
    const copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }


  return (<>
    <h1 className="bg-black text-white p-5 text-center text-4xl font-bold font-serif ">Vishal's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input className=" border-zinc-800 border-4 text-2xl m-8 px-4 py-2 " type="text" value={title} onChange={(e) => { setTittle(e.target.value) }} placeholder="Enter Your Task" ></input>
      <input className=" border-zinc-800 border-4 text-2xl m-8 px-4 py-2 " type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} placeholder="Enter Description of Your Task"></input>
      <button className="bg-black text-white px-4 font-bold m-8 py-3 text-2xl rounded">Add Task</button>

    </form>
    <hr />
    <ul>
      <div className=" bg-slate-300 p-5">
        {renderTask}
      </div>
    </ul>
  </>
  )
}


export default page;