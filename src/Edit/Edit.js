import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const storedReviews = useLoaderData();
    const [review, setReview] = useState(storedReviews)
    const handleUpdateReview = event => {
        event.preventDefault();
        // console.log(review);
        fetch(`http://localhost:5000/myReview/${storedReviews._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')
                    console.log(data);
                }
            })

    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div>
            <h1>Please Update:{storedReviews.reviewContent}</h1>
            <form onSubmit={handleUpdateReview} >

                <input className="input input-bordered w-full max-w-xs" defaultValue={storedReviews.reviewContent} onChange={handleInputChange} type="text" name='reviewContent' placeholder='Review'></input>
                <br />
                <input className="input input-bordered w-full max-w-xs" defaultValue={storedReviews.ratings} onChange={handleInputChange} type="text" name='ratings' placeholder='Rating'></input>
                <br />
                <button className='btn btn-dark' type="submit">Update</button>
            </form>

        </div>
    );
};

export default Edit;