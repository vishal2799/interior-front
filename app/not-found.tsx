import React from 'react'
import style from '../components/notfound.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.innerContent}>
        <h1 className={style.heading}>404</h1>
        <p className={style.subheading}>We are sorry, but the page you requested was not found</p>
<Link href="/dashboard" className={cn(buttonVariants({ variant: "default", size:'lg' }), style.button)}>Back To Home <ArrowRight size={22} className='ml-2' color='#cda274' /></Link>
</div>
</div>
      <Image src="/images/banner.png" alt="me" width={200} height={50} className={style.img} />
    </div>
  )
}

export default NotFoundPage