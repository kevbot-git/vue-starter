<template>
  <div id="nav">
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>
  </div>
  <router-view />
</template>
