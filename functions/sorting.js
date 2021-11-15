import boy_names from '../data/boy_names_2018.json';
import girl_names from '../data/girl_names_2018.json';
import boy_phonetics from '../data/boy_phonetics_2018.json';
import girl_phonetics from '../data/girl_phonetics_2018.json';
import React from 'react';
import { Button } from 'react-native';

// Wagner-Fischer algorithm
function difference(str1, str2) {

    const m = str1.length;
    const n = str2.length;

    let matrix = Array.from({
        length: m + 1
    },  () => new Array(n + 1).fill(0));

    for (let i = 1; i < m + 1; i++) {
        matrix[i][0] = i;
    }
    
    for (let j = 1; j < n + 1; j++) {
        matrix[0][j] = j;
    }

    for (let j = 1; j < n + 1; j++) {
        for (let i = 1; i < m + 1; i++) {
            let cost;
            if (str1.charAt(i) === str2.charAt(j)) {
                cost = 0;
            } else {
                cost = 1;
            }
            matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
        }
    }
    return matrix[m][n];

}

// export default function Sorting({ name, mode }) {
export default function Sorting(props) {
    // console.log(props);
    const mode = props['mode'];
    const name = props['name'];
    if (mode == 'MtF') {
        
        const isGivenName = (element) => element === name;
        let phonetic_index = boy_names['names'].findIndex(isGivenName);
        let phonetic = boy_phonetics[phonetic_index];
        let arr = girl_phonetics.slice();
        arr.sort(function(a, b) {
            let a_diff = difference(phonetic, a);
            let b_diff = difference(phonetic, b);
            if (a_diff < b_diff) {
                return -1;
            } else if (a_diff > b_diff) {
                return 1;
            } else {
                return 0;
            }
        });
        
        let result = [];
        let copy = girl_phonetics.slice();
        let i = 0;
        // let isGivenCurr = (element) => element === arr[0];
        // console.log(arr[0]);
        // console.log(copy.findIndex(isGivenCurr));
        // console.log(copy);
        // console.log(girl_names['names'][copy.findIndex(isGivenCurr)]);
        while (i < 10) {
            // let isGivenCurr = (element) => element === arr[i];

            let curr = copy.map((elm,idx) => elm === arr[i] ? idx : '').filter(String);
            let j = 0;
            while (j < curr.length) {
                result.push(girl_names['names'][curr[j]]);
                // console.log(arr[i]);
                j++;
            }
            i += j;
        }
        result = result.slice(0, 10);
        console.log(result);
        
    } else {
        const isGivenName = (element) => element === name;
        let phonetic_index = girl_names['names'].findIndex(isGivenName);
        let phonetic = girl_phonetics[phonetic_index];
        let arr = boy_phonetics.slice();
        arr.sort(function(a, b) {
            let a_diff = difference(phonetic, a);
            let b_diff = difference(phonetic, b);
            if (a_diff < b_diff) {
                return -1;
            } else if (a_diff > b_diff) {
                return 1;
            } else {
                return 0;
            }
        });
        
        let result = [];
        let copy = boy_phonetics.slice();
        let i = 0;
        // let isGivenCurr = (element) => element === arr[0];
        // console.log(arr[0]);
        // console.log(copy.findIndex(isGivenCurr));
        // console.log(copy);
        // console.log(girl_names['names'][copy.findIndex(isGivenCurr)]);
        while (i < 10) {
            // let isGivenCurr = (element) => element === arr[i];

            let curr = copy.map((elm,idx) => elm === arr[i] ? idx : '').filter(String);
            let j = 0;
            while (j < curr.length) {
                result.push(boy_names['names'][curr[j]]);
                // console.log(arr[i]);
                j++;
            }
            i += j;
        }
        result = result.slice(0, 10);
        console.log(result);
    }
    return null
}

