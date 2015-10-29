declare var require: { (id: string): any; };

export interface CharMetrics {
  charCode: number;
  width: number;
  name: string;
}

export const fonts: {[index: string]: CharMetrics[]} = {
  'Arial-BoldItalicMT': require('./vendor/dompdf/Arial_Bold_Italic'),
  'Arial-BoldMT': require('./vendor/dompdf/Arial_Bold'),
  'Arial-ItalicMT': require('./vendor/dompdf/Arial_Italic'),
  'ArialMT': require('./vendor/dompdf/Arial'),
  'Arial': require('./vendor/dompdf/Arial'),
  'CourierNew': require('./vendor/Adobe/Core14/Courier'),
  'Courier': require('./vendor/Adobe/Core14/Courier'),
  'Courier-Bold': require('./vendor/Adobe/Core14/Courier-Bold'),
  'Courier-BoldOblique': require('./vendor/Adobe/Core14/Courier-BoldOblique'),
  'Courier-Oblique': require('./vendor/Adobe/Core14/Courier-Oblique'),
  'Georgia': require('./vendor/dompdf/Georgia'),
  'Georgia-Bold': require('./vendor/dompdf/Georgia_Bold'),
  'Georgia-BoldItalic': require('./vendor/dompdf/Georgia_Bold_Italic'),
  'Georgia-Italic': require('./vendor/dompdf/Georgia_Italic'),
  'Helvetica': require('./vendor/Adobe/Core14/Helvetica'),
  'Helvetica-Bold': require('./vendor/Adobe/Core14/Helvetica-Bold'),
  'Helvetica-BoldOblique': require('./vendor/Adobe/Core14/Helvetica-BoldOblique'),
  'Helvetica-Oblique': require('./vendor/Adobe/Core14/Helvetica-Oblique'),
  'LucidaConsole': require('./vendor/dompdf/lucon'),
  'Silkscreen': require('./vendor/dompdf/slkscr'),
  'Silkscreen-Bold': require('./vendor/dompdf/slkscrb'),
  'Silkscreen-Expanded': require('./vendor/dompdf/slkscre'),
  'Silkscreen-ExpandedBold': require('./vendor/dompdf/slkscreb'),
  'Symbol': require('./vendor/Adobe/Core14/Symbol'),
  'Times-Bold': require('./vendor/Adobe/Core14/Times-Bold'),
  'Times-BoldItalic': require('./vendor/Adobe/Core14/Times-BoldItalic'),
  'Times-Italic': require('./vendor/Adobe/Core14/Times-Italic'),
  'Times-Roman': require('./vendor/Adobe/Core14/Times-Roman'),
  'TimesNewRoman': require('./vendor/dompdf/Times_New_Roman'),
  'TimesNewRomanPS-BoldItalicMT': require('./vendor/dompdf/Times_New_Roman_Bold_Italic'),
  'TimesNewRomanPS-BoldMT': require('./vendor/dompdf/Times_New_Roman_Bold'),
  'TimesNewRomanPS-ItalicMT': require('./vendor/dompdf/Times_New_Roman_Italic'),
  'TimesNewRomanPSMT': require('./vendor/dompdf/Times_New_Roman'),
  'Trebuchet-BoldItalic': require('./vendor/dompdf/Trebuchet_MS_Bold_Italic'),
  'TrebuchetMS': require('./vendor/dompdf/Trebuchet_MS'),
  'TrebuchetMS-Bold': require('./vendor/dompdf/Trebuchet_MS_Bold'),
  'TrebuchetMS-Italic': require('./vendor/dompdf/Trebuchet_MS_Italic'),
  'Verdana': require('./vendor/dompdf/Verdana'),
  'Verdana-Bold': require('./vendor/dompdf/Verdana_Bold'),
  'Verdana-BoldItalic': require('./vendor/dompdf/Verdana_Bold_Italic'),
  'Verdana-Italic': require('./vendor/dompdf/Verdana_Italic'),
  'ZapfDingbats': require('./vendor/Adobe/Core14/ZapfDingbats')
};
