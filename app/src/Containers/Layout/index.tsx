
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import './styles.scss';
import { Divider, Header, Icon } from 'semantic-ui-react'
import SocialMedia from '../../components/SocialMedia'

const Layout = ({children,title})=>{
  return(<>
        <div className={'container'}>
          <div className={'title-item'}>
            <Divider horizontal style={{color:"white"}}>
              <Header as='h2' style={{color:"white"}}>
                <Icon name='react' />
                {title}
              </Header>
            </Divider>
          </div>
          <div className={'body-item'}>
            {children}
          </div>
          
          <footer className='footer'>
            <hr className='footer-divider'/>
            <div className='footer-wrapper'>
              <div className='footer-item-socialmedia'>
                <a style={{ paddingLeft:'10px',fontSize:'30px'}} target='_blank' href="http://www.linkedin.com/in/matias-lareo">
                  <i className="fa fa-linkedin"></i> 
                </a>
                <a style={{ paddingLeft:'10px', fontSize:'30px'}} target='_blank' href="http://www.linkedin.com/in/matias-lareo">
                  <i className="fa fa-github"></i> 
                </a>
                <a style={{ paddingLeft:'10px', fontSize:'30px'}} target='_blank' href="http://www.linkedin.com/in/matias-lareo">
                  <i className="fa fa-facebook"></i> 
                </a>
              </div>
              <h4 className='footer-item-copyright'>&copy; Copyright: Matias Lareo</h4>
            </div>
          </footer>
        </div>
      </>)
};

export default withRouter(Layout);
