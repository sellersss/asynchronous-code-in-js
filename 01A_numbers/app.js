let baseUrl = 'http://numbersapi.com'

// Part 1
async function requestToAPI(favNum) {
    let res = await $.getJSON(`${baseUrl}/${favNum}?json`);
    console.log(res);
}
requestToAPI(7);

// Part 2
async function multipleRequests(favNums) {
    let res = await $.getJSON(`${baseUrl}/${favNums}`);
    console.log(res);
}
multipleRequests([31, 7, 3]);

// Part 3
async function fourFacts(favNum) {
    let res = await Promise.all(
        Array.from({
            length: 4
        }, () => $.getJSON(`${baseUrl}/${favNum}?json`))
    );
    res.forEach(fact => {
        $('body').append(`<h4>${fact.text}</h4>`);
    });
}
fourFacts(5)