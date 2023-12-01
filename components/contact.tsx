import React from 'react'
import style from './contact.module.css'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className={style.container}>
      <h3 className={style.heading}>Wanna join the interno?</h3>
      <p className={style.subheading}>
      Contact Us & Get a Free Consultation
      </p>
      <Link href="/dashboard" className={buttonVariants({ variant: "default" })}>Contact With us <ArrowRight size={22} className='ml-2' /></Link>
    </div>
  )
}

export default Contact