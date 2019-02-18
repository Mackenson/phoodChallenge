<template>
  <div class="hello">
    <b-form id="main-form" @submit.prevent="register" v-if="show">
      <p>{{ this.error }}</p>
        <b-form-group id="exampleInputGroup1"
                      label="Email address:"
                      label-for="exampleInput1"
                      description="We'll never share your email with anyone else.">
          <b-form-input class="input-form" id="exampleInput1"
                        type="email"
                        v-model="email"
                        required
                        placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Your Password:"
                      label-for="exampleInput2">
          <b-form-input class="input-form" id="exampleInput2"
                        type="text"
                        v-model="password"
                        required
                        placeholder="password">
          </b-form-input>
        </b-form-group>
        <b-button id="btn-form" type="submit" variant="primary">registred</b-button>
      </b-form>
  </div>
</template>

<script>
import AuthenticationService from '../helper/auth'

export default {
  data () {
    return {
      email: '',
      password: '',
      show: true,
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        console.log(error)
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
