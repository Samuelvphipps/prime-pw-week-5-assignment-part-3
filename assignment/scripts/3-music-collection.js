console.log('***** Music Collection *****')
let collection=[];
function addToCollection(title, artist, yearPublished){   
let object={};
 object.title=title;
 object.artist=artist;
 object.yearPublished=yearPublished;
 collection.push(object);
 return object;
}

addToCollection('2Pac', 'California Love', 1995);
addToCollection('Chopin', 'Ballade No. 1', 1836);
addToCollection('Chopin', 'Andante spianato et grande polonaise brillante', 1834);
addToCollection('Neil Young', 'Harvest Moon', 1992);
addToCollection('Daughter', 'Loudon Wainwright III', 2007);
addToCollection('Brooklyn Ferry', 'Holy Hive', 2021);
