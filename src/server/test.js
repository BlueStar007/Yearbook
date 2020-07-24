import axios from 'axios'

async function login() {
    let res = await axios.post('/api/user/login', { loginId: 'user', loginPwd: '123123' })
    return res
}
async function reg() {
    let res = await axios.post("/api/user/reg", {
        loginId: 'kksss',
        loginPwd: '123',
        nickname: 'air'
    });
    return res
}
export { login, reg };