<template>
  <div class="home">
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">Phood</b-navbar-brand>

  <b-navbar-nav>
    <b-nav-item href="/home">Home</b-nav-item>
    <b-nav-item href="/menuform">Menu Form</b-nav-item>
    <b-nav-item href="/foodlogform">FoodLog Form</b-nav-item>
  </b-navbar-nav>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="/menu">Menu</b-dropdown-item>
        <b-dropdown-item href="/foodlogs">FoodLogs</b-dropdown-item>
        <b-dropdown-item type="button" name="button" @click='logout'>Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  <div id='main-btn'>
    <b-col lg="4" class="pb-2"><b-button class="btn-lg" size="lg" href="/menuform" >Go To Menu</b-button></b-col>
    <b-col lg="4" class="pb-2"><b-button size="lg" href="/foodlogform" >Go To FoodLog</b-button></b-col>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import AddMenuItemForm from './addMenuItemForm'
import foodLog from './FoodLogForm'

export default {
  components: {
    'addMenuItemForm': AddMenuItemForm,
    'foodLog': foodLog
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
