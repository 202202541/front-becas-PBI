import React from 'react'

import {buttonVariants} from '@/components/ui/button'

function HomePage() {
  return (
    <div>
      <h1>
        HomePage
      </h1>
      <button className={buttonVariants()}>
        click
      </button>
    </div>
  )
}

export default HomePage