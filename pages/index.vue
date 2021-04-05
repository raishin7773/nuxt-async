<template>
  <div>
    <img src="~/assets/cat.jpg">
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }},{{ user.name }},{{ user.company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users'
export default {
  asyncData({params,error}) {
    return axios.get(url).then((res) => {
      return {users: res.data}
    }).catch(e => {
      error({statusCode: e.response.status, message: 'Error!!!!!'})
    })
  }
}
</script>

<style>


</style>
