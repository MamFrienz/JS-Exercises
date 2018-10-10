//JavaScript code here*in 
//Task 2
console.log("External");

function sumArray(arr)
{
    var sum = 0;
    
    arr.forEach(function(value, index)
    {
        sum = sum + value;
    });
    
    return sum;
}

console.log(sumArray([2,4,6,8]));

//Task 3
function checkEmail(emailString){
    var emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    var match = emailFormat.test(emailString);
    return match;
}
    
    console.log(checkEmail("mamwithbrothers.com"));
    console.log(checkEmail("mamwithbrothers.com"));


// Task 4
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
    
function getReadingStatus(index){
    var book = library [index];
    return book.readingStatus;
    //return library[index].readingStatus
}

console.log(getReadingStatus(1));
console.log(getReadingStatus(0));
console.log(getReadingStatus(2));


//Task 5

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   function addItem(newItem){
       cart.push(newItem);
       console.log(cart);
       
   }
   var newItem={
       name: 'watch',
       price:64,
       quantity:1
   };
   addItem(newItem);
   
   //Task 5b
   
   function sortCart(){
  var Nlength = cart.length;
  var temp;
  for(var i = 0; i <= Nlength - 1; ++i) {
    for (var j = 0; j <= Nlength - 1; ++j) {
      if(cart[i].name < cart[j].name) {
        temp = cart[i];
        cart[i] = cart[j];
       cart[j] = temp;
      }
    }
  }
  return cart;
}

console.log(sortCart());

   //Task 5c
   
function findByName(name){
       var newItem= [];
       for(var i=0;i<(cart).length;i++)
       if(cart[i].name=== name)
       { 
          newItem.push(cart[i]);
   }
   return newItem;
   
   }
   
console.log(findByName('watch'));
   
   //Task 5d
   
   function totalPrice(quantity){
    var amount=0;
    for(var i=0;i<cart.length;i++)
    {
       amount=amount+cart[i]*quantity*cart[i].price;
   }
   return amount;
   }
   
   console.log(totalPrice());