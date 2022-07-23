import React from "react"
import Navbar from "./Components/Navbar"
import Journal from "./Components/Journal"
import data from "./data"

export default function App(){
  const journal_data = data.map((item) =>{
    return (
      <Journal 
      key={item.id}
      item={item} />
    )
  })

  return (
   <div>
      <Navbar />
      {journal_data}
   </div>
  )
}

