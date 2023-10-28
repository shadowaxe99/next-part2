import React, { useState, useEffect } from 'react';
import ReviewService from '../services/ReviewService';

function UserReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const response = await ReviewService.getReviews();
        setReviews(response.data);
    };

    return (
        <div id="user-reviews">
            <h2>User Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
                    <p>Rating: {review.rating}</p>
                    <p>By: {review.user}</p>
                </div>
            ))}
        </div>
    );
}

export default UserReviews;