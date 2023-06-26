import React, {useState} from 'react';
import './Body.css'
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import pic from '../../assets/pic.jpg';
const CARDS = 5;
const MAX_VISIBILITY = 3;

const Card = ({ title, imageUrl,content }) => (
  <div className='card'>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} />
    <p >{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};
function Body() {
 
  return (
    <div>
       <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            title={'Blog ' + (i + 1)}
            imageUrl={pic}  // Replace with the actual image URL
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nost'
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Body
