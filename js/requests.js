var TOKEN = localStorage.getItem("MYTOKEN");
// YXl4YW46MTIzNDU=
console.log(TOKEN);

function request1click() {
    var REQUEST_URL = "https://localhost:7100/api/cities/";
    console.log("TOKEN " + TOKEN);
    let id = document.getElementById("request1input").value;
    if (id != -1) {
        REQUEST_URL += id;
    }
    else {
        alert("Enter city ID");
        return;
    }
    var obj = document.getElementById("request1response");
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "bearer " + TOKEN },
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = "Error";
            alert("STATUS CODE : " + error.status + "\nResponse Text : " + error.responseText);
        }
    });
}

function request2click() {
    var REQUEST_URL = "https://localhost:7100/api/Cities/Detail?id=";
    console.log("TOKEN " + TOKEN);
    let id = document.getElementById("request2input").value;
    if (id != -1) {
        REQUEST_URL += id;
    }
    else {  
        alert("Enter city ID");
        return;
    }
    var obj = document.getElementById("request2response");
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "bearer " + TOKEN },
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = "Error";
            alert("STATUS CODE : " + error.status + "\nResponse Text : " + error.responseText);
        }
    });
}   

function request3click() {
    var REQUEST_URL = "https://localhost:7100/api/Cities/Photos/";
    console.log("TOKEN " + TOKEN);
    let id = document.getElementById("request3input").value;
    if (id != -1) {
        REQUEST_URL += id;
    }
    else {
        alert("Enter city ID");
        return;
    }
    var obj = document.getElementById("request3response");
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "bearer " + TOKEN },
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = "Error";
            alert("STATUS CODE : " + error.status + "\nResponse Text : " + error.responseText);
        }
    });
}

function request4click() {
    var REQUEST_URL = "https://localhost:7100/api/Cities/SinglePhoto/";
    console.log("TOKEN " + TOKEN);
    let id = document.getElementById("request4input").value;
    if (id != -1) {
        REQUEST_URL += id;
    }
    else {
        alert("Enter city ID");
        return;
    }
    var obj = document.getElementById("request4response");
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "bearer " + TOKEN },
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = "Error";
            alert("STATUS CODE : " + error.status + "\nResponse Text : " + error.responseText);
        }
    });
}

// =============================================================

function request5click() {
    var REQUEST_URL = "https://localhost:7100/api/Cities/add";
    console.log("TOKEN " + TOKEN);
    var jsonString = document.getElementById("jsoninput").value;
    const modifiedJsonString = jsonString.replace(/\n/g, '').trim();
    const jsonObject = JSON.parse(modifiedJsonString);

    var obj = document.getElementById("request5response");
    $.ajax({
        url: REQUEST_URL,
        type: 'POST',
        headers: { "Authorization": "bearer " + TOKEN },
        contentType: 'application/json',
        data: JSON.stringify(jsonObject),
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = "Error";
            alert("STATUS CODE : " + error.status + "\nResponse Text : " + error.responseText);
        }
    });
}