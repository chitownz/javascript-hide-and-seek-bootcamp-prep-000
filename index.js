function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var inc = document.querySelectorAll('ul.ranked-list li')
  //debugger
  for (let i = 0; i < inc.length; i++) {
     inc[i].innerHTML = parseInt(inc[i].innerHTML) + n
   }
 }

 function deepestChild() {
   var selected = document.querySelector('div#grand-node div div div div')
   return selected
 }
