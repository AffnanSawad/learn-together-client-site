import Swal from 'sweetalert2'

const AddAss = () => {

    const handleAddAssignment = e => {

        e.preventDefault();
    
        const name = e.target.name.value ;
        const description = e.target.description.value;
        const marks = e.target.marks.value ;
        const photo = e.target.url.value;
        const subject = e.target.subject.value;
       
    
        const newAssignment = {name,description,marks,photo,subject};
    
        console.log(newAssignment);



    // post / create assignmnt by CRUD
    fetch("http://localhost:5000/creating",{

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    })
    .then(res=>res.json())
    .then(data=>{

      console.log(data);

      if(data.insertedId){

        Swal.fire({
          title: 'Success!',
          text: 'Do you want to create this Assignment?',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      }
    })








    }



    return (
        <div>
            <h1 className="text-4xl text-center text-amber-800 font-extrabold mt-20 ml-10">Create Your Assignment</h1>
        
            <form onSubmit={handleAddAssignment} className="card-body w-1/2 lg:ml-80">
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold"> Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <input type="text" name="description" placeholder="description" className="input input-bordered" required />
          
        </div>


        {/* start */}

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Subject</span>
          </label>
          <input type="text" name="subject" placeholder="Subject" className="input input-bordered" required />
          
        </div>



       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Marks</span>
          </label>
          <input type="text" name="marks" placeholder="marks" className="input input-bordered" required />
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input type="photo" name="url" placeholder="photoURL" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
         <input type="submit" value='Create Assignment' className="btn btn-accent text-white" />
        </div>
      </form>


        </div>
    );
};

export default AddAss;