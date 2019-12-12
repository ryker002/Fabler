import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import "./index.css"

import Header from '../components/Header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'The preview website for the Story Planner Prototype made for a Capstone Project by James Lewandowski' },
        { name: 'keywords', content: 'Maryville University, Maryville, Capstone, Interactive Design, Web Development, React, Framer X' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
