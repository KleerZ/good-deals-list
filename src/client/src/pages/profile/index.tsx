import styles from "@/styles/Profile.module.scss";
import {inter} from "@/pages";

export default function Profile() {
  return (
    <main className={`center-div ${inter.className}`}>
      <div className={'modal'}>
        <h2>Profile</h2>

        <span className={styles.userId}>User id: </span>

        <div className={styles.user}>
          <span>Change your data</span>

          <input className={'input-text-margin'}
                 type="text"
                 placeholder={'Name'}/>
          <input className={'input-text-margin'}
                 type="text"
                 placeholder={'password'}/>

          <button className={styles.button}>Save</button>
        </div>

        <button className={'red-button'}>Delete profile</button>
      </div>
    </main>
  )
}
