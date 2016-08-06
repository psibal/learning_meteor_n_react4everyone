Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", function() {
  return Resolutions.find();
});