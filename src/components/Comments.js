import React from "react"
import { getDate } from '../date/dateFramework'
import { sortComments } from '../sorting/sortFramework'

const Comments = ({ comments }) => {

  return (
    <div>
      <h2>Comments:</h2>
      {
        sortComments(comments).map(({id, author, text, date}) => {
          return (
            <div className="row" key={id}>
              <div className="col-6">
                <div className="shadow-sm card mb-3">
                  <div className="card-body">
                    <h4 className="card-title">{author}</h4>
                    <p className="card-subtitle mb-2 text-primary">{getDate(date)}</p>
                    <hr/>
                    <p className="card-text">{text}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Comments

