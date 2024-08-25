import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AssignmentCard = ({collect,setRemainingCards,remainingCards}) => {

   
    const {_id, name , photo , description,subject,marks} = collect;


    // handle Delete
     // handleDelete
     const handleDelete = _id => {

        console.log('deleted', _id);
  
  
        // Sweetalert2
  
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
  
          
            // fetching delete
            fetch(`http://localhost:5000/creating/${_id}`,{
  
              method:'DELETE'
            })
  
            .then(res=>res.json())
  
            .then(data=> {
  
              console.log(data);
  
              if(data.deletedCount > 0 ){
  
            
                Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"          
            
  
              })
  
             // remaining foods After Delete
             const remaining = remainingCards.filter( card => card._id !== _id )
  
             setRemainingCards(remaining);

  
              }
            })
          
  
  
            
          }
        });
  
      }
 


    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-5"
            src={photo}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">{name} </h2>

        <div className="flex">
        <p  className="font-bold" > Subject : {subject} </p>
         <p className="font-bold" >   Marks : {marks} </p>
        </div>

          <div className="card-actions justify-end grid grid-rows-1 gap-2 mt-5">
           
           
            <Link to={`/details/${_id}`} >
            
            <button className="btn btn-primary text-white">Submit Now</button>
            
            </Link>



            <Link to={`/update/${_id}`} >
            
            <button className="btn btn-accent text-white">Update Info</button>

            </Link>


            <button
            
            onClick={ ()=> handleDelete(_id) }
            
            className="btn btn-error text-white">Delete</button>
            
          </div>

          

        </div>
      </div>
    );
};

export default AssignmentCard;