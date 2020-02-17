<template>
  <div>
    <div class="cart" v-for="user in users.data" v-bind:key="user.id">
      <h2 class="cart__title">{{user.email}}</h2>
      <p class="cart__text">John Smith•6h ago</p>
      <img src="https://material-launcher.vuetifyjs.com/img/article1a.2c2ed427.png" alt="">
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
        title: 'hoang tu',
        post: {
          id: 1,
          title: 'My Journey with Vue'
        }
      }
    },
    mounted () {
      this.getUsers()
    },
    computed: {
      ...mapState('dashboard', { users: 'users' }),
    },
    methods: {
      ...mapActions('dashboard', ['getUsers']),
    },
  }
</script>

<style lang="scss" scoped>
  .cart {
    &__title {
      font-size: 20px;
    }
    &__text {
      font-size: 20px;
      color: #bdbdbd;
      padding: 12px 0;
    }
  }
</style>
