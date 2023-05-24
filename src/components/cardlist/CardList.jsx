import React from 'react';
import './cardlist.css'

function Card({ id, title, description, img }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={img} />
    </div>
  );
}

function CardList() {
  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://burst.shopifycdn.com/photos/two-people-walk-towards-a-large-white-building.jpg?width=925&format=pjpg&exif=1&iptc=1'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      img: 'https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=925&format=pjpg&exif=1&iptc=1'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.',
      img: 'https://burst.shopifycdn.com/photos/man-controls-all-video-games.jpg?width=925&format=pjpg&exif=1&iptc=1'
    }
  ];

  return (
    <div className="card-list">
      {cardData.map(card => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          img={card.img}
        />
      ))}
    </div>
  );
}

export default CardList;
