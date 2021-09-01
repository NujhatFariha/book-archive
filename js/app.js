const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchInput = searchField.value;
    // clear all the data
    searchField.value = ' ';
    if (searchInput == '') {
        return "search field cannot be empty";
    }
    else{
        const url = `http://openlibrary.org/search.json?q=${searchInput}`;
        fetch (url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => displayError(error));
    }
}

