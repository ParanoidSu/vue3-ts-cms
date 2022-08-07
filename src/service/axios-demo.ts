// import axios from 'axios'

// axios.defaults.baseURL = 'http://httpbin.org'
// // axios
// //   .get('http://httpbin.org/get', {
// //     params: {
// //       name: 'sjl',
// //       age: 18
// //     }
// //   })
// //   .then((res) => {
// //     console.log(res.data)
// //   })
// // axios
// //   .post('http://httpbin.org/post', {
// //     data: {
// //       name: 'sjl',
// //       age: 18
// //     }
// //   })
// //   .then((res) => {
// //     console.log(res.data)
// //   })

// axios.all([
//   axios
//     .get('http://httpbin.org/geet', {
//       params: {
//         name: 'sjl',
//         age: 18
//       }
//     })
//     .then((res) => {
//       console.log(res.data)
//     })
//     .catch((err) => {
//       console.log(err)
//     }),
//   axios
//     .post('/post', {
//       data: {
//         name: 'sjl',
//         age: 18
//       }
//     })
//     .then((res) => {
//       console.log(res.data)
//     })
// ])

// axios.interceptors.request.use(
//   (config) => {
//     console.log('请求成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('error')
//     return err
//   }
// )
