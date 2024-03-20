import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "APi-KEY": "5977f966-317d-44bc-bc9a-5571b905b1ca"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => {
                return response.data
            })
    },
    postFollow(id) {
        return instance.post(`follow/${id}`, {}, )
            .then(response => response.data)
    }
}
