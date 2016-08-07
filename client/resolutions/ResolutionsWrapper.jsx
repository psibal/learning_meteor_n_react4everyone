import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';


Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  constructor () {
    super();

    this.state = {
      subscription: { 
        resolutions: Meteor.subscribe("userResolutions")
      }
    };
  }

  componentWillUnmount() {
     this.state.subscription.resolutions.stop();
  }

  resolutions() {
  	return Resolutions.find().fetch();
  }


  render () {
  	return (
  		  <ReactCSSTransitionGroup 
             component="div"
             transitionName="route"
             transitionEnterTimeout={600}
             transitionAppearTimeout={600}
             transitionLeaveTimeout={400}
             transitionAppear={true} >

  		  <h1>My resolutions - {Session.get('test')}</h1>
  		  <ResolutionsForm />
          <ReactCSSTransitionGroup 
             className="resolutions"
             component="ul"
             transitionName="resolutionLoad"
             transitionEnterTimeout={600}
             transitionLeaveTimeout={400} >
             {
               this.resolutions().map( (resolution) => {
                  console.log(resolution._id);
                  return <ResolutionSingle key={resolution._id} resolution={resolution} />
               })
             }
          </ReactCSSTransitionGroup>
  		</ReactCSSTransitionGroup>
  	)
  }
}

