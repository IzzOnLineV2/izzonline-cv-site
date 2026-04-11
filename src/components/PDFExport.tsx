import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';

export function PDFExport() {
  const { t, language } = useLanguage();

  const generatePDF = () => {
    try {
      // Use the provided PDF link based on language
      const pdfUrl = language === 'en' 
        ? 'https://assets.izzonline.it/files/stefania-izzo-cv-en.pdf'
        : 'https://assets.izzonline.it/files/stefania-izzo-cv-en.pdf'; // TODO: Add Italian version when available
      
      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `Stefania_Izzo_CV_${language.toUpperCase()}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success(t('pdf.success'));
    } catch (error) {
      console.error('Error downloading PDF:', error);
      toast.error(t('pdf.error'));
    }
  };

  return (
    <button
      onClick={generatePDF}
      className="pdf-export-button inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg transition-all"
    >
      <Download size={18} />
      <span className="hidden sm:inline">{t('pdf.download')}</span>
      <span className="sm:hidden">PDF</span>
    </button>
  );
}