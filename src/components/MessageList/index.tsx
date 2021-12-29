import stylesSheet from "./styles.module.scss"

import logoImg from '../../../assets/logo.svg'
import { useEffect } from "react"
import { api } from "../../services/api"
import { useState } from "react"


type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avat_url: string;
    }
}

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(res => {
            setMessages(res.data)
        })
    }, [])

    return (
        <div className={stylesSheet.messageListWrapper}>
            <img src={logoImg} alt="DOWhile 2021" />

            <ul className={stylesSheet.messageList}>
                {messages.map(message => {
                    return (
                        <li key={message.id} className={stylesSheet.message}>
                            <p className={stylesSheet.messageContent}>
                                {message.text}
                            </p>

                            <div className={stylesSheet.messageUser}>
                                <div className={stylesSheet.userImage}>
                                    <img src={message.user.avat_url} alt={message.user.name} />
                                </div>                        
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}                
            </ul>
        </div>
    )
}