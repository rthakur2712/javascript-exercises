const palindromes = function (str) {
    let cleanedStr = str.replace(" ",'').tolowerCase();
    let right = cleanedStr.size() - 1;
    let left = 0;
    while(left<=right){
      if(str[left]!==str[right]){
        return false;
      }
      else{
        left++;
        right--;
      }
    }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
