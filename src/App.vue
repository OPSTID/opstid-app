<template>
  <v-app>
    <v-app-bar elevation="0">
      <div class="opstid-container d-flex align-center">
        <!-- back button -->
        <v-slide-x-transition :hide-on-leave="true">
          <v-btn icon class="ml-2" v-if="!$route.path.match(/^(\/|\/my|\/favorite|\/recent)$/)" @click="$router.back()">
            <v-icon>mdi-chevron-left</v-icon>
            <v-tooltip activator="parent" location="bottom">戻る</v-tooltip>
          </v-btn>
        </v-slide-x-transition>
        <v-app-bar-title class="font-weight-bold ml-3" id="app-title">ホーム</v-app-bar-title>

        <!-- action buttons -->
        <v-slide-x-reverse-transition :leave-absolute="true">
          <div v-if="$route.path === '/'" class="mr-2">
            <v-btn icon to="/search">
              <v-icon>mdi-magnify</v-icon>
              <v-tooltip activator="parent" location="bottom">検索</v-tooltip>
            </v-btn>
            <v-btn icon to="/new">
              <v-icon>mdi-plus</v-icon>
              <v-tooltip activator="parent" location="bottom">プロフィールを作成</v-tooltip>
            </v-btn>
            <v-btn icon to="/settings">
              <v-icon>mdi-cog-outline</v-icon>
              <v-tooltip activator="parent" location="bottom">設定</v-tooltip>
            </v-btn>
          </div>
          <div v-if="$route.path === '/recent'" transition="fade-transition" class="mr-2">
            <v-btn icon flat>
              <v-icon>mdi-delete</v-icon>
              <v-tooltip activator="parent" location="bottom">履歴を削除</v-tooltip>
            </v-btn>
          </div>
        </v-slide-x-reverse-transition>


      </div>

    </v-app-bar>

    <v-list class="opstid-nav-drawer d-none d-lg-block">
      <v-list-item to="/" prepend-icon="mdi-home" rounded="xl">
        ホーム
      </v-list-item>
      <v-list-item to="/my" prepend-icon="mdi-account" color="blue" rounded="xl">
        マイプロフィール
      </v-list-item>
      <v-list-item to="/favorite" prepend-icon="mdi-heart" color="pink" rounded="xl">
        お気に入り
      </v-list-item>
      <v-list-item to="/recent" prepend-icon="mdi-history" color="green" rounded="xl">
        最近の履歴
      </v-list-item>
      <v-divider class="mt-6"></v-divider>
      <v-list-item to="/new" prepend-icon="mdi-plus" class="bg-blue mt-6" rounded="xl">
        プロフィールを作成
      </v-list-item>
    </v-list>

    <!-- main -->
    <v-main class="pl-5 pr-5">
      <div class="opstid-container">
        <router-view v-slot="{ Component }">
          <v-slide-y-reverse-transition :hide-on-leave="true">
            <component :is="Component"></component>
          </v-slide-y-reverse-transition>
        </router-view>
      </div>
    </v-main>

    <v-bottom-navigation elevation="0" :model-value="$route.path" :mandatory="true" class="d-lg-none">
      <v-btn to="/" replace>
        <v-icon size="28">mdi-home</v-icon>
        <v-tooltip activator="parent" location="top">ホーム</v-tooltip>
      </v-btn>
      <v-btn to="/my" color="blue">
        <v-icon size="28" color="blue">mdi-account</v-icon>
        <v-tooltip activator="parent" location="top">マイプロフィール</v-tooltip>
      </v-btn>
      <v-btn to="/favorite" color="pink">
        <v-icon size="28" color="pink">mdi-heart</v-icon>
        <v-tooltip activator="parent" location="top">お気に入り</v-tooltip>
      </v-btn>
      <v-btn to="/recent" color="green">
        <v-badge content="6" color="red">
          <v-icon size="28" color="green">mdi-history</v-icon>
        </v-badge>
        <v-tooltip activator="parent" location="top">最近の履歴</v-tooltip>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>
<style scoped>
* {
  --container-width: 700px;
}

.opstid-container {
  width: 100%;
  max-width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
}

.v-app-bar.v-theme--dark {
  --v-theme-surface: 18, 18, 18;
}

.opstid-nav-drawer {
  --width: 235px;
  position: fixed;
  top: 64px;
  left: 0;
  width: 250px;
  margin-left: calc(100vw / 2 - var(--container-width) / 2 - var(--width) - 50px);
}
</style>