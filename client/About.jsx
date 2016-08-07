import React, {Component} from 'react';

export default class About extends Component {
    setVar() {
    	// key: test, value: Hello
    	Session.set('test', 'Hello');

        // Habilita la pantalla de login
    	Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

	render () {
		return (
			<div>
			  <h1>About Us</h1>
			  <p>Art party semiotics 8-bit skateboard. Lomo neutra drinking vinegar man braid ethical narwhal, vinyl tattooed tofu pitchfork plaid. Venmo pork belly fap, master cleanse helvetica banh mi gastropub kitsch hella. Pop-up keffiyeh sartorial selfies sustainable marfa. Seitan chambray VHS, viral brooklyn biodiesel health goth single-origin coffee yr quinoa. Retro kitsch lumbersexual, hoodie bespoke fap chambray. Mixtape vegan kale chips keffiyeh.</p>
			  <button onClick={this.setVar}>Sign Up</button>
			</div>
		)
	}

}
