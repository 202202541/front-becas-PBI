import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  previous: string
  nextName?: string
  nextType?: "submit" | "button"
  nextDisabled?: boolean
  previousDisabled?: boolean
}

const Navigation: React.FC<NavigationProps> = ({ previous, nextName = "Siguiente", nextDisabled = false, nextType="submit", previousDisabled = false }: NavigationProps) => {
  const router = useRouter()
  return (
    <div className="flex justify-between items-center gap-4 w-full max-w-md mx-auto">
      <Button
        onClick={() => router.push(previous)}
        disabled={previousDisabled}
        className="w-1/2"
      >
        Anterior
      </Button>
      <Button
        disabled={nextDisabled}
        type={nextType}
        className="w-1/2"
      >
        {nextName}
      </Button>
    </div>
  )
}

export default Navigation