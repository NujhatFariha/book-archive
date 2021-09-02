const totalSearch = document.getElementById('total-search-result')
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    totalSearch.innerText = searchText;

    // clear all the data
    searchField.value = ' ';
    // if (searchText === '') {
    //     return "search field cannot be empty";
    // }
    // else{
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
searchBook()


const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (books.length == 0) {
       
    }
    
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class=" card card-body text-start">
            <p class="fw-bold fs-6">Book Name : <span class="fw-normal fs-5">${book.title}<span><p>
            <p><span class="fw-bold fs-6">Author Name : <span class="fw-normal fs-6"> ${book.author_name}</p>
            <p><span class="fw-bold fs-6">Publisher : <span class="fw-normal fs-6"> ${book.publisher_facet}</p>
            <p><span class="fw-bold fs-6">First Published Year : <span class="fw-normal fs-6">${book.first_publish_year}</p>
        </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}


