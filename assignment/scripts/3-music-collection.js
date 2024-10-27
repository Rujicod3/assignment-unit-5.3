console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

  // This is the collection array to contain albums.
let myCollection = []

 // Creates a new album object with the specified properties. The
 // new album object is added to the specified collection parameter
 // and then returned to the caller.
 //
 // collection: An array to add the new object to. Must be valid.
 // title: The string that represents the title of the album.
 // artist: The string that represents the artist of the album.
 // yearPublished: The year the album was published.
 //
 // returns: The new album object with the specified properties. 
function addToCollection(collection, title, artist, yearPublished) {
  // addToCollection is coming from the outside
  // Add the item into the collection (param) array
  // create a collection thats also able to be sorted into albums
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
      }
    
      collection.push(record);
  return record;
}
console.log(addToCollection(myCollection, 'Running Up That Hill (A Deal With God) [2018 Remaster]','Kate Bush', '2018'))
console.log(addToCollection(myCollection, 'Die With A Smile', 'Bruno Mars & Lady Gaga', '2024'))
console.log(addToCollection(myCollection, 'Good Things Change', 'Cam Wehunt', '2023'))
console.log(addToCollection(myCollection, 'Lies Lies Lies', 'Morgan Wallen', '2024'))
console.log(addToCollection(myCollection, 'So Small', 'Carrie Underwood', '2007'))
console.log(addToCollection(myCollection, 'Truth Truth Truth', 'Morgan Wallen', '2024'))

console.log(myCollection)






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
