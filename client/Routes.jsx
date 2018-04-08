import React , { Component} from 'react';

import {MainLayout} from './MainLayout.jsx'

import {mount} from 'react-mounter';

import About from './UI/About.jsx'

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    })
  }
})
