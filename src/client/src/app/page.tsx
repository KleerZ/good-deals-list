import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={'center-div'}>
            <div className={'modal'}>
                <h2>Main</h2>

                <div className={styles.mainBlock}>
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <h4>Friends</h4>

                            <input className={'input-text'}
                                   placeholder={'User id'}
                                   type="text"/>
                            <button className={'blue-button'}>Add to friends</button>
                        </div>

                        <div className={styles.block}>
                            <h4>Your friends</h4>
                            
                        </div>
                    </div>
                    
                    <div className={styles.block}>
                        <div className={styles.block}>
                            <h4>Add deals</h4>

                            <input className={'input-text-margin'}
                                   placeholder={'Deal name'}
                                   type="text"/>
                            <button className={'button'}>Add deal</button>
                        </div>

                        <div className={styles.block}>
                            <h4>Your deals</h4>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    )
}
