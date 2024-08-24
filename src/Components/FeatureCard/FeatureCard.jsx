

const FeatureCard = ({features}) => {

    
    const {id,name,image,subject,level,description} = features;


    return (
        <div >
           <div className="card bg-base-100 w-96 shadow-xl h-auto  ">
  <figure className="px-10 pt-10">
    <img
      src= {image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">  {name} </h2>
    <p className="font-semibold"> {description} </p>
    
   <div className="flex gap-4 font-semibold text-rose-600">
   
   <h2> Subject: {subject}  </h2>
   <h2> Level : {level}  </h2>


   </div>
    


  </div>
</div>
        </div>
    );
};

export default FeatureCard;