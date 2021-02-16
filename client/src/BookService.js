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

        //Get books
    static async getBook(bookId) {
        console.log("in service.getBook, id:"+bookId+", url:"+url+bookId);
        const res = await axios.get(url+bookId)
        console.log("in service, after awaiting get")
        try {
            const data = res.data
            return data.map(book => ({
            ...book,
            createdAt: new Date(book.createdAt)
            }))
        } catch (err) {
            console.log("in service.getbook, error"+err)
            return err
        }
    }

    //Create Book
    static insertBook(title, reader){
        return axios.book(url,{
            title, reader
        })

    }

    //Delete Book
    static deleteBook(id){
        return axios.delete(`${url}${id}`)
    }
}

export default BookService;