import React from 'react';
import './Review.css';

function Review() {
  const reviews = [
    {
      name: 'Aarav',
      avatar: 'assets/review/b1.jpg',
      rating: 5,
      text: 'Aarav was thrilled with the wedding planning and catering services. Everything was flawless!'
    },
    {
      name: 'Ananya',
      avatar: 'assets/review/g1.jpg',
      rating: 4,
      text: 'Ananya appreciated the corporate event organization and the DJ performance. Very professional team.'
    },
    {
      name: 'Rohan',
      avatar: 'assets/review/b2.jpg',
      rating: 5,
      text: 'Rohan loved the birthday arrangements and decorations. Everyone had a fantastic time!'
    },
    {
      name: 'Saanvi',
      avatar: 'assets/review/g2.jpg',
      rating: 4,
      text: 'Saanvi’s concert event was unforgettable thanks to excellent stage lighting and coordination.'
    },
    {
      name: 'Krishna',
      avatar: 'assets/review/g3.jpg',
      rating: 5,
      text: 'Krishna had an amazing outdoor event with delicious catering and perfect planning!'
    },
    {
      name: 'Isha',
      avatar: 'assets/review/g4.jpg',
      rating: 5,
      text: 'Isha loved the wedding decoration and music arrangements. Everything was top-notch!'
    },
    {
      name: 'Vivaan',
      avatar: 'assets/review/b3.jpg',
      rating: 4,
      text: 'Vivaan was impressed by the corporate seminar organization and catering. Very efficient team.'
    },
    {
      name: 'Diya',
      avatar: 'assets/review/g5.jpg',
      rating: 5,
      text: 'Diya’s birthday party was a huge hit with outdoor games and beautiful decorations.'
    },
    {
      name: 'Arjun',
      avatar: 'assets/review/b4.jpg',
      rating: 5,
      text: 'Arjun had an epic live concert with amazing fireworks. Truly memorable!'
    },
    {
      name: 'Meera',
      avatar: 'assets/review/g6.jpg',
      rating: 5,
      text: 'Meera’s birthday bash was incredible! The team made sure every detail was perfect.'
    },
    {
      name: 'Kabir',
      avatar: 'assets/review/b5.jpg',
      rating: 4,
      text: 'Kabir appreciated the smooth execution of his corporate seminar. Excellent organization!'
    },
    {
      name: 'Pooja',
      avatar: 'assets/review/g7.jpg',
      rating: 4,
      text: 'Pooja’s theme party was very well organized with delicious catering and stunning setup.'
    },
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">What Our Clients Say</h1>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.avatar} alt={review.name} className="avatar" />
            <h3>{review.name}</h3>
            <div className="stars">
              {Array(review.rating).fill('★').map((star, i) => <span key={i}>{star}</span>)}
            </div>
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
