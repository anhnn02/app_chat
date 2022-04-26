import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllRoomChat = ({room}) => {

    useEffect(()=>{
        
    },[])

  return (
    <div>
        <Link to="/room/create">Create A New Room</Link>
        <div className="">
              <h2>All Room</h2>
            <div className="">
                {room && room.map((item)=>(
                    <div className="" key={item._id}>
                        <span>Name Room: {item.name} || Create: {item.user_id.account}</span>
                        <Link to={`/chat/${item._id}`}>Join</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllRoomChat