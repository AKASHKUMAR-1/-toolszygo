module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="tr-input" placeholder="Type your text here…" style="min-height:180px;"></textarea>
    </div>
    <div class="field">
      <label for="tr-mode">What to reverse?</label>
      <select id="tr-mode">
        <option value="chars" selected>Characters (entire text reversed)</option>
        <option value="words">Order of words</option>
        <option value="lines">Order of lines</option>
        <option value="eachword">Each word reversed (order kept)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="tr-output" readonly placeholder="reversed text will appear here…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tr-run">Reverse text</button>
  <button class="btn btn-secondary" id="tr-copy">Copy result</button>
</div>`,
  howto: [
    'Type or paste your text in the input box.',
    'Choose a mode — entire text reversed by characters, order of words reversed, order of lines reversed, or each word reversed individually.',
    'Click <strong>Reverse text</strong> and copy the result.',
  ],
  faq: [
    { q: 'What\'s the difference between "reverse characters" and "reverse words"?', a: '"hello world" reversed by characters = "dlrow olleh". Reversing word order = "world hello" (the words stay intact, only their order flips).' },
    { q: 'Does emoji and non-English text reverse correctly?', a: 'Yes — the tool is Unicode-aware, so emoji and combined characters (like Hindi matras) don\'t break. Simple string-reversing tools often mangle these.' },
    { q: 'What is this useful for?', a: 'Fun messages, checking palindromes, word games, or reversing the order of lines/words in data. Quick string manipulation for coders.' },
    { q: 'How do I check for a palindrome?', a: 'Enter your word/sentence and reverse by characters — if the result is the same, it\'s a palindrome (like "madam", "nitin").' },
  ],
};
