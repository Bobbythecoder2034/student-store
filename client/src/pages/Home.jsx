import React, { createContext, useContext } from "react";
import {useState, useEffect} from 'react'
import Navbar from "../components/Navbar";
import Grid from "../components/grid";
import { FaArrowRight } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Featured from "../components/featured";




const Home = () => {
  const [featured, setFeatured] = useState([])
  let count = 0
  const findFeatured = async () => {
    let yab = await fetch('http://localhost:5000/api/public/products')
    // const featuredProducts = yab.filter((x) => x.featured == true)
    yab = await yab.json()
    let featured = yab.filter((x) => x.featured == true)
    let random = Math.floor((Math.random() * (featured.length-4))+1)
    featured = featured.splice(random,4)
    console.log(featured) 
    return featured
    
}
useEffect( () => {
  async function doStuff() {
    var stuff = await findFeatured()
    console.log(typeof stuff)
    setFeatured(stuff)
  }
  doStuff()
}, [])


  return (
    <>
      <div className="layout">
        {/* Add dark mode later */}
        <Navbar />
        <div className="banner">
          <Grid />
          <div
            className="sub-info-one sub-info"
            style={{
              backgroundColor: "hsl(221, 83%, 53%)",
              color: "hsl(210, 40%, 98%)",
            }}
          >
            Innovative
          </div>
          <div className="sub-info sub-info-two">Fast turnaround</div>
          <div className="sub-info sub-info-three">Student-made 3d prints</div>
          <h1 className="banner-head">
            West-MEC student-made{" "}
            <span style={{ color: "hsl(221, 83%, 53%)" }}>
              3D printed items
            </span>
            , built for everyday use.
          </h1>
          <p className="banner-info">
            Browse featured products, request custom prints (STL/ZIP uploads),
            and leave a testimonial. Everything here is built by
            students-designed, printed, and finished with care
          </p>
          <div className="shop-products">
            <p>Shop Products</p> <FaArrowRight></FaArrowRight>
          </div>
          <div className="shop-custom">
            {" "}
            <Link to={'/custom-order'}>Custom Order</Link> <FaWandMagicSparkles />
          </div>

          <div className="info-blurb info-blurb-one">
            <LuSparkles
              className="icon"
              style={{ color: "hsl(221, 83%, 53%)" }}
            />{" "}
            <div className="info-blurb-stacked">
              <p className="info-blurb-sub">Clean finishes</p>{" "}
              <h3 className="info-blurb-description">
                Student QC + careful post-processing
              </h3>{" "}
            </div>
          </div>
          <div className="info-blurb info-blurb-two">
            <FaClipboardList
              className="icon"
              style={{ color: "hsl(221, 83%, 53%)" }}
            />{" "}
            <div className="info-blurb-stacked">
              <p className="info-blurb-sub">Made to spec</p>{" "}
              <h3 className="info-blurb-description">
                Color, material, size preferences
              </h3>{" "}
            </div>
          </div>
          <div className="info-blurb info-blurb-three">
            <PiStudentBold
              className="icon"
              style={{ color: "hsl(221, 83%, 53%)" }}
            />{" "}
            <div className="info-blurb-stacked">
              <p className="info-blurb-sub">Small batches</p>{" "}
              <h3 className="info-blurb-description">
                Perfect for clubs & events
              </h3>{" "}
            </div>
          </div>
          {/* <div className="sub-info">
                    <div style={{backgroundColor: 'hsl(221, 83%, 53%)', color: 'hsl(210, 40%, 98%)'}}>Innovative</div>
                    <div>Fast turnaround</div>
                </div> */}
        </div>

        <div className="featured">
          <Grid />
          <h1 className="sub-header">Featured</h1>
          <p className="sub-description">
            Popular picks from recent student runs
          </p>

          <div className="view-all view-all-featured">
            <Link to={'/products'}>View All</Link>

            <FaArrowRight/>
          </div>

          {/* Convert these cards into a component with functions that can easily have information filled out for it */}
            
            {featured.map((x)=>{
              count++
              return <Featured key={x._id} name={x.name} category={x.category} buzzwordOne={x.slug} buzzwordTwo={x.slug} order={count} id={x.id}/>
            })}
         
          
          {/*  */}

        </div>

        <div className="testimonial">
          <Grid />
          <p className="sub-header test">What people are saying</p>
          <p className="sub-description">
            Popular picks from recent student runs
          </p>

          <div className="view-all">
            <Link to={'/testimonials'}>See All</Link>
            <FaArrowRight />
          </div>

          <div className="testimonials">
            {/* Replace manually adding rating with component using useContext and createContext */}
            <div className="testimonial-card">
              <Grid />
              <p className="testimonial-name">Jordan</p>
              <div className="rating">
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
              </div>
              <p className="quote">
                "Fast turnaround and the print quality is seriously impressive."
              </p>
            </div>

            <div className="testimonial-card">
              <Grid />
              <p className="testimonial-name">Alyssa</p>
              <div className="rating">
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
              </div>
              <p className="quote">
                "Loved the custom order color options. Students were super helpful."
              </p>
            </div>

            <div className="testimonial-card">
              <Grid />
              <p className="testimonial-name">Miguel</p>
              <div className="rating">
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
                <LuSparkles />
              </div>
              <p className="quote">
                "Great little gifts-our club ordered a batch and everyone wanted more"
              </p>
            </div>
          </div>
        </div>

        <footer>
            <p className="wer">@ 2026 West-MEC Student-made prints</p>
            <p className="admin">Admin</p>
        </footer>

        <div className="scroll" style={{ height: "30vh", opacity: "0" }}>
          k
        </div>
      </div>
    </>
  );
};



export default Home;
