// The two arrays I'm working with, to do and all done
var myToDoArray = ["Do your Friday-dance", "Watch The Lion King", "Have a mojito", "Meet your most stupid friend", "Try to make your own beer"];
var myDoneArray = ["Have strawberries with milk", "Buy five new puppies"];

// Loop through to do-list
function printLists(){
    var myFullPrintedToDo = " ";

    for(var i = 0; i < myToDoArray.length; i++) {
        myFullPrintedToDo += "<li><i onclick='moveItem(" + i + ")' class='far fa-square' id='" + i + "'></i><p>" + " " + myToDoArray[i] + "</p></li><hr>";
    };

    myFullPrintedToDo += " ";

    document.getElementById("printingMyArray").innerHTML = myFullPrintedToDo;

    // Loop through done list
    var myFullPrintedDone = " ";

    for(var i = 0; i < myDoneArray.length; i++) {
        myFullPrintedDone += "<li><i onclick='moveItemBack(" + i + ")' class='far fa-check-square' id='" + i + "'></i><i class='trashcan far fa-trash-alt' onclick='removeItem(" + i + ")'></i><p class='strikethrough'>" + " " + myDoneArray[i] + "</p></li><hr>";
    };

    myFullPrintedDone += " ";

    document.getElementById("printingDone").innerHTML = myFullPrintedDone;
}

// This function adds an item into the to do array and makes sure that you have some kind of input when pressing Add your to do
function addItem(){
    var inputValue = document.getElementById("addItemValue").value;

    if (!inputValue.match(/[a-öA-Ö0-9!-@#$^_:,.]/)){
        alert("You have to write something to add to your todo-list");
    } else {
        var inputValue = document.getElementById("addItemValue").value;
        myToDoArray.unshift(inputValue);
        printLists();
        document.getElementById("addItemValue").value = "";
    }
}

// Moves your checked item to myDoneArray and all done-list
function moveItem(id){
    var moveThis = myToDoArray.splice(id, 1);
    var stringMoveThis = moveThis.toString();
    myDoneArray.push(stringMoveThis);
    printLists();
}

// Moves selected item back to myToDoArray and to do-list
function moveItemBack(id){
    var moveThisBack = myDoneArray.splice(id, 1);
    var stringMoveThisBack = moveThisBack.toString();
    myToDoArray.push(stringMoveThisBack);
    printLists();
}

// Remove item from all done-list and myDoneArray
function removeItem(id){
    myDoneArray.splice(id, 1);
    printLists();
}

// Sort to do list A-Z
function sortToDoAtoZ(){
    myToDoArray.sort(function(a, b){
        var x = a.toLowerCase();
        var y = b.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    document.getElementById("printingMyArray").innerHTML = myToDoArray;
    printLists();
}

// Sort to do list Z-A
function sortToDoZtoA(){
    myToDoArray.sort(function(a, b){
        var x = a.toLowerCase();
        var y = b.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    myToDoArray.reverse();
    document.getElementById("printingMyArray").innerHTML = myToDoArray;
    printLists();
}