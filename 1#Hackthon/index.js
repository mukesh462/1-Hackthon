
document.body.innerHTML=` <div class="container">
<div class="head">Search Inforation</div>
<h2>Nationalize API</h2>
<input type="text" name="inp" id="inp" required !important" placeholder="Enter your Register Name">
<div class="button"> 
 <button class="btn btn-primary search" onclick= "output()">Search</button>
<button class="btn btn-primary   clear"  >Clear</button>
</div>
<div class="output">

</div>

</div>
`


 async function get(){
    document.querySelector(".output").getElementsByClassName.display="block"

     try{
    var Enpvalue= document.querySelector("#inp").value;
    console.log(Enpvalue);
    var data = await fetch(`https://api.nationalize.io/?name=${Enpvalue}`,
    { method:"GET"}
    )
    var getval = await data.json();
    return getval

     }
     catch(error){
         alert("something Wrong")

     }

}
 
async function output(){

    try{
      const data = await get()
      console.log(data)
      let nodata;
      if(data.country ==[]){
          return nodata
    }
      document.querySelector(".output").innerHTML=`
      <div class="green">
      <p>Country Name: ${data.name}</p>
      <p>Country ID-1: ${data.country[0].country_id} </p>
      <p>Probability : ${data.country[0].probability}</p>
      <p>Country ID-2: ${data.country[1].country_id}</p> 
      <p> Probability : ${data.country[1].probability}</p>
</div>
      
      `
      document.querySelector(".output").style.display="block"

}catch (nodata){
   var falsy= document.querySelector(".output").innerHTML=`<h3>User Data Not Found....!</h3>`
   document.querySelector(".output").style.display="block"



}
    
}
var clear =document.querySelector(".clear").addEventListener("click",function(){
    location.reload()
})