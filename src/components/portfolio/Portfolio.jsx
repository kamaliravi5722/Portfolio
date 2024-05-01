import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring,useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"E-Commerce Website",
        img:"/ecom.png",
        desc:"Designed and developed a modern e-commerce platform leveraging HTML, CSS, and JavaScript to ensure a visually appealing and user-friendly interface. Implemented dynamic features and interactivity using JavaScript to enhance user experience and facilitate seamless navigation. Utilized Django, a robust web framework, to build a scalable and secure backend, enabling efficient management of products, orders, and user accounts."
    },
    {
        id:3,
        title:"SQL Translator",
        img:"https://img.freepik.com/premium-photo/cloud-server-illustration-cloud-computing-technology-concept-dark-background-data-concept-generative-ai_812892-472.jpg?size=626&ext=jpg&ga=GA1.1.817067359.1702230456&semt=sph",
        desc:"Developed a SQL translator tool leveraging npm (Node Package Manager) for package management and Node.js for server-side JavaScript execution. This project enables users to seamlessly convert SQL queries from one dialect to another, enhancing interoperability across different database systems. Implemented robust parsing and translation algorithms to accurately interpret SQL syntax and generate equivalent queries in the desired dialect. Utilized npm packages such as sql-parser and sql-formatter for efficient parsing and formatting of SQL queries, ensuring high performance and maintainability of the translator tool."
    },
    {
        id:3,
        title:"My Playlist",
        img:"https://t4.ftcdn.net/jpg/07/78/83/41/240_F_778834120_Bz5eMLT5zWCp76KuJ9b1n5YRS9Vh1B9K.jpg",
        desc:"Designed and developed a dynamic music website offering a seamless platform for music enthusiasts to explore, discover, and enjoy their favorite tunes. Leveraged modern web technologies such as HTML5, CSS3, JavaScript, and React.js to create an engaging user interface with responsive design, ensuring optimal viewing experience across devices. Integrated robust backend systems powered by Django or Node.js to manage user accounts, playlists, and music metadata efficiently, providing personalized recommendations and content delivery. Implemented features such as music streaming, search functionality, artist profiles, and social sharing to enrich user experience and foster community engagement. "
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
