
import './Home.css'
import { Button } from 'react-bootstrap';
import FBIcon from '../Images/FBIcon.png';
import AFB_Large from '../Images/AFB_Large.png';
import KingsCrown from '../Images/KingsCrown.jpg'

function Home() {
  return (
    <div>
        <div className='MainTitle'><h2>Archer First Baptist Church Florida</h2></div>
    <div className='AddressContainer'>
    <div className='Address'>16870 SW 137th Avenue Archer, FL 32618</div>
    <div className='Address'>352-495-2225</div>
    <div className='Address'>PO Box 248</div>
    <Button href='https://www.google.com/maps/place/First+Baptist+Church+of+Archer/@29.528267,-82.5227964,19z/data=!4m13!1m7!3m6!1s0x88e894feef4a5bfd:0x650f60248a663d78!2s16870+SW+137th+Ave,+Archer,+FL+32618!3b1!8m2!3d29.5285778!4d-82.5220404!3m4!1s0x88e894feef4a43c3:0x4ed80355dbe88678!8m2!3d29.5283091!4d-82.5220438'>Get Directions</Button>
    </div>
    <a href='https://www.facebook.com/First-Baptist-Church-of-Archer-Fl-1414951675270165'>
    <img className="FBIcon" src={FBIcon} alt='Facebook'></img>
    </a>
  <hr></hr>
  <div className='IntroOne'><h3>Welcome</h3></div>
  <div className='IntroTwo'><h3>To our Loving Church...</h3></div>
    <img className="AFB" src={AFB_Large} alt='Archer First Baptist'></img>
    <hr></hr>
      <div className='Container'>
        <div className="Title">Sundays:</div>
          <ul>
            <li><strong>Morning Fellowship:</strong>  8:45am</li>
            <li><strong>Small Group Bible:</strong>  Study 9:15am</li>
            <li><strong>Morning Worship:</strong>  10:30am</li>
            <li><strong>Evening Bible Study:</strong> 5pm</li>
          </ul>
<hr></hr>
        <div className="Title">Wednesdays:</div>
          <ul>
            <li><strong>Dinner:</strong> 6pm</li>
            <li><strong>Kids Club:</strong> 6:30pm</li>
            <li><strong>Prayer Meeting Bible Study:</strong> 7:00pm</li>
          </ul>
          <hr></hr>
          <div className='TextContainer'>
          <h3 className='Alert'>Join us live Wednesday nights at 7pm for our prayer service and Sundays at 10:30am for Morning Worship!</h3>
          <hr></hr>
          <div className='MissionTitle'>Our Mission:</div>
          <div className='TextContainer'>We are a diverse group of friendly, caring people united in our faith in Jesus Christ, Son of God, as our Savior. We credit God for our many blessings and we place our trust in His strength and power as we face life's trials and temptations. We believe the Bible is God's written word, and with the help of God's Holy Spirit, strive to grow in our knowledge and understanding of God's will for our lives, our willingness to trust Him, and our loving relationship with Him. We welcome everyone to our church, from those of you who are just beginning to seek, to those of you who seek to learn more, to those of you who have already made the decision to become a Christian and wish to continue in your spiritual growth and service. We thank you for visiting our website. May God bless you..
          </div>
          </div>
        
        </div>
      <hr></hr>
      <div><h6>MJG Web Design Services 2020</h6></div>
    </div>
  )
}

export default Home
