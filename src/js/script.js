(function loadTab() {
	const shippingContainer = document.querySelectorAll('.ui-shipping-container');

  for (const elements of shippingContainer) {
		const tabsElements = elements.querySelectorAll('ul > li > a');
		const hiddenContent = elements.querySelectorAll('div .tab-content-hidden');

		for (const links of tabsElements) {
			links.addEventListener('click', function getHref (event) {
				clearClass ();
				const elementHref = event.target.getAttribute('href');
				const tabsContent = elements.querySelector(elementHref);
				tabsContent.setAttribute('class', 'tab-content-showing');
			});
		}

		function clearClass () {
			for (const content of hiddenContent) {
				content.setAttribute('class', 'tab-content-hidden');
			}
		}
	}
}());
