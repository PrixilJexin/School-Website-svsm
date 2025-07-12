const pdfFlipbook = (() => {
  // ✅ Use your public GitHub raw link here:
  const url = 'https://raw.githubusercontent.com/PrixilJexin/magazinefile/main/SVS_Magazine_2024-25.pdf';

  const containerId = 'pdfFlipbook-container';

  async function renderPage(pdf, pageNum) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    await page.render(renderContext).promise;

    // Wrap canvas in a div.page for Turn.js
    const pageDiv = document.createElement('div');
    pageDiv.classList.add('pdfFlipbook-page');
    pageDiv.style.width = viewport.width + 'px';
    pageDiv.style.height = viewport.height + 'px';
    pageDiv.appendChild(canvas);
    return pageDiv;
  }

  async function init() {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('PDF Flipbook container not found!');
      return;
    }

    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    container.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= pdf.numPages; i++) {
      const pageDiv = await renderPage(pdf, i);
      container.appendChild(pageDiv);
    }

    // Initialize Turn.js
    $(container).turn({
      width: container.scrollWidth,
      height: container.scrollHeight,
      autoCenter: true,
      elevation: 50,
      gradients: true,
      acceleration: true,
      duration: 800,
      pages: pdf.numPages,
    });
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', pdfFlipbook.init);
