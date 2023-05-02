<template>
  <v-app>
    <v-container>
      <router-view></router-view>
      
      
    </v-container>
  </v-app> 
</template>
<style>
.v-container{
  max-width: 630px;
  padding-top:7px;
}
.v-progress-circular__underlay{
  opacity:0 !important;
}
</style>