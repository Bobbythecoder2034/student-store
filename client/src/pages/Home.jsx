import React, { createContext, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/grid";
import { FaArrowRight } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

// _id
// 697d16e7e0945a7ece358dbd
// name
// "Sawyer"
// slug
// "https://cornell.edu/vitae/nisl/aenean.aspx?accumsan=dignissim&felis=ve…"
// description
// "Quick oatmeal cups with banana and nut flavor, great for breakfast."
// price
// 2.99
// category
// "Food - Breakfast"
// inStock
// true
// featured
// true

// _id
// 697d16e7e0945a7ece358dbd
// name
// "Sawyer"
// slug
// "https://cornell.edu/vitae/nisl/aenean.aspx?accumsan=dignissim&felis=ve…"
// description
// "Quick oatmeal cups with banana and nut flavor, great for breakfast."
// price
// 2.99
// category
// "Food - Breakfast"
// inStock
// true
// featured
// true

const Home = () => {

  const findFeatured = async () => {
    let yab = await fetch("http://localhost:5000/api/public/products");
    yab = await yab.json();
    const featured = await yab.filter((x) => x.featured == true);
    console.log(featured);
    featuredArray = featured;
  };

  useEffect(() => {
    findFeatured()
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
            <Link to={"/custom-order"}>Custom Order</Link>{" "}
            <FaWandMagicSparkles />
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
            <p>View all</p>

            <FaArrowRight />
          </div>

          {/* Convert these cards into a component with functions that can easily have information filled out for it */}
          <div className="featured-product featured-product-one">
            <Grid />
            <p className="featured-product-name">Gear Keychain</p>
            <p className="featured-product-price">$6</p>
            <p className="featured-product-category">Keychains</p>
            <div className="buzzword buzzword-one">PETG</div>
            <div className="buzzword-two buzzword">Durable</div>
            <div className="in-stock buzzword-three buzzword">In stock</div>
            <div className="featured-details">
              <p className="view">View Detail</p>
              <FaArrowRight style={{ fontSize: "small" }} />
            </div>
          </div>

          {/* <Featured name={'Gear Keychain'} price={'$6'} category={'Keychains'} buzzwordOne={'Durable'} buzzwordTwo={'clean'} order={1}/>

          <Featured name={'Mini Planter'} price={'$10'} category={'Decor'} buzzwordOne={'PLA'} buzzwordTwo={'Clean'} order={2}/>

          <Featured name={'Cable Clip Set'} price={'$8'} category={'Organization'} buzzwordOne={'PETG'} buzzwordTwo={'Durable'} order={3}/>

          <Featured name={'Phone Desk Stand'} price={'$12'} category={'Desk'} buzzwordOne={'PLA'} buzzwordTwo={'Matte'} order={4}/> */}
        </div>

        <div className="testimonial">
          <Grid />
          <p className="sub-header test">What people are saying</p>
          <p className="sub-description">
            Popular picks from recent student runs
          </p>

          <div className="view-all">
            <p>See All</p>
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
                "Loved the custom order color options. Students were super
                helpful."
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
                "Great little gifts-our club ordered a batch and everyone wanted
                more"
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
