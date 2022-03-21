import './home.css'
import FeaturedInfo from './FeaturedInfo'
import Chart from './Chart'

const Homepage = () => {
  return (
    <div className='home'>
      {/* <FeaturedInfo/> */}
      <div className='charting'>
        <Chart/>
      </div>
      </div>
  )
}

export default Homepage