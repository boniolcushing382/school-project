function findLongestCommonPrefix(strs) {
  if (strs.length === 0 || strs[0] === "") {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

// Example usage
console.log(findLongestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(findLongestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
