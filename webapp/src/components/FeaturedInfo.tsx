import './featuredinfo.css'
import { ArrowDownward } from '@mui/icons-material'
import { ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Attention Index</span>
            <div className='featuredIndexContainer'>
                <span className='featuredIndex'>7.6</span>
                <span className='featuredIndexRate'>-0.4 <ArrowDownward className='featuredIconNeg'/>
                </span>
                
                
                </div>
                <span className='featuredSub'>Compared to last class</span>
            </div>
            <div className='featuredItem'>
            <span className='featuredTitle'>Engagment Index</span>
            <div className='featuredIndexContainer'>
                <span className='featuredIndex'>8.5</span>
                <span className='featuredIndexRate'>+1.4 <ArrowUpward className='featuredIconPos'/>
                </span>
                
                
                </div>
                <span className='featuredSub'>Compared to last class</span>
            </div>

            
        
        </div>
  )
}

export default FeaturedInfo