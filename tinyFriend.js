function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){
    list = names[i];
    if(list.length < smallest.length){
    smallest = list;
    }
    
    }
    return smallest;
    }
    var result = tinyFriend(["mahi", "ahasan", "jakaria", "robel"]);
    console.log(result);
    