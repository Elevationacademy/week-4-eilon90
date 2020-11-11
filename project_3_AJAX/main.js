//Exercise 1:

// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(9782806269171)
// fetch(1440633908)
// fetch(9781945048470)
// fetch(9780307417138)


//Exercise 2:
// const fetch = function (queryType, queryValue) {
//     if (typeof queryValue === 'string') {
//         const words = queryValue.split(' ');
//         for (let i = 0; i < words.length - 1; i++) {
//             words[i] = words[i] + '%20';
//         }
//     } 
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ':' + queryValue,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778);
// fetch("title", "How to Win Friends and Influence People");



//Exercise 3:
const fetch = function (queryType, queryValue) {
    if (typeof queryValue === 'string') {
        const words = queryValue.split(' ');
        for (let i = 0; i < words.length - 1; i++) {
            words[i] = words[i] + '%20';
        }
    } 
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ':' + queryValue,
        success: function (data) {
            const items = data.items
            for (item of items){
                const arr = item.volumeInfo.industryIdentifiers;
                let isbn13 = 0
                for (let place in arr) {
                    if (place.type === 'ISBN_13') {
                        isbn13 = place
                    }
                }
                const bookInfo = {
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors,
                    ISBN: arr[isbn13].identifier
                }
                
                console.log(bookInfo);
            }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");




//Exercise 4:



//Exercise 5:



//Exercise 6: