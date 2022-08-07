import { useState, useEffect, Children } from 'react'
import styles from "../styles/Carousels.module.css";

export default function Carousels(){
// const [carousels, setCarousels] = useState([]);

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);


const Carousel = ({children}) => {
    const [active, setActive] = useState(0);
    const count = 10;
    
    return (
      <div className={styles.carousel}>
        {active > 0 && <button className={styles.navleft} onClick={function(){setActive(active - 1)}}>
                         ==
                       </button>}
        {Children.map(children, (child, i) => (
          <div className={styles.cardcontainer} style={{
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
        {active < count - 1 && <button className={styles.navright} onClick={function(){setActive(active + 1)}}>
        ==
        </button>}
      </div>
    )};

    return(
    <div className={styles.app}>
    <Carousel>
      {[...new Array(CARDS)].map((anything, index) => (
        <Card key={index} title={'Card ' + (index + 1)} content='Hello'/>
      ))}
    </Carousel>
  </div>
)};