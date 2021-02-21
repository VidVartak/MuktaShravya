import axios from "axios";

const url = '/api/users/';

class UserService{
    //Get users
    static async getUsers() {
        const res = await axios.get(url)
        try {
            const data = res.data
            return data.map(user => ({
            ...user,
            createdAt: new Date(user.createdAt)
            }))
        } catch (err) {
            return err
        }
    }

    //Search users
    static async searchUsers(searchCriteria) {
        const res = await axios.post(url+"search/", searchCriteria);
        try {
            const data = res.data
            return data.map(user => ({
            ...user
            }))
        } catch (err) {
            return err
        }
    }

    //Create User
    static insertUser(newUser){
        return axios.post(url+"add/", newUser)

    }

    //Delete User
    static deleteUser(id){
        return axios.delete(`${url}${id}`)
    }
}

export default UserService;