"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
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

  return username && <LoadingScreen title={`Welcome, ${username}!`} />
}

export default AppLoading