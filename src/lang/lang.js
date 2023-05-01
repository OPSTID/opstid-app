import { createI18n } from "vue-i18n"

// START langs
import langEnUs from "./en-us.json"
import langJaJp from "./ja-jp.json"
// END langs

// create messages
const messages = {
    "en-us":langEnUs,
    "ja-jp":langJaJp
}

// create i18 instance
const i18n = createI18n({
    locale: "ja-jp",
    fallbackLocale: "en-us",
    messages
})

export default i18n