import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props

  const {id} = blogDetails

  return (
    <li>
      <Link to={`/blogs/${id}`} className="each-blog-list">
        <img
          src={blogDetails.image_url}
          alt="react"
          className="blog-image-list"
        />
        <div>
          <h5 className="topic">{blogDetails.topic}</h5>
          <h6 className="title">{blogDetails.title}</h6>
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
