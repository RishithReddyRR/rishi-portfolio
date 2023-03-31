import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import data from "../assets/data.json"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Work() {
  return (
    <>
    <div id="work">
      <h1 >WORK</h1>
      <section>
        <article>
          <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}  
          showThumbs={false}
          showArrows={false}
          showIndicators
          interval={2000}
>   
          {
            data.projects.map(ele=>(<div key={ele.title} className="workItem"  >
              <img src={ele.imgSrc} alt={ele.title} />
              <aside>
               <h3>{ele.title}</h3> 
               <p>{ele.description}</p>
               <a href={ele.url} target={"blank"}>View Demo</a>
              </aside>
            </div>))
          }
          </Carousel>
        </article>
      </section>
    </div>
    </>
  )
}

export default Work