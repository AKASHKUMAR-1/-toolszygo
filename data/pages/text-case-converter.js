module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="tc-input" placeholder="Apna text yahan paste karo…" style="min-height:200px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="tc-output" readonly placeholder="converted text yahan aayega…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" data-case="upper">UPPERCASE</button>
  <button class="btn btn-primary" data-case="lower">lowercase</button>
  <button class="btn btn-primary" data-case="title">Title Case</button>
  <button class="btn btn-primary" data-case="sentence">Sentence case</button>
  <button class="btn btn-primary" data-case="capitalize">Capitalize Each Word</button>
  <button class="btn btn-secondary" id="tc-copy">Copy result</button>
</div>`,
  howto: [
    'Apna text input box me paste karo.',
    'Jo case chahiye us button pe click karo — UPPERCASE, lowercase, Title Case, Sentence case ya Capitalize Each Word.',
    '"Copy result" se converted text copy kar lo.',
  ],
  faq: [
    { q: 'Title Case aur Capitalize Each Word me kya difference hai?', a: 'Capitalize Each Word har word ka pehla letter capital karta hai. Title Case me chhote words (a, an, the, of, in…) lowercase rehte hain — jaise book titles me hota hai. Pehla aur aakhri word hamesha capital hota hai.' },
    { q: 'Sentence case kaise kaam karta hai?', a: 'Har sentence ka pehla letter capital, baaki lowercase. Sentences ., ! ya ? ke baad detect hote hain.' },
    { q: 'Kya Hindi/non-English text pe kaam karta hai?', a: 'Case sirf un scripts me hota hai jahan upper/lowercase hai (English, European languages). Hindi/Devanagari me case nahi hota, wo text unchanged rahega.' },
    { q: 'Kya formatting (line breaks) preserve hoti hai?', a: 'Haan — sirf letters ka case badalta hai, line breaks aur spacing bilkul same rehti hai.' },
  ],
};
