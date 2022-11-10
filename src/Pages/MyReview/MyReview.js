import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hookes/useTitle';
const MyReview = () => {
    const showToastMessage = () => {
        toast.success('Deleted review Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    useTitle('My-review')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://esthetica-salon-server.vercel.app/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure You want to proceed');
        if (proceed) {
            fetch(`https://esthetica-salon-server.vercel.app/myReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        showToastMessage();
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div>

            {
                (reviews.length === 0) ? (
                    <h1 className='text-center'>No reviews were added</h1>
                ) :
                    (
                        <>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>Service Name</th>
                                            <th>Review</th>
                                            <th>Date</th>
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


                        </>
                    )
            }
            <ToastContainer />

        </div>
    );
};

export default MyReview;