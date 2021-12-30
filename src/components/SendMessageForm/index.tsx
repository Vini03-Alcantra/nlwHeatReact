import { useContext } from "react"
import { VscGithubInverted } from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth"
import styles from "./styles.module.scss"

export function SendMessageForm(){
    const {user} = useContext(AuthContext)

    return (
        <div className={styles.sendMessageFromWrapper}>
            <button className={styles.signOutButton}>

            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avat_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size="16" />
                    {user?.login}
                </span>
            </header>

            <form className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Qual sua expectativa para o evento?"
                />

                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    )
}