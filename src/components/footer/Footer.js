import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Foot'>
        <div className="foot-container">
            <div className="foot-wrap">
                <div className="foot-left">
                    <div className="foot-one">
                        <a href=""><img src="https://sciencelogic.com/wp-content/uploads/2021/03/foot-logo.svg" alt="" /></a>
                        <div className="foot-social">
                            <ul>
                                <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                <li><FontAwesomeIcon icon={faTwitter}/></li>
                                <li><FontAwesomeIcon icon={faFacebook}/></li>
                                <li><FontAwesomeIcon icon={faYoutube}/></li>
                            </ul>
                        </div>
                        <div className="foot-btn">
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
                
                <div className="foot-right">
                    <div className="foot-two">
                        <li><span className='menu-title'>Platform</span></li>
                        <nav>
                            <ul>
                                <li><a href="">Platform Overview</a></li>
                                <li><a href="">Hybrid Cloud Monitoring</a></li>
                                <li><a href="">Multi-Cloud Monitoring</a></li>
                                <li><a href="">Network Monitoring</a></li>
                                <li><a href="">Integrations</a></li>
                                <li><a href="">Trust Center</a></li>
                                <li><a href="">Technology Partners</a></li>
                                <li><a href="">Zebrium Free Trial</a></li>
                                <li><a href="">Request on SL1 On-Premises Trial</a></li>
                                <li><a href="">Request on SL1 SaaS Trial</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="foot-three">
                        <div className="menu-3-top">
                            <li><span className='menu-title'>Solutions</span></li>
                            <nav>
                                <ul>
                                    <li><a href="">AIOps Digital Transformation</a></li>
                                    <li><a href="">Business Service Management</a></li>
                                    <li><a href="">Tool Consolidation & Modernization</a></li>
                                    <li><a href="">IT Workflow Automation</a></li>
                                    <li><a href="">IT Infrastructure Monitoring</a></li>
                                    <li><a href="">NetWork Management</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="menu-3-bottom">
                            <li><span className='menu-title'>Customer Success</span></li>
                            <nav>
                                <ul>
                                    <li><a href="">Our Customers</a></li>
                                    <li><a href="">Support</a></li>
                                    <li><a href="">Training</a></li>
                                    <li><a href="">Success Center</a></li>
                                    <li><a href="">Product News-Golden Gate</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="foot-four">
                        <li><span className='menu-title'>Resources</span></li>
                        <nav>
                            <ul>
                                <li><a href="">Analyst Reports</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Data Sheets, Solutions Guides,and Case Studies</a></li>
                                <li><a href="">eBooks</a></li>
                                <li><a href="">Events</a></li>
                                <li><a href="">Videos</a></li>
                                <li><a href="">White Papers</a></li>
                                <li><a href="">Getting Started with IT Monitoring</a></li>
                                <li><a href="">Glossary</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="foot-five">
                        <li><span className='menu-title'>Company</span></li>
                        <nav>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Contact Channel Partners</a></li>
                                <li><a href="">Deal Registration</a></li>
                                <li><a href="">Leadership</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                
                
            </div>
            <div className="foot-bottom">
                <div className='bottom-1'>
                    <h2>Also of Interest</h2>
                    <ul>
                        <li><a href="">Industry-First Context Infused AIOps Platform</a></li>
                        <li><a href="">Why ScienceLogic</a></li>
                        <li><a href="">AIOps Platform</a></li>
                    </ul>
                </div>
                <div className="bottom-img">
                <img src="https://sciencelogic.com/wp-content/themes/science-logic/assets/images/colors-dots.svg" alt="" />
                </div>
                
                <div className="foot-copy">
                    <p><span>&copy;</span>2024 ScienceLogic</p>
                </div>
                <div className="privacy-terms">
                    <ul>
                        <li><a href="">Legal</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">508C</a></li>
                        <li><a href="">GDPR</a></li>
                        <li><a href="">Cookies Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer