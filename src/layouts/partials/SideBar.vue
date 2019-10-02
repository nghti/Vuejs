<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
    class="sider-menu"
    width="256"
  >
    <div class="sidebar__logo">
      <img v-if="!collapsed" src="../../assets/images/logo.png" alt="" class="logo-big">
      <img v-else src="../../assets/images/car.png" alt="" class="logo-small">
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
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    z-index: 10;
    min-height: 100vh;
  }

  .sider .ant-layout-sider-children {
    overflow-y: hidden;
  }

  .sidebar__logo {
    background-color: #273443;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    .logo-big {
      height: 64px;
    }

    .logo-small {
      height: 35px;
    }
  }
</style>
