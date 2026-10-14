import  React, { useState } from 'react'


function App() {
  const [name,setname]=useState('')
  const[email,setemai]=useState('')
  const[rating,setrating]=useState('')
  const[comments,setcomments]=useState('')

  return (
    <div>
      <h2>FEEDBACK FORM</h2>
      <input>
      placeholder="ENTER YOUR NAME"
      onchange={(e)=>setname(e.target.value)}
      </input>
      <input>
      placeholder="ENTER YOUR EMAIL"
      onchange={(e)=>setemail(e.target.value)}
      </input>
      <input>
      placeholder="ENTER YOUR RATING"
      onchange={(e)=>setemail(e.target.value)}
      </input>
      <input>
      placeholder="ENTER YOUR COMMENTS(ONLY 20 LETTERS)"
      onchange={(e)=>setemail(e.target.value)}
      </input>
    </div>
    
  )
}

export default App
