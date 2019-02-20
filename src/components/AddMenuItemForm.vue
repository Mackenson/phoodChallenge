<template>
  <div class="add-menu">
    <phoodNav></phoodNav>

    <h1>Add Menu Items</h1>
<div class="main-input-box">
  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Name:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="name" placeholder="Enter your name" required @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">clientId:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="clientId" placeholder="Enter your clientId" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Meal:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="meal" placeholder="Enter Meal" required @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Format:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="format" placeholder="Enter Format" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Date:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="date" v-model="date" placeholder="Enter your name" required @keyup.enter="addMenuPost">
      </b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">portionQuantity:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="portionQuantity" placeholder="Enter portionQuantity" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">PortionUnit:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="portionUnit" placeholder="Enter PortionUnit" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">PortionsProduced:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="portionsProduced" placeholder="Enter your PortionsProduced" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">PortionCost:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="portionCost" placeholder="Enter your PortionCost" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Station:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="station" placeholder="Enter your Station" @keyup.enter="addMenuPost"></b-form-input>
    </b-col>
  </b-row>
</div>
 <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent='addMenuPost'>Created</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AuthenticationService from '../helper/addMenuItems'
import store from '../store'
import phoodNav from './globals/navBar'

export default {
  components: {
    phoodNav: phoodNav
  },
  data () {
    return {
      name: '',
      clientId: '',
      meal: '',
      format: '',
      date: {},
      portionQuantity: false,
      portionUnit: '',
      portionsProduced: false,
      portionCost: false,
      station: '',
      menuItems: [],
      error: null
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    async addMenuPost () {
      // TODO: conditions need for bad user input
      try {
        const response = await AuthenticationService.addMenuPost({
          locationId: `${store.state.userLocationId}`,
          menuItems:
          [{
            name: this.name,
            clientId: this.clientId,
            meal: this.meal,
            format: this.format,
            date: this.date,
            portionQuantity: this.portionQuantity,
            portionUnit: this.portionUnit,
            portionsProduced: this.portionsProduced,
            portionCost: this.portionCost,
            station: this.station
          }]
        })
        this.$store.dispatch('addMenuPost', response.data)
      } catch (error) {
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
    margin-left: 38%;
    width: 25%;
    font-size: 20px;
    height: 5vh;
  }
  .main-input-box{
    width: 75%;
    margin: 0 auto;
  }
  /* label{
    display: inline-block;
    float: left;
  } */
</style>
