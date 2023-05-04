<script setup>
import { reactive } from "vue"

const state = reactive({
  isActive: {
    initialSetupModal: false
  },
  initialSetupModal: {
    isLoading: false
  }
})

// Open inital setup modal if user visits OPSTID for the first time.
const hasSetup = !!localStorage.getItem("opstid.settings.initialSetupCompleted")
if (!hasSetup) {
  state.initialSetupModal.isLoading = true
  state.isActive.initialSetupModal = true
  setTimeout(() => {
    state.initialSetupModal.isLoading = false
  }, 2500)
}

// user accepts terms
const acceptTerms = () => {
  localStorage.setItem("opstid.settings.initialSetupCompleted", "1")
  state.isActive.initialSetupModal = false
}
</script>
<template>
  <v-app>
    <v-container>
      <router-view></router-view>

      <!-- initial setup modal-->
      <v-dialog max-width="600" v-model="state.isActive.initialSetupModal" persistent scrollable>
        <v-card>
          <v-card-title class="font-weight-bold mt-2">ようこそ</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height:400px;font-size:11pt;">
              <div v-if="state.initialSetupModal.isLoading" class="text-center" style="margin-top:50px;">
                <v-progress-circular indeterminate color="blue" size="32"></v-progress-circular>
              </div>
              <div v-else>
                <p class="text-grey">OPSTID はSNSやゲームなどのアカウントをまとめて、みんなに共有できるアプリです。以下の内容および利用規約をご確認の上、ご利用ください。</p>
                <p class="mt-3 font-weight-bold">OPSTIDで作成したプロフィールURLの管理には十分ご注意ください</p>
                <p class="mt-1 text-grey">
                  OPSTIDのプロフィールURLには、プロフィールの名前やアカウント情報などのプロフィールを表示するのに必要なすべての情報が含まれています。流出等により問題が発生した場合でも、プロフィールURLを運営者側で無効にすることはできません。
                </p>
                <p class="mt-3 font-weight-bold">定期的にバックアップをお取りください</p>
                <p class="mt-1 text-grey">
                  OPSTIDで作成したすべてのデータ（自分のプロフィール、フォローしたプロフィール、ブロックしたプロフィールの情報など）はすべて現在使用しているブラウザ内に保存されます。ブラウザ内に保存されたデータはしばらくOPSTIDを利用しなかったり、ブラウザの閲覧履歴を削除したりすることなどにより消えてしまう場合があります。万が一データが消えてしまったときに復旧できるよう、定期的にバックアップをお取りください。
                </p>
                <p class="mt-3 font-weight-bold">OPSTIDの利用はすべて自己責任です</p>
                <p class="mt-1 text-grey">運営者は、あなたがOPSTIDを利用することにより発生した損害等についての責任を一切負いません。</p>
                <p class="mt-3 text-grey">OPSTIDは MITライセンス
                  に基づき公開されている、オープンソースソフトウェアです。無料でご利用いただけます。<br>詳しくは利用開始後、ホーム画面の右上のボタンから「このアプリについて」→「OPSTID
                  on GitHub」からご確認ください。</p>
                <p class="mt-6">「利用開始」ボタンを押してOPSTIDの使用を開始すると、<a href="#">利用規約</a>に同意したものとみなされます。</p>
                <p class="mt-6"><v-btn color="blue" flat block @click="acceptTerms">利用開始</v-btn></p>
              </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>
<style>
.v-container {
  max-width: 630px;
  padding-top: 7px;
}

.v-progress-circular__underlay {
  opacity: 0 !important;
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