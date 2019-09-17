/* Add all the required libraries*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  Listing.find({ name: 'Library West' }, function(err, list) {
    if (err) throw err;
    console.log(list);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.find({ code: 'CABL' }, function(err, list) {
    if (err) throw err;
  
    // object of the user
    console.log(list);

    Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
    if (err) throw err;
  });
  });



  // Listing.findOneAndRemove({ code: 'CABL' }, function(err, list) {
  //   if (err) throw err;
  
  // console.log(list, "rm");
  // });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsMemorial = function() {

  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, function(err, list) {
    if (err) throw err;
    console.log(list);
    // we have the updated user returned to us
  });
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

  Listing.find({}, function(err, listings) {
    if (err) throw err;
  
    console.log(JSON.stringify(listings, null, 1));
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
