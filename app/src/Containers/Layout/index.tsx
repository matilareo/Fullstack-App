
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import './styles.css';
import { Divider, Header, Icon } from 'semantic-ui-react'

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
        </div>
      </>)
};

export default withRouter(Layout);
