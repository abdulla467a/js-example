//1.................

function str_con_cat(str1, str2) {
    const m = Math.min(str1.length, str2.length);
  
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
  }
  
  console.log(str_con_cat("Python", "JS"));
  console.log(str_con_cat("ab", "cdef"));

  //2.............

  function first_last_same(nums)
   {
    var end = nums.length - 1;
    if (nums.length >= 1){
       return nums[0] == nums[end];
    } else {return false;}
}

console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20])); 


//3................


function contains13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 5]));  
console.log(contains13([2, 3]));  
console.log(contains13([7, 5]));

//4...................

function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest_string(['a', 'aa', 'aaa','aaaaa','aaaa']));

  //5...........

  function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle.";
    }
    if(angle === 90) {
      return "Right angle.";
    }
    if(angle < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }
  
  console.log(angle_Type(47))
  console.log(angle_Type(90))
  console.log(angle_Type(145))
  console.log(angle_Type(180))
