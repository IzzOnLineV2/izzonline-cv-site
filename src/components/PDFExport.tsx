import { Printer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function PDFExport() {
  const { t } = useLanguage();

  const openPrintCv = () => {
    window.open('/cv', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openPrintCv}
      className="pdf-export-button inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg transition-all"
    >
      <Printer size={18} />
      <span className="hidden sm:inline">{t('cv.print')}</span>
      <span className="sm:hidden">CV</span>
    </button>
  );
}
