import React from 'react'

function Testimonial() {
  return (
    <div id="testimonial">
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Rishi"}
            feedback={"You are a good progammer along with good development skills"}
            />
            <TestimonialCard name={"Voman"}
            feedback={"You are a good progammer along with good development skills and also a good orator"}
            />
            <TestimonialCard name={"Hima"}
            feedback={"You are a good progammer along with good development skills and a good artist"}
            />
        </section>
    </div>
  )
}
function TestimonialCard({name,feedback}){
   return ( <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>)
}
export default Testimonial