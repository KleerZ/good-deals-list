import styles from "@/app/login/page.module.scss";

export default function Registration() {
    return (
        <main className={'center-div'}>
            <div className={'modal'}>
                <h2>Registration</h2>

                <input className={'input-text-margin'}
                       type="text"
                       placeholder={'Name'}/>
                <input className={'input-text-margin'}
                       type="text"
                       placeholder={'password'}/>

                <button className={styles.button}>Register</button>
            </div>
        </main>
    )
}