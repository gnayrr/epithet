!(function () {

	var escapes = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&#39;',
		'`': '&#96;'
	};

	this.VERSION = '0.1.1';

	this.signatureClassName = 'epithet';


	var epithetized = function (el) {

		return !!(el && el._epithet);
	};

	var escape = function (str) {

		return str.replace(/[&<>"'`]/g, function (n) {

			return escapes[n];
		});
	};

	var Epithet = function (el) {

		this.host = {
			platform: window.navigator.platform,
			isWebkit: 'WebkitAppearance' in document.documentElement.style,
			newLine: '<br>'
		};
	

		this.created = (new Date()).toISOString();

		this._el = el;

		this.el = document.createElement('textarea');

		this.el.appendChild(document.createElement('br')); // fixes some inconsistencies


		// this.el.setAttribute('contentEditable', true);
		this.el.className = this._el.className;

		var style = window.getComputedStyle(this._el);

		// var bWidth = style.borderTopWidth;
		// var bStyle = style.borderTopStyle;
		// var bColor = style.borderTopColor;


		this.el.style.cssText = 'display:block;word-wrap:break-word;overflow-x: hidden;overflow-y: auto;white-space: pre-wrap;word-wrap: break-word;margin: 0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;';

		if (this.host.isWebkit) { // webkit isn't consistent with white-space: pre-wrap

			this.el.style.whiteSpace = 'pre-line';
		}

		this.el.style.fontSize = style.fontSize;

		this.el.style.resize = style.resize;

		this.el.style.outline = 'none';

		// this.el.style.height = style.height;

		// this.el.style.width = style.width;

		// this.el.style.border = style.border || bWidth + ' ' + bStyle + ' ' + bColor;

		this._el.parentElement.replaceChild(this.el, this._el);

		if (this._el.autofocus) {

			this.el.focus();
		}

		this.el._epithet = this;


		// this.el.addEventListener('blur', function (e) {

		// 	this.contentEditable = false;
		// });

		this.el.addEventListener('paste', function (e) {

			var text = e.clipboardData.getData('text/plain');

			if (text) {

				e.preventDefault();

				// text = text.replace(/[\r\n]/g, '<br><br>');

				if (this._epithet.host.isWebkit) {

					// webkit insert new lines for \n, which makes it really slow when
					// inserting large body of text (Alice in Wonderland)

					text = escape(text);

					text = text.replace(/[\r\n]/g, '<br>')
								.replace(/\t/g, '<span style="white-space:pre">&#9;</span>');

					this._epithet.setHtml(text);
				} else {

					this._epithet.setText(text);
				}
			}
		});

		this.el.addEventListener('keydown', function (e) {

			var code = e.keyCode || e.which;

			if (code === 9) {

				e.preventDefault();

				this._epithet.setText('\t');

			// } else if (code === 13) {

			// 	if (this._epithet.host.isWebkit) {

			// 		e.preventDefault();

			// 		this._epithet.setText('\n');
			// 	}
			}
		});

		this.el.addEventListener('drag', function (e) {

			e.preventDefault();
		});

		this.el.addEventListener('drop', function (e) {

			e.preventDefault();
		});
	};

	Epithet.prototype.constructor = Epithet;


	Epithet.prototype.element = function () {

		return this.el;
	};

	Epithet.prototype.setText = function (str) {

		var textEvent = document.createEvent('TextEvent');

		if (textEvent.initTextEvent) {

			textEvent.initTextEvent ('textInput', true, true, null, str, 9, 'en-US');
			this.el.dispatchEvent(textEvent);

		} else if (document.queryCommandSupported('insertText')) {

			document.execCommand('insertText', false, str);
		} else {

			console.log('This browser cannot successfully run epithet');
		}
	};

	Epithet.prototype.setHtml = function (html) {

		if (document.queryCommandSupported('insertHTML')) {

			document.execCommand('insertHTML', false, html);
		} else {

			console.log('This browser cannot successfully run epithet');
		}
	};

	Epithet.prototype.revert = function () {

		if (this.el.parentElement) {

			this.el.parentElement.replaceChild(this._el, this.el);
		}
	};



	this.init = function (el) {

		if (el && !epithetized(el)) {

			var ep = new Epithet(el);

			return ep.element();

		} else {

			var els = document.querySelectorAll('.' + this.signatureClassName);

			if (els.length > 0) {

				for (var i = els.length - 1; i >= 0; i--) {

					this.init(els[i]);
				}
			}
		}
	};


	window.epithet = this;

}).call({});