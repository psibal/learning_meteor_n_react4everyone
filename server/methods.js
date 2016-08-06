
// Crea metodos que pueden ser llamados desde el cliente
Meteor.methods ({
  addResolution(resolution) {
  	 Resolutions.insert({
     	text: resolution,
     	complete: false,
     	createdAt: new Date()
     });
  }
});