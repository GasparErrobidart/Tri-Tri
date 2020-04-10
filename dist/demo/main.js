/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cube.ts":
/*!*********************!*\
  !*** ./src/Cube.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mesh */ \"./src/Mesh.ts\");\n/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangle */ \"./src/Triangle.ts\");\n/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vertex */ \"./src/Vertex.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Cube = /*#__PURE__*/function (_Mesh) {\n  _inherits(Cube, _Mesh);\n\n  var _super = _createSuper(Cube);\n\n  function Cube() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Cube);\n\n    var _options$size = options.size,\n        size = _options$size === void 0 ? 1.0 : _options$size;\n    var triangles = [// SOUTH\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: 0.0\n      })]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: 0.0\n      })]\n    }), // EAST\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: size\n      })]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: size\n      })]\n    }), // NORTH\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: size\n      })]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: size\n      })]\n    }), // WEST\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: 0.0\n      })]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: 0.0\n      })]\n    }), // TOP\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: size\n      })]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: size,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: size,\n        z: 0.0\n      })]\n    }), // BOTTOM\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: 0.0\n      })]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: size\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: 0.0,\n        y: 0.0,\n        z: 0.0\n      }), new _Vertex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: size,\n        y: 0.0,\n        z: 0.0\n      })]\n    })];\n    return _super.call(this, {\n      triangles: triangles\n    });\n  }\n\n  return Cube;\n}(_Mesh__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\n\n//# sourceURL=webpack:///./src/Cube.ts?");

/***/ }),

/***/ "./src/Mesh.ts":
/*!*********************!*\
  !*** ./src/Mesh.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Mesh = function Mesh(options) {\n  _classCallCheck(this, Mesh);\n\n  _defineProperty(this, \"__id\", null);\n\n  var triangles = options.triangles;\n\n  if (!triangles || !Array.isArray(triangles)) {\n    throw new Error(\"Mesh has no triangles\");\n  }\n\n  this.triangles = triangles;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mesh);\n\n//# sourceURL=webpack:///./src/Mesh.ts?");

/***/ }),

/***/ "./src/Point3D.ts":
/*!************************!*\
  !*** ./src/Point3D.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Point3D = /*#__PURE__*/function () {\n  function Point3D() {\n    var cordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Point3D);\n\n    _defineProperty(this, \"x\", void 0);\n\n    _defineProperty(this, \"y\", void 0);\n\n    _defineProperty(this, \"z\", void 0);\n\n    if (Array.isArray(cordinates)) {\n      var _cordinates = _slicedToArray(cordinates, 3),\n          _cordinates$ = _cordinates[0],\n          x = _cordinates$ === void 0 ? 0 : _cordinates$,\n          _cordinates$2 = _cordinates[1],\n          y = _cordinates$2 === void 0 ? 0 : _cordinates$2,\n          _cordinates$3 = _cordinates[2],\n          z = _cordinates$3 === void 0 ? 0 : _cordinates$3;\n\n      this.x = x;\n      this.y = y;\n      this.z = z;\n    } else {\n      var _cordinates$x = cordinates.x,\n          _x = _cordinates$x === void 0 ? 0 : _cordinates$x,\n          _cordinates$y = cordinates.y,\n          _y = _cordinates$y === void 0 ? 0 : _cordinates$y,\n          _cordinates$z = cordinates.z,\n          _z = _cordinates$z === void 0 ? 0 : _cordinates$z;\n\n      this.x = _x;\n      this.y = _y;\n      this.z = _z;\n    }\n  }\n\n  _createClass(Point3D, [{\n    key: \"matrix\",\n    get: function get() {\n      return [this.x, this.y, this.z];\n    }\n  }]);\n\n  return Point3D;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Point3D);\n\n//# sourceURL=webpack:///./src/Point3D.ts?");

/***/ }),

/***/ "./src/ProjectionMatrix.ts":
/*!*********************************!*\
  !*** ./src/ProjectionMatrix.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ProjectionMatrix = /*#__PURE__*/function () {\n  function ProjectionMatrix(options) {\n    _classCallCheck(this, ProjectionMatrix);\n\n    var width = options.width,\n        height = options.height,\n        _options$fieldOfView = options.fieldOfView,\n        fieldOfView = _options$fieldOfView === void 0 ? 90.0 : _options$fieldOfView,\n        _options$near = options.near,\n        near = _options$near === void 0 ? 0.1 : _options$near,\n        _options$far = options.far,\n        far = _options$far === void 0 ? 1000.0 : _options$far;\n    this.width = width;\n    this.height = height;\n    this.fieldOfView = fieldOfView;\n    this.near = near;\n    this.far = far; // Projection Matrix\n\n    this.matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];\n    this.update();\n  }\n\n  _createClass(ProjectionMatrix, [{\n    key: \"update\",\n    value: function update() {\n      var aspectRatio = this.height / this.width,\n          fovRad = 1.0 / Math.tan(this.fieldOfView * 0.5 / 180.0 * 3.14159);\n      this.matrix[0][0] = aspectRatio * fovRad;\n      this.matrix[1][1] = fovRad;\n      this.matrix[2][2] = this.far / (this.far - this.near);\n      this.matrix[3][2] = -this.far * this.near / (this.far - this.near);\n      this.matrix[2][3] = 1.0;\n      this.matrix[3][3] = 0.0;\n    }\n  }]);\n\n  return ProjectionMatrix;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectionMatrix);\n\n//# sourceURL=webpack:///./src/ProjectionMatrix.ts?");

/***/ }),

/***/ "./src/Screen.ts":
/*!***********************!*\
  !*** ./src/Screen.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectionMatrix */ \"./src/ProjectionMatrix.ts\");\n/* harmony import */ var _Point3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point3D */ \"./src/Point3D.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Screen = /*#__PURE__*/function () {\n  function Screen(options) {\n    _classCallCheck(this, Screen);\n\n    var selector = options.selector,\n        _options$wireframe = options.wireframe,\n        wireframe = _options$wireframe === void 0 ? {} : _options$wireframe;\n    this.canvasDOM = document.querySelector(selector);\n    this.canvas = this.canvasDOM.getContext(\"2d\");\n    this.rect = this.canvasDOM.getBoundingClientRect();\n    this.meshes = [];\n    this.meshIndex = -1;\n    this.wireframe = wireframe;\n    this.projectionMatrix = new _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: this.width,\n      height: this.height\n    });\n    this.canvasDOM.width = this.width;\n    this.canvasDOM.height = this.height;\n    this.camera = new _Point3D__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(Screen, [{\n    key: \"fill\",\n    value: function fill(color) {\n      this.canvas.beginPath();\n      this.canvas.rect(0, 0, this.width, this.height);\n      this.canvas.fillStyle = color;\n      this.canvas.fill();\n    }\n  }, {\n    key: \"add\",\n    value: function add(mesh) {\n      if (!mesh.__id || !this.meshes.find(function (m) {\n        return m.__id == mesh.__id;\n      })) {\n        mesh.__id = ++this.meshIndex;\n        this.meshes.push(mesh);\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(mesh) {\n      var meshIndex = this.meshes.findIndex(function (m) {\n        return m.__id == mesh.__id;\n      });\n\n      if (meshIndex) {\n        this.meshes.splice(meshIndex, 1);\n      }\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this.rect.width;\n    }\n  }, {\n    key: \"height\",\n    get: function get() {\n      return this.rect.height;\n    }\n  }]);\n\n  return Screen;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Screen);\n\n//# sourceURL=webpack:///./src/Screen.ts?");

/***/ }),

/***/ "./src/Triangle.ts":
/*!*************************!*\
  !*** ./src/Triangle.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Triangle = function Triangle(options) {\n  _classCallCheck(this, Triangle);\n\n  _defineProperty(this, \"vertices\", void 0);\n\n  var vertices = options.vertices;\n\n  if (!vertices || !Array.isArray(vertices) || vertices.length != 3) {\n    throw new Error(\"Triangle must have 3 vertices\");\n  }\n\n  this.vertices = vertices;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Triangle);\n\n//# sourceURL=webpack:///./src/Triangle.ts?");

/***/ }),

/***/ "./src/Vertex.ts":
/*!***********************!*\
  !*** ./src/Vertex.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point3D */ \"./src/Point3D.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Vertex = /*#__PURE__*/function (_Point3D) {\n  _inherits(Vertex, _Point3D);\n\n  var _super = _createSuper(Vertex);\n\n  function Vertex() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Vertex);\n\n    return _super.call(this, options);\n  }\n\n  return Vertex;\n}(_Point3D__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vertex);\n\n//# sourceURL=webpack:///./src/Vertex.ts?");

/***/ }),

/***/ "./src/demo/main.ts":
/*!**************************!*\
  !*** ./src/demo/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n/* harmony import */ var _helpers_MultiplyMatrixVector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/MultiplyMatrixVector */ \"./src/helpers/MultiplyMatrixVector.ts\");\n\n\nvar cube = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Cube\"]({\n  size: 1.0\n});\n\nfunction loadNewObject(data) {\n  var lines = data.split(\"\\n\");\n  var vertices = lines.filter(function (l) {\n    return /^v/i.test(l);\n  }).map(function (l) {\n    return l.replace(/^v\\s/i, '').split(' ');\n  });\n  var triangles = lines.filter(function (l) {\n    return /^f/i.test(l);\n  }).map(function (l) {\n    return l.replace(/^f\\s/i, '').split(' ');\n  });\n  triangles = triangles.map(function (triangle) {\n    var v = triangle.map(function (i) {\n      return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Vertex\"](vertices[i - 1]);\n    });\n    return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Triangle\"]({\n      vertices: v\n    });\n  });\n  cube = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]({\n    triangles: triangles\n  });\n}\n\nfunction handleFileSelect(evt) {\n  var file = evt.target.files[0]; // FileList object\n\n  var reader = new FileReader();\n\n  reader.onload = function (evt) {\n    var data = evt.target.result;\n    loadNewObject(data);\n  };\n\n  reader.readAsBinaryString(file);\n}\n\ndocument.getElementById('model-file').addEventListener('change', handleFileSelect, false);\n\n(function (window) {\n  window.addEventListener('load', function () {\n    // const c    = document.getElementById(\"screen\")\n    // const ctx  = c.getContext(\"2d\")\n    // const rect = c.getBoundingClientRect()\n    // c.width    = rect.width\n    // c.height   = rect.height\n    var globalLight = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Point3D\"]({\n      z: -1.0\n    });\n    var globalLightLength = Math.sqrt(Math.pow(globalLight.x, 2) + Math.pow(globalLight.y, 2) + Math.pow(globalLight.z, 2));\n    globalLight.x /= globalLightLength;\n    globalLight.y /= globalLightLength;\n    globalLight.z /= globalLightLength;\n    var screen = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Screen\"]({\n      selector: \"#screen\"\n    });\n    console.log(screen);\n    var previous = null;\n    var theta = 0;\n    screen.canvas.strokeStyle = \"blue\";\n    screen.add(cube);\n\n    function rotateCube(timestamp) {\n      screen.fill(\"black\");\n      if (!previous) previous = timestamp;\n      var elapsedTime = timestamp - previous;\n      previous = timestamp; // Set up rotation matrices\n\n      var matRotZ = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],\n          matRotX = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];\n      theta += 0.001 * elapsedTime; // Rotation Z\n\n      matRotZ[0][0] = Math.cos(theta);\n      matRotZ[0][1] = Math.sin(theta);\n      matRotZ[1][0] = -Math.sin(theta);\n      matRotZ[1][1] = Math.cos(theta);\n      matRotZ[2][2] = 1;\n      matRotZ[3][3] = 1; // Rotation X\n\n      matRotX[0][0] = 1;\n      matRotX[1][1] = Math.cos(theta * 0.5);\n      matRotX[1][2] = Math.sin(theta * 0.5);\n      matRotX[2][1] = -Math.sin(theta * 0.5);\n      matRotX[2][2] = Math.cos(theta * 0.5);\n      matRotX[3][3] = 1;\n      var trianglesToRaster = cube.triangles.map(function (triangle) {\n        var projectedTriangle, translatedTriangle, zRotatedTriangle, zxRotatedTriangle;\n        zRotatedTriangle = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Triangle\"]({\n          vertices: triangle.vertices.map(function (vertex) {\n            // Rotate in Z-Axis\n            return Object(_helpers_MultiplyMatrixVector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vertex, matRotZ);\n          })\n        });\n        zxRotatedTriangle = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Triangle\"]({\n          vertices: zRotatedTriangle.vertices.map(function (vertex) {\n            // Rotate in Z-Axis\n            return Object(_helpers_MultiplyMatrixVector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vertex, matRotX);\n          })\n        });\n        translatedTriangle = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Triangle\"]({\n          vertices: zxRotatedTriangle.vertices.map(function (vertex) {\n            var translatedVertex = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Vertex\"]();\n            translatedVertex.x = vertex.x;\n            translatedVertex.y = vertex.y;\n            translatedVertex.z = vertex.z + 8;\n            return translatedVertex;\n          })\n        });\n        var normal = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Point3D\"](),\n            line1 = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Point3D\"](),\n            line2 = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Point3D\"]();\n        line1.x = translatedTriangle.vertices[1].x - translatedTriangle.vertices[0].x;\n        line1.y = translatedTriangle.vertices[1].y - translatedTriangle.vertices[0].y;\n        line1.z = translatedTriangle.vertices[1].z - translatedTriangle.vertices[0].z;\n        line2.x = translatedTriangle.vertices[2].x - translatedTriangle.vertices[0].x;\n        line2.y = translatedTriangle.vertices[2].y - translatedTriangle.vertices[0].y;\n        line2.z = translatedTriangle.vertices[2].z - translatedTriangle.vertices[0].z;\n        normal.x = line1.y * line2.z - line1.z * line2.y;\n        normal.y = line1.z * line2.x - line1.x * line2.z;\n        normal.z = line1.x * line2.y - line1.y * line2.x;\n        var length = Math.sqrt(Math.pow(normal.x, 2) + Math.pow(normal.y, 2) + Math.pow(normal.z, 2));\n        normal.x /= length;\n        normal.y /= length;\n        normal.z /= length;\n\n        if (normal.x * (translatedTriangle.vertices[0].x - screen.camera.x) + normal.y * (translatedTriangle.vertices[0].y - screen.camera.y) + normal.z * (translatedTriangle.vertices[0].z - screen.camera.z) < 0) {\n          var luminance = normal.x * globalLight.x + normal.y * globalLight.y + normal.z * globalLight.z;\n          var color = parseInt(255 * luminance);\n          projectedTriangle = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Triangle\"]({\n            vertices: translatedTriangle.vertices.map(function (vertex) {\n              return Object(_helpers_MultiplyMatrixVector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vertex, screen.projectionMatrix.matrix);\n            })\n          });\n          projectedTriangle.color = \"rgba(\".concat(color, \",\").concat(color, \",\").concat(color, \",1.0)\"); // Scale into view\n\n          projectedTriangle.vertices[0].x += 1.0;\n          projectedTriangle.vertices[0].y += 1.0;\n          projectedTriangle.vertices[1].x += 1.0;\n          projectedTriangle.vertices[1].y += 1.0;\n          projectedTriangle.vertices[2].x += 1.0;\n          projectedTriangle.vertices[2].y += 1.0;\n          projectedTriangle.vertices[0].x *= 0.5 * screen.width;\n          projectedTriangle.vertices[0].y *= 0.5 * screen.height;\n          projectedTriangle.vertices[1].x *= 0.5 * screen.width;\n          projectedTriangle.vertices[1].y *= 0.5 * screen.height;\n          projectedTriangle.vertices[2].x *= 0.5 * screen.width;\n          projectedTriangle.vertices[2].y *= 0.5 * screen.height;\n          return projectedTriangle;\n        }\n\n        return null;\n      });\n      trianglesToRaster.filter(function (t) {\n        return t;\n      }).sort(function (t1, t2) {\n        var z1 = (t1.vertices[0].z + t1.vertices[1].z + t1.vertices[2].z) / 3.0;\n        var z2 = (t2.vertices[0].z + t2.vertices[1].z + t2.vertices[2].z) / 3.0;\n        return z2 - z1;\n      }).forEach(function (projectedTriangle) {\n        screen.canvas.beginPath();\n        screen.canvas.moveTo(projectedTriangle.vertices[0].x, projectedTriangle.vertices[0].y);\n        screen.canvas.fillStyle = projectedTriangle.color;\n        screen.canvas.strokeStyle = projectedTriangle.color;\n        screen.canvas.lineWidth = 1.5;\n        [1, 2, 0].forEach(function (i) {\n          if (i == 0) {\n            screen.canvas.fill();\n            screen.canvas.stroke();\n          } else {\n            screen.canvas.lineTo(projectedTriangle.vertices[i].x, projectedTriangle.vertices[i].y);\n          }\n        }); // screen.canvas.stroke();\n      });\n      window.requestAnimationFrame(rotateCube);\n    }\n\n    window.requestAnimationFrame(rotateCube);\n  });\n})(window);\n\n//# sourceURL=webpack:///./src/demo/main.ts?");

/***/ }),

/***/ "./src/helpers/MultiplyMatrixVector.ts":
/*!*********************************************!*\
  !*** ./src/helpers/MultiplyMatrixVector.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MultiplyMatrixVector; });\n/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vertex */ \"./src/Vertex.ts\");\n\nfunction MultiplyMatrixVector(inputVertex, matrix) {\n  var output = new _Vertex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  output.x = inputVertex.x * matrix[0][0] + inputVertex.y * matrix[1][0] + inputVertex.z * matrix[2][0] + matrix[3][0];\n  output.y = inputVertex.x * matrix[0][1] + inputVertex.y * matrix[1][1] + inputVertex.z * matrix[2][1] + matrix[3][1];\n  output.z = inputVertex.x * matrix[0][2] + inputVertex.y * matrix[1][2] + inputVertex.z * matrix[2][2] + matrix[3][2];\n  var w = inputVertex.x * matrix[0][3] + inputVertex.y * matrix[1][3] + inputVertex.z * matrix[2][3] + matrix[3][3];\n\n  if (w != 0) {\n    output.x /= w;\n    output.y /= w;\n    output.z /= w;\n  }\n\n  return output;\n}\n\n//# sourceURL=webpack:///./src/helpers/MultiplyMatrixVector.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Point3D, Vertex, Triangle, Mesh, Cube, ProjectionMatrix, Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point3D */ \"./src/Point3D.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Point3D\", function() { return _Point3D__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vertex */ \"./src/Vertex.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vertex\", function() { return _Vertex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Triangle */ \"./src/Triangle.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Triangle\", function() { return _Triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mesh */ \"./src/Mesh.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mesh\", function() { return _Mesh__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Cube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cube */ \"./src/Cube.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cube\", function() { return _Cube__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectionMatrix */ \"./src/ProjectionMatrix.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ProjectionMatrix\", function() { return _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Screen */ \"./src/Screen.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Screen\", function() { return _Screen__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });