import React from 'react'
import './SinglePage.scss'
import Slider from '../../components/Slider/Slider'
import {singlePostData, userData} from '../../lib/dummy'
import Map from '../../components/Map/Map'

const SinglePage = () => {
  return (
    <div className='SinglePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
             <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src="pin.png" alt="" />
                <span>{singlePostData.address}</span>
              </div>
              <div className="price">$ {singlePostData.price}</div>
              </div> 
             <div className="user">
              <img src={userData.img} alt="" />
              <span>{userData.name}</span>
              </div> 
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets are allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Parking</span>
                <p>Parking for bikes only</p>
              </div>
            </div>
          </div>
          <p className="title">Room sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 bedrooms</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>1km aWay</p>
              </div>
            </div>
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Airport</span>
                <p>20km away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Train</span>
                <p>10km away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save place
            </button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default SinglePage
