import React from 'react'
import {Link} from 'react-router-dom'
export default function Tab({ title }) {
  return (
    <div className="tabBoxStyle">
       <Link to={title}>{title}</Link>
    </div>
  )
}
