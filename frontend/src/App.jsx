import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Chat from './pages/Chat'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState([])
  const [reRenderChat, setReRenderChat] = useState([])

  const onHandleAddMess = async (dataMessage) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const message = {
        content: dataMessage.content,
        status: true,
        id_user: user.user._id,
        id_room: "626679ef01905ca5b23d8229"
      }
      console.log(message);
      try {
        const { data } = await axios.post("http://localhost:8000/api/message", message)
        setReRenderChat(data)
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("Ban chua dang nhap tai khoan")
    }

  }

  useEffect(() => {
    const getAllMessage = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/message")
        setMessage(data)
        console.log(data);
      } catch (error) {
        console.log("GetAllMessage", error);
      }
    }
    getAllMessage()
  }, [reRenderChat])
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/" element={ <HomePage /> }></Route >
        <Route path="/chat" element={ <Chat message={ message } addMessage={ onHandleAddMess } /> }></Route >
      </Routes>
    </div>
  )
}

export default App
