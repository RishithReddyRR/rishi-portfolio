import React, { useState } from 'react'
import toast from 'react-hot-toast'
import img from '../assets/vg.png'
import {motion} from 'framer-motion'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../firebase'
function Contact() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const [disableBtn,setDisableBtn]=useState(false)
  const submitHandler=async(e)=>{
    e.preventDefault()
    setDisableBtn(true)
      try {
        await addDoc(collection(db,"contacts"),{
          name,email,message
        })
        toast.success("Message sent");
        setName("")
        setEmail("")
        setMessage("")
        setDisableBtn(false)
      } catch (error) {
        toast.error("Error")
        console.log(error)
        setDisableBtn(false)

      }

     
  }
  const animations={
    form:{
      initial:{
        x:"-100%",
        opacity:0
      },
      whileInView:{
        x:0,
        opacity:1
      },
    },
    button:{
      initial:{
        y:"-100%",
        opacity:0
      },
      whileInView:{
        y:0,
        opacity:1
      },
      transition:{
        delay:0.5
      }
    },

  }
  return (
    <div id="contact">
        <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text" placeholder={"Your Name"} required value={name} onChange={(e)=>setName(e.target.value)}  />
                <input type="email" placeholder={"Your Email"} required value={email} onChange={(e)=>setEmail(e.target.value)}  />
                <input type="text" placeholder={"Your Message"} required value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <motion.button type="submit" {...animations.button} disabled={disableBtn} className={disableBtn?"disableBtn":""}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={img} alt="" />
        </aside>
    </div>
  )
}

export default Contact