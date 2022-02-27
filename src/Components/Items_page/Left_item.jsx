import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { IoArrowForwardOutline } from 'react-icons/io5'

export const Left_item = () => {
  const email = "niteshkumarbaghel172@gmail.com";
  const {item} = useSelector((store) => store.item);
  const [read, setRead] = useState(false);  

  const handleRead = () => {
    setRead(!read);
  }
  return (
    <div className='item-left-container'>

      <div className="item-left-grid-container">
        <div className="item-left-grid-item">
          <img src={item.img1} alt="" />
        </div>
        <div className="item-left-grid-item">
          <img src={item.img2} alt="" />
        </div>
        <div className="item-left-grid-item">
          <img src={item.img3} alt="" />
        </div>
        <div className="item-left-grid-item">
          <img src={item.img4} alt="" />
        </div>
      </div>

      <div className="item-left-desc-container">
        <p className="item-left-desc">{item.desc}</p>
        <p className="item-left-below-desc">Delivery and assembly prices not included.</p>
        <p className="article-number">Article number</p>
        <span className="article-value">405.040.65</span>
      </div>

      <div className="item-left-info">
        <button className='item-left-info-btn'>Product Details</button>
        <span><IoArrowForwardOutline className='item-left-arrow'></IoArrowForwardOutline></span>
      </div>
      <div className="item-left-info">
        <button className='item-left-info-btn'>Measurements</button>
        <span><IoArrowForwardOutline className='item-left-arrow'></IoArrowForwardOutline></span>
      </div>

      <div className="item-left-story-container">
        <div className="item-left-story-img">
          <img src={item.img2} alt="" />
        </div>
        <div className="item-left-story-text">
          <p className="story-heading">Story</p>
          <p className='story-subheading'>Game on!</p>
          <p className='story-text'>
          At IKEA we have experience of life at home, but we’re beginners in the gaming world. That’s why we decided to team up with recognised experts from Republic of Gamers (ROG), to better understand what everyday life is like for devoted PC gamers. It resulted in desks, chairs, storage and accessories that can help more players to more victories. <br /><br />Ask any gamer and they’ll tell you gaming is more than a fun past-time. It’s a way to wind down and connect with others – for some, even a livelihood. When Sofia Wiktorsson, one of our product developers, started working with our new range for passionate players, she stepped into a completely new universe – the gaming world.<br />
          </p>
          {read &&
          <div>
          <p className='story-sub-subheading'>We level up to help more gamers</p>
          <p className="story-text">
          “We cooperated with ROG the whole time and met both professional and high-performance gamers,” tells Sofia. When she and the team got to pick the brains of the players and watch them in action, it became clearer where IKEA can make a difference. “We saw a need for comfortable and ergonomic chairs and aids for long gaming sessions, stable furniture and accessories that improve the precision, and smart storage for the hardware. But, we also developed solutions that make it easier to eat and drink without spill while playing.”
          </p>
          <p className='story-sub-subheading'>Democratic gaming</p>
          <p className="story-text">
          There are several billion gamers in the world, but it’s not a uniform group of people – the diversity is big, with different cultures, ages, educational levels and incomes. “We want to make it possible to adapt the gaming station to your taste and your needs, no matter where you come from, if you live on your own, or together with someone else,” explains Sofia. “The products should fit with all other things people have in their homes. It’s our way to democratise the good gaming experience – for both gamers and the ones that don't play".
          </p>
          </div>
          }
          <p className='readmoreless' onClick={handleRead}>{read ? "Read Less" : "Read More"}</p>
        </div>
        <div className="item-left-as-seen-in">
          <p>As seen in</p>
          <img src={item.img3} alt="" />
        </div>
      </div>

    </div>
  )
}
