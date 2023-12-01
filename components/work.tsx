import React from 'react'
import style from './work.module.css'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
const Work = () => {
  return (
    <div className={style.container}>
        <div className={style.work}>
            <h3 className={style.heading}>Project Plan</h3>
            <p className={style.subheading}>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<Link href="/dashboard" className={buttonVariants({ variant: "link" })}>Read More <ArrowRight size={18} className='ml-2' /></Link>

        </div>
        <div className={style.work}>
            <h3 className={style.heading}>Project Plan</h3>
            <p className={style.subheading}>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<Link href="/dashboard" className={buttonVariants({ variant: "link" })}>Read More <ArrowRight size={18} className='ml-2' /></Link>

        </div>
        <div className={style.work}>
            <h3 className={style.heading}>Project Plan</h3>
            <p className={style.subheading}>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<Link href="/dashboard" className={buttonVariants({ variant: "link" })}>Read More <ArrowRight size={18} className='ml-2' /></Link>

        </div>
    </div>
  )
}

export default Work