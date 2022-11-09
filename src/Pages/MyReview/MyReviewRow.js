import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ review, handleDelete }) => {
    const { _id, service_name, reviewContent, date, service } = review;
    const [reviewService, setReviewService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [service])

    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-dark'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_name}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {reviewContent}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default MyReviewRow;