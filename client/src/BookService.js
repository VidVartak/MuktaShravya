import axios from "axios";

const url = '/api/books/';

class BookService{
    //Get books
    static async getBooks() {
        const res = await axios.get(url)
        try {
            const data = res.data
            return data.map(book => ({
            ...book,
            createdAt: new Date(book.createdAt)
            }))
        } catch (err) {
            return err
        }
    }

    //Search books
    static async searchBooks(searchCriteria) {
        const res = await axios.post(url+"search/", searchCriteria);
        try {
            const data = res.data
            return data.map(book => ({
            ...book
            }))
        } catch (err) {
            return err
        }
    }

    //Create Book
    static insertBook(newBook){
        return axios.post(url+"add/", newBook)

    }

    //Delete Book
    static deleteBook(id){
        return axios.delete(`${url}${id}`)
    }
}

export default BookService;