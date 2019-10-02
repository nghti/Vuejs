<template>
  <a-layout-header class="layout-header">
    <a-icon
      class="trigger"
      :type="menuType"
      @click.prevent="collapseSideBar"
    />

    <div class="user-wrapper">
      <div class="content-box">
        <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar icon="user"/>
          <span> {{ user.last_name }}</span>
        </span>
          <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
            <a-menu-item>
              <a href="javascript:;" @click.prevent="logout">
                <a-icon type="logout"/>
                <span> ログアウト</span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import avatar from '../../assets/images/no-gravatar.png'

  export default {
    name: 'LayoutHeader',
    data () {
      return {
        avatar
      }
    },
    computed: {
      ...mapState('app', { collapsed: 'collapsedSideBar' }),
      ...mapState('auth', { user: 'authInfo' }),
      menuType () {
        return this.collapsed ? 'menu-unfold' : 'menu-fold'
      }
    },
    methods: {
      ...mapActions('app', ['collapseSideBar']),
      ...mapActions('auth', ['logout']),
    }
  }
</script>

<style lang="scss" scoped>
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;

    &:hover {
      color: #479ccf;
    }
  }

  .layout-header {
    height: 64px;
    padding: 0 12px 0 0;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    position: relative;
  }

  .user-wrapper {
    float: right;
    height: 100%;

    .action {
      cursor: pointer;
      padding: 0 12px;
      display: inline-block;
      transition: all 0.3s;
      height: 100%;
      color: rgba(0, 0, 0, 0.65);

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }

      .avatar {
        margin: 20px 8px 20px 0;
        color: #1890ff;
        background: hsla(0, 0%, 100%, 0.85);
        vertical-align: middle;
      }

      .icon {
        font-size: 16px;
        padding: 4px;
      }
    }
  }
</style>
