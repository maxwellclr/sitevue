<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <b>
              Max Corporation
            </b>            
          </li>
          <li>
            <a href="https://maxcorporation.com.br/">
              About Us
            </a>
          </li>
          
        </ul>
      </nav>
      <div class="copyright">
        &copy; 2020 - {{ year }} | All rights reserved to Max Corporation Ltda 09.299.723/0001-08.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
