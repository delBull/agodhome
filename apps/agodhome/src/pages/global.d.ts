import en from '../../messages/en.json';

// Define Messages type based on your imported messages
type Messages = typeof en;

// Extend global IntlMessages interface
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages { }
}
