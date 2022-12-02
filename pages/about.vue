<template>
  <div>
    <h1>{{t('about.heading')}}</h1>
    <p>{{t('about.text', {querydata: props.pageQuery.querydata})}}</p>
    <ul>
      <li><LangLink class="normal-link" to="/about?querydata=link1-data">Link 1</LangLink></li>
      <li><LangLink class="normal-link" to="/about?querydata=link2-data">Link 2</LangLink></li>
      <li><LangLink class="normal-link" to="/about?querydata=link3-data">Link 3</LangLink></li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps(['pageQuery'])
  const { t } = useI18n()
</script>

<style scoped>
/* Just to remove active page crap for now */
.normal-link {
  background-color: inherit !important;
  color: inherit !important;
}
</style>