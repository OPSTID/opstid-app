<template>
  <div>
    <v-list>
      <v-list-subheader>全般</v-list-subheader>
      <v-list-item title="ダークテーマ" :subtitle="theme.global.name.value === 'light' ? '無効' : '有効'" @click="toggleTheme">
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { useTheme } from "vuetify"

export default {
  setup() {
    document.getElementById("app-title").textContent = "設定"

    const theme = useTheme();
    //let currentThemeBGColor = ref(theme.current.value.colors.background);

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
      //currentThemeBGColor.value = theme.current.value.colors.background;
    }

    return { theme, toggleTheme }
  }
}
</script>