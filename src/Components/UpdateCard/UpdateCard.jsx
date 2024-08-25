import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCard = () => {






    // import loader .. [main jsx e loader use kora hoise]
    
    const loadedUpdateCards = useLoaderData();

    const {_id,name,subject,photo,marks} = loadedUpdateCards;

   
   // handle update
    const handleUpdateCard = e => {

        e.preventDefault();
    
        const name = e.target.name.value ;
        const subject = e.target.subject.value;
        const marks = e.target.marks.value ;
        const photo = e.target.photo.value;
       
    
        const newUpdateCard = {name,subject,marks,photo};
    
        console.log(newUpdateCard);
    
        // send to server
    
        fetch(`http://localhost:5000/creating/${_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUpdateCard),
    
    
    
        })
    
        .then(res=>res.json())
    
        .then(data=>{
            console.log(data);
    
            if(data.modifiedCount > 0 ){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to update',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  
            }
        } )
    }





    return (
        <div>
        <h1 className="text-4xl text-amber-800 font-extrabold mt-20 ml-10 text-center">Update Your Assignment</h1>
    
        <form onSubmit={handleUpdateCard} className="card-body w-1/2 lg:ml-80">
    <div className="form-control ">
      <label className="label">
        <span className="label-text font-bold"> Name</span>
      </label>
      <input type="text" name="name"  defaultValue={name} placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Subject</span>
      </label>
      <input type="text" name="subject" defaultValue={subject} placeholder="subject" className="input input-bordered" required />
      
    </div>
   
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Marks</span>
      </label>
      <input type="text" name="marks" defaultValue={marks} placeholder="price" className="input input-bordered" required />
      </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Photo URL</span>
      </label>
      <input type="photo" name="photo" defaultValue={photo} placeholder="photoURL" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
     <input type="submit" value='Update My Food' className="btn btn-accent" />
    </div>
  </form>


    </div>
    );
};

export default UpdateCard;