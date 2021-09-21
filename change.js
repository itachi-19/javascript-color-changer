#!/usr/bin/env node
/*
 * change.js
 * Copyright (C) 2020 itachi <itachi@LAPTOP-MF3FTV0C>
 *
 * Distributed under terms of the MIT license.
 */

let hexes = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];  
let body_el = document.querySelector('body');
let current_color_el = document.querySelector('b');
let title = document.getElementById('title');
let instruction = document.getElementById('instruction');
let running = false;
let changer;

function getRandomIdx() {
    return Math.floor(Math.random()*16);
}

function reset() {
    running = false;
    title.style.color = 'black';
    instruction.style.color = 'black';
    body_el.style.backgroundColor = 'white';
    current_color_el.innerText = '#FFFFFF';
}

function change() {
    if (!running) {
        title.style.color = 'white';
        instruction.style.color = 'white';
        running = true;
    }
    let new_color = '#';
    for (let i=0;i<6;i++) {
        new_color += hexes[getRandomIdx()];
    }
    body_el.style.backgroundColor = new_color;
    current_color_el.innerText = new_color;
}

function call_change() {
    if (changer!==undefined) {
        return;
    }
    changer = setInterval(change,80);
}

function call_reset() {
    clearInterval(changer);
    changer = undefined;
    reset();
}

document.getElementById('change').addEventListener('click', call_change);
document.getElementById('reset').addEventListener('click', call_reset);
