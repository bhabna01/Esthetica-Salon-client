import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import ReviewForm from "../Pages/ReviewForm/ReviewForm";


import SingleReview from "../SingleReview/SingleReview";

const Review = ({ service }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://esthetica-salon-server.vercel.app/reviews?service=${service._id}`)
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, [reviews, service._id]);


    return (
        <div>
            <h3 className="text-warning">
                Customer Reviews for {service.title}

            </h3>
            <p className="text-success">No of Reviews:{reviews.length}</p>
            <div className="">
                {reviews.length === 0 ? <h1 className="text-danger text-center">No Reviews Found</h1> : <>{reviews.map((review) => (
                    <SingleReview review={review} key={review._id}></SingleReview>
                ))}</>}


            </div>
            {user ? (
                <ReviewForm service={service}></ReviewForm>
            ) : (
                <>
                    <div className="d-flex">
                        <h3>
                            Please login to add a review <Link to="/login">Login</Link>
                        </h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Review;