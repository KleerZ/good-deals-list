import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import "@/app/globals.scss"
import Header from "@/app/header/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Good Deals List'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-indents gradient-bg body`}>
      <Header></Header>
      {children}
      </body>
    </html>
  )
}
