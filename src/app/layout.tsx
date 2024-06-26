import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import "@uploadthing/react/styles.css";
import { ThemeProvider } from "@/components/theme-provider"
import MasterLayout from '@/components/MasterLayout/MasterLayout'
import AuthProvider from "@/components/authProvider/AuthProvider";
import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';
import React from "react";
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Naeem || Full-Stack Developer',
  description: 'Najmul Islam Naeem portfolio',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* shadcn Tehem is configured here */}
      <ThemeProvider
            attribute="class"
            defaultTheme="day"
            enableSystem
            disableTransitionOnChange>
          <AuthProvider>
            <MasterLayout>

              {children}

            </MasterLayout>
      </AuthProvider>
          </ThemeProvider>

        <Toaster/>
        <NextTopLoader   color="#2eef92" />
        </body>
    </html>
  )
}
