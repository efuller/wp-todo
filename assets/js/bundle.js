/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _mitt = __webpack_require__(12);

var _mitt2 = _interopRequireDefault(_mitt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = exports.events = (0, _mitt2.default)();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jQuery = __webpack_require__(0);

var _jQuery2 = _interopRequireDefault(_jQuery);

var _WPTodo = __webpack_require__(3);

var _WPTodo2 = _interopRequireDefault(_WPTodo);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize our app when the page is ready.
(0, _jQuery2.default)(function () {
  new _WPTodo2.default().init();
}); /**
     * Entry point file.
     *
     * From here we will initialize our app.
     */

// User imports

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ToDoList = __webpack_require__(6);

var _ToDoList2 = _interopRequireDefault(_ToDoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPTodo = function () {
	function WPTodo() {
		_classCallCheck(this, WPTodo);

		this.todoList = new _ToDoList2.default();
	}

	_createClass(WPTodo, [{
		key: 'init',
		value: function init() {
			this.todoList.render();
		}
	}]);

	return WPTodo;
}();

exports.default = WPTodo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delay = __webpack_require__(5);

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var data = {
	primaryList: 1,
	activeList: 3,
	lists: [{
		id: 1,
		name: 'My First List',
		active: true,
		deleted: false,
		showCompleted: false,
		showDeleted: false,
		todos: [{
			id: 1,
			title: 'Here is todo number 1',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: true
		}, {
			id: 2,
			title: 'Here is todo number 2',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: false
		}, {
			id: 3,
			title: 'Here is todo number 2',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: true
		}]
	}, {
		id: 2,
		name: 'My Second List',
		primary: false,
		active: false,
		deleted: true,
		showCompleted: false,
		showDeleted: false,
		todos: [{
			id: 5,
			title: 'List 2 - Todo 1',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: false
		}, {
			id: 6,
			title: 'List 2 - Todo 2',
			description: 'Here is the description for number 1',
			deleted: true,
			completed: true
		}, {
			id: 7,
			title: 'List 2 - Todo 3',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: true
		}]
	}, {
		id: 3,
		name: 'My Third List',
		primary: false,
		active: false,
		deleted: false,
		showCompleted: false,
		showDeleted: false,
		todos: [{
			id: 10,
			title: 'List 3 - Todo 1',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: false
		}, {
			id: 11,
			title: 'List 3 - Todo 2',
			description: 'Here is the description for number 1',
			deleted: true,
			completed: true
		}, {
			id: 12,
			title: 'List 3 - Todo 3',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: true
		}, {
			id: 13,
			title: 'List 3 - Todo 4',
			description: 'Here is the description for number 1',
			deleted: true,
			completed: true
		}, {
			id: 14,
			title: 'List 3 - Todo 5',
			description: 'Here is the description for number 1',
			deleted: false,
			completed: false
		}]
	}]
};

/**
 * Fake API Class
 */

var API = function () {
	function API() {
		_classCallCheck(this, API);
	}

	_createClass(API, null, [{
		key: 'getPrimaryList',
		value: function getPrimaryList() {
			return new Promise(function (resolve) {
				setTimeout(function () {
					var primaryListId = data.primaryList;

					API.getListById(primaryListId).then(function (list) {
						resolve(list);
					});
				}, _delay2.default);
			});
		}

		/**
   * Get the current active list.
   * @returns {Promise}
   */

	}, {
		key: 'getActiveList',
		value: function getActiveList() {
			return new Promise(function (resolve) {
				setTimeout(function () {
					resolve(data.activeList);
				}, _delay2.default);
			});
		}

		/**
   * Get lists.
   * By default, get all lists.
   * @returns {Promise} lists   The list items.
   */

	}, {
		key: 'getLists',
		value: function getLists() {
			return new Promise(function (resolve) {
				setTimeout(function () {
					resolve(data.lists);
				}, _delay2.default);
			});
		}

		/**
   * Get lists marked as deleted.
   * @returns {Promise} Lists marked as deleted.
   */

	}, {
		key: 'getDeletedLists',
		value: function getDeletedLists() {
			return new Promise(function (resolve) {
				API.getLists().then(function (lists) {
					var deleted = lists.filter(function (list) {
						return true === list.deleted;
					});
					resolve(deleted);
				});
			});
		}

		/**
   * Gets a list by it's id property.
   * @param   {Number}  listId The id of the list you want to retrieve.
   * @returns {Promise} list   The list with matching id.
   */

	}, {
		key: 'getListById',
		value: function getListById(listId) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					var list = data.lists.filter(function (list) {
						return list.id === listId;
					});
					resolve(list[0]);
				}, _delay2.default);
			});
		}

		/**
   * Delete a list.
   * @param   {Number}  listId the id of the list.
   * @returns {Promise} The deleted list.
   */

	}, {
		key: 'deleteList',
		value: function deleteList(listId) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					API.getListById(listId).then(function (list) {
						var listIndex = data.lists.findIndex(function (list) {
							return list.id === listId;
						});
						data.lists.splice(listIndex, 1);
						resolve(list);
					});
				}, _delay2.default);
			});
		}

		/**
   * Get todos from a list. By default, get todos not marked as deleted.
   * @param   {Number}  listId  The id of the list to retrieve todos from.
   * @returns {Promise} todos   The set of matching todos.
   */

	}, {
		key: 'getTodos',
		value: function getTodos(listId) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					API.getListById(listId).then(function (list) {
						var todos = list.todos;
						resolve(todos);
					});
				});
			}, _delay2.default);
		}

		/**
   * Update a todo.
   * @param   {Number}  listId The id of the list.
   * @param   {Number}  todoId The id of the todo to update.
   * @param   {Object}  data   The data you want to update in the todo.
   * @returns {Promise} todo   The updated todo.
   */

	}, {
		key: 'updateTodo',
		value: function updateTodo(listId, todoId, data) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					API.getTodos(listId).then(function (todos) {
						// @todo This is not immutable.
						debugger;
						var todoIndex = todos.findIndex(function (todo) {
							return todo.id === todoId;
						});
						Object.assign(todos[todoIndex], data);
						resolve(todos[todoIndex]);
					}).catch(function (err) {
						return err;
					});
				}, _delay2.default);
			});
		}

		/**
   * Mark a todo as deleted or perform a hard delete.
   * @param   {Number}  listId     The id of the list.
   * @param   {Number}  todoId     The id of the todo to delete.
   * @param   {Boolean} hardDelete If true, the todo will be permanently deleted.
   * @returns {Promise} todos      The todos.
   */

	}, {
		key: 'deleteTodo',
		value: function deleteTodo(listId, todoId) {
			var hardDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			return new Promise(function (resolve) {
				API.getTodos(listId).then(function (todos) {
					var todoIndex = todos.findIndex(function (todo) {
						return todo.id === todoId;
					});
					if (true === hardDelete) {
						todos.splice(todoIndex, 1);
						resolve(todos);
					}
					todos[todoIndex].deleted = true;
					resolve(todos.filter(function (todo) {
						return false === todo.deleted;
					}));
				}).catch(function (err) {
					return err;
				});
			});
		}

		/**
   * Complete a todo.
   * @param   {Number}  listId The id of the list.
   * @param   {Number}  todoId The id of the todo.
   * @returns {Promise} todos  The list of todos.
   */

	}, {
		key: 'completeTodo',
		value: function completeTodo(listId, todoId) {
			return new Promise(function (resolve) {
				API.getTodos(listId).then(function (todos) {
					var todoIndex = todos.findIndex(function (todo) {
						return todo.id === todoId;
					});
					todos[todoIndex].completed = !todos[todoIndex].completed;
					resolve(todos[todoIndex]);
				}).catch(function (err) {
					return err;
				});
			});
		}
	}]);

	return API;
}();

exports.default = API;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 1000;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _API = __webpack_require__(4);

var _API2 = _interopRequireDefault(_API);

var _ToDoListView = __webpack_require__(7);

var _ToDoListView2 = _interopRequireDefault(_ToDoListView);

var _Events = __webpack_require__(1);

var _jQuery = __webpack_require__(0);

var _jQuery2 = _interopRequireDefault(_jQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoList = function () {
	function ToDoList() {
		_classCallCheck(this, ToDoList);

		new _ToDoListView2.default();
	}

	_createClass(ToDoList, [{
		key: 'render',
		value: function render() {
			this.renderToDoList();
		}
	}, {
		key: 'renderToDoList',
		value: function renderToDoList() {
			return _API2.default.getPrimaryList().then(function (list) {
				_Events.events.emit('hide-loader');
				_Events.events.emit('render-todos', list.todos);
			});
		}
	}]);

	return ToDoList;
}();

exports.default = ToDoList;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(1);

var _todoTemplate = __webpack_require__(13);

var _todoTemplate2 = _interopRequireDefault(_todoTemplate);

var _jQuery = __webpack_require__(0);

var _jQuery2 = _interopRequireDefault(_jQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoListView = function () {
	function ToDoListView() {
		_classCallCheck(this, ToDoListView);

		this.bindEvents();
		this.$loader = (0, _jQuery2.default)('.wp-todo-loader-container');
		this.$listContainer = (0, _jQuery2.default)('#wp-todo-list-container');
		_Events.events.emit('show-loader');
	}

	_createClass(ToDoListView, [{
		key: 'bindEvents',
		value: function bindEvents() {
			var _this = this;

			_Events.events.on('hide-loader', function () {
				return _this.hideLoader();
			});
			_Events.events.on('show-loader', function () {
				return _this.showLoader();
			});
			_Events.events.on('render-todos', function (todos) {
				return _this.render(todos);
			});
		}
	}, {
		key: 'render',
		value: function render(todos) {
			this.$listContainer.html(this.renderTemplate(todos));
		}
	}, {
		key: 'renderTemplate',
		value: function renderTemplate(todos) {
			return (0, _todoTemplate2.default)({ todos: todos });
		}
	}, {
		key: 'hideLoader',
		value: function hideLoader() {
			this.$loader.hide();
		}
	}, {
		key: 'showLoader',
		value: function showLoader() {
			this.$loader.show();
		}
	}]);

	return ToDoListView;
}();

exports.default = ToDoListView;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__(9);
Hogan.Template = __webpack_require__(11).Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

function n(n){function o(o){var t=o.toLowerCase();return n[t]||(n[t]=[])}return n=n||{},{on:function(n,t){o(n).push(t)},off:function(n,t){var c=o(n),f=c.indexOf(t);~f&&c.splice(f,1)},emit:function(n,t){o("*").concat(o(n)).forEach(function(n){n(t)})}}}module.exports=n;
//# sourceMappingURL=mitt.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(10);
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<ul id=\"wp-todo-list\" class=\"wp-todo-list\">");t.b("\n" + i);if(t.s(t.f("todos",c,p,1),c,p,0,55,766,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	<li id=\"wp-todo-item-");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"wp-todo-list-item\">");t.b("\n" + i);t.b("		<div class=\"wp-todo-complete-container\">");t.b("\n" + i);t.b("			<input type=\"checkbox\" class=\"wp-todo-complete\" name=\"wp-todo-complete\" ");if(t.s(t.f("completed",c,p,1),c,p,0,262,271,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" checked ");});c.pop();}t.b(">");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("		<div class=\"wp-todo-todo-drag-container\">");t.b("\n" + i);t.b("			<button class=\"wp-todo-task-drag\">D</button>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("		<div class=\"wp-todo-task-input-container\">");t.b("\n" + i);t.b("			<input type=\"text\" class=\"wp-todo-task-input\" name=\"wp-todo-task-input\" value=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\">");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("		<div class=\"wp-todo-task-delete-container\">");t.b("\n" + i);t.b("			<button class=\"wp-todo-task-delete\">X</button>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("		<div class=\"wp-todo-task-details-container\">");t.b("\n" + i);t.b("			<button class=\"wp-todo-task-details\">=></button>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</li>");t.b("\n" + i);});c.pop();}t.b("</ul>");return t.fl(); },partials: {}, subs: {  }}, "<ul id=\"wp-todo-list\" class=\"wp-todo-list\">\n\t{{#todos}}\n\t<li id=\"wp-todo-item-{{id}}\" data-id=\"{{id}}\" class=\"wp-todo-list-item\">\n\t\t<div class=\"wp-todo-complete-container\">\n\t\t\t<input type=\"checkbox\" class=\"wp-todo-complete\" name=\"wp-todo-complete\" {{#completed}} checked {{/completed}}>\n\t\t</div>\n\t\t<div class=\"wp-todo-todo-drag-container\">\n\t\t\t<button class=\"wp-todo-task-drag\">D</button>\n\t\t</div>\n\t\t<div class=\"wp-todo-task-input-container\">\n\t\t\t<input type=\"text\" class=\"wp-todo-task-input\" name=\"wp-todo-task-input\" value=\"{{title}}\">\n\t\t</div>\n\t\t<div class=\"wp-todo-task-delete-container\">\n\t\t\t<button class=\"wp-todo-task-delete\">X</button>\n\t\t</div>\n\t\t<div class=\"wp-todo-task-details-container\">\n\t\t\t<button class=\"wp-todo-task-details\">=></button>\n\t\t</div>\n\t</li>\n\t{{/todos}}\n</ul>", H);return T.render.apply(T, arguments); };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTcwNDI1OThjM2UwMjdiZTk4MmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9XUFRvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub0RvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2hvZ2FuLmpzL2xpYi9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2hvZ2FuLmpzL2xpYi9ob2dhbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2hvZ2FuLmpzL2xpYi90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pdHQvZGlzdC9taXR0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90b2RvVGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6WyJldmVudHMiLCJpbml0IiwiV1BUb2RvIiwidG9kb0xpc3QiLCJyZW5kZXIiLCJkYXRhIiwicHJpbWFyeUxpc3QiLCJhY3RpdmVMaXN0IiwibGlzdHMiLCJpZCIsIm5hbWUiLCJhY3RpdmUiLCJkZWxldGVkIiwic2hvd0NvbXBsZXRlZCIsInNob3dEZWxldGVkIiwidG9kb3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwicHJpbWFyeSIsIkFQSSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInByaW1hcnlMaXN0SWQiLCJnZXRMaXN0QnlJZCIsInRoZW4iLCJsaXN0IiwiZ2V0TGlzdHMiLCJmaWx0ZXIiLCJsaXN0SWQiLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ0b2RvSWQiLCJnZXRUb2RvcyIsInRvZG9JbmRleCIsInRvZG8iLCJPYmplY3QiLCJhc3NpZ24iLCJjYXRjaCIsImVyciIsImhhcmREZWxldGUiLCJUb0RvTGlzdCIsInJlbmRlclRvRG9MaXN0IiwiZ2V0UHJpbWFyeUxpc3QiLCJlbWl0IiwiVG9Eb0xpc3RWaWV3IiwiYmluZEV2ZW50cyIsIiRsb2FkZXIiLCIkbGlzdENvbnRhaW5lciIsIm9uIiwiaGlkZUxvYWRlciIsInNob3dMb2FkZXIiLCJodG1sIiwicmVuZGVyVGVtcGxhdGUiLCJoaWRlIiwic2hvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsd0I7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVPLElBQUlBLDBCQUFTLHFCQUFiLEM7Ozs7Ozs7OztBQ0tQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBO0FBQ0Esc0JBQUcsWUFBVztBQUNiLHlCQUFhQyxJQUFiO0FBQ0EsQ0FGRCxFLENBWkE7Ozs7OztBQU1BLGU7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7OztJQUVNQyxNO0FBQ0wsbUJBQWM7QUFBQTs7QUFDYixPQUFLQyxRQUFMLEdBQWdCLHdCQUFoQjtBQUNBOzs7O3lCQUVNO0FBQ04sUUFBS0EsUUFBTCxDQUFjQyxNQUFkO0FBQ0E7Ozs7OztrQkFHYUYsTTs7Ozs7Ozs7Ozs7Ozs7O0FDWmY7Ozs7Ozs7O0FBRUEsSUFBTUcsT0FBTztBQUNaQyxjQUFhLENBREQ7QUFFWkMsYUFBWSxDQUZBO0FBR1pDLFFBQU8sQ0FDTjtBQUNDQyxNQUFJLENBREw7QUFFQ0MsUUFBTSxlQUZQO0FBR0NDLFVBQVEsSUFIVDtBQUlDQyxXQUFTLEtBSlY7QUFLQ0MsaUJBQWUsS0FMaEI7QUFNQ0MsZUFBYSxLQU5kO0FBT0NDLFNBQU8sQ0FDTjtBQUNDTixPQUFJLENBREw7QUFFQ08sVUFBTyx1QkFGUjtBQUdDQyxnQkFBYSxzQ0FIZDtBQUlDTCxZQUFTLEtBSlY7QUFLQ00sY0FBVztBQUxaLEdBRE0sRUFRTjtBQUNDVCxPQUFJLENBREw7QUFFQ08sVUFBTyx1QkFGUjtBQUdDQyxnQkFBYSxzQ0FIZDtBQUlDTCxZQUFTLEtBSlY7QUFLQ00sY0FBVztBQUxaLEdBUk0sRUFlTjtBQUNDVCxPQUFJLENBREw7QUFFQ08sVUFBTyx1QkFGUjtBQUdDQyxnQkFBYSxzQ0FIZDtBQUlDTCxZQUFTLEtBSlY7QUFLQ00sY0FBVztBQUxaLEdBZk07QUFQUixFQURNLEVBZ0NOO0FBQ0NULE1BQUksQ0FETDtBQUVDQyxRQUFNLGdCQUZQO0FBR0NTLFdBQVMsS0FIVjtBQUlDUixVQUFRLEtBSlQ7QUFLQ0MsV0FBUyxJQUxWO0FBTUNDLGlCQUFlLEtBTmhCO0FBT0NDLGVBQWEsS0FQZDtBQVFDQyxTQUFPLENBQ047QUFDQ04sT0FBSSxDQURMO0FBRUNPLFVBQU8saUJBRlI7QUFHQ0MsZ0JBQWEsc0NBSGQ7QUFJQ0wsWUFBUyxLQUpWO0FBS0NNLGNBQVc7QUFMWixHQURNLEVBUU47QUFDQ1QsT0FBSSxDQURMO0FBRUNPLFVBQU8saUJBRlI7QUFHQ0MsZ0JBQWEsc0NBSGQ7QUFJQ0wsWUFBUyxJQUpWO0FBS0NNLGNBQVc7QUFMWixHQVJNLEVBZU47QUFDQ1QsT0FBSSxDQURMO0FBRUNPLFVBQU8saUJBRlI7QUFHQ0MsZ0JBQWEsc0NBSGQ7QUFJQ0wsWUFBUyxLQUpWO0FBS0NNLGNBQVc7QUFMWixHQWZNO0FBUlIsRUFoQ00sRUFnRU47QUFDQ1QsTUFBSSxDQURMO0FBRUNDLFFBQU0sZUFGUDtBQUdDUyxXQUFTLEtBSFY7QUFJQ1IsVUFBUSxLQUpUO0FBS0NDLFdBQVMsS0FMVjtBQU1DQyxpQkFBZSxLQU5oQjtBQU9DQyxlQUFhLEtBUGQ7QUFRQ0MsU0FBTyxDQUNOO0FBQ0NOLE9BQUksRUFETDtBQUVDTyxVQUFPLGlCQUZSO0FBR0NDLGdCQUFhLHNDQUhkO0FBSUNMLFlBQVMsS0FKVjtBQUtDTSxjQUFXO0FBTFosR0FETSxFQVFOO0FBQ0NULE9BQUksRUFETDtBQUVDTyxVQUFPLGlCQUZSO0FBR0NDLGdCQUFhLHNDQUhkO0FBSUNMLFlBQVMsSUFKVjtBQUtDTSxjQUFXO0FBTFosR0FSTSxFQWVOO0FBQ0NULE9BQUksRUFETDtBQUVDTyxVQUFPLGlCQUZSO0FBR0NDLGdCQUFhLHNDQUhkO0FBSUNMLFlBQVMsS0FKVjtBQUtDTSxjQUFXO0FBTFosR0FmTSxFQXNCTjtBQUNDVCxPQUFJLEVBREw7QUFFQ08sVUFBTyxpQkFGUjtBQUdDQyxnQkFBYSxzQ0FIZDtBQUlDTCxZQUFTLElBSlY7QUFLQ00sY0FBVztBQUxaLEdBdEJNLEVBNkJOO0FBQ0NULE9BQUksRUFETDtBQUVDTyxVQUFPLGlCQUZSO0FBR0NDLGdCQUFhLHNDQUhkO0FBSUNMLFlBQVMsS0FKVjtBQUtDTSxjQUFXO0FBTFosR0E3Qk07QUFSUixFQWhFTTtBQUhLLENBQWI7O0FBb0hBOzs7O0lBR01FLEc7Ozs7Ozs7bUNBRW1CO0FBQ3ZCLFVBQU8sSUFBSUMsT0FBSixDQUFhLFVBQUVDLE9BQUYsRUFBZTtBQUNsQ0MsZUFBWSxZQUFNO0FBQ2pCLFNBQU1DLGdCQUFnQm5CLEtBQUtDLFdBQTNCOztBQUVBYyxTQUFJSyxXQUFKLENBQWlCRCxhQUFqQixFQUNFRSxJQURGLENBQ1EsVUFBRUMsSUFBRixFQUFZO0FBQ2xCTCxjQUFTSyxJQUFUO0FBQ0EsTUFIRjtBQUlBLEtBUEQ7QUFRQSxJQVRNLENBQVA7QUFVQTs7QUFFRDs7Ozs7OztrQ0FJdUI7QUFDdEIsVUFBTyxJQUFJTixPQUFKLENBQWEsVUFBRUMsT0FBRixFQUFlO0FBQ2xDQyxlQUFZLFlBQU07QUFDakJELGFBQVNqQixLQUFLRSxVQUFkO0FBQ0EsS0FGRDtBQUdBLElBSk0sQ0FBUDtBQUtBOztBQUVEOzs7Ozs7Ozs2QkFLa0I7QUFDakIsVUFBTyxJQUFJYyxPQUFKLENBQWEsVUFBRUMsT0FBRixFQUFlO0FBQ2xDQyxlQUFZLFlBQU07QUFDakJELGFBQVNqQixLQUFLRyxLQUFkO0FBQ0EsS0FGRDtBQUdBLElBSk0sQ0FBUDtBQUtBOztBQUVEOzs7Ozs7O29DQUl5QjtBQUN4QixVQUFPLElBQUlhLE9BQUosQ0FBYSxVQUFFQyxPQUFGLEVBQWU7QUFDbENGLFFBQUlRLFFBQUosR0FDRUYsSUFERixDQUNRLFVBQUVsQixLQUFGLEVBQWE7QUFDbkIsU0FBTUksVUFBVUosTUFBTXFCLE1BQU4sQ0FBYyxVQUFFRixJQUFGO0FBQUEsYUFBWSxTQUFTQSxLQUFLZixPQUExQjtBQUFBLE1BQWQsQ0FBaEI7QUFDQVUsYUFBU1YsT0FBVDtBQUNBLEtBSkY7QUFLQSxJQU5NLENBQVA7QUFPQTs7QUFFRDs7Ozs7Ozs7OEJBS29Ca0IsTSxFQUFTO0FBQzVCLFVBQU8sSUFBSVQsT0FBSixDQUFhLFVBQUVDLE9BQUYsRUFBZTtBQUNsQ0MsZUFBWSxZQUFNO0FBQ2pCLFNBQU1JLE9BQU90QixLQUFLRyxLQUFMLENBQVdxQixNQUFYLENBQW1CLFVBQUVGLElBQUY7QUFBQSxhQUFZQSxLQUFLbEIsRUFBTCxLQUFZcUIsTUFBeEI7QUFBQSxNQUFuQixDQUFiO0FBQ0FSLGFBQVNLLEtBQUssQ0FBTCxDQUFUO0FBQ0EsS0FIRDtBQUlBLElBTE0sQ0FBUDtBQU1BOztBQUVEOzs7Ozs7Ozs2QkFLbUJHLE0sRUFBUztBQUMzQixVQUFPLElBQUlULE9BQUosQ0FBYSxVQUFFQyxPQUFGLEVBQWU7QUFDbENDLGVBQVksWUFBTTtBQUNqQkgsU0FBSUssV0FBSixDQUFpQkssTUFBakIsRUFDRUosSUFERixDQUNRLFVBQUVDLElBQUYsRUFBWTtBQUNsQixVQUFNSSxZQUFZMUIsS0FBS0csS0FBTCxDQUFXd0IsU0FBWCxDQUFzQixnQkFBUTtBQUMvQyxjQUFPTCxLQUFLbEIsRUFBTCxLQUFZcUIsTUFBbkI7QUFDQSxPQUZpQixDQUFsQjtBQUdBekIsV0FBS0csS0FBTCxDQUFXeUIsTUFBWCxDQUFtQkYsU0FBbkIsRUFBOEIsQ0FBOUI7QUFDQVQsY0FBU0ssSUFBVDtBQUNBLE1BUEY7QUFRQSxLQVREO0FBVUEsSUFYTSxDQUFQO0FBWUE7O0FBRUQ7Ozs7Ozs7OzJCQUtpQkcsTSxFQUFTO0FBQ3pCLFVBQU8sSUFBSVQsT0FBSixDQUFhLFVBQUVDLE9BQUYsRUFBZTtBQUNsQ0MsZUFBWSxZQUFNO0FBQ2pCSCxTQUFJSyxXQUFKLENBQWlCSyxNQUFqQixFQUNFSixJQURGLENBQ1EsVUFBRUMsSUFBRixFQUFZO0FBQ2pCLFVBQU1aLFFBQVFZLEtBQUtaLEtBQW5CO0FBQ0FPLGNBQVNQLEtBQVQ7QUFDQSxNQUpIO0FBS0UsS0FOSDtBQU9DLElBUkssa0JBQVA7QUFTQTs7QUFFRDs7Ozs7Ozs7Ozs2QkFPbUJlLE0sRUFBUUksTSxFQUFRN0IsSSxFQUFPO0FBQ3pDLFVBQU8sSUFBSWdCLE9BQUosQ0FBYSxVQUFFQyxPQUFGLEVBQWU7QUFDbENDLGVBQVksWUFBTTtBQUNqQkgsU0FBSWUsUUFBSixDQUFjTCxNQUFkLEVBQ0VKLElBREYsQ0FDUSxVQUFFWCxLQUFGLEVBQWE7QUFBRTtBQUNyQjtBQUNBLFVBQU1xQixZQUFZckIsTUFBTWlCLFNBQU4sQ0FBaUIsZ0JBQVE7QUFDMUMsY0FBT0ssS0FBSzVCLEVBQUwsS0FBWXlCLE1BQW5CO0FBQ0EsT0FGaUIsQ0FBbEI7QUFHQUksYUFBT0MsTUFBUCxDQUFleEIsTUFBTXFCLFNBQU4sQ0FBZixFQUFpQy9CLElBQWpDO0FBQ0FpQixjQUFTUCxNQUFNcUIsU0FBTixDQUFUO0FBQ0EsTUFSRixFQVNFSSxLQVRGLENBU1M7QUFBQSxhQUFPQyxHQUFQO0FBQUEsTUFUVDtBQVVBLEtBWEQ7QUFZQSxJQWJNLENBQVA7QUFjQTs7QUFFRDs7Ozs7Ozs7Ozs2QkFPbUJYLE0sRUFBUUksTSxFQUE2QjtBQUFBLE9BQXJCUSxVQUFxQix1RUFBUixLQUFROztBQUN2RCxVQUFPLElBQUlyQixPQUFKLENBQWEsVUFBRUMsT0FBRixFQUFlO0FBQ2xDRixRQUFJZSxRQUFKLENBQWNMLE1BQWQsRUFDRUosSUFERixDQUNRLFVBQUVYLEtBQUYsRUFBYTtBQUNuQixTQUFNcUIsWUFBWXJCLE1BQU1pQixTQUFOLENBQWlCLGdCQUFRO0FBQzFDLGFBQU9LLEtBQUs1QixFQUFMLEtBQVl5QixNQUFuQjtBQUNBLE1BRmlCLENBQWxCO0FBR0EsU0FBSyxTQUFTUSxVQUFkLEVBQTJCO0FBQzFCM0IsWUFBTWtCLE1BQU4sQ0FBY0csU0FBZCxFQUF5QixDQUF6QjtBQUNBZCxjQUFTUCxLQUFUO0FBQ0E7QUFDREEsV0FBTXFCLFNBQU4sRUFBaUJ4QixPQUFqQixHQUEyQixJQUEzQjtBQUNBVSxhQUFTUCxNQUFNYyxNQUFOLENBQWM7QUFBQSxhQUFRLFVBQVVRLEtBQUt6QixPQUF2QjtBQUFBLE1BQWQsQ0FBVDtBQUNBLEtBWEYsRUFZRTRCLEtBWkYsQ0FZUztBQUFBLFlBQU9DLEdBQVA7QUFBQSxLQVpUO0FBYUEsSUFkTSxDQUFQO0FBZUE7O0FBRUQ7Ozs7Ozs7OzsrQkFNcUJYLE0sRUFBUUksTSxFQUFTO0FBQ3JDLFVBQU8sSUFBSWIsT0FBSixDQUFhLFVBQUVDLE9BQUYsRUFBZTtBQUNsQ0YsUUFBSWUsUUFBSixDQUFjTCxNQUFkLEVBQ0VKLElBREYsQ0FDUSxVQUFFWCxLQUFGLEVBQWE7QUFDbkIsU0FBTXFCLFlBQVlyQixNQUFNaUIsU0FBTixDQUFpQixnQkFBUTtBQUMxQyxhQUFPSyxLQUFLNUIsRUFBTCxLQUFZeUIsTUFBbkI7QUFDQSxNQUZpQixDQUFsQjtBQUdBbkIsV0FBTXFCLFNBQU4sRUFBaUJsQixTQUFqQixHQUE2QixDQUFFSCxNQUFNcUIsU0FBTixFQUFpQmxCLFNBQWhEO0FBQ0FJLGFBQVNQLE1BQU1xQixTQUFOLENBQVQ7QUFDQSxLQVBGLEVBUUVJLEtBUkYsQ0FRUztBQUFBLFlBQU9DLEdBQVA7QUFBQSxLQVJUO0FBU0EsSUFWTSxDQUFQO0FBV0E7Ozs7OztrQkFHYXJCLEc7Ozs7Ozs7Ozs7OztrQkN4U0EsSTs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztJQUVNdUIsUTtBQUNMLHFCQUFjO0FBQUE7O0FBQ2I7QUFDQTs7OzsyQkFFUTtBQUNSLFFBQUtDLGNBQUw7QUFDQTs7O21DQUVnQjtBQUNoQixVQUFPLGNBQUlDLGNBQUosR0FDTG5CLElBREssQ0FDQyxVQUFFQyxJQUFGLEVBQVk7QUFDbEIsbUJBQU9tQixJQUFQLENBQWEsYUFBYjtBQUNBLG1CQUFPQSxJQUFQLENBQWEsY0FBYixFQUE2Qm5CLEtBQUtaLEtBQWxDO0FBQ0EsSUFKSyxDQUFQO0FBS0E7Ozs7OztrQkFHYTRCLFE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZjs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNSSxZO0FBQ0wseUJBQWM7QUFBQTs7QUFDYixPQUFLQyxVQUFMO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLHNCQUFHLDJCQUFILENBQWY7QUFDQSxPQUFLQyxjQUFMLEdBQXNCLHNCQUFHLHlCQUFILENBQXRCO0FBQ0EsaUJBQU9KLElBQVAsQ0FBYSxhQUFiO0FBQ0E7Ozs7K0JBRVk7QUFBQTs7QUFDWixrQkFBT0ssRUFBUCxDQUFXLGFBQVgsRUFBMEI7QUFBQSxXQUFNLE1BQUtDLFVBQUwsRUFBTjtBQUFBLElBQTFCO0FBQ0Esa0JBQU9ELEVBQVAsQ0FBVyxhQUFYLEVBQTBCO0FBQUEsV0FBTSxNQUFLRSxVQUFMLEVBQU47QUFBQSxJQUExQjtBQUNBLGtCQUFPRixFQUFQLENBQVcsY0FBWCxFQUEyQixVQUFFcEMsS0FBRjtBQUFBLFdBQWEsTUFBS1gsTUFBTCxDQUFhVyxLQUFiLENBQWI7QUFBQSxJQUEzQjtBQUNBOzs7eUJBRU9BLEssRUFBUTtBQUNmLFFBQUttQyxjQUFMLENBQW9CSSxJQUFwQixDQUEwQixLQUFLQyxjQUFMLENBQXFCeEMsS0FBckIsQ0FBMUI7QUFDQTs7O2lDQUVlQSxLLEVBQVE7QUFDdkIsVUFBTyw0QkFBYSxFQUFDQSxPQUFPQSxLQUFSLEVBQWIsQ0FBUDtBQUNBOzs7K0JBRVk7QUFDWixRQUFLa0MsT0FBTCxDQUFhTyxJQUFiO0FBQ0E7OzsrQkFFWTtBQUNaLFFBQUtQLE9BQUwsQ0FBYVEsSUFBYjtBQUNBOzs7Ozs7a0JBR2FWLFk7Ozs7OztBQ25DZix5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLG1CQUFtQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHFCQUFxQixTQUFTO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QjtBQUN2QixxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlHQUFpRztBQUMxSTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7O0FBRUE7QUFDQSxhQUFhLHdCQUF3Qix1Q0FBdUMscUNBQXFDO0FBQ2pIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUIsY0FBYztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixhQUFhLDBCQUEwQjtBQUM5RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0Isc0ZBQXNGO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUdBQXFHO0FBQ3JHLHFEQUFxRDtBQUNyRDtBQUNBLHdCQUF3QixFQUFFLFNBQVM7QUFDbkMsS0FBSzs7QUFFTDtBQUNBLDBHQUEwRztBQUMxRztBQUNBLHlCQUF5QjtBQUN6QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWSxvQkFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZGQUE2RjtBQUM3RixLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBLDJGQUEyRjtBQUMzRjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztBQ3RhRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVcsRUFBRTs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxvQkFBb0IsZUFBZSxFQUFFOztBQUVyQyxvQkFBb0Isa0JBQWtCLGVBQWUsVUFBVSxFQUFFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7O0FDcFZELGNBQWMsY0FBYyxzQkFBc0IsdUJBQXVCLGNBQWMsRUFBRSxpQkFBaUIsYUFBYSxtQkFBbUIsMEJBQTBCLGtCQUFrQixvQkFBb0Isd0NBQXdDLEtBQUssSUFBSTtBQUMzUCxnQzs7Ozs7O0FDREE7QUFDQSw2QkFBNkIseUJBQXlCLHdCQUF3QixZQUFZLGFBQWEsdURBQXVELGNBQWMsMENBQTBDLEdBQUcsSUFBSSx5QkFBeUIsK0JBQStCLDBCQUEwQixxQkFBcUIsMEJBQTBCLHVDQUF1QyxjQUFjLG9EQUFvRCxjQUFjLHlGQUF5RiwrQ0FBK0MsR0FBRyxJQUFJLHlCQUF5QixrQkFBa0IsRUFBRSxTQUFTLFNBQVMsY0FBYyxnQkFBZ0IsY0FBYyxxREFBcUQsY0FBYyx5REFBeUQsY0FBYyxnQkFBZ0IsY0FBYyxzREFBc0QsY0FBYyxpR0FBaUcsNkJBQTZCLFdBQVcsY0FBYyxnQkFBZ0IsY0FBYyx1REFBdUQsY0FBYywyREFBMkQsY0FBYyxnQkFBZ0IsY0FBYyx3REFBd0QsY0FBYyw2REFBNkQsY0FBYyxnQkFBZ0IsY0FBYyxjQUFjLGVBQWUsRUFBRSxTQUFTLGFBQWEsY0FBYyxFQUFFLGFBQWEsU0FBUyxJQUFJLHdEQUF3RCxRQUFRLDRCQUE0QixJQUFJLGVBQWUsSUFBSSx1S0FBdUssWUFBWSxXQUFXLFlBQVksa1JBQWtSLE9BQU8sK1FBQStRLFFBQVEsYUFBYSxvQ0FBb0MsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTcwNDI1OThjM2UwMjdiZTk4MmMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtaXR0IGZyb20gJ21pdHQnO1xuXG5leHBvcnQgbGV0IGV2ZW50cyA9IG1pdHQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsaXRpZXMvRXZlbnRzLmpzIiwiLyoqXG4gKiBFbnRyeSBwb2ludCBmaWxlLlxuICpcbiAqIEZyb20gaGVyZSB3ZSB3aWxsIGluaXRpYWxpemUgb3VyIGFwcC5cbiAqL1xuXG4vLyBVc2VyIGltcG9ydHNcbmltcG9ydCAkIGZyb20gJ2pRdWVyeSc7XG5pbXBvcnQgV1BUb2RvIGZyb20gJy4vV1BUb2RvJztcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuXG4vLyBJbml0aWFsaXplIG91ciBhcHAgd2hlbiB0aGUgcGFnZSBpcyByZWFkeS5cbiQoIGZ1bmN0aW9uKCkge1xuXHRuZXcgV1BUb2RvKCkuaW5pdCgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1RvRG9MaXN0JztcblxuY2xhc3MgV1BUb2RvIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50b2RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLnRvZG9MaXN0LnJlbmRlcigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdQVG9kbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XUFRvZG8uanMiLCJpbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5cbmNvbnN0IGRhdGEgPSB7XG5cdHByaW1hcnlMaXN0OiAxLFxuXHRhY3RpdmVMaXN0OiAzLFxuXHRsaXN0czogW1xuXHRcdHtcblx0XHRcdGlkOiAxLFxuXHRcdFx0bmFtZTogJ015IEZpcnN0IExpc3QnLFxuXHRcdFx0YWN0aXZlOiB0cnVlLFxuXHRcdFx0ZGVsZXRlZDogZmFsc2UsXG5cdFx0XHRzaG93Q29tcGxldGVkOiBmYWxzZSxcblx0XHRcdHNob3dEZWxldGVkOiBmYWxzZSxcblx0XHRcdHRvZG9zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHR0aXRsZTogJ0hlcmUgaXMgdG9kbyBudW1iZXIgMScsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdIZXJlIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgbnVtYmVyIDEnLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDIsXG5cdFx0XHRcdFx0dGl0bGU6ICdIZXJlIGlzIHRvZG8gbnVtYmVyIDInLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnSGVyZSBpcyB0aGUgZGVzY3JpcHRpb24gZm9yIG51bWJlciAxJyxcblx0XHRcdFx0XHRkZWxldGVkOiBmYWxzZSxcblx0XHRcdFx0XHRjb21wbGV0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMyxcblx0XHRcdFx0XHR0aXRsZTogJ0hlcmUgaXMgdG9kbyBudW1iZXIgMicsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdIZXJlIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgbnVtYmVyIDEnLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogMixcblx0XHRcdG5hbWU6ICdNeSBTZWNvbmQgTGlzdCcsXG5cdFx0XHRwcmltYXJ5OiBmYWxzZSxcblx0XHRcdGFjdGl2ZTogZmFsc2UsXG5cdFx0XHRkZWxldGVkOiB0cnVlLFxuXHRcdFx0c2hvd0NvbXBsZXRlZDogZmFsc2UsXG5cdFx0XHRzaG93RGVsZXRlZDogZmFsc2UsXG5cdFx0XHR0b2RvczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDUsXG5cdFx0XHRcdFx0dGl0bGU6ICdMaXN0IDIgLSBUb2RvIDEnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnSGVyZSBpcyB0aGUgZGVzY3JpcHRpb24gZm9yIG51bWJlciAxJyxcblx0XHRcdFx0XHRkZWxldGVkOiBmYWxzZSxcblx0XHRcdFx0XHRjb21wbGV0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogNixcblx0XHRcdFx0XHR0aXRsZTogJ0xpc3QgMiAtIFRvZG8gMicsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdIZXJlIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgbnVtYmVyIDEnLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IHRydWUsXG5cdFx0XHRcdFx0Y29tcGxldGVkOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogNyxcblx0XHRcdFx0XHR0aXRsZTogJ0xpc3QgMiAtIFRvZG8gMycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdIZXJlIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgbnVtYmVyIDEnLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdNeSBUaGlyZCBMaXN0Jyxcblx0XHRcdHByaW1hcnk6IGZhbHNlLFxuXHRcdFx0YWN0aXZlOiBmYWxzZSxcblx0XHRcdGRlbGV0ZWQ6IGZhbHNlLFxuXHRcdFx0c2hvd0NvbXBsZXRlZDogZmFsc2UsXG5cdFx0XHRzaG93RGVsZXRlZDogZmFsc2UsXG5cdFx0XHR0b2RvczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEwLFxuXHRcdFx0XHRcdHRpdGxlOiAnTGlzdCAzIC0gVG9kbyAxJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0hlcmUgaXMgdGhlIGRlc2NyaXB0aW9uIGZvciBudW1iZXIgMScsXG5cdFx0XHRcdFx0ZGVsZXRlZDogZmFsc2UsXG5cdFx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDExLFxuXHRcdFx0XHRcdHRpdGxlOiAnTGlzdCAzIC0gVG9kbyAyJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0hlcmUgaXMgdGhlIGRlc2NyaXB0aW9uIGZvciBudW1iZXIgMScsXG5cdFx0XHRcdFx0ZGVsZXRlZDogdHJ1ZSxcblx0XHRcdFx0XHRjb21wbGV0ZWQ6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAxMixcblx0XHRcdFx0XHR0aXRsZTogJ0xpc3QgMyAtIFRvZG8gMycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdIZXJlIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgbnVtYmVyIDEnLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IDEzLFxuXHRcdFx0XHRcdHRpdGxlOiAnTGlzdCAzIC0gVG9kbyA0Jyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0hlcmUgaXMgdGhlIGRlc2NyaXB0aW9uIGZvciBudW1iZXIgMScsXG5cdFx0XHRcdFx0ZGVsZXRlZDogdHJ1ZSxcblx0XHRcdFx0XHRjb21wbGV0ZWQ6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAxNCxcblx0XHRcdFx0XHR0aXRsZTogJ0xpc3QgMyAtIFRvZG8gNScsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdIZXJlIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgbnVtYmVyIDEnLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XVxufTtcblxuLyoqXG4gKiBGYWtlIEFQSSBDbGFzc1xuICovXG5jbGFzcyBBUEkge1xuXG5cdHN0YXRpYyBnZXRQcmltYXJ5TGlzdCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSApID0+IHtcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0Y29uc3QgcHJpbWFyeUxpc3RJZCA9IGRhdGEucHJpbWFyeUxpc3Q7XG5cblx0XHRcdFx0QVBJLmdldExpc3RCeUlkKCBwcmltYXJ5TGlzdElkIClcblx0XHRcdFx0XHQudGhlbiggKCBsaXN0ICkgPT4ge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSggbGlzdCApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSwgZGVsYXkgKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnQgYWN0aXZlIGxpc3QuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0c3RhdGljIGdldEFjdGl2ZUxpc3QoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUgKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoIGRhdGEuYWN0aXZlTGlzdCApO1xuXHRcdFx0fSwgZGVsYXkgKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgbGlzdHMuXG5cdCAqIEJ5IGRlZmF1bHQsIGdldCBhbGwgbGlzdHMuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBsaXN0cyAgIFRoZSBsaXN0IGl0ZW1zLlxuXHQgKi9cblx0c3RhdGljIGdldExpc3RzKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlICkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKCBkYXRhLmxpc3RzICk7XG5cdFx0XHR9LCBkZWxheSApO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBsaXN0cyBtYXJrZWQgYXMgZGVsZXRlZC5cblx0ICogQHJldHVybnMge1Byb21pc2V9IExpc3RzIG1hcmtlZCBhcyBkZWxldGVkLlxuXHQgKi9cblx0c3RhdGljIGdldERlbGV0ZWRMaXN0cygpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSApID0+IHtcblx0XHRcdEFQSS5nZXRMaXN0cygpXG5cdFx0XHRcdC50aGVuKCAoIGxpc3RzICkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGRlbGV0ZWQgPSBsaXN0cy5maWx0ZXIoICggbGlzdCApID0+IHRydWUgPT09IGxpc3QuZGVsZXRlZCApO1xuXHRcdFx0XHRcdHJlc29sdmUoIGRlbGV0ZWQgKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIGxpc3QgYnkgaXQncyBpZCBwcm9wZXJ0eS5cblx0ICogQHBhcmFtICAge051bWJlcn0gIGxpc3RJZCBUaGUgaWQgb2YgdGhlIGxpc3QgeW91IHdhbnQgdG8gcmV0cmlldmUuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBsaXN0ICAgVGhlIGxpc3Qgd2l0aCBtYXRjaGluZyBpZC5cblx0ICovXG5cdHN0YXRpYyBnZXRMaXN0QnlJZCggbGlzdElkICkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlICkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gZGF0YS5saXN0cy5maWx0ZXIoICggbGlzdCApID0+IGxpc3QuaWQgPT09IGxpc3RJZCApO1xuXHRcdFx0XHRyZXNvbHZlKCBsaXN0WzBdKTtcblx0XHRcdH0sIGRlbGF5ICk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlIGEgbGlzdC5cblx0ICogQHBhcmFtICAge051bWJlcn0gIGxpc3RJZCB0aGUgaWQgb2YgdGhlIGxpc3QuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgZGVsZXRlZCBsaXN0LlxuXHQgKi9cblx0c3RhdGljIGRlbGV0ZUxpc3QoIGxpc3RJZCApIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSApID0+IHtcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0QVBJLmdldExpc3RCeUlkKCBsaXN0SWQgKVxuXHRcdFx0XHRcdC50aGVuKCAoIGxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBsaXN0SW5kZXggPSBkYXRhLmxpc3RzLmZpbmRJbmRleCggbGlzdCA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBsaXN0LmlkID09PSBsaXN0SWQ7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGRhdGEubGlzdHMuc3BsaWNlKCBsaXN0SW5kZXgsIDEgKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoIGxpc3QgKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0sIGRlbGF5ICk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRvZG9zIGZyb20gYSBsaXN0LiBCeSBkZWZhdWx0LCBnZXQgdG9kb3Mgbm90IG1hcmtlZCBhcyBkZWxldGVkLlxuXHQgKiBAcGFyYW0gICB7TnVtYmVyfSAgbGlzdElkICBUaGUgaWQgb2YgdGhlIGxpc3QgdG8gcmV0cmlldmUgdG9kb3MgZnJvbS5cblx0ICogQHJldHVybnMge1Byb21pc2V9IHRvZG9zICAgVGhlIHNldCBvZiBtYXRjaGluZyB0b2Rvcy5cblx0ICovXG5cdHN0YXRpYyBnZXRUb2RvcyggbGlzdElkICkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlICkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHRBUEkuZ2V0TGlzdEJ5SWQoIGxpc3RJZCApXG5cdFx0XHRcdFx0LnRoZW4oICggbGlzdCApID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdG9kb3MgPSBsaXN0LnRvZG9zO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCB0b2RvcyApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9LCBkZWxheSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBhIHRvZG8uXG5cdCAqIEBwYXJhbSAgIHtOdW1iZXJ9ICBsaXN0SWQgVGhlIGlkIG9mIHRoZSBsaXN0LlxuXHQgKiBAcGFyYW0gICB7TnVtYmVyfSAgdG9kb0lkIFRoZSBpZCBvZiB0aGUgdG9kbyB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSAgIHtPYmplY3R9ICBkYXRhICAgVGhlIGRhdGEgeW91IHdhbnQgdG8gdXBkYXRlIGluIHRoZSB0b2RvLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gdG9kbyAgIFRoZSB1cGRhdGVkIHRvZG8uXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlVG9kbyggbGlzdElkLCB0b2RvSWQsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUgKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdEFQSS5nZXRUb2RvcyggbGlzdElkIClcblx0XHRcdFx0XHQudGhlbiggKCB0b2RvcyApID0+IHsgLy8gQHRvZG8gVGhpcyBpcyBub3QgaW1tdXRhYmxlLlxuXHRcdFx0XHRcdFx0ZGVidWdnZXI7XG5cdFx0XHRcdFx0XHRjb25zdCB0b2RvSW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoIHRvZG8gPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdG9kby5pZCA9PT0gdG9kb0lkO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKCB0b2Rvc1t0b2RvSW5kZXhdLCBkYXRhICk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKCB0b2Rvc1t0b2RvSW5kZXhdKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCggZXJyID0+IGVyciApO1xuXHRcdFx0fSwgZGVsYXkgKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYXJrIGEgdG9kbyBhcyBkZWxldGVkIG9yIHBlcmZvcm0gYSBoYXJkIGRlbGV0ZS5cblx0ICogQHBhcmFtICAge051bWJlcn0gIGxpc3RJZCAgICAgVGhlIGlkIG9mIHRoZSBsaXN0LlxuXHQgKiBAcGFyYW0gICB7TnVtYmVyfSAgdG9kb0lkICAgICBUaGUgaWQgb2YgdGhlIHRvZG8gdG8gZGVsZXRlLlxuXHQgKiBAcGFyYW0gICB7Qm9vbGVhbn0gaGFyZERlbGV0ZSBJZiB0cnVlLCB0aGUgdG9kbyB3aWxsIGJlIHBlcm1hbmVudGx5IGRlbGV0ZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSB0b2RvcyAgICAgIFRoZSB0b2Rvcy5cblx0ICovXG5cdHN0YXRpYyBkZWxldGVUb2RvKCBsaXN0SWQsIHRvZG9JZCwgaGFyZERlbGV0ZSA9IGZhbHNlICkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlICkgPT4ge1xuXHRcdFx0QVBJLmdldFRvZG9zKCBsaXN0SWQgKVxuXHRcdFx0XHQudGhlbiggKCB0b2RvcyApID0+IHtcblx0XHRcdFx0XHRjb25zdCB0b2RvSW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoIHRvZG8gPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRvZG8uaWQgPT09IHRvZG9JZDtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpZiAoIHRydWUgPT09IGhhcmREZWxldGUgKSB7XG5cdFx0XHRcdFx0XHR0b2Rvcy5zcGxpY2UoIHRvZG9JbmRleCwgMSApO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSggdG9kb3MgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dG9kb3NbdG9kb0luZGV4XS5kZWxldGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXNvbHZlKCB0b2Rvcy5maWx0ZXIoIHRvZG8gPT4gZmFsc2UgPT09IHRvZG8uZGVsZXRlZCApICk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCggZXJyID0+IGVyciApO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBsZXRlIGEgdG9kby5cblx0ICogQHBhcmFtICAge051bWJlcn0gIGxpc3RJZCBUaGUgaWQgb2YgdGhlIGxpc3QuXG5cdCAqIEBwYXJhbSAgIHtOdW1iZXJ9ICB0b2RvSWQgVGhlIGlkIG9mIHRoZSB0b2RvLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gdG9kb3MgIFRoZSBsaXN0IG9mIHRvZG9zLlxuXHQgKi9cblx0c3RhdGljIGNvbXBsZXRlVG9kbyggbGlzdElkLCB0b2RvSWQgKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUgKSA9PiB7XG5cdFx0XHRBUEkuZ2V0VG9kb3MoIGxpc3RJZCApXG5cdFx0XHRcdC50aGVuKCAoIHRvZG9zICkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHRvZG9JbmRleCA9IHRvZG9zLmZpbmRJbmRleCggdG9kbyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdG9kby5pZCA9PT0gdG9kb0lkO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRvZG9zW3RvZG9JbmRleF0uY29tcGxldGVkID0gISB0b2Rvc1t0b2RvSW5kZXhdLmNvbXBsZXRlZDtcblx0XHRcdFx0XHRyZXNvbHZlKCB0b2Rvc1t0b2RvSW5kZXhdKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKCBlcnIgPT4gZXJyICk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9BUEkuanMiLCJleHBvcnQgZGVmYXVsdCAxMDAwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9kZWxheS5qcyIsImltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL0FQSSc7XG5pbXBvcnQgVG9Eb0xpc3RWaWV3IGZyb20gJy4vVG9Eb0xpc3RWaWV3JztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL3V0aWxpdGllcy9FdmVudHMnO1xuaW1wb3J0ICQgZnJvbSAnalF1ZXJ5JztcblxuY2xhc3MgVG9Eb0xpc3Qge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRuZXcgVG9Eb0xpc3RWaWV3O1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMucmVuZGVyVG9Eb0xpc3QoKTtcblx0fVxuXG5cdHJlbmRlclRvRG9MaXN0KCkge1xuXHRcdHJldHVybiBBUEkuZ2V0UHJpbWFyeUxpc3QoKVxuXHRcdFx0LnRoZW4oICggbGlzdCApID0+IHtcblx0XHRcdFx0ZXZlbnRzLmVtaXQoICdoaWRlLWxvYWRlcicgKTtcblx0XHRcdFx0ZXZlbnRzLmVtaXQoICdyZW5kZXItdG9kb3MnLCBsaXN0LnRvZG9zICk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0LmpzIiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL0V2ZW50cyc7XG5pbXBvcnQgdG9kb1RlbXBsYXRlIGZyb20gJy4uL3ZpZXdzL3RvZG9UZW1wbGF0ZS5odG1sJztcbmltcG9ydCAkIGZyb20gJ2pRdWVyeSc7XG5cbmNsYXNzIFRvRG9MaXN0VmlldyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHRcdHRoaXMuJGxvYWRlciA9ICQoICcud3AtdG9kby1sb2FkZXItY29udGFpbmVyJyApO1xuXHRcdHRoaXMuJGxpc3RDb250YWluZXIgPSAkKCAnI3dwLXRvZG8tbGlzdC1jb250YWluZXInICk7XG5cdFx0ZXZlbnRzLmVtaXQoICdzaG93LWxvYWRlcicgKTtcblx0fVxuXG5cdGJpbmRFdmVudHMoKSB7XG5cdFx0ZXZlbnRzLm9uKCAnaGlkZS1sb2FkZXInLCAoKSA9PiB0aGlzLmhpZGVMb2FkZXIoKSApO1xuXHRcdGV2ZW50cy5vbiggJ3Nob3ctbG9hZGVyJywgKCkgPT4gdGhpcy5zaG93TG9hZGVyKCkgKTtcblx0XHRldmVudHMub24oICdyZW5kZXItdG9kb3MnLCAoIHRvZG9zICkgPT4gdGhpcy5yZW5kZXIoIHRvZG9zICkgKTtcblx0fVxuXG5cdHJlbmRlciggdG9kb3MgKSB7XG5cdFx0dGhpcy4kbGlzdENvbnRhaW5lci5odG1sKCB0aGlzLnJlbmRlclRlbXBsYXRlKCB0b2RvcyApICk7XG5cdH1cblxuXHRyZW5kZXJUZW1wbGF0ZSggdG9kb3MgKSB7XG5cdFx0cmV0dXJuIHRvZG9UZW1wbGF0ZSh7dG9kb3M6IHRvZG9zfSk7XG5cdH1cblxuXHRoaWRlTG9hZGVyKCkge1xuXHRcdHRoaXMuJGxvYWRlci5oaWRlKCk7XG5cdH1cblxuXHRzaG93TG9hZGVyKCkge1xuXHRcdHRoaXMuJGxvYWRlci5zaG93KCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3RWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVG9Eb0xpc3RWaWV3LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4oZnVuY3Rpb24gKEhvZ2FuKSB7XG4gIC8vIFNldHVwIHJlZ2V4ICBhc3NpZ25tZW50c1xuICAvLyByZW1vdmUgd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gTXVzdGFjaGUgc3BlY1xuICB2YXIgcklzV2hpdGVzcGFjZSA9IC9cXFMvLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLFxuICAgICAgck5ld2xpbmUgPSAgL1xcbi9nLFxuICAgICAgckNyID0gL1xcci9nLFxuICAgICAgclNsYXNoID0gL1xcXFwvZyxcbiAgICAgIHJMaW5lU2VwID0gL1xcdTIwMjgvLFxuICAgICAgclBhcmFncmFwaFNlcCA9IC9cXHUyMDI5LztcblxuICBIb2dhbi50YWdzID0ge1xuICAgICcjJzogMSwgJ14nOiAyLCAnPCc6IDMsICckJzogNCxcbiAgICAnLyc6IDUsICchJzogNiwgJz4nOiA3LCAnPSc6IDgsICdfdic6IDksXG4gICAgJ3snOiAxMCwgJyYnOiAxMSwgJ190JzogMTJcbiAgfTtcblxuICBIb2dhbi5zY2FuID0gZnVuY3Rpb24gc2Nhbih0ZXh0LCBkZWxpbWl0ZXJzKSB7XG4gICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoLFxuICAgICAgICBJTl9URVhUID0gMCxcbiAgICAgICAgSU5fVEFHX1RZUEUgPSAxLFxuICAgICAgICBJTl9UQUcgPSAyLFxuICAgICAgICBzdGF0ZSA9IElOX1RFWFQsXG4gICAgICAgIHRhZ1R5cGUgPSBudWxsLFxuICAgICAgICB0YWcgPSBudWxsLFxuICAgICAgICBidWYgPSAnJyxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgICAgIHNlZW5UYWcgPSBmYWxzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxpbmVTdGFydCA9IDAsXG4gICAgICAgIG90YWcgPSAne3snLFxuICAgICAgICBjdGFnID0gJ319JztcblxuICAgIGZ1bmN0aW9uIGFkZEJ1ZigpIHtcbiAgICAgIGlmIChidWYubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2tlbnMucHVzaCh7dGFnOiAnX3QnLCB0ZXh0OiBuZXcgU3RyaW5nKGJ1Zil9KTtcbiAgICAgICAgYnVmID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZUlzV2hpdGVzcGFjZSgpIHtcbiAgICAgIHZhciBpc0FsbFdoaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgaiA9IGxpbmVTdGFydDsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpc0FsbFdoaXRlc3BhY2UgPVxuICAgICAgICAgIChIb2dhbi50YWdzW3Rva2Vuc1tqXS50YWddIDwgSG9nYW4udGFnc1snX3YnXSkgfHxcbiAgICAgICAgICAodG9rZW5zW2pdLnRhZyA9PSAnX3QnICYmIHRva2Vuc1tqXS50ZXh0Lm1hdGNoKHJJc1doaXRlc3BhY2UpID09PSBudWxsKTtcbiAgICAgICAgaWYgKCFpc0FsbFdoaXRlc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzQWxsV2hpdGVzcGFjZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJMaW5lKGhhdmVTZWVuVGFnLCBub05ld0xpbmUpIHtcbiAgICAgIGFkZEJ1ZigpO1xuXG4gICAgICBpZiAoaGF2ZVNlZW5UYWcgJiYgbGluZUlzV2hpdGVzcGFjZSgpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQsIG5leHQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodG9rZW5zW2pdLnRleHQpIHtcbiAgICAgICAgICAgIGlmICgobmV4dCA9IHRva2Vuc1tqKzFdKSAmJiBuZXh0LnRhZyA9PSAnPicpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IGluZGVudCB0byB0b2tlbiB2YWx1ZVxuICAgICAgICAgICAgICBuZXh0LmluZGVudCA9IHRva2Vuc1tqXS50ZXh0LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFub05ld0xpbmUpIHtcbiAgICAgICAgdG9rZW5zLnB1c2goe3RhZzonXFxuJ30pO1xuICAgICAgfVxuXG4gICAgICBzZWVuVGFnID0gZmFsc2U7XG4gICAgICBsaW5lU3RhcnQgPSB0b2tlbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURlbGltaXRlcnModGV4dCwgaW5kZXgpIHtcbiAgICAgIHZhciBjbG9zZSA9ICc9JyArIGN0YWcsXG4gICAgICAgICAgY2xvc2VJbmRleCA9IHRleHQuaW5kZXhPZihjbG9zZSwgaW5kZXgpLFxuICAgICAgICAgIGRlbGltaXRlcnMgPSB0cmltKFxuICAgICAgICAgICAgdGV4dC5zdWJzdHJpbmcodGV4dC5pbmRleE9mKCc9JywgaW5kZXgpICsgMSwgY2xvc2VJbmRleClcbiAgICAgICAgICApLnNwbGl0KCcgJyk7XG5cbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbZGVsaW1pdGVycy5sZW5ndGggLSAxXTtcblxuICAgICAgcmV0dXJuIGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmIChkZWxpbWl0ZXJzKSB7XG4gICAgICBkZWxpbWl0ZXJzID0gZGVsaW1pdGVycy5zcGxpdCgnICcpO1xuICAgICAgb3RhZyA9IGRlbGltaXRlcnNbMF07XG4gICAgICBjdGFnID0gZGVsaW1pdGVyc1sxXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzdGF0ZSA9PSBJTl9URVhUKSB7XG4gICAgICAgIGlmICh0YWdDaGFuZ2Uob3RhZywgdGV4dCwgaSkpIHtcbiAgICAgICAgICAtLWk7XG4gICAgICAgICAgYWRkQnVmKCk7XG4gICAgICAgICAgc3RhdGUgPSBJTl9UQUdfVFlQRTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGV4dC5jaGFyQXQoaSkgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGZpbHRlckxpbmUoc2VlblRhZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gSU5fVEFHX1RZUEUpIHtcbiAgICAgICAgaSArPSBvdGFnLmxlbmd0aCAtIDE7XG4gICAgICAgIHRhZyA9IEhvZ2FuLnRhZ3NbdGV4dC5jaGFyQXQoaSArIDEpXTtcbiAgICAgICAgdGFnVHlwZSA9IHRhZyA/IHRleHQuY2hhckF0KGkgKyAxKSA6ICdfdic7XG4gICAgICAgIGlmICh0YWdUeXBlID09ICc9Jykge1xuICAgICAgICAgIGkgPSBjaGFuZ2VEZWxpbWl0ZXJzKHRleHQsIGkpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlID0gSU5fVEFHO1xuICAgICAgICB9XG4gICAgICAgIHNlZW5UYWcgPSBpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhZ0NoYW5nZShjdGFnLCB0ZXh0LCBpKSkge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHt0YWc6IHRhZ1R5cGUsIG46IHRyaW0oYnVmKSwgb3RhZzogb3RhZywgY3RhZzogY3RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgaTogKHRhZ1R5cGUgPT0gJy8nKSA/IHNlZW5UYWcgLSBvdGFnLmxlbmd0aCA6IGkgKyBjdGFnLmxlbmd0aH0pO1xuICAgICAgICAgIGJ1ZiA9ICcnO1xuICAgICAgICAgIGkgKz0gY3RhZy5sZW5ndGggLSAxO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgICBpZiAodGFnVHlwZSA9PSAneycpIHtcbiAgICAgICAgICAgIGlmIChjdGFnID09ICd9fScpIHtcbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xlYW5UcmlwbGVTdGFjaGUodG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZiArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckxpbmUoc2VlblRhZywgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5UcmlwbGVTdGFjaGUodG9rZW4pIHtcbiAgICBpZiAodG9rZW4ubi5zdWJzdHIodG9rZW4ubi5sZW5ndGggLSAxKSA9PT0gJ30nKSB7XG4gICAgICB0b2tlbi5uID0gdG9rZW4ubi5zdWJzdHJpbmcoMCwgdG9rZW4ubi5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmltKHMpIHtcbiAgICBpZiAocy50cmltKSB7XG4gICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFnQ2hhbmdlKHRhZywgdGV4dCwgaW5kZXgpIHtcbiAgICBpZiAodGV4dC5jaGFyQXQoaW5kZXgpICE9IHRhZy5jaGFyQXQoMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IHRhZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXh0LmNoYXJBdChpbmRleCArIGkpICE9IHRhZy5jaGFyQXQoaSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdGhlIHRhZ3MgYWxsb3dlZCBpbnNpZGUgc3VwZXIgdGVtcGxhdGVzXG4gIHZhciBhbGxvd2VkSW5TdXBlciA9IHsnX3QnOiB0cnVlLCAnXFxuJzogdHJ1ZSwgJyQnOiB0cnVlLCAnLyc6IHRydWV9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZSh0b2tlbnMsIGtpbmQsIHN0YWNrLCBjdXN0b21UYWdzKSB7XG4gICAgdmFyIGluc3RydWN0aW9ucyA9IFtdLFxuICAgICAgICBvcGVuZXIgPSBudWxsLFxuICAgICAgICB0YWlsID0gbnVsbCxcbiAgICAgICAgdG9rZW4gPSBudWxsO1xuXG4gICAgdGFpbCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuXG4gICAgICBpZiAodGFpbCAmJiB0YWlsLnRhZyA9PSAnPCcgJiYgISh0b2tlbi50YWcgaW4gYWxsb3dlZEluU3VwZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjb250ZW50IGluIDwgc3VwZXIgdGFnLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoSG9nYW4udGFnc1t0b2tlbi50YWddIDw9IEhvZ2FuLnRhZ3NbJyQnXSB8fCBpc09wZW5lcih0b2tlbiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgc3RhY2sucHVzaCh0b2tlbik7XG4gICAgICAgIHRva2VuLm5vZGVzID0gYnVpbGRUcmVlKHRva2VucywgdG9rZW4udGFnLCBzdGFjaywgY3VzdG9tVGFncyk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnRhZyA9PSAnLycpIHtcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2luZyB0YWcgd2l0aG91dCBvcGVuZXI6IC8nICsgdG9rZW4ubik7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGlmICh0b2tlbi5uICE9IG9wZW5lci5uICYmICFpc0Nsb3Nlcih0b2tlbi5uLCBvcGVuZXIubiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lc3RpbmcgZXJyb3I6ICcgKyBvcGVuZXIubiArICcgdnMuICcgKyB0b2tlbi5uKTtcbiAgICAgICAgfVxuICAgICAgICBvcGVuZXIuZW5kID0gdG9rZW4uaTtcbiAgICAgICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udGFnID09ICdcXG4nKSB7XG4gICAgICAgIHRva2VuLmxhc3QgPSAodG9rZW5zLmxlbmd0aCA9PSAwKSB8fCAodG9rZW5zWzBdLnRhZyA9PSAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGluc3RydWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNsb3NpbmcgdGFnOiAnICsgc3RhY2sucG9wKCkubik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3BlbmVyKHRva2VuLCB0YWdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRhZ3NbaV0ubyA9PSB0b2tlbi5uKSB7XG4gICAgICAgIHRva2VuLnRhZyA9ICcjJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNDbG9zZXIoY2xvc2UsIG9wZW4sIHRhZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGFnc1tpXS5jID09IGNsb3NlICYmIHRhZ3NbaV0ubyA9PSBvcGVuKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVN1YnN0aXR1dGlvbnMob2JqKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaXRlbXMucHVzaCgnXCInICsgZXNjKGtleSkgKyAnXCI6IGZ1bmN0aW9uKGMscCx0LGkpIHsnICsgb2JqW2tleV0gKyAnfScpO1xuICAgIH1cbiAgICByZXR1cm4gXCJ7IFwiICsgaXRlbXMuam9pbihcIixcIikgKyBcIiB9XCI7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqKSB7XG4gICAgdmFyIHBhcnRpYWxzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNvZGVPYmoucGFydGlhbHMpIHtcbiAgICAgIHBhcnRpYWxzLnB1c2goJ1wiJyArIGVzYyhrZXkpICsgJ1wiOntuYW1lOlwiJyArIGVzYyhjb2RlT2JqLnBhcnRpYWxzW2tleV0ubmFtZSkgKyAnXCIsICcgKyBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqLnBhcnRpYWxzW2tleV0pICsgXCJ9XCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJwYXJ0aWFsczoge1wiICsgcGFydGlhbHMuam9pbihcIixcIikgKyBcIn0sIHN1YnM6IFwiICsgc3RyaW5naWZ5U3Vic3RpdHV0aW9ucyhjb2RlT2JqLnN1YnMpO1xuICB9XG5cbiAgSG9nYW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24oY29kZU9iaiwgdGV4dCwgb3B0aW9ucykge1xuICAgIHJldHVybiBcIntjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgXCIgKyBIb2dhbi53cmFwTWFpbihjb2RlT2JqLmNvZGUpICsgXCIgfSxcIiArIHN0cmluZ2lmeVBhcnRpYWxzKGNvZGVPYmopICsgIFwifVwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbE5vID0gMDtcbiAgSG9nYW4uZ2VuZXJhdGUgPSBmdW5jdGlvbih0cmVlLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgc2VyaWFsTm8gPSAwO1xuICAgIHZhciBjb250ZXh0ID0geyBjb2RlOiAnJywgc3Viczoge30sIHBhcnRpYWxzOiB7fSB9O1xuICAgIEhvZ2FuLndhbGsodHJlZSwgY29udGV4dCk7XG5cbiAgICBpZiAob3B0aW9ucy5hc1N0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KGNvbnRleHQsIHRleHQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1ha2VUZW1wbGF0ZShjb250ZXh0LCB0ZXh0LCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLndyYXBNYWluID0gZnVuY3Rpb24oY29kZSkge1xuICAgIHJldHVybiAndmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTsnICsgY29kZSArICdyZXR1cm4gdC5mbCgpOyc7XG4gIH1cblxuICBIb2dhbi50ZW1wbGF0ZSA9IEhvZ2FuLlRlbXBsYXRlO1xuXG4gIEhvZ2FuLm1ha2VUZW1wbGF0ZSA9IGZ1bmN0aW9uKGNvZGVPYmosIHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm1ha2VQYXJ0aWFscyhjb2RlT2JqKTtcbiAgICB0ZW1wbGF0ZS5jb2RlID0gbmV3IEZ1bmN0aW9uKCdjJywgJ3AnLCAnaScsIHRoaXMud3JhcE1haW4oY29kZU9iai5jb2RlKSk7XG4gICAgcmV0dXJuIG5ldyB0aGlzLnRlbXBsYXRlKHRlbXBsYXRlLCB0ZXh0LCB0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLm1ha2VQYXJ0aWFscyA9IGZ1bmN0aW9uKGNvZGVPYmopIHtcbiAgICB2YXIga2V5LCB0ZW1wbGF0ZSA9IHtzdWJzOiB7fSwgcGFydGlhbHM6IGNvZGVPYmoucGFydGlhbHMsIG5hbWU6IGNvZGVPYmoubmFtZX07XG4gICAgZm9yIChrZXkgaW4gdGVtcGxhdGUucGFydGlhbHMpIHtcbiAgICAgIHRlbXBsYXRlLnBhcnRpYWxzW2tleV0gPSB0aGlzLm1ha2VQYXJ0aWFscyh0ZW1wbGF0ZS5wYXJ0aWFsc1trZXldKTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gY29kZU9iai5zdWJzKSB7XG4gICAgICB0ZW1wbGF0ZS5zdWJzW2tleV0gPSBuZXcgRnVuY3Rpb24oJ2MnLCAncCcsICd0JywgJ2knLCBjb2RlT2JqLnN1YnNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzYyhzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShyU2xhc2gsICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZShyUXVvdCwgJ1xcXFxcXFwiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UockNyLCAnXFxcXHInKVxuICAgICAgICAgICAgLnJlcGxhY2UockxpbmVTZXAsICdcXFxcdTIwMjgnKVxuICAgICAgICAgICAgLnJlcGxhY2UoclBhcmFncmFwaFNlcCwgJ1xcXFx1MjAyOScpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hvb3NlTWV0aG9kKHMpIHtcbiAgICByZXR1cm4gKH5zLmluZGV4T2YoJy4nKSkgPyAnZCcgOiAnZic7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXJ0aWFsKG5vZGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcHJlZml4ID0gXCI8XCIgKyAoY29udGV4dC5wcmVmaXggfHwgXCJcIik7XG4gICAgdmFyIHN5bSA9IHByZWZpeCArIG5vZGUubiArIHNlcmlhbE5vKys7XG4gICAgY29udGV4dC5wYXJ0aWFsc1tzeW1dID0ge25hbWU6IG5vZGUubiwgcGFydGlhbHM6IHt9fTtcbiAgICBjb250ZXh0LmNvZGUgKz0gJ3QuYih0LnJwKFwiJyArICBlc2Moc3ltKSArICdcIixjLHAsXCInICsgKG5vZGUuaW5kZW50IHx8ICcnKSArICdcIikpOyc7XG4gICAgcmV0dXJuIHN5bTtcbiAgfVxuXG4gIEhvZ2FuLmNvZGVnZW4gPSB7XG4gICAgJyMnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ2lmKHQucyh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDEpLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICdjLHAsMCwnICsgbm9kZS5pICsgJywnICsgbm9kZS5lbmQgKyAnLFwiJyArIG5vZGUub3RhZyArIFwiIFwiICsgbm9kZS5jdGFnICsgJ1wiKSl7JyArXG4gICAgICAgICAgICAgICAgICAgICAgJ3QucnMoYyxwLCcgKyAnZnVuY3Rpb24oYyxwLHQpeyc7XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGNvbnRleHQpO1xuICAgICAgY29udGV4dC5jb2RlICs9ICd9KTtjLnBvcCgpO30nO1xuICAgIH0sXG5cbiAgICAnXic6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuY29kZSArPSAnaWYoIXQucyh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDEpLGMscCwxLDAsMCxcIlwiKSl7JztcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY29udGV4dCk7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ307JztcbiAgICB9LFxuXG4gICAgJz4nOiBjcmVhdGVQYXJ0aWFsLFxuICAgICc8JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgdmFyIGN0eCA9IHtwYXJ0aWFsczoge30sIGNvZGU6ICcnLCBzdWJzOiB7fSwgaW5QYXJ0aWFsOiB0cnVlfTtcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY3R4KTtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGNvbnRleHQucGFydGlhbHNbY3JlYXRlUGFydGlhbChub2RlLCBjb250ZXh0KV07XG4gICAgICB0ZW1wbGF0ZS5zdWJzID0gY3R4LnN1YnM7XG4gICAgICB0ZW1wbGF0ZS5wYXJ0aWFscyA9IGN0eC5wYXJ0aWFscztcbiAgICB9LFxuXG4gICAgJyQnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgY3R4ID0ge3N1YnM6IHt9LCBjb2RlOiAnJywgcGFydGlhbHM6IGNvbnRleHQucGFydGlhbHMsIHByZWZpeDogbm9kZS5ufTtcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY3R4KTtcbiAgICAgIGNvbnRleHQuc3Vic1tub2RlLm5dID0gY3R4LmNvZGU7XG4gICAgICBpZiAoIWNvbnRleHQuaW5QYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRleHQuY29kZSArPSAndC5zdWIoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLGkpOyc7XG4gICAgICB9XG4gICAgfSxcblxuICAgICdcXG4nOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gd3JpdGUoJ1wiXFxcXG5cIicgKyAobm9kZS5sYXN0ID8gJycgOiAnICsgaScpKTtcbiAgICB9LFxuXG4gICAgJ192JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9ICd0LmIodC52KHQuJyArIGNob29zZU1ldGhvZChub2RlLm4pICsgJyhcIicgKyBlc2Mobm9kZS5uKSArICdcIixjLHAsMCkpKTsnO1xuICAgIH0sXG5cbiAgICAnX3QnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gd3JpdGUoJ1wiJyArIGVzYyhub2RlLnRleHQpICsgJ1wiJyk7XG4gICAgfSxcblxuICAgICd7JzogdHJpcGxlU3RhY2hlLFxuXG4gICAgJyYnOiB0cmlwbGVTdGFjaGVcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaXBsZVN0YWNoZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dC5jb2RlICs9ICd0LmIodC50KHQuJyArIGNob29zZU1ldGhvZChub2RlLm4pICsgJyhcIicgKyBlc2Mobm9kZS5uKSArICdcIixjLHAsMCkpKTsnO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGUocykge1xuICAgIHJldHVybiAndC5iKCcgKyBzICsgJyk7JztcbiAgfVxuXG4gIEhvZ2FuLndhbGsgPSBmdW5jdGlvbihub2RlbGlzdCwgY29udGV4dCkge1xuICAgIHZhciBmdW5jO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZWxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmdW5jID0gSG9nYW4uY29kZWdlbltub2RlbGlzdFtpXS50YWddO1xuICAgICAgZnVuYyAmJiBmdW5jKG5vZGVsaXN0W2ldLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBIb2dhbi5wYXJzZSA9IGZ1bmN0aW9uKHRva2VucywgdGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBidWlsZFRyZWUodG9rZW5zLCAnJywgW10sIG9wdGlvbnMuc2VjdGlvblRhZ3MgfHwgW10pO1xuICB9XG5cbiAgSG9nYW4uY2FjaGUgPSB7fTtcblxuICBIb2dhbi5jYWNoZUtleSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gW3RleHQsICEhb3B0aW9ucy5hc1N0cmluZywgISFvcHRpb25zLmRpc2FibGVMYW1iZGEsIG9wdGlvbnMuZGVsaW1pdGVycywgISFvcHRpb25zLm1vZGVsR2V0XS5qb2luKCd8fCcpO1xuICB9XG5cbiAgSG9nYW4uY29tcGlsZSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIga2V5ID0gSG9nYW4uY2FjaGVLZXkodGV4dCwgb3B0aW9ucyk7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5jYWNoZVtrZXldO1xuXG4gICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICB2YXIgcGFydGlhbHMgPSB0ZW1wbGF0ZS5wYXJ0aWFscztcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFydGlhbHMpIHtcbiAgICAgICAgZGVsZXRlIHBhcnRpYWxzW25hbWVdLmluc3RhbmNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRlbXBsYXRlID0gdGhpcy5nZW5lcmF0ZSh0aGlzLnBhcnNlKHRoaXMuc2Nhbih0ZXh0LCBvcHRpb25zLmRlbGltaXRlcnMpLCB0ZXh0LCBvcHRpb25zKSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogSG9nYW4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hvZ2FuLmpzL2xpYi9jb21waWxlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAyMDExIFR3aXR0ZXIsIEluYy5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFRoaXMgZmlsZSBpcyBmb3IgdXNlIHdpdGggTm9kZS5qcy4gU2VlIGRpc3QvIGZvciBicm93c2VyIGZpbGVzLlxuXG52YXIgSG9nYW4gPSByZXF1aXJlKCcuL2NvbXBpbGVyJyk7XG5Ib2dhbi5UZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKS5UZW1wbGF0ZTtcbkhvZ2FuLnRlbXBsYXRlID0gSG9nYW4uVGVtcGxhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IEhvZ2FuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hvZ2FuLmpzL2xpYi9ob2dhbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG52YXIgSG9nYW4gPSB7fTtcblxuKGZ1bmN0aW9uIChIb2dhbikge1xuICBIb2dhbi5UZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb2RlT2JqLCB0ZXh0LCBjb21waWxlciwgb3B0aW9ucykge1xuICAgIGNvZGVPYmogPSBjb2RlT2JqIHx8IHt9O1xuICAgIHRoaXMuciA9IGNvZGVPYmouY29kZSB8fCB0aGlzLnI7XG4gICAgdGhpcy5jID0gY29tcGlsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICcnO1xuICAgIHRoaXMucGFydGlhbHMgPSBjb2RlT2JqLnBhcnRpYWxzIHx8IHt9O1xuICAgIHRoaXMuc3VicyA9IGNvZGVPYmouc3VicyB8fCB7fTtcbiAgICB0aGlzLmJ1ZiA9ICcnO1xuICB9XG5cbiAgSG9nYW4uVGVtcGxhdGUucHJvdG90eXBlID0ge1xuICAgIC8vIHJlbmRlcjogcmVwbGFjZWQgYnkgZ2VuZXJhdGVkIGNvZGUuXG4gICAgcjogZnVuY3Rpb24gKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHsgcmV0dXJuICcnOyB9LFxuXG4gICAgLy8gdmFyaWFibGUgZXNjYXBpbmdcbiAgICB2OiBob2dhbkVzY2FwZSxcblxuICAgIC8vIHRyaXBsZSBzdGFjaGVcbiAgICB0OiBjb2VyY2VUb1N0cmluZyxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJpKFtjb250ZXh0XSwgcGFydGlhbHMgfHwge30sIGluZGVudCk7XG4gICAgfSxcblxuICAgIC8vIHJlbmRlciBpbnRlcm5hbCAtLSBhIGhvb2sgZm9yIG92ZXJyaWRlcyB0aGF0IGNhdGNoZXMgcGFydGlhbHMgdG9vXG4gICAgcmk6IGZ1bmN0aW9uIChjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpO1xuICAgIH0sXG5cbiAgICAvLyBlbnN1cmVQYXJ0aWFsXG4gICAgZXA6IGZ1bmN0aW9uKHN5bWJvbCwgcGFydGlhbHMpIHtcbiAgICAgIHZhciBwYXJ0aWFsID0gdGhpcy5wYXJ0aWFsc1tzeW1ib2xdO1xuXG4gICAgICAvLyBjaGVjayB0byBzZWUgdGhhdCBpZiB3ZSd2ZSBpbnN0YW50aWF0ZWQgdGhpcyBwYXJ0aWFsIGJlZm9yZVxuICAgICAgdmFyIHRlbXBsYXRlID0gcGFydGlhbHNbcGFydGlhbC5uYW1lXTtcbiAgICAgIGlmIChwYXJ0aWFsLmluc3RhbmNlICYmIHBhcnRpYWwuYmFzZSA9PSB0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gcGFydGlhbC5pbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIXRoaXMuYykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBpbGVyIGF2YWlsYWJsZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmMuY29tcGlsZSh0ZW1wbGF0ZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgdXNlIHRoaXMgdG8gY2hlY2sgd2hldGhlciB0aGUgcGFydGlhbHMgZGljdGlvbmFyeSBoYXMgY2hhbmdlZFxuICAgICAgdGhpcy5wYXJ0aWFsc1tzeW1ib2xdLmJhc2UgPSB0ZW1wbGF0ZTtcblxuICAgICAgaWYgKHBhcnRpYWwuc3Vicykge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgY29uc2lkZXIgcGFyZW50IHRlbXBsYXRlIG5vd1xuICAgICAgICBpZiAoIXBhcnRpYWxzLnN0YWNrVGV4dCkgcGFydGlhbHMuc3RhY2tUZXh0ID0ge307XG4gICAgICAgIGZvciAoa2V5IGluIHBhcnRpYWwuc3Vicykge1xuICAgICAgICAgIGlmICghcGFydGlhbHMuc3RhY2tUZXh0W2tleV0pIHtcbiAgICAgICAgICAgIHBhcnRpYWxzLnN0YWNrVGV4dFtrZXldID0gKHRoaXMuYWN0aXZlU3ViICE9PSB1bmRlZmluZWQgJiYgcGFydGlhbHMuc3RhY2tUZXh0W3RoaXMuYWN0aXZlU3ViXSkgPyBwYXJ0aWFscy5zdGFja1RleHRbdGhpcy5hY3RpdmVTdWJdIDogdGhpcy50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVNwZWNpYWxpemVkUGFydGlhbCh0ZW1wbGF0ZSwgcGFydGlhbC5zdWJzLCBwYXJ0aWFsLnBhcnRpYWxzLFxuICAgICAgICAgIHRoaXMuc3RhY2tTdWJzLCB0aGlzLnN0YWNrUGFydGlhbHMsIHBhcnRpYWxzLnN0YWNrVGV4dCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW3N5bWJvbF0uaW5zdGFuY2UgPSB0ZW1wbGF0ZTtcblxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0sXG5cbiAgICAvLyB0cmllcyB0byBmaW5kIGEgcGFydGlhbCBpbiB0aGUgY3VycmVudCBzY29wZSBhbmQgcmVuZGVyIGl0XG4gICAgcnA6IGZ1bmN0aW9uKHN5bWJvbCwgY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgdmFyIHBhcnRpYWwgPSB0aGlzLmVwKHN5bWJvbCwgcGFydGlhbHMpO1xuICAgICAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRpYWwucmkoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCk7XG4gICAgfSxcblxuICAgIC8vIHJlbmRlciBhIHNlY3Rpb25cbiAgICByczogZnVuY3Rpb24oY29udGV4dCwgcGFydGlhbHMsIHNlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIWlzQXJyYXkodGFpbCkpIHtcbiAgICAgICAgc2VjdGlvbihjb250ZXh0LCBwYXJ0aWFscywgdGhpcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWlsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRleHQucHVzaCh0YWlsW2ldKTtcbiAgICAgICAgc2VjdGlvbihjb250ZXh0LCBwYXJ0aWFscywgdGhpcyk7XG4gICAgICAgIGNvbnRleHQucG9wKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIG1heWJlIHN0YXJ0IGEgc2VjdGlvblxuICAgIHM6IGZ1bmN0aW9uKHZhbCwgY3R4LCBwYXJ0aWFscywgaW52ZXJ0ZWQsIHN0YXJ0LCBlbmQsIHRhZ3MpIHtcbiAgICAgIHZhciBwYXNzO1xuXG4gICAgICBpZiAoaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbCA9IHRoaXMubXModmFsLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCwgdGFncyk7XG4gICAgICB9XG5cbiAgICAgIHBhc3MgPSAhIXZhbDtcblxuICAgICAgaWYgKCFpbnZlcnRlZCAmJiBwYXNzICYmIGN0eCkge1xuICAgICAgICBjdHgucHVzaCgodHlwZW9mIHZhbCA9PSAnb2JqZWN0JykgPyB2YWwgOiBjdHhbY3R4Lmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhc3M7XG4gICAgfSxcblxuICAgIC8vIGZpbmQgdmFsdWVzIHdpdGggZG90dGVkIG5hbWVzXG4gICAgZDogZnVuY3Rpb24oa2V5LCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCkge1xuICAgICAgdmFyIGZvdW5kLFxuICAgICAgICAgIG5hbWVzID0ga2V5LnNwbGl0KCcuJyksXG4gICAgICAgICAgdmFsID0gdGhpcy5mKG5hbWVzWzBdLCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCksXG4gICAgICAgICAgZG9Nb2RlbEdldCA9IHRoaXMub3B0aW9ucy5tb2RlbEdldCxcbiAgICAgICAgICBjeCA9IG51bGw7XG5cbiAgICAgIGlmIChrZXkgPT09ICcuJyAmJiBpc0FycmF5KGN0eFtjdHgubGVuZ3RoIC0gMl0pKSB7XG4gICAgICAgIHZhbCA9IGN0eFtjdHgubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm91bmQgPSBmaW5kSW5TY29wZShuYW1lc1tpXSwgdmFsLCBkb01vZGVsR2V0KTtcbiAgICAgICAgICBpZiAoZm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3ggPSB2YWw7XG4gICAgICAgICAgICB2YWwgPSBmb3VuZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5Gb3VuZCAmJiAhdmFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXR1cm5Gb3VuZCAmJiB0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3R4LnB1c2goY3gpO1xuICAgICAgICB2YWwgPSB0aGlzLm12KHZhbCwgY3R4LCBwYXJ0aWFscyk7XG4gICAgICAgIGN0eC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLy8gZmluZCB2YWx1ZXMgd2l0aCBub3JtYWwgbmFtZXNcbiAgICBmOiBmdW5jdGlvbihrZXksIGN0eCwgcGFydGlhbHMsIHJldHVybkZvdW5kKSB7XG4gICAgICB2YXIgdmFsID0gZmFsc2UsXG4gICAgICAgICAgdiA9IG51bGwsXG4gICAgICAgICAgZm91bmQgPSBmYWxzZSxcbiAgICAgICAgICBkb01vZGVsR2V0ID0gdGhpcy5vcHRpb25zLm1vZGVsR2V0O1xuXG4gICAgICBmb3IgKHZhciBpID0gY3R4Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHYgPSBjdHhbaV07XG4gICAgICAgIHZhbCA9IGZpbmRJblNjb3BlKGtleSwgdiwgZG9Nb2RlbEdldCk7XG4gICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHJldHVybiAocmV0dXJuRm91bmQpID8gZmFsc2UgOiBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJldHVybkZvdW5kICYmIHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWwgPSB0aGlzLm12KHZhbCwgY3R4LCBwYXJ0aWFscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8vIGhpZ2hlciBvcmRlciB0ZW1wbGF0ZXNcbiAgICBsczogZnVuY3Rpb24oZnVuYywgY3gsIHBhcnRpYWxzLCB0ZXh0LCB0YWdzKSB7XG4gICAgICB2YXIgb2xkVGFncyA9IHRoaXMub3B0aW9ucy5kZWxpbWl0ZXJzO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZGVsaW1pdGVycyA9IHRhZ3M7XG4gICAgICB0aGlzLmIodGhpcy5jdChjb2VyY2VUb1N0cmluZyhmdW5jLmNhbGwoY3gsIHRleHQpKSwgY3gsIHBhcnRpYWxzKSk7XG4gICAgICB0aGlzLm9wdGlvbnMuZGVsaW1pdGVycyA9IG9sZFRhZ3M7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gY29tcGlsZSB0ZXh0XG4gICAgY3Q6IGZ1bmN0aW9uKHRleHQsIGN4LCBwYXJ0aWFscykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlTGFtYmRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGFtYmRhIGZlYXR1cmVzIGRpc2FibGVkLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYy5jb21waWxlKHRleHQsIHRoaXMub3B0aW9ucykucmVuZGVyKGN4LCBwYXJ0aWFscyk7XG4gICAgfSxcblxuICAgIC8vIHRlbXBsYXRlIHJlc3VsdCBidWZmZXJpbmdcbiAgICBiOiBmdW5jdGlvbihzKSB7IHRoaXMuYnVmICs9IHM7IH0sXG5cbiAgICBmbDogZnVuY3Rpb24oKSB7IHZhciByID0gdGhpcy5idWY7IHRoaXMuYnVmID0gJyc7IHJldHVybiByOyB9LFxuXG4gICAgLy8gbWV0aG9kIHJlcGxhY2Ugc2VjdGlvblxuICAgIG1zOiBmdW5jdGlvbihmdW5jLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCwgdGFncykge1xuICAgICAgdmFyIHRleHRTb3VyY2UsXG4gICAgICAgICAgY3ggPSBjdHhbY3R4Lmxlbmd0aCAtIDFdLFxuICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuY2FsbChjeCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKGludmVydGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dFNvdXJjZSA9ICh0aGlzLmFjdGl2ZVN1YiAmJiB0aGlzLnN1YnNUZXh0ICYmIHRoaXMuc3Vic1RleHRbdGhpcy5hY3RpdmVTdWJdKSA/IHRoaXMuc3Vic1RleHRbdGhpcy5hY3RpdmVTdWJdIDogdGhpcy50ZXh0O1xuICAgICAgICAgIHJldHVybiB0aGlzLmxzKHJlc3VsdCwgY3gsIHBhcnRpYWxzLCB0ZXh0U291cmNlLnN1YnN0cmluZyhzdGFydCwgZW5kKSwgdGFncyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLy8gbWV0aG9kIHJlcGxhY2UgdmFyaWFibGVcbiAgICBtdjogZnVuY3Rpb24oZnVuYywgY3R4LCBwYXJ0aWFscykge1xuICAgICAgdmFyIGN4ID0gY3R4W2N0eC5sZW5ndGggLSAxXTtcbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmNhbGwoY3gpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0KGNvZXJjZVRvU3RyaW5nKHJlc3VsdC5jYWxsKGN4KSksIGN4LCBwYXJ0aWFscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIHN1YjogZnVuY3Rpb24obmFtZSwgY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgdmFyIGYgPSB0aGlzLnN1YnNbbmFtZV07XG4gICAgICBpZiAoZikge1xuICAgICAgICB0aGlzLmFjdGl2ZVN1YiA9IG5hbWU7XG4gICAgICAgIGYoY29udGV4dCwgcGFydGlhbHMsIHRoaXMsIGluZGVudCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU3ViID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgLy9GaW5kIGEga2V5IGluIGFuIG9iamVjdFxuICBmdW5jdGlvbiBmaW5kSW5TY29wZShrZXksIHNjb3BlLCBkb01vZGVsR2V0KSB7XG4gICAgdmFyIHZhbDtcblxuICAgIGlmIChzY29wZSAmJiB0eXBlb2Ygc2NvcGUgPT0gJ29iamVjdCcpIHtcblxuICAgICAgaWYgKHNjb3BlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSBzY29wZVtrZXldO1xuXG4gICAgICAvLyB0cnkgbG9va3VwIHdpdGggZ2V0IGZvciBiYWNrYm9uZSBvciBzaW1pbGFyIG1vZGVsIGRhdGFcbiAgICAgIH0gZWxzZSBpZiAoZG9Nb2RlbEdldCAmJiBzY29wZS5nZXQgJiYgdHlwZW9mIHNjb3BlLmdldCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbCA9IHNjb3BlLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTcGVjaWFsaXplZFBhcnRpYWwoaW5zdGFuY2UsIHN1YnMsIHBhcnRpYWxzLCBzdGFja1N1YnMsIHN0YWNrUGFydGlhbHMsIHN0YWNrVGV4dCkge1xuICAgIGZ1bmN0aW9uIFBhcnRpYWxUZW1wbGF0ZSgpIHt9O1xuICAgIFBhcnRpYWxUZW1wbGF0ZS5wcm90b3R5cGUgPSBpbnN0YW5jZTtcbiAgICBmdW5jdGlvbiBTdWJzdGl0dXRpb25zKCkge307XG4gICAgU3Vic3RpdHV0aW9ucy5wcm90b3R5cGUgPSBpbnN0YW5jZS5zdWJzO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIHBhcnRpYWwgPSBuZXcgUGFydGlhbFRlbXBsYXRlKCk7XG4gICAgcGFydGlhbC5zdWJzID0gbmV3IFN1YnN0aXR1dGlvbnMoKTtcbiAgICBwYXJ0aWFsLnN1YnNUZXh0ID0ge307ICAvL2hlaGUuIHN1YnN0ZXh0LlxuICAgIHBhcnRpYWwuYnVmID0gJyc7XG5cbiAgICBzdGFja1N1YnMgPSBzdGFja1N1YnMgfHwge307XG4gICAgcGFydGlhbC5zdGFja1N1YnMgPSBzdGFja1N1YnM7XG4gICAgcGFydGlhbC5zdWJzVGV4dCA9IHN0YWNrVGV4dDtcbiAgICBmb3IgKGtleSBpbiBzdWJzKSB7XG4gICAgICBpZiAoIXN0YWNrU3Vic1trZXldKSBzdGFja1N1YnNba2V5XSA9IHN1YnNba2V5XTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gc3RhY2tTdWJzKSB7XG4gICAgICBwYXJ0aWFsLnN1YnNba2V5XSA9IHN0YWNrU3Vic1trZXldO1xuICAgIH1cblxuICAgIHN0YWNrUGFydGlhbHMgPSBzdGFja1BhcnRpYWxzIHx8IHt9O1xuICAgIHBhcnRpYWwuc3RhY2tQYXJ0aWFscyA9IHN0YWNrUGFydGlhbHM7XG4gICAgZm9yIChrZXkgaW4gcGFydGlhbHMpIHtcbiAgICAgIGlmICghc3RhY2tQYXJ0aWFsc1trZXldKSBzdGFja1BhcnRpYWxzW2tleV0gPSBwYXJ0aWFsc1trZXldO1xuICAgIH1cbiAgICBmb3IgKGtleSBpbiBzdGFja1BhcnRpYWxzKSB7XG4gICAgICBwYXJ0aWFsLnBhcnRpYWxzW2tleV0gPSBzdGFja1BhcnRpYWxzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRpYWw7XG4gIH1cblxuICB2YXIgckFtcCA9IC8mL2csXG4gICAgICByTHQgPSAvPC9nLFxuICAgICAgckd0ID0gLz4vZyxcbiAgICAgIHJBcG9zID0gL1xcJy9nLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLFxuICAgICAgaENoYXJzID0gL1smPD5cXFwiXFwnXS87XG5cbiAgZnVuY3Rpb24gY29lcmNlVG9TdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIFN0cmluZygodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogdmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvZ2FuRXNjYXBlKHN0cikge1xuICAgIHN0ciA9IGNvZXJjZVRvU3RyaW5nKHN0cik7XG4gICAgcmV0dXJuIGhDaGFycy50ZXN0KHN0cikgP1xuICAgICAgc3RyXG4gICAgICAgIC5yZXBsYWNlKHJBbXAsICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKHJMdCwgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZShyR3QsICcmZ3Q7JylcbiAgICAgICAgLnJlcGxhY2UockFwb3MsICcmIzM5OycpXG4gICAgICAgIC5yZXBsYWNlKHJRdW90LCAnJnF1b3Q7JykgOlxuICAgICAgc3RyO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogSG9nYW4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hvZ2FuLmpzL2xpYi90ZW1wbGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gbihuKXtmdW5jdGlvbiBvKG8pe3ZhciB0PW8udG9Mb3dlckNhc2UoKTtyZXR1cm4gblt0XXx8KG5bdF09W10pfXJldHVybiBuPW58fHt9LHtvbjpmdW5jdGlvbihuLHQpe28obikucHVzaCh0KX0sb2ZmOmZ1bmN0aW9uKG4sdCl7dmFyIGM9byhuKSxmPWMuaW5kZXhPZih0KTt+ZiYmYy5zcGxpY2UoZiwxKX0sZW1pdDpmdW5jdGlvbihuLHQpe28oXCIqXCIpLmNvbmNhdChvKG4pKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24odCl9KX19fW1vZHVsZS5leHBvcnRzPW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9taXR0L2Rpc3QvbWl0dC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEggPSByZXF1aXJlKFwiaG9nYW4uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB2YXIgVCA9IG5ldyBILlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8dWwgaWQ9XFxcIndwLXRvZG8tbGlzdFxcXCIgY2xhc3M9XFxcIndwLXRvZG8tbGlzdFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7aWYodC5zKHQuZihcInRvZG9zXCIsYyxwLDEpLGMscCwwLDU1LDc2NixcInt7IH19XCIpKXt0LnJzKGMscCxmdW5jdGlvbihjLHAsdCl7dC5iKFwiXHQ8bGkgaWQ9XFxcIndwLXRvZG8taXRlbS1cIik7dC5iKHQudih0LmYoXCJpZFwiLGMscCwwKSkpO3QuYihcIlxcXCIgZGF0YS1pZD1cXFwiXCIpO3QuYih0LnYodC5mKFwiaWRcIixjLHAsMCkpKTt0LmIoXCJcXFwiIGNsYXNzPVxcXCJ3cC10b2RvLWxpc3QtaXRlbVxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdDxkaXYgY2xhc3M9XFxcIndwLXRvZG8tY29tcGxldGUtY29udGFpbmVyXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHQ8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJ3cC10b2RvLWNvbXBsZXRlXFxcIiBuYW1lPVxcXCJ3cC10b2RvLWNvbXBsZXRlXFxcIiBcIik7aWYodC5zKHQuZihcImNvbXBsZXRlZFwiLGMscCwxKSxjLHAsMCwyNjIsMjcxLFwie3sgfX1cIikpe3QucnMoYyxwLGZ1bmN0aW9uKGMscCx0KXt0LmIoXCIgY2hlY2tlZCBcIik7fSk7Yy5wb3AoKTt9dC5iKFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGRpdiBjbGFzcz1cXFwid3AtdG9kby10b2RvLWRyYWctY29udGFpbmVyXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHQ8YnV0dG9uIGNsYXNzPVxcXCJ3cC10b2RvLXRhc2stZHJhZ1xcXCI+RDwvYnV0dG9uPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGRpdiBjbGFzcz1cXFwid3AtdG9kby10YXNrLWlucHV0LWNvbnRhaW5lclxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJ3cC10b2RvLXRhc2staW5wdXRcXFwiIG5hbWU9XFxcIndwLXRvZG8tdGFzay1pbnB1dFxcXCIgdmFsdWU9XFxcIlwiKTt0LmIodC52KHQuZihcInRpdGxlXCIsYyxwLDApKSk7dC5iKFwiXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdDxkaXYgY2xhc3M9XFxcIndwLXRvZG8tdGFzay1kZWxldGUtY29udGFpbmVyXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHQ8YnV0dG9uIGNsYXNzPVxcXCJ3cC10b2RvLXRhc2stZGVsZXRlXFxcIj5YPC9idXR0b24+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJ3cC10b2RvLXRhc2stZGV0YWlscy1jb250YWluZXJcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdDxidXR0b24gY2xhc3M9XFxcIndwLXRvZG8tdGFzay1kZXRhaWxzXFxcIj49PjwvYnV0dG9uPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDwvbGk+XCIpO3QuYihcIlxcblwiICsgaSk7fSk7Yy5wb3AoKTt9dC5iKFwiPC91bD5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjx1bCBpZD1cXFwid3AtdG9kby1saXN0XFxcIiBjbGFzcz1cXFwid3AtdG9kby1saXN0XFxcIj5cXG5cXHR7eyN0b2Rvc319XFxuXFx0PGxpIGlkPVxcXCJ3cC10b2RvLWl0ZW0te3tpZH19XFxcIiBkYXRhLWlkPVxcXCJ7e2lkfX1cXFwiIGNsYXNzPVxcXCJ3cC10b2RvLWxpc3QtaXRlbVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwid3AtdG9kby1jb21wbGV0ZS1jb250YWluZXJcXFwiPlxcblxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcIndwLXRvZG8tY29tcGxldGVcXFwiIG5hbWU9XFxcIndwLXRvZG8tY29tcGxldGVcXFwiIHt7I2NvbXBsZXRlZH19IGNoZWNrZWQge3svY29tcGxldGVkfX0+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwid3AtdG9kby10b2RvLWRyYWctY29udGFpbmVyXFxcIj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJ3cC10b2RvLXRhc2stZHJhZ1xcXCI+RDwvYnV0dG9uPlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIndwLXRvZG8tdGFzay1pbnB1dC1jb250YWluZXJcXFwiPlxcblxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwid3AtdG9kby10YXNrLWlucHV0XFxcIiBuYW1lPVxcXCJ3cC10b2RvLXRhc2staW5wdXRcXFwiIHZhbHVlPVxcXCJ7e3RpdGxlfX1cXFwiPlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIndwLXRvZG8tdGFzay1kZWxldGUtY29udGFpbmVyXFxcIj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJ3cC10b2RvLXRhc2stZGVsZXRlXFxcIj5YPC9idXR0b24+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwid3AtdG9kby10YXNrLWRldGFpbHMtY29udGFpbmVyXFxcIj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJ3cC10b2RvLXRhc2stZGV0YWlsc1xcXCI+PT48L2J1dHRvbj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2xpPlxcblxcdHt7L3RvZG9zfX1cXG48L3VsPlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90b2RvVGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==