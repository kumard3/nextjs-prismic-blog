import React from 'react'
import { loaderStyles } from 'styles'


 const Loader = () => (
  <div className="loader">
    <div className="ldsRipple"/>
    <style jsx global>
      {loaderStyles}
    </style>
  </div>
)

export default Loader
