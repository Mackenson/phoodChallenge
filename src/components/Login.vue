<template>
  <div class="login">
    <b-form id="main-form" @submit.prevent="login" v-if="show">
        <b-form-group id="exampleInputGroup1"
                      label="Username:"
                      label-for="exampleInput1"
                      >
          <b-form-input class="input-form" id="exampleInput1"
                        type="text"
                        v-model="username"
                        required
                        placeholder="Enter username">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Your Password:"
                      label-for="exampleInput2">
          <b-form-input class="input-form" id="exampleInput2"
                        type="password"
                        v-model="password"
                        required
                        placeholder="password">
          </b-form-input>
        </b-form-group>
        <b-button id="btn-form" type="submit" variant="primary">login</b-button>
      </b-form>
  </div>
</template>

<script>
import AuthenticationService from '../helper/auth'
export default {
  data () {
    return {
      username: '',
      password: '',
      show: true,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setUserLocationId', response.data.roles[0].locationEntityId)
        this.$store.dispatch('setUserSession', response.headers.authorization)
        this.$store.dispatch('setToken', response.data.user.id)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/home')
      } catch (error) {
        console.log(error.response.data.error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main-form{
  width: 50%;
    background: #8da0934f;
    height: 50%;
    padding: 5% 10%;
    margin: 10% auto;
  }

  .input-form{
    height: 5vh;
    border-radius: 5%;
  }

  #btn-form{
    font-size: 20px;
  }
</style>
