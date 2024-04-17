//  Create a function that always returns True/true for every item in a given list. However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr){
    let flag = true
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'flick'){
        flag == false ? flag = true : flag = false
      } 
      arr[i] = flag
    }
    return arr
}

