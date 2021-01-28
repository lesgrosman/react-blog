import React, { useState, useEffect } from "react"
import Button from './UI/Button'
import Comments from "./Comments"
import Article from "./Article"

const Application = () => {

  const [article, setArticle] = useState(null)
  const [comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(true)

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

  const onClickHandler = () => {
    if (showComments) {
      setComments(prev => [...prev, ...document.__moreComments])
    } else {
      const newComments = comments.filter(comment => comment.id <= (comments.length / 2))
      setComments(newComments)
    }   
    setShowComments(prev => !prev)
  }

  const CommentsView = (
    <>
      <Comments comments={comments}/>
      <Button clickButton={onClickHandler} showComments={showComments}/>
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