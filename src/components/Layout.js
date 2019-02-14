import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children, isDashboard } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </header>
      )
    } else {
      header = (
        <h2
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {!isDashboard && (
          <div
            style={{
              position: `fixed`,
              top: `8px`,
              right: `16px`,
              zIndex: `9999`
            }}
          >
            <Link to="/dashboard">Dashboard</Link>
          </div>
        )}
        {header}
        {children}
        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()}, Built with <span aria-label="love">💖</span> in
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by Bryan Besnyi<br />
          <p><a href="https://github.com/bbez1/gatsby-amplify-blog">Fork me on Github</a></p>
        </footer>
      </div>
    )
  }
}

export default Layout
