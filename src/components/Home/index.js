import UserInfo from '../UserInfo/index'
import BlogList from '../BlogList/index'
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
