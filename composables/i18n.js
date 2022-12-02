import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => {
    let data = {
      defaultLocale: "sv",
      localeURLname: "lang",
      en: {
        "nav.appname": "Lang demo",
        "nav.home": "Home",
        "nav.about": "About",
        "home.heading": "Home page",
        "about.heading": "About page",
        "home.paragraph.prelink": "Here is a",
        "home.paragraph.postlink": "in a paragraph",
        "home.paragraph.linktext": "link to the about page",
        "about.text": "{querydata}: In english with query data before text",
        "locale.other_lang": "Svenska",
        "locale.other_locale_code": "sv",
      },
      sv: {
        "nav.appname": "Språkdemo",
        "nav.home": "Hem",
        "nav.about": "Om",
        "home.heading": "Hemsida",
        "about.heading": "Omsida",
        "home.paragraph.prelink": "Här är en",
        "home.paragraph.postlink": "i en paragraf",
        "home.paragraph.linktext": "länk till omsidan",
        "about.text": "Text på svenska med query-data efter text: {querydata}",
        "locale.other_lang": "English",
        "locale.other_locale_code": "en",
      }
    }
    let locale = fetchLocaleFromURL(data.localeURLname)
    if(!data[locale]) {
      locale = data.defaultLocale
    }
    data["locale"] = locale
    console.log("Locale", data.locale)
    return data
  },
  actions: {
    setLocale(locale) {
      if(this[locale]) {
        this.locale = locale
      }
      return this.locale
    }
  }
})

export const useI18n = () => {
  const locale = useLocaleStore()
  const route = useRoute()
  const router = useRouter()

  watchEffect(() => {
    if(!route.query[locale.localeURLname]) {
      const router = useRouter()
      let newQuery = {
        ...route.query,
        lang: locale.locale
      }
      // console.log("watchEffect", route.path, newQuery)
      router.replace({query: newQuery})
    }
  })

  const interp = (text, args) => {
    if(text) {
      return text.replace(/{([^}]+)?}/gm, (match, p1) => {
        return args[p1] || ""
      })
    }
    return text
  }

  const t = (code, args) => {
    const currentLocale = locale.locale || locale.defaultLocale
    if(!currentLocale || !locale[currentLocale]) { return code }
    const translation = locale[currentLocale][code] || code
    return interp(translation, args)
  }

  const toggleLocale = () => {
    const newLocale = locale.locale == "sv" ? "en" : "sv"
    locale.setLocale(newLocale)
  }

  const setLocale = (newLocale) => {
    // console.log("setLocale", newLocale)
    return locale.setLocale(newLocale)
  }

  const getLocale = () => {
    // console.log("getLocale", locale.locale)
    return locale.locale
  }

  return {
    t,
    toggleLocale,
    getLocale,
    setLocale
  }
}

function fetchLocaleFromURL(localeURLname) {
  const route = useRoute()
  if(route.query[localeURLname]) {
    return route.query[localeURLname]
  } else {
    return null
  }
}
