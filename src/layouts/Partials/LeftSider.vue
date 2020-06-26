<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="sider-menu" width="256">
    <div class="logo" />
    <a-menu theme="dark" :default-selected-keys="['/']" :selectedKeys="selectedKeys" class="menu-auto">
      <a-menu-item key="/">
        <router-link to="/" class="nav-link">
          <a-icon type="pie-chart" />
          <span>{{ $t('nav.motel') }}</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/room">
        <router-link to="/room" class="nav-link">
          <a-icon type="desktop" />
          <span>{{ $t('nav.room') }}</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/service">
        <router-link to="/service" class="nav-link">
          <a-icon type="container" />
          <span>{{ $t('nav.service') }}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="3">
          Tom
        </a-menu-item>
        <a-menu-item key="4">
          Bill
        </a-menu-item>
        <a-menu-item key="5">
          Alex
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="6">
          Team 1
        </a-menu-item>
        <a-menu-item key="8">
          Team 2
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LeftSider',
  data() {
    return {
      mode: 'inline',
      selectedKeys: [],
    };
  },
  created() {
    this.updateMenu();
  },
  computed: {
    ...mapState('app', { collapsed: 'collapsedSideBar' }),
  },
  methods: {
    updateMenu() {
      const routes = this.$route.matched.concat();
      this.selectedKeys = [routes.pop().path];
    },
  },
  watch: {
    $route(val) {
      this.updateMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar__logo {
  background: #002140;
}
.ant-layout-sider-collapsed {
  .sidebar__logo--text {
    opacity: 0;
  }
}
.menu-auto {
  height: calc(100vh - 64px);
  overflow: auto;
}
.sider-menu {
  left: 0;
  z-index: 10;
}
.sider .ant-layout-sider-children {
  overflow-y: hidden;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
