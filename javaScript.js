let arr = [{Name: 'CrawligWeb',Time: 5,Divisions: 5},
{Name:' Scraping Content',Time: 10,Divisions: 5},
{Name: 'Semantic Modeling',Time: 5,Divisions: 4},
{Name: 'Natural language processing ',Time: 8,Divisions: 5},
{Name: 'Competitive Analysis',Time: 5,Divisions: 4}
];

    
    var inputVal = document.getElementById("input-field");
   var change=document.getElementById('a');
 var collection=document.getElementById('collection')
    // var a=inputVal.value
  inputVal.addEventListener('keyup',enable)  
  function enable(){
    var value=inputVal.value
    if(value === "" ){ 

    change.style.backgroundColor='skyblue'
    
}

  else
  {
    change.style.backgroundColor='blue'
   
    change.addEventListener('click',show,{once : true})
   
 
}}
function show(){
      
    change.style.backgroundColor='skyblue'
    
    inputVal.style.color='lightgray'
    let c=document.getElementById('a')
   
    c.innerHTML=''
    // fa.style.display='block'
    
    // fa.style.display='block'
    let loader=`<i class="fa fa-circle-o-notch fa-spin " id="d"></i>`
    c.innerHTML=loader
   

for(var i=0;i<arr.length;i++){
var div= document.createElement('div')
    div.className='div'
    collection.appendChild(div)
   
const label=document.createElement('label')
label.className = 'collection-item'
div.append(label)
// div.style.backgroundColor='pink'
 let span=document.createElement('span')
 span.className='span'
 
div.append(span)  
var item=arr[i].Name
label.appendChild(document.createTextNode(item))
var textnode=document.createTextNode('...0')
span.appendChild(textnode)


let inter=((arr[i].Time)/(arr[i].Divisions))
console.log(inter)
const per=(inter/arr[i].Time)*100
console.log(per)
let timer=0

// for(let j=0;j<arr.length;j++){


 const u=setInterval(function() {
    if(timer===100)
    {
        // console.log(timer)
       
        clearInterval();
    }
    else{
      timer=timer+per
    //    b.nodeValue += timer
    const a=document.getElementsByClassName('span').innerHtml=timer +"%"
 console.log(a)
 textnode.nodeValue=a
    }
    
}, inter*100)

 document.getElementById("a").disabled=true
 change.style.backgroundColor='skyblue'
 console.log(u)

}

console.log(collection)

}



