//Task 1
function largest(list){
  let largest=list[0]
  for(let l=0; l < list.length; l++){
    if (list[l]>largest){
      //update
      largest = list[l];
    }
  }
  return largest;
}

//Task 2
function reverse(list){
let reverselist = [];
for(c=0; c < list.length; c++){
    reverselist.push(list[list.length-c-1])
    }
        return reverselist;
}

//Task 3
function cotains(list,e){
let containslist = [];
  for(a=0; a < list.length; a++){
    if(list[a]== e){
      return "true"
    }
  }
  return "false"
}

//Task 4
function oddElements(list){
    let oddlist = [];
    for(let b=1; b < list.length; b = b + 2){
        oddlist.push(list[b]);
    }
    return oddlist;
}

//Task 5
function total(list){
  let sum =0;
  for(let a=0; a < list.length; a++)
  sum = sum + list[a]
  return sum;
}

//Task 6
function isPalindrome(list){
let palindrome = [];
for(a=0; a < (list.length)/2; a++){
    if (list[a] != list[list.length-1-a]){
        return false;
    }
}
return true;
}

//Task 7
//Do second to last
function recursiveTotal(list){

}
//Task 8
function concatenate(listA, listB){

}

//Task 9
function weave(listA, listB){

}

//Task 10
//Attempt last
function mergeInOrder(listA, listB){

}

//Task 11
function rotate(list,k){

}

//Task 12
function fibonacci(){

}
console.log(cotains([0,1,2,3,4,5,6,7,8],3));
console.log(total([0,1,2,3,4,5,6,7,8]));
console.log(largest([0,1,2,3,4,5,6,7,8]));
console.log(oddElements([0,1,2,3,4,5,6,7,8]));
console.log(isPalindrome([0,1,2,3,4,5,6,7,8]));
console.log(reverse([0,1,2,3,4,5,6,7,8]));
