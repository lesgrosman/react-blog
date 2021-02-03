import React from "react"
import { getDate } from '../date/dateFramework'

const Article = ({ article }) => {
  const {author, date, text} = article
  
  return (
    <div>  
      <div className="shadow card mb-5">
        <div className="card-body">
          <h4 className="card-title">{author}</h4>
          <p className="card-subtitle mb-2 text-primary">{getDate(date)}</p>
          <hr/>
          <p className="card-text">{text}</p>
        </div>
      </div>      
    </div>
  )
}

export default Article
