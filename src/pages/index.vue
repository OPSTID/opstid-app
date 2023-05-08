<script setup>
import { reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

import Profile from "../components/Profile.vue"

import generateProfileAvatarPath from "../functions/generateProfileAvatarPath";
import { watchEffect } from "vue";

const route = useRoute()
const router = useRouter()
const state = reactive({
    currentTab: "reccomended",
    currentTabName: ""
})

// set current tab if route.query["tab"] given
if (route.query["tab"]) {
    switch (route.query["tab"]) {
        case "recommended":
            state.currentTab = "recommended"
            break
        case "following":
            state.currentTab = "following"
            break
        case "my":
            state.currentTab = "my"
            break
    }
}

// update current tab name
watchEffect(() => {
    switch (state.currentTab) {
        case "recommended":
            router.replace("?tab=recommended")
            break
        case "following":
            router.replace("?tab=following")
            break
        case "my":
            router.replace("?tab=my")
            break
    }
})
</script>
<template>
    <!-- header -->
    <v-app-bar>
        <v-container class="d-flex align-center">
            <v-app-bar-title class="font-weight-bold">
                <v-scroll-y-reverse-transition leave-absolute>
                    <p v-if="state.currentTab === 'recommended'">おすすめ</p>
                    <p v-else-if="state.currentTab === 'following'">フォロー中</p>
                    <p v-else-if="state.currentTab === 'my'">自分のプロフィール</p>
                </v-scroll-y-reverse-transition>
            </v-app-bar-title>
            <v-btn icon flat>
                <v-icon>mdi-plus</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    {{ $t("pages.index.headerActions.tooltips.createNewProfile") }}
                </v-tooltip>
            </v-btn>
            <v-btn icon flat to="/settings">
                <v-icon>mdi-cog-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    {{ $t("pages.index.headerActions.tooltips.settings") }}
                </v-tooltip>
            </v-btn>
            <v-btn icon flat>
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent" location="bottom right" close-on-back>
                    <v-list density="compact">
                        <v-list-item :title="$t('pages.index.headerActions.other.terms')"></v-list-item>
                        <v-list-item :title="$t('pages.index.headerActions.other.cautions')" to="/cautions"></v-list-item>
                        <v-list-item :title="$t('pages.index.headerActions.other.about')" to="/about"></v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>

        </v-container>


        <template v-slot:extension>
            <v-container>
                <v-tabs align-tabs="center" v-model="state.currentTab">
                    <v-tab value="recommended">おすすめ</v-tab>
                    <v-tab value="following">フォロー中</v-tab>
                    <v-tab value="my">自分</v-tab>
                </v-tabs>
            </v-container>
        </template>

    </v-app-bar>
    <!-- end header -->

    <v-main>
        <!-- search and scan -->
        <v-text-field variant="solo" density="compact" prepend-inner-icon="mdi-magnify" placeholder="検索..." readonly
            @click="$router.push('/search')">
            <template v-slot:append>
                <v-icon v-ripple @click="$router.push('/scan')">mdi-line-scan</v-icon>
            </template>
        </v-text-field>
        <!-- end search and scan -->
        <!-- tab contents -->
        <v-window v-model="state.currentTab">
            <v-window-item value="recommended">
                <v-list lines="two">
                    <Profile avatarPath="icon.svg" name="OPSTID" opstidId="d1fd17c6b612" to="/p"></Profile>

                    <div class="text-right">
                        <v-btn size="small" variant="text" color="blue" append-icon="mdi-arrow-right" rounded to="/my">{{
                            $t("pages.index.seeAllMyProfile") }}</v-btn>
                    </div>
                </v-list>
                <v-list lines="two">
                    <v-list-subheader>{{ $t("pages.index.recentActivities") }}</v-list-subheader>
                    <Profile :avatarPath="generateProfileAvatarPath()" name="546f17300a86" opstidId="546f17300a86"
                        note="昨日フォローしました" @click=""></Profile>
                    <Profile :avatarPath="generateProfileAvatarPath()" name="3942157ab317" opstidId="3942157ab317"
                        note="4/24にフォローしました" @click=""></Profile>
                </v-list>
            </v-window-item>
            <v-window-item value="following">
                <v-list lines="two">
                    <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" hasEditButton
                        hasShareButton>
                    </Profile>
                    <Profile name="ace97b838b9d" opstidId="ace97b838b9d" :avatarPath="generateProfileAvatarPath()" to="/p"
                        hasEditButton hasShareButton></Profile>
                    <Profile name="ca972cbe7116" opstidId="ca972cbe7116" :avatarPath="generateProfileAvatarPath()" to="/p"
                        hasEditButton hasShareButton></Profile>
                    <Profile name="8554bbc654b8" opstidId="8554bbc654b8" :avatarPath="generateProfileAvatarPath()" to="/p"
                        hasEditButton hasShareButton></Profile>
                </v-list>
            </v-window-item>
            <v-window-item value="my">
                <v-list>
                    <v-list-subheader>
                        メインプロフィール
                    </v-list-subheader>
                    <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" lines="two" hasEditButton
                        hasShareButton></Profile>
                    <div class="text-right">
                        <v-btn size="small" variant="text" color="blue" append-icon="mdi-arrow-right" rounded
                            to="/settings/change-main-profile">メインプロフィールを変更</v-btn>
                    </div>
                </v-list>

                <v-list lines="two">
                    <v-list-subheader>すべてのプロフィール</v-list-subheader>
                    <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" hasEditButton
                        hasShareButton>
                    </Profile>
                    <Profile name="ace97b838b9d" opstidId="ace97b838b9d" :avatarPath="generateProfileAvatarPath()" to="/p"
                        hasEditButton hasShareButton></Profile>
                    <Profile name="ca972cbe7116" opstidId="ca972cbe7116" :avatarPath="generateProfileAvatarPath()" to="/p"
                        hasEditButton hasShareButton></Profile>
                    <Profile name="8554bbc654b8" opstidId="8554bbc654b8" :avatarPath="generateProfileAvatarPath()" to="/p"
                        hasEditButton hasShareButton></Profile>
                </v-list>
            </v-window-item>
        </v-window>
    </v-main>
</template>
