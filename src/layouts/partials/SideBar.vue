<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
    class="sider-menu"
    width="200"
  >
    <div class="sidebar__logo">
      <div class="sidebar__logo--img">
      </div>
      <div class="sidebar__logo--text">Vuejs</div>
    </div>

    <a-menu theme="dark" :selectedKeys="selectedKeys" class="menu-auto">
      <a-menu-item key="/dashboard/">
        <router-link to="/dashboard" class="nav-link">
          <a-icon type="home"/>
          <span>{{ $t('nav.dashboard') }}</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="/assessments/">
        <router-link to="/assessments" class="nav-link">
          <a-icon type="car"/>
          <span>{{ $t('nav.assessment') }}</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="/orders/">
        <router-link to="/orders" class="nav-link">
          <a-icon type="credit-card"/>
          <span>{{ $t('nav.order') }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'LayoutSideBar',
    data () {
      return {
        mode: 'inline',
        selectedKeys: [],
      }
    },
    created () {
      this.updateMenu()
    },
    computed: {
      ...mapState('app', { collapsed: 'collapsedSideBar' }),
    },
    methods: {
      updateMenu () {
        const routes = this.$route.matched.concat()
        this.selectedKeys = [routes.pop().path]
      }
    },
    watch: {
      '$route' (val) {
        this.updateMenu()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-auto {
    height: calc(100vh - 64px);
    overflow: auto;
  }

  .sider-menu {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    z-index: 10;
  }

  .sider .ant-layout-sider-children {
    overflow-y: hidden;
  }

  .ant-menu-dark {
    background-color: #212121!important;
    border-color: #212121!important;
  }
</style>
