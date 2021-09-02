document.getElementById('spinner').style.display = "none";

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    document.getElementById('spinner').style.display = "block";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //Search Result 
            const searchResult = document.getElementById('search-result');
            document.getElementById('spinner').style.display = "none";
            //clear search result
            searchResult.textContent = '';

            const searchResultResult = document.createElement('div');
            searchResultResult.classList.add('text-center');
            
            if (data.numFound === 0) {
                searchResultResult.innerHTML = `
                    <h2 class="text-danger">Sorry! Please search with a proper book name</h2>
                `;
            }
            else {
                searchResultResult.innerHTML = `
                            <h2> Result-Found : <span style="color: rgba(22, 9, 160, 0.623)">${data.numFound}</span></h2>
                `;
            }
            searchResult.appendChild(searchResultResult);
            //clear book details...
            searchResult.textContent = '';

            //append all books
            (data.docs).forEach((book) => {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                    <div class=" card card-body text-start">
                      <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid rounded" style="height: 250px;" alt="...">
                          <p class="fw-bold fs-6 mt-2">Book Name : <span class="fw-normal fs-5">${book.title}<span><p>
                          <p><span class="fw-bold fs-6">Author Name : <span class="fw-normal fs-6"> ${book.author_name[0]}</p>
                          <p><span class="fw-bold fs-6">Publisher : <span class="fw-normal fs-6"> ${book.publisher[0]}</p>
                          <p><span class="fw-bold fs-6">First Published Year : <span class="fw-normal fs-6">${book.first_publish_year}</p>
                    </div>
                </div>
                    `;
                searchResult.appendChild(div);
            });

            //clear input value
            searchField.value = '';
        });
}