import styles from "./page.module.scss";

export default function Login() {
    return (
        <main className={'center-div'}>
            <div className={'modal'}>
                <h2>Login</h2>

                <input className={'input-text-margin'}
                       type="text"
                       placeholder={'Name'}/>
                <input className={'input-text-margin'}
                       type="text"
                       placeholder={'password'}/>

                <button className={styles.button}>Login</button>
            </div>
        </main>
    )
}
