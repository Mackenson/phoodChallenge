<template>
  <div class="foo-log">
    <phoodNav></phoodNav>

    <h1>Food Log</h1>
<div class="main-input-box">
  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Name:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="itemName" placeholder="Enter your name" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Type:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="itemType" placeholder="Enter type" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">LoggedTime:</label></b-col>
    <b-col sm="10">
      <datetime size="lg" type="datetime" v-model="loggedTime" use12-hour placeholder="Enter logging time" required @keyup.enter="addFoodLogPost"  class="input-time"></datetime>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Date:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="date" v-model="dateProduced" placeholder="Enter your name" required @keyup.enter="addFoodLogPost">
      </b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Meal:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="meal" placeholder="Enter meal" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">actions taken:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="actionTaken" placeholder="Enter portionQuantity" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">actions reason:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="actionReason" placeholder="Enter PortionUnit" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Quantity:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="quantity" placeholder="Enter your PortionsProduced" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Unit:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="unit" placeholder="Enter your PortionCost" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2"><label for="input-large">Station:</label></b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" v-model="station" placeholder="Enter your Station" required @keyup.enter="addFoodLogPost"></b-form-input>
    </b-col>
  </b-row>

<b-row class="my-1">
  <b-col sm="2"><label for="input-large">Employee Name:</label></b-col>
  <b-col sm="10">
    <b-form-input id="input-large" size="lg" type="text" v-model="employeeName" placeholder="Enter your employee name" required @keyup.enter="addFoodLogPost"></b-form-input>
  </b-col>
</b-row>
</div>

 <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent='addFoodLogPost'>Created</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AuthenticationService from '../helper/foodLog'
import store from '../store'
import { Datetime } from 'vue-datetime'
import phoodNav from './globals/navBar'

export default {
  components: {
    datetime: Datetime,
    phoodNav: phoodNav
  },
  data () {
    return {
      itemName: '',
      itemType: '',
      loggedTime: {},
      dateProduced: {},
      meal: '',
      actionTaken: '',
      actionReason: '',
      quantity: '',
      station: '',
      unit: '',
      employeeName: '',
      error: null
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    async addFoodLogPost () {
      // TODO: conditions need for bad user input
      try {
        const response = await AuthenticationService.addFoodLogPost({
          locationId: `${store.state.userLocationId}`,
          itemName: this.itemName,
          itemType: this.itemType,
          loggedTime: this.loggedTime,
          dateProduced: this.dateProduced,
          meal: this.meal,
          actionTaken: this.actionTaken,
          actionReason: this.actionReason,
          quantity: this.quantity,
          unit: this.quantity,
          station: this.station,
          employeeName: this.employeeName
        })
        this.$store.dispatch('addFoodLogPost', response.data)
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
  input.vdatetime-input{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
 .vdatetime-input{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    height: 49px;
  }
</style>
