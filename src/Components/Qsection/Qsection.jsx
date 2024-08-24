import { Typewriter } from 'react-simple-typewriter'

const Qsection = () => {
    return (
  <div className="mt-10">

<h1 className='text-4xl   text-center pb-10' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold'  }}>
      Frequently{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Asked','Questions']}
           
            cursor
            cursorStyle='_'
            loop ={10000000000000000000000000000000000000000000}	
            typeSpeed={90}
            deleteSpeed={90}
            delaySpeed={500}
          
          />
        </span>
      </h1>



<div className="collapse collapse-arrow  bg-rose-100">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">. What is "Collaborate and Learn Together"?</div>
  <div className="collapse-content">
    <p> "Collaborate and Learn Together" is an online platform where users can create, submit, and rate assignments, fostering a collaborative learning environment through peer feedback and shared resources.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-rose-100 my-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium"> How do I create an assignment?</div>
  <div className="collapse-content">
    <p>To create an assignment, log in, navigate to the "Create Assignment" section, and follow the prompts to input your assignment details, instructions, and any necessary files.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-rose-100 my-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How do I submit my completed assignment?</div>
  <div className="collapse-content">
    <p>After completing your assignment, go to the "Submit Assignment" section, upload your work, and click "Submit." You'll receive a confirmation once your assignment is successfully submitted</p>
  </div>
</div>


<div className="collapse collapse-arrow bg-rose-100 my-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium"> How does the rating system work?</div>
  <div className="collapse-content">
    <p>After assignments are submitted, peers can rate them based on quality, clarity, and originality. The average rating is displayed on the assignment's page.</p>
  </div>
</div>


  </div>
    );
};

export default Qsection;