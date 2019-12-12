import React from 'react'
import Link from 'gatsby-link'
import Information from '../components/Information'


const IndexPage = () => (
  <div>
    <section id="home" className="section">
      <div className="container">
        <h1 className="has-text-centered">Fabler</h1>
        <h2>Create it, Your Way</h2>
      </div>
    </section>

    <section className="image_head">
      <img src={require('../img/headerdisplay.png')} width="1000" />
    </section>

    <section id="about">
    <div className="container columns">
      <div className="column is-half is-offset-one-quarter">
        <Information 
          title="The Ultimate Planner" 
          desc="Built with creators of all kinds in mind, Fabler is the perfect one-of-a-kind tool to develop narratives for many diverse hobbyists and proffesionals. Each built-in tool is crafted in a way that can benefit anyone on the planning spectrum, be it a screenwriter, novelist, story tracker, PhD student, and more. The options are limitless." 
        />
      </div>
    </div>

<hr />

    </section>

    

    <section id="components" className="section">
      <div className="container columns">
        <div className="components column is-half">
          <img src={require('../img/comps/c1.png')} width="300" />
          <img src={require('../img/comps/l.png')} className="d-end" width="300"/>
          <img src={require('../img/comps/p.png')} width="300"/>
          <img src={require('../img/comps/c2.png')} width="300"/>
        </div>

        <div className="column is-half comp-desc">
          <Information 
            title="Components First" 
            desc="Fabler is created so that Components come first, before anything. This list of components is endless as it supports individual notes, characters, locations, plots, & chapters which can all be tailered to the best use in your creative plan." 
          />
        </div>

      </div>

    </section>

    <hr />

    <section id="fields" className="section">
      <div className="container columns">

        <div className="column is-half comp-desc">
          <Information 
            title="Unlimited Fields" 
            desc="A plan should never be limited by what a program can offer. Paper doesn't and neither does fabler. With custom input fields, Fabler allows for unlimited customization within each component so that you can cater the necessary information needed to that component." 
          />
        </div>

        <div className="components column is-half">
          <img src={require('../img/fields/1.png')} width="300" />
          <img src={require('../img/fields/2.png')} className="d-end" width="300"/>
          <img src={require('../img/fields/3.png')} width="300"/>
          <img src={require('../img/fields/4.png')} width="300"/>
          <img src={require('../img/fields/5.png')} width="300"/>
          <img src={require('../img/fields/6.png')} width="300"/>
        </div>

      </div>

    </section>

    <hr />

    <section id="mobile" className="section">
      <div className="container columns">

          <div className="column is-half">
            <img src={require('../img/mobileapp.png')} width="300" />
          </div>
          
          <div className="column is-half">
            <Information title="A Perfect Mobile Friend" desc="Inspiration come to us at the most random of moments, therefore it was of utmost importance that Fabler came with a mobile companion that put the ability of quick note taking first while also including the full suite of tools available on the desktop app."/>
          </div>

      </div>

    </section>

    <footer>
      <div className="container">
        <div className="column is-full footer-head">
          <p>Preview Fabler Now</p>
        </div>
        <div className="columns">
            <div className="column is-half mobile-div">
                <a href="http://fabler-mobile.surge.sh/">Mobile</a>
            </div>

            <div className="column is-half desktop-div">
                <a href="http://fabler-desktop.surge.sh/">Desktop</a>
            </div>
        </div>
      </div>
    </footer>



    

  </div>


)

export default IndexPage
