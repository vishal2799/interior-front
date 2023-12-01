import React from 'react'
import Image from 'next/image'
import style from './banner.module.css'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
const Banner = () => {
  return (
    <div className={style.banner}>
        <Image src="/images/banner.png" alt="me" width={200} height={50} className={style.img} />
        <div className={style.content}>
        <h1 className={style.heading}>Let Your Home Be Unique</h1>
        <p className={style.subheading}>There are many variations of the passages of
lorem Ipsum fromavailable, majority.</p>
<Link href="/dashboard" className={buttonVariants({ variant: "default" })}>Get Started <ArrowRight size={22} className='ml-2' /></Link>
</div>
    </div>
  )
}

export default Banner