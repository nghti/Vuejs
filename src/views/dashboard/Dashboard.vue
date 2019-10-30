<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
    v-on:enlarge-text="getFontSize"
    v-bind:title="title"
    v-bind:getData="getData"
    v-model="searchText"
    >
    noi dung slot
    </blog-post>
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
        },
        lists: [],
        postFontSize: 1,
        searchText: 'hhhh'
      }
    },
    mounted () {
      this.getUsers()
    },
    computed: {
      ...mapState('dashboard', { users: 'users' }),
      getData () {
        return this.lists = this.users.data
      }
    },
    methods: {
      ...mapActions('dashboard', ['getUsers']),
      getFontSize (e) {
        this.postFontSize += e
      }
    },
  }
</script>
