"use client"

import { sql } from "@vercel/postgres";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const getIp = async () => {
    try{ 
      const req = await fetch('https://api.ipify.org?format=json')
      const res = await req.json()
      const ip = await res.ip

      return ip
    } catch(e){
      return ''
    }
  }

  useEffect(() => {

    const postIP = async () => {

      const ip = await getIp()

      console.log(ip)

      fetch('https://libertador.pkiservices.co/validacion-back/obtener-firmador', {
        method: 'POST',
        body: JSON.stringify(ip),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(e => {
        console.error(e)
      })
    }

    postIP()

  }, [])

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hola
    </main>
  );
}
