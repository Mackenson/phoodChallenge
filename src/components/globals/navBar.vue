<template>
    <div>
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
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
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

<style media="screen" scoped>
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
