<template>
  <Head>
    <title>{{t('nav.appname')}}</title>
  </Head>
  <div>
    <Nav/>
    <div class="main-content">
      <NuxtPage :pageQuery="$route.query"/>
    </div>
  </div>
</template>

<script setup>
  const { t } = useI18n()
  useHead({
    link: [{ rel: "stylesheet", href: "/css/bootstrap.min.css"}],
    script: [{ src: "/js/bootstrap.min.js"}]
  })
</script>

<style>
  body { margin: 0; }
  .main-content {
    margin: 15px;
  }
</style>
