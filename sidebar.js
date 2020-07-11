const {ipcRenderer}=require('electron');

const $=require('jquery');

$(document).ready((e)=>{

    $('.hamburger').click((e)=>{

        
        $('.sideMenu').show('slow');

    })
})