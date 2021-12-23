console.log("Ajax Tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)
function buttonClickHandler(){
    console.log('You have clicked the button FetchBtn');

    //instantiate xhr object
    const xhr = new XMLHttpRequest();

    //open object

    //GET method
    //xhr.open('GET', 'harry.txt', true);
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //POST method
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    //xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.getResponseHeader('Content-type', 'application/json');

    //what to do on progress
    xhr.onprogress = function(){
        console.log('OnProgress');
    }

    //on ready state change
/* readyState	
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready*/
    xhr.onreadystatechange = function(){
        console.log('ready state is ', xhr.readyState);
    }
    
    //onload if no error what to do.....if error what to do
    xhr.onload=function(){
        if(this.status === 200){
/*200: "OK"
403: "Forbidden"
404: "Page not found"*/
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
        
    }

    //send request
     //xhr.send();

    //url encoded
    //params= "name=test&salary=123&age=23";

    //as json
    params = {"name":"test2653","salary":"123","age":"23"};
    xhr.send(params);
   

    console.log("We are done");
}


//populate btn and employee list creation
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log('You have clicked the button popBtn');

    //instantiate xhr object
    const xhr = new XMLHttpRequest();

    //open object

    //GET method
    //xhr.open('GET', 'harry.txt', true);
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    
    //onload if no error what to do.....if error what to do
    xhr.onload=function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            for (var i = 0; i < obj.data.length; i++) {
                var data = obj.data[i];
                console.log(data);
            }
            //data = JSON.parse(data);

            let list = document.getElementById('list');
            str = "";
            for (key1 in data){
            for (key2 in key1)
            {
               
                str += `<li>${data[key1][key2]} </li>`;
           }
        }
            list.innerHTML=str;
        }
        else{
            console.log("Some error occured")
        }
        
    }

    xhr.send();
   

    console.log("We are done fetching employees!");
}
