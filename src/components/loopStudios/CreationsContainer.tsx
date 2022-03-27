import { useState } from 'react'

import styles from '../../styles/loopStudios/index.module.css'
import CardImage from './CardImage'

interface CardImage {
  image: string,
  title: string
}

const CreationsContainer = () => {
  const [cards, setCards] = useState<CardImage[]>([
    {
      image: '/deep-earth.jpg',
      title: 'Deep Earth'
    },
    {
      image: '/night-arcade.jpg',
      title: 'Night Arcade'
    },
    {
      image: '/soccer-team.jpg',
      title: 'Soccer Team'
    },
    {
      image: '/the-grid.jpg',
      title: 'The Grid'
    },
    {
      image: '/from-above.jpg',
      title: 'From up Above VR'
    },
    {
      image: '/pocket-borealis.jpg',
      title: 'Pocket Borealis'
    },
    {
      image: '/the-curiosity.jpg',
      title: 'The Curiosity'
    },
    {
      image: '/make-it-fisheye.jpg',
      title: 'Make It Fisheye'
    }
  ])
  return (
    <>
      <section className={styles['creations-section']}>
        <div className={styles['creations-top']}>
          <h3 className={styles['creations-title']}>Our Creations</h3>
          <button className={styles['creations-see-all-btn']}>See All</button>
        </div>
        <div className={styles['card-container']}>
          {cards && cards.map((card, i) => {
            return (
              <CardImage key={i} image={card.image} title={card.title}/>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default CreationsContainer