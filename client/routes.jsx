import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';

import About from './About.jsx';


FlowRouter.route('/', {
  action () {
    mount(MainLayout, {
    	content: (<ResolutionsWrapper />)
    })
  }
});

FlowRouter.route('/about', {
  action () {
    mount(MainLayout, {
    	content: (<About />)
    })
  }
});

FlowRouter.route('/resolutions/:id', {
  action (params) {
    mount(MainLayout, {
    	content: (<ResolutionDetail id={params.id}/>)
    })
  }
});