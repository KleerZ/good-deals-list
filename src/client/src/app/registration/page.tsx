import styles from "@/app/login/page.module.scss";
import {url} from "@/app/layout";

export default function Registration() {
    const register = async (formData: FormData) => {
        "use server";

        const name = formData.get("name");
        const password = formData.get("password");
        const tag: string = `@${name}`;
            
        await fetch(`${url}/user`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password,
                tag: tag
            })
        }).catch((e) => console.log(e));
    };

    return (
        <main className={'center-div'}>
            <form action={register}>
                <div className={'modal'}>
                    <h2>Registration</h2>
                    
                    <input className={'input-text-margin'}
                           type="text"
                           name={'name'}
                           placeholder={'Name'}/>
                    <input className={'input-text-margin'}
                           type="text"
                           name={'password'}
                           placeholder={'password'}/>

                    <button type={"submit"}
                            className={styles.button}>
                        Register
                    </button>
                </div>
            </form>
        </main>
    )
}