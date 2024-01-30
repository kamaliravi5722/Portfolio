import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring,useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"ecommerce",
        img:"https://images.pexels.com/photos/18176651/pexels-photo-18176651/free-photo-of-fisherman-on-fishing-boat-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"blablabla"
    },
    {
        id:3,
        title:"My own Gallary",
        img:"https://images.pexels.com/photos/19988878/pexels-photo-19988878/free-photo-of-washington-dc.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"blablabla"
    },
    {
        id:3,
        title:"My fav Music",
        img:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"blablabla"
    }
];

const Single = ({item}) =>{
      const ref = useRef()

      const {scrollYProgress} = useScroll({target:ref});

      const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return(
        <section >
           <div className="container">
            <div className="wrapper">
                <div className="imageContainenr" ref={ref}>

                
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}} >
                <h2 > {item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
           </div>
        </section>
    )
}
const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["end end" , "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    });
    return(
        <div className="portfolio" ref={ref}>
            

            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div  style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}/> 
            ))}
        </div>
    );
};

export default Portfolio;