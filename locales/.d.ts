import {
    DefineLocaleMessage,
    // DefineDateTimeFormat,
    // DefineNumberFormat
} from 'vue-i18n'

declare module 'vue-i18n' {
    // define the locale messages schema

    export interface DefineLocaleMessage {
        hello: string,
        page: {
            index: string,
            about: string,
        }
        footer: {
            copyright: string
        }
        //errors: string[]
    }

    //     // define the datetime format schema
    //     // export interface DefineDateTimeFormat {
    //     //   short: {
    //     //     hour: 'numeric'
    //     //     minute: 'numeric'
    //     //     second: 'numeric'
    //     //     timeZoneName: 'short'
    //     //     timezone: string
    //     //   }
    //     // }

    //     // // define the number format schema
    //     // export interface DefineNumberFormat {
    //     //   currency: {
    //     //     style: 'currency'
    //     //     currencyDisplay: 'symbol'
    //     //     currency: string
    //     //   }
    //     // }
}