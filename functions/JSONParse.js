import male_names from '../data/boy_names_2018.json';
import female_names from '../data/girl_names_2018.json';
import { metaphone } from 'metaphone';
// import { browserify } from 'browserify-fs';

export function parser() {
    // const male_names = JSON.parse(data);
    console.log(male_names);
    console.log(female_names);
    var male_phonetics = [];
    var female_phonetics = [];
    console.log(male_names['names'][2]);
    for (let i = 0; i < male_names['names'].length; i++) {
        male_phonetics.push(metaphone(male_names['names'][i]));
    }
    console.log(male_phonetics);
    for (let i = 0; i < female_names['names'].length; i++) {
        female_phonetics.push(metaphone(female_names['names'][i]));
    }
    console.log(female_phonetics);
    const male_stringify = JSON.stringify(male_phonetics);
    const female_stringify = JSON.stringify(female_phonetics);
    console.log(male_stringify);
    console.log(female_stringify);
    // const fs = require('browserify-fs');
    // fs.writeFileSync('../data/male_phonetics.json', male_stringify);
}

// export default parser;