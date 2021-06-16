import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:5000/users';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(userId, user) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

}

export default new ApiService();