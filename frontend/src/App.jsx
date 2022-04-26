import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Chat from './pages/Chat'
import axios from 'axios'
import AllRoomChat from './pages/AllRoomChat'

function App() {
  const [room,setRoom] = useState([])


  useEffect(() => {

    const getAllRoom = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/room")
        setRoom(data)
        console.log(data);
      } catch (error) {
        console.log("GetAllRoom", error);
      }
    }
    getAllRoom()

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/" element={ <HomePage /> }></Route >
        <Route path="/chat/:id" element={ <Chat  /> }></Route >
        <Route path="/room" element={<AllRoomChat room={room} />}></Route >
      </Routes>
    </div>
  )
}

export default App
