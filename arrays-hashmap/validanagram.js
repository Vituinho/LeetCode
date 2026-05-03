/* Valid Anagram

🧩 Problema
https://leetcode.com/problems/valid-anagram/

💡 Ideia
Usei HashMap para guardar valores já vistos.

⏱ Complexidade
- Tempo: O(n)
- Espaço: O(n) 

Given two strings s and t, return true if t is an anagram of s, and false otherwise. */

function isAnagram(s, t) {
    const map = new Map();

    if(s.length != t.length) return false;

    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }

    for(let i = 0; i < t.length; i++) {
        if(map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
            if(map.get(t[i]) < 0) return false
        } else {
            return false
        }
    }
    return true
}

console.log(isAnagram('sub', 'bus')); // 'car', 'bus'