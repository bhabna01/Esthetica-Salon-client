import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure You want to proceed');
        if (proceed) {
            fetch(`http://localhost:5000/myReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted Successfully')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2 className='text-5xl'>You have {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}


                            ></MyReviewRow>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReview;