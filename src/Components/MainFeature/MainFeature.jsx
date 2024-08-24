import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { Typewriter } from 'react-simple-typewriter'

const MainFeature = () => {


   
    const [feature, setfeature] = useState([]);

    useEffect(   
        
        ()=>{

            fetch('data.json')
            .then(res=> res.json())
            .then(data=> setfeature(data));
        }
        
        
        ,[])






    return (
        <div>
        

           <h1 className='text-4xl   text-center pb-10' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold'  }}>
      Learn To{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Know','More']}
           
            cursor
            cursorStyle='_'
            loop ={10000000000000000000000000000000000000000000}	
            typeSpeed={90}
            deleteSpeed={90}
            delaySpeed={500}
          
          />
        </span>
      </h1>


           <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">

           {

feature.map(  features => <FeatureCard

key={feature.id}

features={features}

></FeatureCard>  )
}
           </div>
        </div>
    );
};

export default MainFeature;