import React from 'react'
import Link from 'gatsby-link'
import Information from '../components/Information'


const IndexPage = () => (
  <div>
    <section id="home">
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
          title="The Ultimate Planning Tool, for anyone" 
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante augue, venenatis condimentum dignissim non, convallis in orci. Praesent ac malesuada est. Morbi quam tortor, ornare in elit at, ultrices viverra risus. Quisque sed felis quam. Mauris quis mauris efficitur, rhoncus ligula a, pulvinar lectus. Nam maximus orci vitae quam tincidunt porta. Sed nibh purus, lacinia eget dictum in, gravida ut risus. " 
        />
      </div>
    </div>

<hr />

    </section>

    

    <section id="components">
      <div className="container columns">
        <div className="components column is-half">
          <img src={require('../img/comps/c1.png')} width="300" />
          <img src={require('../img/comps/l.png')} className="d-end" width="300"/>
          <img src={require('../img/comps/p.png')} width="300"/>
          <img src={require('../img/comps/c2.png')} width="300"/>
        </div>

        <div className="column is-half comp-desc">
          <Information 
            title="The Ultimate Planning Tool, for anyone" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante augue, venenatis condimentum dignissim non, convallis in orci. Praesent ac malesuada est. Morbi quam tortor, ornare in elit at, ultrices viverra risus. Quisque sed felis quam. Mauris quis mauris efficitur, rhoncus ligula a, pulvinar lectus. Nam maximus orci vitae quam tincidunt porta. Sed nibh purus, lacinia eget dictum in, gravida ut risus. " 
          />
        </div>
      </div>

    </section>



    

  </div>


)

export default IndexPage
