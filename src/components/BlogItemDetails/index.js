import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const {match} = this.props
    const {id} = match.params

    const url = `https://apis.ccbp.in/blogs/${id}`

    const res = await fetch(url)
    const data = await res.json()

    this.setState({blogData: data, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    return (
      <div className="react-app">
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          <div className="blog-data-cont">
            <h1>{blogData.title}</h1>
            <div className="blog-container">
              <div>
                <img
                  src={blogData.avatar_url}
                  alt=""
                  className="avatar-image"
                />
                <p>{blogData.author}</p>
              </div>
              <img
                src={blogData.image_url}
                alt="title"
                className="blog-image"
              />
              <p>{blogData.content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
