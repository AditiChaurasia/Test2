var nameofstudentsarray = [];

function submit() {
    var name_1 = document.getElementById("name1").value;
    var name_2 = document.getElementById("name2").value;
    var name_3 = document.getElementById("name3").value;
    var name_4 = document.getElementById("name4").value;

    nameofstudentsarray.push(name_1);
    nameofstudentsarray.push(name_2);
    nameofstudentsarray.push(name_3);
    nameofstudentsarray.push(name_4);

    console.log(nameofstudentsarray);
    document.getElementById("names").innerHTML = nameofstudentsarray;
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inline-block";
}

function sort() {
nameofstudentsarray.sort()
console.log(nameofstudentsarray);

document.getElementById("names").innerHTML = nameofstudentsarray;
}