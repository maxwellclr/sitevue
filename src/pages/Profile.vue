<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/maxwell.png" alt="" />
        </div>
        <h3 class="title">Maxwell Clemente</h3>
        <p class="category">Front End Developer</p>
        
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg">Follow</a>
          <a
            href="https://www.linkedin.com/in/maxwell-clemente-b5a60017a/"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on linkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/maxwellclr"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Start on Github"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <h3 class="title">About me</h3>
        <h5 class="description">
          Front-End Developer with over 4 years of experience, specialized in React.js, Vue.js and Angular. 
          Competent in using Git and GitHub for version control and code management. Proactive and detail-oriented.
        </h5>
        <div class="row">
          
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons ui-2_settings-90"></i>
              <div class="row">                
                <div class="col-md-10 ml-auto col-xl-6 mr-auto">
                  <p class="category">My Portfolio</p>
                  <!-- Tabs with Background on Card -->
                  <div class="card">
                    <tabs
                      centered
                      type="neutral"
                      tab-nav-wrapper-classes="card-header"
                      tab-content-classes="card-body text-center"
                      data-background-color="verdeazul"
                    >
                      <tab-pane>
                        <template slot="label">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="25" height="25">
                            <title>React Logo</title>
                            <circle cx="0" cy="0" r="2.05" fill="white"/>
                            <g stroke="white" stroke-width="1" fill="none">
                              <ellipse rx="11" ry="4.2"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                          </svg>
                          React.js
                        </template>
                        <p>
                          Leverage the power of React.js for building dynamic and responsive user interfaces. 
                          Our team excels in creating high-performance, scalable applications with React.js.
                        </p>
                      </tab-pane>
                      <tab-pane>
                        <template slot="label">
                          <img
                            src="img/vuejs.png"
                            class="creative-vue-logo"
                          /> Vue.js
                        </template>
                        <p>
                          Experience the versatility of Vue.js in your projects. 
                          We deliver elegant and efficient solutions using this progressive JavaScript framework.
                        </p>
                      </tab-pane>
                      <tab-pane>
                        <template slot="label">
                          <img
                            src="img/Angular.png"
                            class="creative-vue-logo"
                          /> Angular
                        </template>
                        <p>
                          Benefit from our expertise in Angular to create robust and maintainable applications. 
                          We ensure your applications are scalable and performant with Angular.
                        </p>
                      </tab-pane>
                      <tab-pane>
                        <template slot="label">
                          <img
                            src="img/Git.png"
                            class="creative-vue-logo"
                          /> Git
                        </template>
                        <p>
                          Ensure smooth and efficient project collaboration with our proficiency in Git. 
                          We manage your codebase effectively, enabling streamlined development workflows.
                        </p>
                      </tab-pane>
                      
                    </tabs>
                  </div>
                  <!-- End Tabs on plain Card -->
                </div>
              </div>
              <br>
              <br>
            </tab-pane>

          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>
