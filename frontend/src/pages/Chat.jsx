import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Chat = ({ message, addMessage }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (dataMessage) => {
        addMessage(dataMessage)
        reset({
            content: ""
        })
    }

    useEffect(() => {
    }, [])
    return (
        <div>
            <div className="border">
                <div className="">
                    { message && message.map((item) => (
                        <div className="" key={ item._id }>{ item.id_user.account }: { item.content }</div>
                    )) }
                </div>
            </div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <input type="text" { ...register("content", { required: true }) } />
                { errors.content && <span>Vui long nhap tin nhan</span> }
                <div><button>Gửi</button></div>
            </form>
        </div>
    )
}
export default Chat