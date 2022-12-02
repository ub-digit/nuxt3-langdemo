<template>
  <div>
    <h1>{{t('home.heading')}}</h1>
    <p>
      Here is a <LangLink to="/about">link to the about page</LangLink> in a paragraph.
    </p>
    <p>
      {{t('home.paragraph.prelink')}} <LangLink to="/about">{{t('home.paragraph.linktext')}}</LangLink> {{t('home.paragraph.postlink')}}
    </p>
  </div>
</template>


<script setup>
  const { t } = useI18n()
</script>
