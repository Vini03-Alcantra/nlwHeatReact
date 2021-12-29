import { useEffect } from "react"
import { VscGithubInverted } from "react-icons/vsc"
import styles from './style.module.scss'

export function LoginBox() {
    const signinUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=f78b173c3922b4390349`

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=')

        if(hasGithubCode){
            const [urlWithoutCode, githubCode] = url.split('?code=')

            console.log({urlWithoutCode, githubCode})
            window.history.pushState({}, '', urlWithoutCode)
        }
    }, [])

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signinUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com github
            </a>
        </div>
    )
}