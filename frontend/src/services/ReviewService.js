```javascript
import axios from 'axios';

const REVIEW_API_BASE_URL = "/api/reviews";

class ReviewService {

    getReviews() {
        return axios.get(REVIEW_API_BASE_URL);
    }

    submitReview(review) {
        return axios.post(REVIEW_API_BASE_URL, review);
    }

    getReviewById(reviewId) {
        return axios.get(REVIEW_API_BASE_URL + '/' + reviewId);
    }

    updateReview(review, reviewId) {
        return axios.put(REVIEW_API_BASE_URL + '/' + reviewId, review);
    }

    deleteReview(reviewId) {
        return axios.delete(REVIEW_API_BASE_URL + '/' + reviewId);
    }
}

export default new ReviewService();
```