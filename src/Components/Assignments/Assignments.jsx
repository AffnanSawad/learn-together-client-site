import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";


const Assignments = () => {
    
    const collectAssignments = useLoaderData();

    const [remainingCards , setRemainingCards] = useState(collectAssignments);



    return (
        <div>
            <h1 className="text-xl font-bold text-rose-600 text-center my-4 "> Total Created Assignments : {collectAssignments.length} </h1>

        <div className="grid grid-cols-1 gap-8 m-5 p-2 lg:grid-cols-2 md:grid-cols-2">

    {
        collectAssignments.map(collect => <AssignmentCard
        
            key={collect._id}

            collect={collect}

            remainingCards={remainingCards}

            setRemainingCards={setRemainingCards}
        
        ></AssignmentCard> )
    }


        </div>


        </div>
    );
};

export default Assignments;