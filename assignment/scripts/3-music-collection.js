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
//end function

addToCollection('California Love', '2Pac', 1995);
addToCollection('Ballade No. 1', 'Chopin', 1836);
addToCollection('Andante spianato et grande polonaise brillante', 'Chopin', 1834);
addToCollection('Harvest Moon', 'Neil Young', 1992);
addToCollection('Strange Wierdos', 'Loudon Wainwright III', 2007);
addToCollection('Holy Hive', 'Holy Hive', 2021);

console.log('list of albums:', collection);
//added six albums and then logged to test

function showCollection(array){
    console.log('Number of albums in collection:', array.length);
    for(i=0; i<array.length; i++){
        console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
    };
    return true;
};

showCollection(collection);

//end showCollection function and logged test.

function findByArtist(artistSearch, array){
let songList=[];
for(i=0; i<array.length; i++){
    if (array[i].artist === artistSearch){
        songList.push(array[i]);
    };
};                              
return songList;
};

//time to test
console.log('Searching for Chopin in array, should return two objects:', findByArtist('Chopin', collection));

console.log('Searching for Mylie Cyrus in array, should return empty array:', findByArtist('Mylie Cyrus', collection));

//Test and function complete

//STRETCH GOALS

/*function search(artistSearch, yearPublishedSearch){
    let results=[];
    if(artistSearch===undefined ||yearPublishedSearch===undefined){
        return collection;
    }
   
    else{
        for(i=0; i<collection.length; i++){
        if(collection[i].artist===artistSearch && collection[i].yearPublished===yearPublishedSearch){
        results.push(collection[i]);
        }
    };
    return results;
};
};*/

function search(objectSearch){
    let result=[];
    //Here I was hoping to find a better way to do this. 
     if(objectSearch.artist===undefined || objectSearch.yearPublished===undefined){
         return collection;
     }
     else{
        for(i=0; i<collection.length; i++){
            if(
                collection[i].artist===objectSearch.artist &&
                collection[i].yearPublished===objectSearch.yearPublished
                ){
                    result.push(collection[i])
                ;}
        };
     };
     return result;
    };

console.log('test 1 should return Ballade No 1 object', search({artist: 'Chopin', yearPublished: 1836}));
console.log('test 2, should return empty array:', search({artist: 'Chopin', yearPublished: 1999}));
console.log('test 3, should return collection:', search({artist: 'Chopin'}));

//end of stretch 1



//Stretch two...

