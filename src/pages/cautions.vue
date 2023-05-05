<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header title="注意事項" hasBackButton></Header>
    <div class="pl-5 pr-5 mt-3">
        <p class="text-body-2 text-grey">このページでは、OPSTID初回アクセス時に表示される注意事項を確認することができます。</p>

        <v-divider class="mt-6"></v-divider>
        
        <p class="text-grey mt-6">OPSTID はSNSやゲームなどのアカウントをまとめて、みんなに共有できるアプリです。以下の内容および利用規約をご確認の上、ご利用ください。</p>
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
    </div>
</template>