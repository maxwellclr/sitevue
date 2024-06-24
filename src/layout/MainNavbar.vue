<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        MAX CORPORATION
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed and Coded by Maxwell Clemente.</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">  

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on LinkedIn"
          data-placement="bottom"
          href="https://www.linkedin.com/in/maxwell-clemente-b5a60017a/"
          target="_blank"
        >
        <i class="fab fa-linkedin"></i>
          <p class="d-lg-none d-xl-none">LinkedIn</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Contact us on Gmail"
          data-placement="bottom"
          href="mailto:rodriguesclementemaxwell@gmail.com"
          target="_blank"
        >
          <i class="fab fa-google-plus"></i>
          <p class="d-lg-none d-xl-none">Google</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Star on Github"
          data-placement="bottom"
          href="https://github.com/maxwellclr"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">Github</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    
    Navbar,
    
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
