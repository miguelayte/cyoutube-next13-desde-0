'use client'

import Image from 'next/image'
import imagen2 from "../public/images/imagen2.jpg"

const cargador=({src,width})=>{
    return `https://www.html6.es/img_html/${src}?w=${width}`
}


export default function page() {
  return (
    <>
        <div>Página principal</div>
        <div className="caja">
            <Image
                src="/images/imagen1.jpg"
                width={426}
                height={240} 
            />
        </div>
        <div className="caja">
            <Image src={imagen2}/>
        </div>
        <div className='caja'>
            <Image loader={cargador} src="micanalyoutube.png" width={150} height={150}/>
        </div>
    </>
  )
}
