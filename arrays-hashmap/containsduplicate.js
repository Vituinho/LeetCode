/* Contains Duplicate

🧩 Problema
https://leetcode.com/problems/contains-duplicate

💡 Ideia
Usei HashMap para guardar valores já vistos.

⏱ Complexidade
- Tempo: O(n)
- Espaço: O(n) 

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

function containsDuplicate(nums) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            return true
        } else {
            map.set(nums[i], i)
        }
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1])); // 'car', 'bus'