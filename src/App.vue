<script setup>
  import Header from './components/header.vue';
  import MainSec from './components/MainSec.vue';
  import MenuSec from './components/MenuSec.vue';
  import Blog from './components/Blog.vue';

  
</script>

<template>
  <div class="bg-sky-400">
    <div>
    <Header />
    </div>
    <div class="p-3">
      <MainSec />
    </div>
    <div class="px-3 pb-3">
      <MenuSec />
    </div>
  </div>
  <div class="mt-10">
    <Blog />
  </div>
</template>

<style src="./style.css" />