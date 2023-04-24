<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app> 
</template>
<style scoped>
.v-container{
  max-width: 700px;
  padding-top:7px;
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  display:none;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(12px);
  opacity: 0;
}
</style>