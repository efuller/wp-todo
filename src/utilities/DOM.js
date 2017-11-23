export default class DOM {
	static closest( element, selector ) {
		if ( null === element.parentNode ) {
			return null;
		}

		if ( element.parentNode.classList.contains( selector ) ) {
			return element.parentNode;
		}

		return this.closest( element.parentNode, selector );
	};
}
