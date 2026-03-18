/**
 * Copy into Case Clarity portal JavaScript (load once, e.g. app root / layout).
 * FCI postMessages: FCI_RETURN_TO_DASHBOARD, GO_TO_NEXT_ASSESSMENT, INSTRUMENT_COMPLETE
 */
window.addEventListener('message', function (event) {
  var d = event.data;
  if (!d || typeof d.type !== 'string') return;

  // Optional: restrict origins
  // if (!/^https:\/\/(fci-portal-clean|.*)\.vercel\.app$/.test(event.origin)) return;

  switch (d.type) {
    case 'FCI_RETURN_TO_DASHBOARD':
      // Show assessment dashboard; hide or clear the FCI iframe.
      // e.g. setState({ view: 'dashboard' }); instrumentIframe.src = 'about:blank';
      break;

    case 'GO_TO_NEXT_ASSESSMENT':
      // After FCI: load RRF in iframe or new tab.
      // if (d.instrument === 'FCI' && d.nextInstrument === 'RRF') {
      //   var url = 'https://recovery-risk-forecaster.vercel.app/?caseType=' +
      //     encodeURIComponent(d.caseType || 'active') + '&instrument=RRF';
      //   instrumentIframe.src = url; // or window.open(url, '_blank');
      // }
      break;

    case 'INSTRUMENT_COMPLETE':
      // Optional: refresh progress UI when FCI finishes.
      break;

    default:
      break;
  }
});
