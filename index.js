let count = 0;
      const countElement = document.getElementById("count");

let total = document.getElementById("entries")


function save(){
     result = " "+ count + " - "
     total.innerText +=  result
     countElement.innerText = count - count
     count = 0
    

}

function incrementCount() {
     count++;
     countElement.innerText = count;
   }
     
   function decrementCount() {
     if (count > 0) {
       count--;
       countElement.innerText = count;
     }
}











