import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './Header.css'

// const Header = ({ siteTitle }) => ()

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset; 

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      })
    } else {
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/egg-icon.png')} height="40" />
          </Link>
          <Link to="/menu">Menu</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/book"><button>Book Now</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
