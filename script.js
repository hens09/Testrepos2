
let x = 100;
console.log(x);

var y = {
    type: "maintype",
    age: 2,
    move: function() {
      console.log("moved");
    }
}

document.querySelector(".idiv").addEventListener("click", function(e){
  console.log(e);
  console.log(this);
})

$(".header1").click(function(e){
  console.log(e);
})

$(document).on("keydown", function(e){
  console.log(e);
})
