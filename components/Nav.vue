<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg">
      <div class="container-fluid">
        <div class="navbar-brand">{{t('nav.appname')}}</div>
        <div class="collapse navbar-collapse justify-content-between">
          <ul class="navbar-nav">
            <li class="nav-item"><LangLink class="nav-link" to="/">{{t('nav.home')}}</LangLink></li>
            <li class="nav-item"><LangLink class="nav-link" to="/about">{{t('nav.about')}}</LangLink></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><LangSelect :locale="t('locale.other_locale_code')">{{t('locale.other_lang')}}</LangSelect></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
  const { t } = useI18n()
</script>

<style>
  .router-link-active {
    color: black !important;
    background-color: rgb(9, 117, 241) !important;
  }
  .nav-item a {
    border-radius: 5px;
  }
</style>
