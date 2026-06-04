import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../../i18n';

// Standalone layout — no global Navbar/Footer.
export default async function CurriculumLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
