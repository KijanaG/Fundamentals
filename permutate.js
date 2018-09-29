function permutation(one, two){
    var object = {};
    var dictionary = {};
    for(var i=0;i<one.length;i++){
        if(!object[one[i]]){
            object[one[i]] = 1;
        } else {
            object[one[i]] +=1;
        }
    }
    var size = Object.keys(object).length;
    console.log(size);
    // console.log(object);
    for(var j=0;j<two.length;j++){
        if(!dictionary[two[j]]){
            dictionary[two[j]] = 1;
        } else {
            dictionary[two[j]] +=1;
        }
    }
    var length = Object.keys(dictionary).length;
    console.log(length);
    var objChoice;
    if(length > size){
        objChoice = dictionary;
    } else {
        objChoice = object;
    }
    // console.log(dictionary);
    for(obj in objChoice){
        if(object[obj] != dictionary[obj]){
            return false;
        }
    }
    return true;
}
console.log(permutation("Biggie", "Baggie"));
console.log(permutation("iBgige", "iBggie"));
console.log(permutation("abrd5y", "yrd5ab"));
console.log(permutation("fgdecba", "abcdefg"));