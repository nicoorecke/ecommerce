'use client'

import { useEffect } from 'react'

interface ToastProps {
  mensaje: string
  onClose: () => void
  duracion?: number
}

export default function Toast({ mensaje, onClose, duracion = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duracion)

    return () => clearTimeout(timer)
  }, [duracion, onClose])

  return (
    <div className="toast">
      <div className="toast-content">
        <span className="toast-icon">✓</span>
        <span className="toast-mensaje">{mensaje}</span>
      </div>
    </div>
  )
}