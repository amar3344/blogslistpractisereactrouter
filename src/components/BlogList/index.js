import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

const url = 'https://apis.ccbp.in/blogs'

class BlogList extends Component {
  state = {blogsList: [], isLoading: false}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch(url)
    const data = await response.json()

    this.setState({blogsList: data, isLoading: true})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div>
        <ul>
          {isLoading ? (
            blogsList.map(item => <BlogItem key={item.id} blogDetails={item} />)
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
