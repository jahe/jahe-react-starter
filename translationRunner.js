import manageTranslations from 'react-intl-translations-manager';

manageTranslations({
  messagesDirectory: 'src/client/translations/extractedMessages',
  translationsDirectory: 'src/client/translations/locales/',
  languages: ['de', 'en', 'fr'], // any language you need
});