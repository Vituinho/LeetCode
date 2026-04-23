/* Two Sum

🧩 Problema
https://leetcode.com/problems/two-sum/

💡 Ideia
Usei HashMap para guardar valores já vistos.

⏱ Complexidade
- Tempo: O(n)
- Espaço: O(n) */

function twoSum(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if(map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i)
        }
    } 
}

console.log(twoSum([2,7,11,15], 9)); // [0, 1]