//Profile Model which is template for Profiles created in mongoDB database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    UserID: {type:String, required: true},
    username: {type: String},
    firstName: { type: String}, 
    lastName: { type: String},
    imageUrl: { type: String, default:'/images/defaultAvatar.png'},
    dietPreference: [{type: String, enum: ['Vegetarian', 'Vegan', 'Gluten Free', 'Dairy Free','Pregnancy Friendly','None']}],
    allergies: {type: Array},//or String
    recipes: {type: Array},
    activity: [{type: String}], //will include past reviews on recipes
  });
  
  
  const Profile = mongoose.model('Profile', ProfileSchema);
  module.exports = Profile;