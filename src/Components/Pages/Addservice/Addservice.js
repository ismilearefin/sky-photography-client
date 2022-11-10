import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';


const Addservice = () => {
    useTitle('addservice')
    
    function handleAddservice(e){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const dis = form.dis.value;

        if(rating > 5){
            alert('You must give a review below 6')
        }
        
        const myservice = {
            name : name,
            img : url,
            rating : rating,
            price : price,
            dis : dis
        }
        form.reset()

        // add service useing POST method

        fetch('https://sky-photography-server.vercel.app/allservices',{
            method: "POST",
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(myservice)
        })
        .then(res => {
            
            return  res.json()
        })
        .then(data => {
            toast.success('Added successfully.')
            console.log(data)
        })
    }



    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="hero min-h-screen bg-cyan-50 ">
        <div className="w-96">
            <div className=" shadow-2xl bg-base-100">
            <form onSubmit={(e)=>handleAddservice(e)} className="px-10 py-5">
                <div className="form-control ">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="email" className=" input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input type="text" name='url' placeholder="url" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input type="number" name='rating' placeholder=" 5" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" name='price' placeholder="$" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Discription</span>
                </label>
                <textarea className="textarea" name='dis' placeholder="discription..." required></textarea>
                </div>
                <div className="form-control mt-6">
                <button  className="btn btn-info">Add</button>
                </div>
            </form>
            </div>
        </div>
        </div>
        <Toaster/>
        </div>
    );
};

export default Addservice;