import React from 'react'
import BlogDetail from '../Components/Blog/BlogDetail'
import BlogCommentForm from '../Components/Blog/BlogCommentForm'
import BlogComments from '../Components/Blog/BlogComments'
import BlogCard from '../Components/Blog/BlogCard'

function BlogPage() {
  return (
    <>
    <BlogDetail />
    <BlogCommentForm />
    <BlogComments />
    <BlogCard />
    </>
  )
}

export default BlogPage