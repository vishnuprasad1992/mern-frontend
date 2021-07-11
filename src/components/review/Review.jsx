import './review.css';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { addReviewAndComment } from './reviewActions';




const Review = ({ product }) => {
    const dispatch = useDispatch();
    const productId = product._id
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('')

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    const review = {
        rating, comment
    }
    const sendReview = ()=>{
        const currentUser =  JSON.parse(localStorage.getItem("user"));
        if(currentUser){
            const id = currentUser.loginMessage._id
            const reviews = product.reviews
    
            const existingUserCommentCheck = reviews.filter(review=> review.userId === id)
    
            if(existingUserCommentCheck.length>0){
                alert("You have allready commented on this product")
            }else{
                dispatch(addReviewAndComment(review, productId))
                alert("review added successfully")
                window.location.reload()
            }
        }
        else{
            window.location.href = "/login"
        }
    }
    return (
        <div>
            <h6>Add Your Review</h6>
            {!localStorage.getItem("user") &&
            <p className="border p-2  bg-warning"> <strong>note</strong> : Logged in users only allowed to comment, if you are not logged in , please login</p>            
            }
            <ReactStars
                value={rating}
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <hr />
            <h6 className="mb-2">Add Comment</h6>
            <textarea style={{ width: "100%" }} onChange={e => setComment(e.target.value)} placeholder="Add your comment" rows="5"></textarea>
            <div className="text-end mt-1">
                <button className="btn btn-success" onClick={sendReview} >Add Comment</button>
            </div>
            <h5 className="mb-2">Latest Reviews</h5>
            {product.reviews &&product.reviews.map(review =>
                <div key={review.userId}>
                    <h6>{review.name}</h6>
                    <ReactStars
                        value={review.rating}
                        edit={false}
                        count={5}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <p>{review.comments}</p>
                </div>
            )}
            {!product.reviews && <p className="text-center">No reviews</p>}
        </div>
    )
}

export default Review
