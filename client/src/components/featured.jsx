import React from 'react'
import Grid from './grid'

const Featured = () => {
  return (
<div className="featured">
          <Grid />
          <h1 className="featured-header">Featured</h1>
          <p className="featured-description">
            Popular picks from recent student runs
          </p>

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

          <div className="featured-product featured-product-two">
            <Grid />
            <p className="featured-product-name">Gear Keychain</p>
            <p className="featured-product-price">$6</p>
            <p className="featured-product-category">Keychains</p>
            <div className="buzzword buzzword-one">PLA</div>
            <div className="buzzword-two buzzword">Clean</div>
            <div className="in-stock buzzword-three buzzword">In stock</div>
            <div className="featured-details">
              <p className="view">View Detail</p>
              <FaArrowRight style={{ fontSize: "small" }} />
            </div>
          </div>

          <div className="featured-product featured-product-three">
            <Grid />
            <p className="featured-product-name">Gear Keychain</p>
            <p className="featured-product-price">$6</p>
            <p className="featured-product-category">Keychains</p>
            <div className="buzzword buzzword-one">PLA</div>
            <div className="buzzword-two buzzword">Matte</div>
            <div className="in-stock buzzword-three buzzword">In stock</div>
            <div className="featured-details">
              <p className="view">View Detail</p>
              <FaArrowRight style={{ fontSize: "small" }} />
            </div>
          </div>

          <div className="featured-product featured-product-four">
            <Grid />
            <p className="featured-product-name">Gear Keychain</p>
            <p className="featured-product-price">$6</p>
            <p className="featured-product-category">Keychains</p>
            <div className="buzzword buzzword-one">PETG</div>
            <div className="buzzword-two buzzword">Durable</div>
            <div className="no-stock buzzword-three buzzword">Out of stock</div>
            <div className="featured-details">
              <p className="view">View Detail</p>
              <FaArrowRight style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>  )
}

export default Featured