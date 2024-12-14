"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import HeadingLogo from '@/components/HeadingLogo'
import LoadingScreen from '@/components/LoadingScreen'

const AppLoading = () => {
  const [username, setUsername] = useState("")
  const router = useRouter()

  useEffect(() => {
    const loggedUser = localStorage.getItem("username")
    if (!loggedUser) {
      router.push("/")
      return
    }

    setUsername(loggedUser)

    const timer = setTimeout(() => {
      router.push("/channels/@me")
    }, 5000) // Fake loading

    return () => clearTimeout(timer)
  }, [router])

  return username && (
    <div style={{
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <HeadingLogo />
      <LoadingScreen title={`Welcome, ${username}!`} />
    </div>
  )
}

export default AppLoading
