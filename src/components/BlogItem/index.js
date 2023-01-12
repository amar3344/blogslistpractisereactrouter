import {Link} from 'react'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props

  const {id} = blogDetails

  return (
    <li className="each-blog-list">
      <Link to={`/blogs/${id}`}>
        <img
          src={blogDetails.image_url}
          alt="react"
          className="blog-image-list"
        />

        <div>
          <h5>{blogDetails.topic}</h5>
          <h6>{blogDetails.title}</h6>
          <div className="avatar-container">
            <img
              src={blogDetails.avatar_url}
              alt="avatar"
              className="avatar-image"
            />
            <p>{blogDetails.author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
