import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import {Provider, useSelector} from "react-redux";
import {store} from "@/store";
import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useRouter} from "next/router";
import {DealComponent} from "@/components/deal.component";

export const inter = Inter({subsets: ['latin']})

export default function Home() {
  const currentUser = useSelector((state: any) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.user) {
      const redirect = async () => {
        await router.push('/login')
      }
      redirect().catch()
    }
  }, [currentUser, router]);
  
    return (
      <>
        <Head>
          <title>Good Deals List</title>
          <meta name="description" content="Generated by create next app"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={`center-div ${inter.className}`}>
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
                  <DealComponent/>
                </div>
              </div>
            </div>

          </div>
        </main>
      </>
    )
}

