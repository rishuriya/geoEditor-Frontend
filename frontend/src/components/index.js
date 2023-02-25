import React from 'react'
import LeftComponent from './leftComponent'
import TableComponent from './tableComponent'

export default function GeoLocator() {
  return (
    <div className='flex flex-row'>
      <LeftComponent />
      <TableComponent />

    </div>
  )
}
