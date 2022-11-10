import React from "react";

const SingleReview = ({ review }) => {
    return (
        <div className="d-flex justify-content-between align-items-center bg-light border m-3 p-3">

            <div className="">
                <img src={review.reviewerPhoto} style={{ height: '70px' }} alt="" />
                <span>{review.reviewerName ? review.reviewerName : 'Unknown'}</span>
                <p>{review.date}</p>
            </div>
            <div className="">
                <span>Rating :{review.ratings}</span>
                <p>Review:{review.reviewContent}</p>
            </div>

        </div>
    );
};

export default SingleReview;