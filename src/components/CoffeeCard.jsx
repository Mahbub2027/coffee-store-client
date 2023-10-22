// import { parsePath } from 'react-router-dom';
// import img from '../assets/1.png'

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-meh2hmnpy-mahbubs-projects-d719349f.vercel.app/${_id}`, {
                    method: 'DELETE',
                })

                    .then(res => res.json())
                    .then(data => {
                    
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                      )
                      const remaining = coffees.filter(cof => cof._id !== _id);
                      setCoffees(remaining);
                }
            })

            }
        })
        console.log(_id);
    }

    return (


        <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img src={photo} alt="Coffee" className="" /></figure>

            <div className="flex justify-between w-full">
                <div className='text-left space-y-2'>
                    <h2 className=""><span className='font-bold'>Name:</span> {name}</h2>
                    <p><span className='font-bold'>Chef:</span> {supplier}</p>
                    <p><span className='font-bold'>Price:</span> {quantity}</p>
                </div>


                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">View</button>
                        <button className="btn">
                            <Link to={`/updateCoffee/${_id}`}>
                                Edit</Link>
                            </button>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CoffeeCard;