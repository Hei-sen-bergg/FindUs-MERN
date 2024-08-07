import React, { useContext } from 'react'
import './Home.scss'
import { AuthContext } from '../../context/AuthContext'
import SearchBar from '../../components/SearchBar/SearchBar'



const Home = () => {
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser);

  return (
 <div>
    <div className='homePage'>
      <div className="imgContainer"><img src="background.jpg" alt="" /></div>
      <div className="textContainer"><h1 className='title'>And finally you found us...</h1>
      <p>
      Welcome to FindUs, the premier platform for travelers seeking budget-friendly accommodations. 
      Whether you're a solo adventurer or traveling with a group, FindUs connects you with affordable
      lodging options that suit your needs.
       Our community-driven approach allows users to both find and offer places to stay, fostering connections 
       between travelers and hosts. With easy search filters, secure communication, and a commitment to making 
       travel more accessible, FindUs is your go-to resource for finding comfortable and economical accommodations.
       Join our community today and start your journey with FindUs.
      </p>
        <SearchBar />
      <div className="boxes">
        <div className="box">
          <h1>5+</h1>
          <h2>Years of experience</h2>
        </div>
      
        <div className="box">
          <h1>20+</h1>
          <h2>Award gained</h2>
        </div>

        <div className="box">
          <h1>500K</h1>
          <h2>FindUs members</h2>
        </div>
      </div>
      


      </div>
    </div>
    </div>
  )
}

export default Home
