import stylesSheet from "./styles.module.scss"

import logoImg from '../../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={stylesSheet.messageListWrapper}>
            <img src={logoImg} alt="DOWhile 2021" />

            <ul className={stylesSheet.messageList}>
                <li className={stylesSheet.message}>
                    <p className={stylesSheet.messageContent}>
                        Não vejo a hora de começar o DoWhile
                    </p>

                    <div className={stylesSheet.messageUser}>
                        <div className={stylesSheet.userImage}>
                            <img src="https://github.com/Vini03-Alcantra.png" alt="" />
                        </div>                        
                        <span>Vinícius de Alcântra</span>
                    </div>
                </li>

                <li className={stylesSheet.message}>
                    <p className={stylesSheet.messageContent}>
                        Não vejo a hora de começar o DoWhile
                    </p>

                    <div className={stylesSheet.messageUser}>
                        <div className={stylesSheet.userImage}>
                            <img src="https://github.com/Vini03-Alcantra.png" alt="" />
                        </div>                        
                        <span>Vinícius de Alcântra</span>
                    </div>
                </li>

                <li className={stylesSheet.message}>
                    <p className={stylesSheet.messageContent}>
                        Não vejo a hora de começar o DoWhile
                    </p>

                    <div className={stylesSheet.messageUser}>
                        <div className={stylesSheet.userImage}>
                            <img src="https://github.com/Vini03-Alcantra.png" alt="" />
                        </div>                        
                        <span>Vinícius de Alcântra</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}