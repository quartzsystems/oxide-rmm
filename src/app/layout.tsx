/*
 * Copyright (C), 2024 Quartz Systems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Sidebar from '../components/sidebar'
import Header from '../components/header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex flex-row'>
        <Sidebar></Sidebar>
        <Header></Header>
        {children}
        <script src="https://kit.fontawesome.com/183cb9658c.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
