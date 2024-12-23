import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]=useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Gangesh7')
      .then(response=> response.json())
      .then(data=>{
        console.log(data)
        setData(data)
      })
    }, [])
    
  return (
    <div className='bg-gray-500 text-center m-4 text-white p-4 text-3xl '>Github Followers:{data.followers}
     <img src={data.avatar_url} alt='git_Pic' width={180}/>
     </div>
  )
}

export default Github