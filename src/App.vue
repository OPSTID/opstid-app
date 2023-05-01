<template>
  <v-app>
    <v-container>
      <router-view></router-view>
      
      <p class="text-caption text-grey mt-6 ml-3">(C) 2023 OPSTID<br>v1.0.0 with sl2023.04.27</p>
    </v-container>
  </v-app> 
</template>
<style scoped>
.v-container{
  max-width: 630px;
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