import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Data inserted successfylly',
                    icon: 'success',
                    confirmButtonText: 'BACK'
                  })
            }
        })



    }

    return (
        <div className="bg-[#F4F3F0] p-5">
            <h2 className="text-4xl text-[#374151] font-bold font-[Rancho] mb-10">Add New Coffee</h2>
            <form onSubmit={handleSubmit}>
                {/* coffee name & quantity */}
            <div className="md:flex gap-5">
                <div className="form-control w-1/2 mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Coffee name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
              
            </div>
            {/* supplier & taste */}
            <div className="md:flex gap-5">
                <div className="form-control w-1/2 mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
              
            </div>
            {/* Category & details */}
            <div className="md:flex gap-5">
                <div className="form-control w-1/2 mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
              
            </div>
            {/* Photo url */}
            <div className="mb-10">
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <input className="btn btn-block bg-[#D2B48C] normal-case font-bold text-xl" type="submit" value="Add Coffee" />
        
            </form>
        </div>
    );
};

export default AddCoffee;