<template>
  <div>
<!--    <div class="cart" v-for="user in users.data" v-bind:key="user.id">-->
<!--      <h2 class="cart__title">{{user.email}}</h2>-->
<!--      <p class="cart__text">John Smith•6h ago</p>-->
<!--      <img src="https://material-launcher.vuetifyjs.com/img/article1a.2c2ed427.png" alt="">-->
<!--    </div>-->
    <a-list :grid="{ gutter: 16, xs: 3 }" :dataSource="users.data">
      <a-list-item slot="renderItem" slot-scope="item">
        <div class="item__img">
          <img class="item__img--fix" src="https://cdn.chotot.com/t-slfg6y2HV2JV2mlx3sEQ5Qunq6k_fN_Bph5D9Hdvs/preset:view/plain/aea8854b5830991cfdc53b01725b4ac6-2654138182982192408.jpg" alt="">
        </div>
        <a-card :title="item.title">
          <h4>Phòng trọ cao cấp</h4>
          <span>2.300.000 đ/tháng</span>
        </a-card>
      </a-list-item>
    </a-list>
    <a-list :grid="{ gutter: 16, xs: 3 }" :dataSource="users.data">
      <a-list-item slot="renderItem" slot-scope="item">
        <div class="item__img">
          <img class="item__img--fix" src="https://cdn.chotot.com/OXZNnBejmL26sQ3fGiUrZsIsXt1JR_vpeRwhCubCRr4/preset:view/plain/f05e21550fb274350b13349c164e76c3-2654138073376228442.jpg" alt="">
        </div>
        <a-card :title="item.title">Card content</a-card>
      </a-list-item>
    </a-list>
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
  .item__img {
    height: 200px;
    &--fix {
      margin-right: auto;
      margin-left: auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .ant-card {
    background: transparent;
    color: white;
  }
  .ant-card-body {
    padding: 12px;
  }
  .ant-card-bordered {
    border: 1px solid #7c7c7c;
  }
</style>
