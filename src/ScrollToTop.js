import React from 'react'

export default function ScrollToTop() {
 
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <div className="position-absolute bottom-0 end-0">
   <button type="button" className="btn btn-primary position-fixed bottom-0 end-0 m-3" onClick={scrollUp}>&uarr;</button>
   </div>
  )
}
