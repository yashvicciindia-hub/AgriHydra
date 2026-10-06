/**
 * AgriHydraAppDownloadCTA
 * Reusable Global Floating Android App Download Component
 */
class AgriHydraAppDownloadCTA {
  constructor(options = {}) {
    this.containerId = options.containerId || 'agrihydra-app-download-cta-root';
    this.apkUrl = options.apkUrl || '/AgriHydra.apk';
    this.filename = options.filename || 'AgriHydra.apk';
    this.init();
  }

  init() {
    if (document.getElementById('agrihydra-app-download-cta')) return;

    let targetEl = document.getElementById(this.containerId);
    if (!targetEl) {
      targetEl = document.createElement('div');
      targetEl.id = this.containerId;
      document.body.appendChild(targetEl);
    }

    targetEl.innerHTML = this.render();
  }

  render() {
    return `
      <a
        href="${this.apkUrl}"
        download="${this.filename}"
        class="agrihydra-app-download"
        id="agrihydra-app-download-cta"
        aria-label="Download AgriHydra Android App"
        title="Download AgriHydra Android App"
      >
        <div class="agrihydra-app-download__icon-badge" aria-hidden="true">
          <svg class="agrihydra-app-download__phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
            <path d="M12 6v6m-3-3l3 3 3-3"></path>
          </svg>
        </div>
        <div class="agrihydra-app-download__text-container">
          <span class="agrihydra-app-download__primary-text">
            <span class="agrihydra-app-download__short-label">Download App</span>
            <span class="agrihydra-app-download__full-label">Download AgriHydra App</span>
          </span>
          <span class="agrihydra-app-download__sub-label">Android App</span>
        </div>
        <span class="agrihydra-app-download__tag">APK</span>
      </a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.agrihydraAppDownloadCTA = new AgriHydraAppDownloadCTA();
});
