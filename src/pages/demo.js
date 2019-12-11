import React from 'react'
import Link from 'gatsby-link'


const DemoPage = () => (
    <div>
    <section id="demo">
      <div className="container">
        <div className="DemoHeader">
        <h1 className="has-text-centered">Demo</h1>
        </div>
        <div className="columns">
            <div className="column is-half">
                <a href="http://fabler-mobile.surge.sh/">Mobile</a>
            </div>

            <div className="column is-half">
                <a href="http://fabler-desktop.surge.sh/">Desktop</a>
            </div>
        </div>
        <p className="has-text-white-ter has-text-centered disclaimer is-size-7">
            This preview was created in Framer X and is not suitable to being used as a web application. Bugs will be present and certain elements will not display as shown in the images. Web Application sizes may reach up to 150 mb. <br />  Creations of the Maze Runner are Copyright © 2019 James Dashner.
        </p>
        <p className="has-text-white-ter has-text-centered disclaimer">
            Special Thanks to <a href="https://surge.sh/">surge.sh</a> for their free hosting.
        </p>
      </div>
    </section>
  </div>


)

export default DemoPage
