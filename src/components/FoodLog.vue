<template>
  <div class="foodlogs">
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
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <h1>hello from the blog</h1>
    <input id="search-btn" type="text" v-model='search' placeholder='search by item Name' />
    <div class="main-box">
      <ul class="users">
          <li v-for='(post, index) in filterFooLog' :key='post.id' mode="out-in"> <p>{{ index }}</p> <td>{{ post.itemName }}</td> <td>{{ post.itemType }}</td> <td>{{ post.locationId }}</td> <td>{{ post.loggedTime }}</td> <td>{{ post.dateProduced }}
          </td> <td>{{ post.meal }}</td> <td>{{ post.format }}</td>
            <button id="edit-btn" @click="save(index)">edit</button>
            <button class="deleteBtn" @click="deletePost(post.id)">x</button></li>
      </ul>

      <h4>totatl: {{ filterFooLog.length }} <br /> <span>your average coming soon</span></h4>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import AuthenticationService from '../helper/foodLog'
import store from '../store'

export default {
  data () {
    return {
      search: '',
      foodLogs: [],
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
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'foodPost'
    ]),
    filterFooLog: function () {
      return this.foodPost.filter((post) => {
        return post.itemName.match(this.search)
      })
    },
    average: function () {
      let total = 0
      for (var i = 0; i < this.foodPost.length; i++) {
        total += this.foodPost[i].itemName.length
      }
      return total / this.filterFooLog.length
    }
  },
  methods: {
    async save (index) {
      try {
        const response = await AuthenticationService.put({
          id: this.foodPost[index].id,
          itemName: this.foodPost[index].itemName,
          itemType: this.foodPost[index].itemType,
          loggedTime: this.foodPost[index].loggedTime,
          dateProduced: this.foodPost[index].dateProduced,
          meal: this.foodPost[index].meal,
          actionTaken: this.foodPost[index].actionTaken,
          actionReason: this.foodPost[index].actionReason,
          quantity: this.foodPost[index].quantity,
          unit: this.foodPost[index].quantity,
          station: this.foodPost[index].station,
          employeeName: this.foodPost[index].employeeName
        })
        debugger
        this.$store.dispatch('updateFoodLogs', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async deletePost (postId) {
      this.foodPost.splice(this.foodPost.indexOf(postId), 1)
      try {
        await AuthenticationService.delete(postId)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const response = await AuthenticationService.index({
        locationId: store.state.addFoodLog.locationId,
        startDate: '2019-01-01',
        endDate: '2019-04-04'
      })
      this.$store.dispatch('foodMountedPost', response.data)
    } catch (error) {
      this.error = error.response.data.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-box{
  /* width: 80%; */
  margin: 0 auto;
}
.users {
   list-style: none;
   margin: 0;
   padding: 0;
   margin: 0;
   /* line-height: 2; */
  }

  .users li {
   padding: 4px 2em;
   display: flex;
   /* justify-content: space-between; */
   background: rgba(0, 0, 0, .2);
   margin-bottom: 6px;
  }

  .users li:nth-of-type(even) {
   background: rgba(0, 0, 0, .2);
   font-size: 1.2rem;
  }

  .users li:nth-of-type(odd) {
   background: rgba(0, 0, 0, .4);
   font-size: 1.2rem;
  }

  .deleteBtn {
   all: unset;
   cursor: pointer;
  }
  #edit-btn{
    height: 20%;
    margin: auto 3%;
  }
  td{
    font-size: 1.2rem;
    margin: 0 1%;
    width: 10%;
  }
  #search-btn{
    margin-bottom: 3%;
    width: 25%;
    font-size: 2rem;
    border-radius: 5%;
  }
</style>
