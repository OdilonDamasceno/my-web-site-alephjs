import React from 'react'

export default function Eletronics({ size = 600 }: { size?: number }) {
  return (
    <img src="/mobile_web.svg" height={size} width={size} title="Eletronics" className="eletronics" />
  )
}
