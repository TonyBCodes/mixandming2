// JavaScript source code



$.ajax({ url: ing_q_string + ingredient, method: "GET" }).then(function (response) {
    console.log(response);
    ing_aarray = response.results;
    console.log(qnaarray);
    howmany = qnaarray.length;
    console.log(howmany);
});

$.ajax({ url: name_q_string + cocktail_name, method: "GET" }).then(function (response) {
    console.log(response);
    name_array = response.results;
    console.log(qnaarray);
    howmany = qnaarray.length;
    console.log(howmany);
});