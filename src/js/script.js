(function loadTab() {
	const shippingContainer = document.querySelectorAll('.ui-shipping-container');

  for (const elements of shippingContainer) {
		const tabsElements = elements.querySelectorAll('ul > li > a');
		const hiddenContent = elements.querySelectorAll('div .tab-content-hidden');
		const showingContent = elements.querySelectorAll('div .tab-content-showing');

		function clearClass() {
			for (const content of hiddenContent) {
				content.className = 'tab-content-hidden';
			}
			for (const content of showingContent) {
				content.className = 'tab-content-hidden';
			}
		}

		for (const links of tabsElements) {
			links.addEventListener('click', function getHref(event) {
				clearClass();
				const elementHref = event.target.getAttribute('href');
				const tabsContent = elements.querySelector(elementHref);
				tabsContent.className = 'tab-content-showing';
			});
		}
	}
}());
