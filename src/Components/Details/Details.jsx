import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {


 
    const loadDetails = useLoaderData();

    const { _id, name, subject , photo  } = loadDetails;


    const handleDetails = e =>{

        e.preventDefault();

        const name = e.target.name.value;
        
        
        const url = e.target.url.value;
        const text = e.target.text.value;

        const submitted = {

            customerName: name ,
           
            photo,
            service: subject,
            service_id: _id,
          
            url :url, 
            text : text 
        }

        console.log(submitted);
    
        // fetch /post

        fetch('http://localhost:5000/creating',  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submitted),
          })



        .then(res=>res.json())
        .then(data=>{
            
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Booked Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }        
        })

    }


   



    return (
        <div className="m-10 ">
        <h1 className="text-xl text-center font-bold"> Booked Service : {name} </h1>

         {/*form start */}
         

  <form onSubmit={handleDetails} className="card-body">
   
   
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="name" name="name" placeholder="name" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input type="date" name="date"  className="input input-bordered" required />
    </div>

    <textarea name="text" className="textarea textarea-secondary" placeholder="Bio"></textarea>



    <div className="form-control">
      <label className="label">
        <span className="label-text">Upload Url File</span>
      </label>
      <input type="url" name="url" placeholder="url" className="input input-bordered" required />
    </div>
    
   
      
   


  </div>




    <div className="form-control mt-6">
      
      <input className="btn btn-error" type="Submit" value='Order Confirm' />
    </div>
  </form>










        {/* form end */}
    </div>
    );
};

export default Details;