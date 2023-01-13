import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

const url = 'https://apis.ccbp.in/blogs'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch(url)
    const data = await response.json()

    this.setState({blogsList: data, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div>
        <ul className="blog-list">
          {isLoading ? (
            <Loader
              data-testid="loader"
              type="TailSpin"
              color="#00bfff"
              height={50}
              width={50}
            />
          ) : (
            blogsList.map(item => <BlogItem key={item.id} blogDetails={item} />)
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
