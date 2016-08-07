import React, {Component} from 'react';

export default class ResolutionsFrom extends Component {
  addResolution(event) {
     event.preventDefault();

     var text = this.refs.resolution.value.trim();

     if(text) {
       // Llama al método expuesto por el servidor, con un callback para limpiar el campo.
       Meteor.call('addResolution', text, (error, data) => {
         if (error) {
            console.log('Please login beofre submitting');

            /*
            Bert.alert('Please login before submitting',
                       'danger',
                        'fixed-top',
                        'fa-frown-o');
            */
         } else {
            this.refs.resolution.value = "";
         }
       });
     }
  }


	render () {
		return (
		<div>
  		  <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
  		     <input type="text" ref="resolution" placeholder="Finish React Meteor Series" />
  		  </form>
  		</div>
		)
	}
}