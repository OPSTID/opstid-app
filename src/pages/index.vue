<script setup>
import Profile from "../components/Profile.vue"

import generateProfileAvatarPath from "../functions/generateProfileAvatarPath";

</script>
<template>
    <v-list-item style="height:56px;padding-left:0;padding-right:0;">
        <v-list-item-title class="text-h6 font-weight-bold">{{ $t("pages.index.title") }}</v-list-item-title>
        <template v-slot:append>
            <v-btn icon elevation="0" to="/search">
                <v-icon>mdi-magnify</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    {{  $t("pages.index.headerActions.tooltips.searchForProfile") }}
                </v-tooltip>
            </v-btn>
            <v-btn icon elevation="0">
                <v-icon>mdi-plus</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    {{ $t("pages.index.headerActions.tooltips.createNewProfile") }}
                </v-tooltip>
            </v-btn>
            <v-btn icon elevation="0">
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent" location="bottom right" close-on-back>
                    <v-list density="compact">
                        <v-list-item :title="$t('pages.index.headerActions.other.settings')" to="/settings"></v-list-item>
                        <v-list-item :title="$t('pages.index.headerActions.other.terms')"></v-list-item>
                        <v-list-item :title="$t('pages.index.headerActions.other.about')" to="/about"></v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </template>
    </v-list-item>
    <v-list lines="two">
        <Profile avatarPath="icon.svg" name="OPSTID" opstidId="d1fd17c6b612" to="/p"></Profile>
        
        <div class="text-right">
            <v-btn size="small" variant="text" color="blue" append-icon="mdi-arrow-right" rounded to="/my">{{ $t("pages.index.seeAllMyProfile") }}</v-btn>
        </div>
    </v-list>
    <v-list lines="two">
        <v-list-subheader>{{ $t("pages.index.recentActivities") }}</v-list-subheader>
        <Profile :avatarPath="generateProfileAvatarPath()" name="546f17300a86" opstidId="546f17300a86" note="昨日フォローしました" @click=""></Profile>
        <Profile :avatarPath="generateProfileAvatarPath()" name="3942157ab317" opstidId="3942157ab317" note="4/24にフォローしました" @click=""></Profile>
    </v-list>
</template>