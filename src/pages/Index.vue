<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/Logo MaxCoporation sem background.png" alt="" />
          <h1 class="h1-seo">Max Corporation</h1>
          <h3>Creation of web applications focused on <a href="https://vuejs.org/" target="_blank">
            <img
              src="img/vuejs.png"
              class="creative-vue-logo"
            /> </a>ue.</h3>
        </div>
        <h6 class="category category-absolute">
          Front End Developer Maxwell Clemente.
          
        </h6>
      </div>
    </div>
    <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="img/hero-image-1.png" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/hero-image-2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/hero-image-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            
            <h2 class="title"><a href="https://vuejs.org/" target="_blank">
              <img
              src="img/vuejs.png"
              style="max-width: 32px; top: -2px; position: relative;"
            /> </a>ue</h2>
            <h5 class="description">Designed to be adopted incrementally, 
              Vue enables the creation of reusable components and is ideal for both small interactions and complex applications. 
              Discover how I use Vue to develop elegant and efficient user interfaces.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
    <examples-section></examples-section>
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';



import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    
    
    
    SignupForm,
    ExamplesSection,
    DownloadSection
  }
};
</script>
<style></style>
