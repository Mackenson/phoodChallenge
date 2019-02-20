<template>
  <div class="blog">
    <phoodNav></phoodNav>

    <h1>hello from the blog</h1>
    <div>
      <b-table striped hover :items="mtdPost" />
    </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AuthenticationService from '../helper/addMenuItems'
import store from '../store'
import phoodNav from './globals/navBar'

export default {
  components: {
    phoodNav: phoodNav
  },
  data () {
    return {
      columns: ['id', 'name', 'age', 'format', 'date', 'portionQuantity', 'portionUnit', 'portionsProduced', 'portionCost', 'station'],
      error: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'mtdPost'
    ]),
    ...mapGetters({
      done: 'mountedPost'
    })
  },
  methods: {

  },
  async mounted () {
    try {
      const response = await AuthenticationService.index({
        locationId: store.state.addPost[0].locationId,
        startDate: store.state.addPost[0].date,
        endDate: store.state.addPost[0].date
      })
      this.$store.dispatch('mountedPost', response.data)
    } catch (error) {
      this.error = error.response.data.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-box{
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
   /* margin-bottom: 6px; */
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
    margin: auto 1%;
  }
  td{
    font-size: 1.2rem;
    margin: 0 1%;
  }
</style>
