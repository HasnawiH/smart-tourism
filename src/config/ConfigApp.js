//////////////////// CONFIG APP
import {
    APP_URL,
    APP_DEFAULT_LANG,
    APP_THEME_MODE,
    APP_ONESIGNAL_APP_ID,
} from '@env';

const ConfigApp = {

    // backend url (with slash at end)
    URL: APP_URL,

    DEFAULTLANG: APP_DEFAULT_LANG,

    THEMEMODE: APP_THEME_MODE, // light or dark

    ONESIGNAL_APP_ID: APP_ONESIGNAL_APP_ID, // your onesignal key

};

export default ConfigApp;