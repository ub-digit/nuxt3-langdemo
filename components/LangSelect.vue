<template>
  <a href="javascript:void()" @click.prevent="setLocale(props.locale)"><slot/></a>
</template>

<script setup>
  const props = defineProps(['locale'])
  const i18n = useI18n()
  const route = useRoute()
  const setLocale = async (locale) => {
    const router = useRouter()
    const route = useRoute()
    const newLocale = i18n.setLocale(locale)
    let query = {
      ...route.query,
      lang: newLocale
    }
    router.push({query})
  }
</script>
