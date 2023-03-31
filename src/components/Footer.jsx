import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillYoutube,AiOutlineArrowUp} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
        <div>
            <img src="https://avatars.githubusercontent.com/u/119162955?s=400&u=ca075cc88a5a2fe49419c20682a5a4881e6ac339&v=4" alt="" />
            <h2>Rishith Reddy</h2>
            <p>Motivation is temporary,but discipline lasts forever</p>

        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://github.com/RishithReddyRR" target={"blank"}>
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/_rishi__rr/" target={"blank"}>
                    <AiFillInstagram/>
                </a>
                <a href="https://youtube.com/@mpcjeeeducator4771" target={"blank"}>
                    <AiFillYoutube />
                </a>
            </article>
        </aside>
        <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
    )
}

export default Footer