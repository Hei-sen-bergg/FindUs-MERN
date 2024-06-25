import React from 'react'
import { listData } from '../../lib/dummy'
import Card from '../Card/Card'
import './List.scss'

const List = () => {
  return (
    <div className='List'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List
