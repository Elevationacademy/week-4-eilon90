
let wisdom = localStorage.wisdom ? JSON.parse(localStorage.wisdom) : [];
wisdom.map(w => $('#posts').append(`<div id = "p${wisdom.indexOf(w)}"><span class = "x">X</span><h3> ${w.text}</h3></div>`));

function showText() {
    const text = $('#input').val();
    const screen = $(`<div id = "p${wisdom.length}"><span class = "x">X</span><h3>${text}</h3></div>`);
    $('#posts').append(screen);
    $('#input').val('');
    wisdom.push({text: text});
    if (wisdom.length % 2 === 0) {
        localStorage.wisdom = JSON.stringify(wisdom);
    }

    let myStorage = localStorage.wisdom ? JSON.parse(localStorage.wisdom) : null;
    console.log(myStorage);
}

function clearWisdom() {
    localStorage.removeItem('wisdom')
    wisdom = [];
}

$('#posts').on('click', '.x', function(){
    const postId = $(this).closest('div').attr('id');
    const idNum = parseInt((postId).substring(1)); 
    wisdom.splice(idNum, 1);
    localStorage.wisdom = JSON.stringify(wisdom);
    $('#posts').empty();
    wisdom.map(w => $('#posts').append(`<div id = "p${wisdom.indexOf(w)}"><span class = "x">X</span><h3> ${w.text}</h3></div>`));

    let myStorage = localStorage.wisdom ? JSON.parse(localStorage.wisdom) : null;
    console.log(myStorage);
})


