var division = document.createElement('div')
division.innerHTML=`<input type ="text" id="txt">
<button type="button" onClick="covid19()">Search</button>`
document.body.append(division);

let promise = new Promise((resolve,reject)=>{
    let covid19 = document.getElementById('txt').value;
    console.log(covid19);

    var request =new XMLHttpRequest();
    request.open('GET','https://data.covid19india.org/v4/min/timeseries.min.json');
        request.send();
        request.onload=function(){
            if(request.status==200){
                var data=JSON.parse(request.response)
resolve(data)
            }
            else{
                reject("some error ocurred")
            }
        }
    })
    promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)
        document.getElementById("covid").innerText="Covid19 overall cases: res"
    }
   
)
  


