'use client'

import React from 'react'
import Boton from './Boton'
import Image from 'next/image'

const cargador=({src,width})=>{
    return `${src}?w=${width}`
}

export default function Ficha({valor}) {
  return (
    <>
    <div className="persona">
        <h3>{valor.name.first}</h3>
        <Image
            loader={cargador}
            src={valor.picture.large}
            width={125}
            height={125}
            alt=""
        />
        <div>
            <Boton valor={valor}/>
        </div>
    </div>
    </>
  )
}
