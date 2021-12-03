import React from 'react'

export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <img src="/logo.svg" height={size} width={size} title="Odi" className="logo" />
  )
}
