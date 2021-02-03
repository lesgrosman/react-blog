import React, { useState, useEffect } from "react"
import Button from './UI/Button'
import Comments from "./Comments"
import Article from "./Article"

const Application = () => {

  const [article, setArticle] = useState(null)
  const [comments, setComments] = useState([])
  const [hiddenComments, setHiddenComments] = useState(true)
  const [buttonLabel, setButtonLabel] = useState('Show more comments')

  useEffect(() => {
    setTimeout(() => {
      setArticle(document.__article)
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setComments(document.__comments)
    }, 1500)
  }, [])

  const showMoreComments = () => {
    if (hiddenComments) {
      setComments(prev => [...prev, ...document.__moreComments])
      setButtonLabel('Hide comments') 
    } else {
      setComments(document.__comments)
      setButtonLabel('Show more comments')
    }   
    setHiddenComments(prev => !prev)
  }

  const CommentsView = (
    <>
      <Comments comments={comments}/>
      <Button clickButton={showMoreComments} label={buttonLabel}/>
    </>
  )

  return (
    <div className="container p-5">
      <h2>Posts:</h2>
      {article ? <Article article={article}/> : null}
      {comments.length > 0 ? CommentsView : null} 
    </div>
  )
}

export default Application