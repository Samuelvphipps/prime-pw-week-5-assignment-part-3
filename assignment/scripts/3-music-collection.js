console.log('***** Music Collection *****')
let collection=[];
function addToCollection(title, artist, yearPublished){   
let object={};
 object.title=title;
 object.artist=artist;
 object.yearPublished=yearPublished;
 collection.push(object);
 console.log('Song added:', object);
 return object;
}

addToCollection('California Love', '2Pac', 1995);
addToCollection('Ballade No. 1', 'Chopin', 1836);
addToCollection('Andante spianato et grande polonaise brillante', 'Chopin', 1834);
addToCollection('Harvest Moon', 'Neil Young', 1992);
addToCollection('Daughter', 'Loudon Wainwright III', 2007);
addToCollection('Brooklyn Ferry', 'Holy Hive', 2021);

console.log('list of songs:', collection);

function showCollection(array){
    console.log('Number of songs in collection:', array.length);
    for(i=0; i<array.length-1; i++){
        console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
    };
    return true;
}
