module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="wa-input" placeholder="Paste your text here (at least a few sentences)…" style="min-height:260px;"></textarea>
    </div>
    <div style="font-size:12px;color:#A3937E;">Minimum ~100 words for a meaningful reading.</div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Stylistic Signals</div>
    <div id="wa-summary" style="font-size:13px;font-weight:600;margin-bottom:4px;"></div>
    <div class="result-rows">
      <div class="result-row"><span class="k">Sentence-length variation (burstiness)</span><span class="v" id="wa-burstiness">—</span></div>
      <div class="result-row"><span class="k">Repeated phrases (3+ words)</span><span class="v" id="wa-repetition">—</span></div>
      <div class="result-row"><span class="k">Generic transition words</span><span class="v" id="wa-transitions">—</span></div>
      <div class="result-row"><span class="k">Vocabulary variety (unique word ratio)</span><span class="v" id="wa-vocab">—</span></div>
      <div class="result-row"><span class="k">Average sentence length</span><span class="v" id="wa-avglen">—</span></div>
    </div>
    <div id="wa-details" style="margin-top:12px;font-size:13px;color:#4A4238;line-height:1.7;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="wa-analyze">Analyze text</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">⚠ Honest disclaimer: this tool does NOT tell you whether text "is AI" or "is human" — no tool reliably can, and published research shows even commercial AI detectors have significant false-positive rates. It only shows transparent stylistic signals for you to interpret yourself.</div>`,
  howto: [
    'Paste at least a few paragraphs of text.',
    'Click <strong>Analyze text</strong> — see objective stylistic signals: sentence-length variation, repeated phrasing, generic transitions and vocabulary variety.',
    'Read the signals as clues, not a verdict — human writing can score "AI-like" and AI writing can score "human-like" depending on style and editing.',
  ],
  faq: [
    { q: 'Why doesn\'t this give a simple "% AI" score like other detectors?', a: 'Because that number is misleading. Independent research and even universities (several have dropped Turnitin\'s AI score and similar tools) have found these detectors produce meaningful false positives, especially against non-native English writers and heavily-edited text. A confident-looking percentage hides that uncertainty — we\'d rather show you the actual signals than a fake-precise number.' },
    { q: 'What is "burstiness" and why does it matter?', a: 'Human writing naturally mixes short punchy sentences with long complex ones — high burstiness. Unedited AI text often has more uniform sentence lengths — low burstiness. It\'s a real, measurable pattern, but heavily-edited AI text or a very consistent human writer can both land anywhere on this scale — it\'s a clue, not proof.' },
    { q: 'What do repeated phrases and generic transitions indicate?', a: 'AI text sometimes leans on the same connecting phrases repeatedly ("Moreover," "In conclusion," "It is important to note that"). Finding several isn\'t proof of AI — some human writers do this too, especially in formal or academic writing — but a heavy concentration is worth a second look.' },
    { q: 'Should I use this to accuse someone of using AI?', a: 'No. Please don\'t use signal-based tools like this (or any AI detector) as the sole basis for academic or professional accusations — the false-positive risk is real and well documented. Use it for your own writing, to understand your own patterns, or as one small data point among many.' },
  ],
};
