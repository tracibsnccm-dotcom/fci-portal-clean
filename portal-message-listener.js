/**
 * Case Clarity portal — paste into the dashboard page JS (or app root).
 * FCI (iframe) postMessages: FCI_RETURN_TO_DASHBOARD, GO_TO_NEXT_ASSESSMENT
 *
 * IMPORTANT: In production, validate event.origin (your FCI host only).
 */
window.addEventListener('message', function (event) {
  var d = event.data;
  if (!d || typeof d.type !== 'string') return;

  // Production example:
  // var allowed = ['https://your-fci.vercel.app', 'https://fci-portal-clean.vercel.app'];
  // if (allowed.indexOf(event.origin) === -1) return;

  if (d.type === 'FCI_RETURN_TO_DASHBOARD') {
    var fciIframe = document.getElementById('fci-iframe');
    if (fciIframe) {
      fciIframe.style.display = 'none';
    }
    // SPA: router to dashboard route if needed. Refresh progress if needed.
    console.log('Returning to dashboard from FCI');
    return;
  }

  if (d.type === 'GO_TO_NEXT_ASSESSMENT') {
    // FCI sends: { instrument, nextInstrument: 'RRF', caseType } — no nextUrl
    var nextUrl =
      d.nextUrl ||
      (d.nextInstrument === 'RRF'
        ? 'https://recovery-risk-forecaster.vercel.app/?caseType=' +
          encodeURIComponent(d.caseType || 'active') +
          '&instrument=RRF'
        : null);
    if (nextUrl) {
      window.open(nextUrl, 'rrf-tool', 'width=1200,height=800');
    }
    return;
  }

  if (d.type === 'INSTRUMENT_COMPLETE') {
    // Optional: refresh dashboard progress
    return;
  }
});
