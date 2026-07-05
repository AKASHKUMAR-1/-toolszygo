// ToolsDo — master tool list (user's 100-tool list, 9 categories)
// built:true => page is generated and tool works. Others show in sidebar as "Coming soon" (no link, no page).

const palettes = [
  ['#FBE9DC', '#C0623B'], // PDF Tools
  ['#E9F2E4', '#5D8A4E'], // Image Tools
  ['#FDF3D8', '#A98423'], // Text Tools
  ['#E4EFF2', '#3E7D8F'], // Finance Calculators
  ['#EEE9F6', '#7460A8'], // Converters
  ['#EAEDF8', '#5568B0'], // Developer Tools
  ['#FBE4E4', '#B84F4F'], // Student Tools
  ['#E4F0EC', '#3F8570'], // Business Documents
  ['#F6E7F0', '#A85585'], // Daily Use
];

const categories = [
  {
    name: 'Finance Calculators',
    tools: [
      { name: 'EMI Calculator', slug: 'emi-calculator', built: true,
        title: 'EMI Calculator — Home, Car & Personal Loan EMI Calculator Online Free',
        metaDesc: 'Free online EMI calculator for home loan, car loan and personal loan. Calculate monthly EMI, total interest and total payment instantly with amortization breakup.',
        desc: 'Loan amount, interest rate aur tenure daalo — monthly EMI, total interest aur total payment turant calculate ho jayega. Home loan, car loan, personal loan sabke liye kaam karta hai.' },
      { name: 'GST Calculator', slug: 'gst-calculator', built: true,
        title: 'GST Calculator Online — Add or Remove GST (5%, 12%, 18%, 28%) Free',
        metaDesc: 'Free GST calculator India. Add GST or remove GST from any amount at 5%, 12%, 18% or 28% rates. Get CGST, SGST and total amount instantly.',
        desc: 'Kisi bhi amount pe GST add karo ya GST-inclusive price se GST nikalo. 5%, 12%, 18%, 28% — sab rates supported, CGST/SGST breakup ke saath.' },
      { name: 'Percentage Calculator', slug: 'percentage-calculator', built: true,
        title: 'Percentage Calculator Online — Find %, Increase & Decrease Free',
        metaDesc: 'Free percentage calculator. Find what is X% of Y, what percent X is of Y, and percentage increase or decrease between two numbers instantly.',
        desc: '"X ka Y% kitna hai", "X, Y ka kitna percent hai" aur percentage increase/decrease — teeno calculations ek hi jagah, turant.' },
      { name: 'SIP Calculator', slug: 'sip-calculator', built: true,
        title: 'SIP Calculator — Mutual Fund SIP Return Calculator Online Free',
        metaDesc: 'Free SIP calculator. Calculate mutual fund SIP maturity value, total investment and wealth gain for any monthly amount, return rate and duration.',
        desc: 'Monthly SIP amount, expected return aur duration daalo — maturity value, total investment aur wealth gain turant pata chal jayega.' },
      { name: 'FD Calculator', slug: 'fd-calculator', built: true,
        title: 'FD Calculator — Fixed Deposit Maturity & Interest Calculator Free',
        metaDesc: 'Free FD calculator India. Calculate fixed deposit maturity amount and interest earned with quarterly compounding for any principal, rate and tenure.',
        desc: 'FD amount, interest rate aur tenure daalo — maturity amount aur total interest (quarterly compounding, jaise banks karte hain) turant calculate hota hai.' },
      { name: 'RD Calculator', slug: 'rd-calculator', built: false },
      { name: 'PPF Calculator', slug: 'ppf-calculator', built: false },
      { name: 'Income Tax Calculator', slug: 'income-tax-calculator', built: false },
      { name: 'Compound Interest Calculator', slug: 'compound-interest-calculator', built: true,
        title: 'Compound Interest Calculator Online — Monthly, Quarterly, Yearly Free',
        metaDesc: 'Free compound interest calculator. Calculate maturity amount and interest with yearly, half-yearly, quarterly or monthly compounding instantly.',
        desc: 'Principal, rate, time aur compounding frequency choose karo — final amount aur total compound interest turant dikh jayega.' },
      { name: 'Simple Interest Calculator', slug: 'simple-interest-calculator', built: true,
        title: 'Simple Interest Calculator Online — SI = P×R×T/100 Free',
        metaDesc: 'Free simple interest calculator. Enter principal, rate and time to get simple interest and total amount instantly using SI = P×R×T/100.',
        desc: 'Principal, interest rate aur time daalo — simple interest aur total amount seedha P×R×T/100 formula se calculate hota hai.' },
      { name: 'Loan Eligibility Calculator', slug: 'loan-eligibility-calculator', built: false },
      { name: 'Salary / CTC Calculator', slug: 'salary-ctc-calculator', built: false },
      { name: 'Discount Calculator', slug: 'discount-calculator', built: true,
        title: 'Discount Calculator — Sale Price & You Save Calculator Online Free',
        metaDesc: 'Free discount calculator. Enter original price and discount percentage to get final sale price and how much you save. Supports extra stacked discount.',
        desc: 'Original price aur discount % daalo — final price aur kitna bacha, dono turant. Extra discount (sale pe sale) bhi add kar sakte ho.' },
      { name: 'Retirement Corpus Calculator', slug: 'retirement-corpus-calculator', built: false },
      { name: 'HRA Calculator', slug: 'hra-calculator', built: false },
      { name: 'Gratuity Calculator', slug: 'gratuity-calculator', built: false },
    ],
  },
  {
    name: 'Developer Tools',
    tools: [
      { name: 'Password Generator', slug: 'password-generator', built: true,
        title: 'Strong Password Generator Online — Random Secure Passwords Free',
        metaDesc: 'Generate strong random passwords online free. Choose length, uppercase, lowercase, numbers and symbols. Passwords are created in your browser — never sent anywhere.',
        desc: 'Strong random password banao — length aur characters (uppercase, numbers, symbols) khud choose karo. Password aapke browser me hi banta hai, kahin bheja nahi jaata.' },
      { name: 'QR Code Generator', slug: 'qr-code-generator', built: true,
        title: 'QR Code Generator Online Free — Create QR for URL, Text, UPI',
        metaDesc: 'Free QR code generator. Create QR codes for URLs, text, phone numbers or UPI instantly and download as PNG. No signup, works in your browser.',
        desc: 'URL, text, phone number ya kisi bhi cheez ka QR code banao aur PNG me download karo. Bilkul free, browser me hi generate hota hai.' },
      { name: 'Barcode Generator', slug: 'barcode-generator', built: false },
      { name: 'Color Code Picker (HEX/RGB/HSL)', slug: 'color-code-picker', built: true,
        title: 'Color Code Picker — HEX to RGB to HSL Converter Online Free',
        metaDesc: 'Free color picker and converter. Pick any color and get its HEX, RGB and HSL codes instantly, or paste a HEX code to convert. One-click copy.',
        desc: 'Color pick karo ya HEX code paste karo — HEX, RGB aur HSL teeno formats me code turant milta hai, one-click copy ke saath.' },
      { name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum-generator', built: true,
        title: 'Lorem Ipsum Generator — Dummy Placeholder Text Online Free',
        metaDesc: 'Free lorem ipsum generator. Generate dummy placeholder text by paragraphs, sentences or words for designs, mockups and layouts. Copy in one click.',
        desc: 'Designs aur mockups ke liye placeholder text banao — paragraphs, sentences ya words choose karo aur ek click me copy karo.' },
      { name: 'CSS/JS/HTML Minifier', slug: 'code-minifier', built: false },
      { name: 'URL Encoder / Decoder', slug: 'url-encoder-decoder', built: true,
        title: 'URL Encoder / Decoder Online — Encode & Decode URLs Free',
        metaDesc: 'Free URL encoder and decoder. Encode text for URLs (percent encoding) or decode encoded URLs instantly in your browser. No signup.',
        desc: 'Text ya URL ko percent-encoding me encode karo, ya encoded URL ko wapas readable text me decode karo — dono ek hi jagah.' },
      { name: 'Regex Tester', slug: 'regex-tester', built: false },
      { name: 'JSON Formatter / Validator', slug: 'json-formatter', built: true,
        title: 'JSON Formatter & Validator Online — Beautify, Minify JSON Free',
        metaDesc: 'Free JSON formatter, validator and minifier. Beautify JSON with proper indentation, find syntax errors with line info, or minify — all in your browser.',
        desc: 'JSON paste karo — format (beautify), minify ya validate karo. Syntax error hogi to exact jagah batayega. Sab browser me hi hota hai.' },
      { name: 'UUID Generator', slug: 'uuid-generator', built: true,
        title: 'UUID Generator Online — Random UUID v4 Generator Free',
        metaDesc: 'Free UUID v4 generator. Generate one or bulk random UUIDs (GUIDs) instantly using cryptographically secure randomness. Copy in one click.',
        desc: 'Ek click me random UUID v4 (GUID) banao — ek ya bulk me 100 tak, cryptographically secure. Copy karke seedha use karo.' },
    ],
  },
  {
    name: 'Text Tools',
    tools: [
      { name: 'Word Counter', slug: 'word-counter', built: true,
        title: 'Word Counter Online — Count Words, Characters, Sentences Free',
        metaDesc: 'Free online word counter. Count words, characters (with and without spaces), sentences, paragraphs and reading time instantly as you type.',
        desc: 'Text paste karo ya type karo — words, characters, sentences, paragraphs aur reading time live count hota rahega. Essays, blogs, assignments sabke liye perfect.' },
      { name: 'Character Counter', slug: 'character-counter', built: false },
      { name: 'Text Case Converter', slug: 'text-case-converter', built: false },
      { name: 'Basic Grammar Checker', slug: 'grammar-checker', built: false },
      { name: 'Text to Speech Converter', slug: 'text-to-speech', built: false },
      { name: 'Speech to Text Converter', slug: 'speech-to-text', built: false },
      { name: 'Text Diff Checker', slug: 'text-diff-checker', built: false },
      { name: 'Duplicate Line Remover', slug: 'duplicate-line-remover', built: false },
      { name: 'Text Reverser', slug: 'text-reverser', built: false },
      { name: 'Line Break Remover', slug: 'line-break-remover', built: false },
    ],
  },
  {
    name: 'Converters',
    tools: [
      { name: 'Unit Converter', slug: 'unit-converter', built: true,
        title: 'Unit Converter Online — Length, Weight, Temperature Free',
        metaDesc: 'Free online unit converter for length, weight and temperature. Convert km to miles, kg to pounds, Celsius to Fahrenheit and more instantly.',
        desc: 'Length (km, miles, feet), weight (kg, pounds) aur temperature (°C, °F, K) — sab units aapas me convert karo, instantly.' },
      { name: 'Currency Converter', slug: 'currency-converter', built: false },
      { name: 'Number to Words Converter', slug: 'number-to-words', built: false },
      { name: 'Time Zone Converter', slug: 'time-zone-converter', built: false },
      { name: 'Date Format Converter', slug: 'date-format-converter', built: false },
      { name: 'CSV to JSON Converter', slug: 'csv-to-json', built: false },
      { name: 'JSON to CSV Converter', slug: 'json-to-csv', built: false },
      { name: 'Base64 Encoder / Decoder', slug: 'base64-encoder-decoder', built: false },
      { name: 'HTML to PDF Converter', slug: 'html-to-pdf', built: false },
      { name: 'Markdown to HTML Converter', slug: 'markdown-to-html', built: false },
    ],
  },
  {
    name: 'Image Tools',
    tools: [
      { name: 'Image Compressor', slug: 'image-compressor', built: true,
        title: 'Image Compressor Online Free — Compress JPG, PNG, WEBP',
        metaDesc: 'Compress JPG, PNG and WEBP images online free. Reduce image file size in your browser — photos never leave your device. No signup, no watermark.',
        desc: 'JPG, PNG ya WEBP image upload karo aur file size kam karo — quality khud control karo. Image aapke browser me hi compress hoti hai, kahin upload nahi hoti.' },
      { name: 'Image Resizer', slug: 'image-resizer', built: false },
      { name: 'Background Remover', slug: 'background-remover', built: false },
      { name: 'Image to PDF Converter', slug: 'image-to-pdf', built: false },
      { name: 'Image Format Converter (PNG/JPG/WEBP)', slug: 'image-format-converter', built: false },
      { name: 'Image Cropper', slug: 'image-cropper', built: false },
      { name: 'Passport Size Photo Maker', slug: 'passport-photo-maker', built: false },
      { name: 'Image Color Picker', slug: 'image-color-picker', built: false },
      { name: 'Meme Generator', slug: 'meme-generator', built: false },
      { name: 'Photo Collage Maker', slug: 'photo-collage-maker', built: false },
    ],
  },
  {
    name: 'PDF Tools',
    tools: [
      { name: 'PDF Merge Tool', slug: 'pdf-merge', built: true,
        title: 'Merge PDF Files Online Free — Combine Multiple PDFs into One',
        metaDesc: 'Merge multiple PDF files into one online free. Reorder files, combine and download instantly. PDFs are processed in your browser — 100% private.',
        desc: 'Do ya zyada PDF files select karo, order set karo aur ek single PDF me merge karke download karo. Files aapke browser me hi process hoti hain — 100% private.' },
      { name: 'PDF to Word Converter', slug: 'pdf-to-word', built: false },
      { name: 'Word to PDF Converter', slug: 'word-to-pdf', built: false },
      { name: 'PDF Split Tool', slug: 'pdf-split', built: false },
      { name: 'PDF Compressor', slug: 'pdf-compressor', built: false },
      { name: 'PDF to JPG Converter', slug: 'pdf-to-jpg', built: false },
      { name: 'JPG to PDF Converter', slug: 'jpg-to-pdf', built: false },
      { name: 'PDF Password Remover / Adder', slug: 'pdf-password', built: false },
      { name: 'PDF Page Number Adder', slug: 'pdf-page-numbers', built: false },
      { name: 'PDF to Excel Converter', slug: 'pdf-to-excel', built: false },
    ],
  },
  {
    name: 'Student / Exam Tools',
    tools: [
      { name: 'Typing Speed Test', slug: 'typing-speed-test', built: false },
      { name: 'CGPA to Percentage Calculator', slug: 'cgpa-to-percentage', built: false },
      { name: 'Resume Builder', slug: 'resume-builder', built: false },
      { name: 'Roman Numeral Converter', slug: 'roman-numeral-converter', built: false },
      { name: 'Handwriting to Text (OCR)', slug: 'ocr-handwriting-to-text', built: false },
      { name: 'Essay Word Counter', slug: 'essay-word-counter', built: false },
      { name: 'Timetable Maker', slug: 'timetable-maker', built: false },
      { name: 'Exam Countdown Timer', slug: 'exam-countdown-timer', built: false },
      { name: 'Result Percentage Calculator', slug: 'result-percentage-calculator', built: false },
    ],
  },
  {
    name: 'Business Documents',
    tools: [
      { name: 'Invoice Generator', slug: 'invoice-generator', built: false },
      { name: 'GST Invoice Generator', slug: 'gst-invoice-generator', built: false },
      { name: 'Business Name Generator', slug: 'business-name-generator', built: false },
      { name: 'Signature Maker', slug: 'signature-maker', built: false },
      { name: 'Letterhead Generator', slug: 'letterhead-generator', built: false },
      { name: 'Salary Slip Generator', slug: 'salary-slip-generator', built: false },
      { name: 'Offer Letter Generator', slug: 'offer-letter-generator', built: false },
      { name: 'Rent Receipt Generator', slug: 'rent-receipt-generator', built: false },
      { name: 'Bill Generator', slug: 'bill-generator', built: false },
      { name: 'Quotation Generator', slug: 'quotation-generator', built: false },
    ],
  },
  {
    name: 'Daily Use Tools',
    tools: [
      { name: 'Age Calculator', slug: 'age-calculator', built: true,
        title: 'Age Calculator Online — Calculate Exact Age in Years, Months, Days',
        metaDesc: 'Free age calculator online. Enter your date of birth and find your exact age in years, months, days — plus total days lived and next birthday countdown.',
        desc: 'Apni date of birth daalo — exact age years, months aur days me pata chal jayegi, saath me total days aur next birthday ka countdown bhi.' },
      { name: 'Daily Rashifal (Horoscope)', slug: 'daily-rashifal', built: false },
      { name: 'Distance Calculator', slug: 'distance-calculator', built: false },
      { name: 'Fuel Cost Calculator', slug: 'fuel-cost-calculator', built: false },
      { name: 'Trip Cost Splitter', slug: 'trip-cost-splitter', built: false },
      { name: 'Tip Calculator', slug: 'tip-calculator', built: false },
      { name: 'Love Calculator', slug: 'love-calculator', built: false },
      { name: 'Name Numerology Calculator', slug: 'name-numerology', built: false },
      { name: 'Domain Name Generator', slug: 'domain-name-generator', built: false },
      { name: 'Random Number Generator', slug: 'random-number-generator', built: false },
      { name: 'Random Name Picker', slug: 'random-name-picker', built: false },
      { name: 'Coin Flip / Dice Roller', slug: 'coin-flip-dice-roller', built: false },
      { name: 'Screen Resolution Tester', slug: 'screen-resolution-tester', built: false },
      { name: 'Internet Speed Test', slug: 'internet-speed-test', built: false },
      { name: 'BMI Calculator', slug: 'bmi-calculator', built: false },
    ],
  },
];

// attach palette + initials
categories.forEach((cat, ci) => {
  cat.chipBg = palettes[ci][0];
  cat.chipFg = palettes[ci][1];
  cat.tools.forEach((t) => {
    t.category = cat.name;
    t.chipBg = cat.chipBg;
    t.chipFg = cat.chipFg;
    t.initials = t.name.split(' ').filter(w => /^[A-Za-z0-9]/.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  });
});

const popularSlugs = ['emi-calculator', 'gst-calculator', 'image-compressor', 'word-counter', 'password-generator', 'qr-code-generator', 'pdf-merge', 'percentage-calculator'];

module.exports = { categories, popularSlugs };
