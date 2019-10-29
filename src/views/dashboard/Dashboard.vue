<template>
  <div>
    <blog-post v-bind:title="title" v-bind:post="post"/>
    <a-list
      itemLayout="horizontal"
      :dataSource="users.data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://vue.ant.design/">{{item.email}}</a>
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  import BlogPost from './partials/BlogPost'

  export default {
    components: {
      BlogPost
    },
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
