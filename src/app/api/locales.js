// pages/api/locales.js
import i18nextMiddleware from 'i18next-http-middleware';
import i18n from '../../i18n';

export default function handler(req, res) {
  i18nextMiddleware.handle(i18n, {
    removeLngFromUrl: false,
  })(req, res, () => {
    res.status(200).json({ lng: req.language });
  });
}
