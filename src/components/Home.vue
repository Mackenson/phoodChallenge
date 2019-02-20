<template>
  <div class="home">
    <phoodNav>
    </phoodNav>
    <div id='main-btn'>
      <b-col lg="4" class="pb-2"><b-button class="btn-lg" size="lg" href="/menuform" >Go To Menu</b-button></b-col>
      <b-col lg="4" class="pb-2"><b-button size="lg" href="/foodlogform" >Go To FoodLog</b-button></b-col>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddMenuItemForm from './addMenuItemForm'
import phoodNav from './globals/navBar'

export default {
  components: {
    addMenuItemForm: AddMenuItemForm,
    phoodNav: phoodNav
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ])
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
    margin-left: 38%;
    width: 25%;
    font-size: 20px;
    height: 5vh;
  }
  .main-input-box{
    width: 75%;
    margin: 0 auto;
  }
  #main-btn{
    display: flex;
    margin-top: 25%;
    margin-left: 8%;
  }
  .btn-lg{
    background-color: #20c997;
    width: 30vw;
    height: 10vh;
    padding-top: 9%;
  }
</style>
