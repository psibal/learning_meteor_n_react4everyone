import React, {Component} from 'react';

export default class ResolutionsFrom extends Component {
  addResolution(event) {
     event.preventDefault();

     var text = this.refs.resolution.value.trim();

     // Llama al método expuesto por el servidor, con un callback para limpiar el campo.
     Meteor.call('addResolution', text, () => {
       this.refs.resolution.value = "";   
     });


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