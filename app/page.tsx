import Banner from '@/components/banner'
import Contact from '@/components/contact'
import Work from '@/components/work'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{marginBottom: 150}}>
      <Banner />
      <div style={{paddingLeft: 50, paddingRight: 50}}>
      <Work />
      <Contact />
      </div>
      
    </div>
  )
}
