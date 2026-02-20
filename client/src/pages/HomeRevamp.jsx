import React from 'react'
import { Boxes } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

const HomeRevamp = () => {
  return (
    <div className="layout">
        <div className="nav">
            <div className="logo-area">
                <div className="logo">
                                <Boxes className='logo'/>
                </div>
            <div className="stacked">
                <h1>West-MEC</h1>
                <sub>Student Print Shop</sub>
            </div>

            
        </div>
        
            <div className="buttons">
                <Link>
                    <div style={{alignSelf: 'center'}} className='sign-up'>Sign Up</div>
                </Link>
                <Link>
                    <div style={{justifySelf: 'center'}} className='product-link'>Products</div>
                </Link>
                <Link>
                    <button style={{alignSelf: 'center'}} className='custom-link'>Custom Print</button>
                </Link>
            </div>
        </div>
        <div className="banner">
            <div className="descriptors">
                <div className="description-1">Mobile-first</div>
                <div className="description-2">Student-made 3D</div>
                <div className="description-3"> Fast turnaround</div>
            </div>
            <div className="text-area">
                <h1 className='banner-head'>West-MEC student-made <span style={{color: 'hsl(221, 83%, 53%)'}}>3D printed items</span>, built for everyday use.</h1>
                <p className="description">Browse featured products, request custom print (STL/ZIP uploads), and leave a testimonial. Everything here is built by students-designed, printed, and finished with care</p>
            </div>
            <div className="banner-buttons">
                
                <div className="products-button banner-button">
                    <p>Shop Products</p> 
                    <FaArrowRight/>
                    </div>
                
                <div className="custom-button banner-button">
                    <p>Custom Print</p> 
                    <FaWandMagicSparkles/>
                    </div>
            </div>

            <div className="buzz-cards">
                
                <div>
                    <LuSparkles className='icon'/>
                    <div className="stacked">
                        <sub>Clean finishes</sub>
                        <h1 className="buzzword-bold">Student QC + Careful post-processing</h1>
                    </div>
                </div>

                <div>
                    <LuSparkles className='icon'/>
                    <div className="stacked">
                        <sub>Made to Spec</sub>
                        <h1 className="buzzword-bold">Color, material, size preferences </h1>
                    </div>
                </div>

                <div>
                    <LuSparkles className='icon'/>
                    <div className="stacked">
                        <sub>Small Batches</sub>
                        <h1 className="buzzword-bold">Perfect for clubs & events </h1>
                    </div>
                </div>
               
            </div>

        </div>

        <div className="products">
            <div className="content-header">
                <h1>Featured</h1>
                <sub>Popular picks from recent student runs</sub>
            </div>

            <div className="product-cards">
                <div className='product-card'>
                    <div className="top">
                        <div className="stacked">
                            <h1 style={{fontSize: '1rem'}}>Gear Keychain</h1>
                            <sub style={{fontSize: '.6rem'}}>Keychains</sub>
                        </div>

                        <div className='price'>
                            $6
                        </div>


                    </div>

                    <div className="tags">
                        <div>PLA</div>
                        <div>Durable</div>
                        <div>In Stock</div>
                    </div>
                        <div className="details-box">
                                                <div className="details-button">
                        <p>View Details</p>
                        <FaArrowRight/>
                    </div>
                        </div>


                </div>
                <div className='product-card'>
                    <div className="top">
                        <div className="stacked">
                            <h1 style={{fontSize: '1rem'}}>Gear Keychain</h1>
                            <sub style={{fontSize: '.6rem'}}>Keychains</sub>
                        </div>

                        <div className='price'>
                            $6
                        </div>


                    </div>

                    <div className="tags">
                        <div>PLA</div>
                        <div>Durable</div>
                        <div>In Stock</div>
                    </div>
                        <div className="details-box">
                                                <div className="details-button">
                        <p>View Details</p>
                        <FaArrowRight/>
                    </div>
                        </div>


                </div>
                <div className='product-card'>
                    <div className="top">
                        <div className="stacked">
                            <h1 style={{fontSize: '1rem'}}>Gear Keychain</h1>
                            <sub style={{fontSize: '.6rem'}}>Keychains</sub>
                        </div>

                        <div className='price'>
                            $6
                        </div>


                    </div>

                    <div className="tags">
                        <div>PLA</div>
                        <div>Durable</div>
                        <div>In Stock</div>
                    </div>
                        <div className="details-box">
                                                <div className="details-button">
                        <p>View Details</p>
                        <FaArrowRight/>
                    </div>
                        </div>


                </div>
                <div className='product-card'>
                    <div className="top">
                        <div className="stacked">
                            <h1 style={{fontSize: '1rem'}}>Gear Keychain</h1>
                            <sub style={{fontSize: '.6rem'}}>Keychains</sub>
                        </div>

                        <div className='price'>
                            $6
                        </div>


                    </div>

                    <div className="tags">
                        <div>PLA</div>
                        <div>Durable</div>
                        <div>In Stock</div>
                    </div>
                        <div className="details-box">
                                                <div className="details-button">
                        <p>View Details</p>
                        <FaArrowRight/>
                    </div>
                        </div>


                </div>
            </div>

            </div>

        <div className="scroll">
            k
        </div>

    </div>
  )
}



export default HomeRevamp