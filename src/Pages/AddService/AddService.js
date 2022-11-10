import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hookes/useTitle';


const AddService = () => {
    const showToastMessage = () => {
        toast.success('Added Service SuccessFully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    useTitle('Add Services')

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const service_id = form.serviceID.value;
        const img = form.imgUrl.value
        const title = form.title.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const service = {

            service_id,
            img,
            title,
            price,
            rating,
            description
        }
        // if (phone.length > 10) {
        //     alert('Phone number should be 10 characters or longer')
        // }
        fetch('https://esthetica-salon-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    showToastMessage();
                    form.reset();
                }

            })
            .then(err => console.log(err))

    }
    return (
        <div>
            <form onSubmit={handleAddService}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="serviceID" type="text" placeholder="Service ID" className="input input-bordered w-full input-ghost" />
                    <input name="imgUrl" type="text" placeholder="Image URL" className="input input-bordered w-full input-ghost " />
                    <input name="title" type="text" placeholder="Title" className="input input-bordered w-full input-ghost " required />
                    <input name="price" type="text" placeholder="Price" className="input input-bordered w-full input-ghost " />
                    <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full input-ghost " />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Service Description"></textarea>
                <input className='btn' type="submit" ></input>
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddService;