console.log('***** Music Collection *****')
let collection=[];
function addToCollection(title, artist, yearPublished){
 let object={};
 object.title=title;
 object.artist=artist;
 object.yearPublished=yearPublished;
 collection.push(object);
}
addToCollection('2Pac', 'California Love', 1995);
addToCollection('Chopin', 'Ballade No. 1', 1836);
addToCollection