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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mesh */ \"./src/Mesh.ts\");\n/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangle */ \"./src/Triangle.ts\");\n/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector4 */ \"./src/Vector4.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Cube = /*#__PURE__*/function (_Mesh) {\n  _inherits(Cube, _Mesh);\n\n  var _super = _createSuper(Cube);\n\n  function Cube() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Cube);\n\n    var _options$size = options.size,\n        size = _options$size === void 0 ? 1.0 : _options$size;\n    var triangles = [// SOUTH\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, 0.0)]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, 0.0)]\n    }), // EAST\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, size)]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, size)]\n    }), // NORTH\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, size)]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, size)]\n    }), // WEST\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, 0.0)]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, 0.0)]\n    }), // TOP\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, size)]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, size, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, size, 0.0)]\n    }), // BOTTOM\n    new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, 0.0)]\n    }), new _Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      vertices: [new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, size), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.0, 0.0, 0.0), new _Vector4__WEBPACK_IMPORTED_MODULE_2__[\"default\"](size, 0.0, 0.0)]\n    })];\n    return _super.call(this, {\n      triangles: triangles\n    });\n  }\n\n  return Cube;\n}(_Mesh__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\n\n//# sourceURL=webpack:///./src/Cube.ts?");

/***/ }),

/***/ "./src/Matrix.ts":
/*!***********************!*\
  !*** ./src/Matrix.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector4 */ \"./src/Vector4.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Matrix = /*#__PURE__*/function () {\n  function Matrix() {\n    _classCallCheck(this, Matrix);\n\n    _defineProperty(this, \"values\", []);\n  }\n\n  _createClass(Matrix, [{\n    key: \"multiplyVector\",\n    value: function multiplyVector(vector) {\n      var result = new _Vector4__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      result.x = vector.x * this.values[0][0] + vector.y * this.values[1][0] + vector.z * this.values[2][0] + vector.w * this.values[3][0];\n      result.y = vector.x * this.values[0][1] + vector.y * this.values[1][1] + vector.z * this.values[2][1] + vector.w * this.values[3][1];\n      result.z = vector.x * this.values[0][2] + vector.y * this.values[1][2] + vector.z * this.values[2][2] + vector.w * this.values[3][2];\n      result.w = vector.x * this.values[0][3] + vector.y * this.values[1][3] + vector.z * this.values[2][3] + vector.w * this.values[3][3];\n      return result;\n    } //\n    // mat4x4 Matrix_MakeIdentity()\n    // {\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = 1.0f;\n    // \tmatrix.m[1][1] = 1.0f;\n    // \tmatrix.m[2][2] = 1.0f;\n    // \tmatrix.m[3][3] = 1.0f;\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_MakeRotationX(float fAngleRad)\n    // {\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = 1.0f;\n    // \tmatrix.m[1][1] = cosf(fAngleRad);\n    // \tmatrix.m[1][2] = sinf(fAngleRad);\n    // \tmatrix.m[2][1] = -sinf(fAngleRad);\n    // \tmatrix.m[2][2] = cosf(fAngleRad);\n    // \tmatrix.m[3][3] = 1.0f;\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_MakeRotationY(float fAngleRad)\n    // {\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = cosf(fAngleRad);\n    // \tmatrix.m[0][2] = sinf(fAngleRad);\n    // \tmatrix.m[2][0] = -sinf(fAngleRad);\n    // \tmatrix.m[1][1] = 1.0f;\n    // \tmatrix.m[2][2] = cosf(fAngleRad);\n    // \tmatrix.m[3][3] = 1.0f;\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_MakeRotationZ(float fAngleRad)\n    // {\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = cosf(fAngleRad);\n    // \tmatrix.m[0][1] = sinf(fAngleRad);\n    // \tmatrix.m[1][0] = -sinf(fAngleRad);\n    // \tmatrix.m[1][1] = cosf(fAngleRad);\n    // \tmatrix.m[2][2] = 1.0f;\n    // \tmatrix.m[3][3] = 1.0f;\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_MakeTranslation(float x, float y, float z)\n    // {\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = 1.0f;\n    // \tmatrix.m[1][1] = 1.0f;\n    // \tmatrix.m[2][2] = 1.0f;\n    // \tmatrix.m[3][3] = 1.0f;\n    // \tmatrix.m[3][0] = x;\n    // \tmatrix.m[3][1] = y;\n    // \tmatrix.m[3][2] = z;\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_MakeProjection(float fFovDegrees, float fAspectRatio, float fNear, float fFar)\n    // {\n    // \tfloat fFovRad = 1.0f / tanf(fFovDegrees * 0.5f / 180.0f * 3.14159f);\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = fAspectRatio * fFovRad;\n    // \tmatrix.m[1][1] = fFovRad;\n    // \tmatrix.m[2][2] = fFar / (fFar - fNear);\n    // \tmatrix.m[3][2] = (-fFar * fNear) / (fFar - fNear);\n    // \tmatrix.m[2][3] = 1.0f;\n    // \tmatrix.m[3][3] = 0.0f;\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_MultiplyMatrix(mat4x4 &m1, mat4x4 &m2)\n    // {\n    // \tmat4x4 matrix;\n    // \tfor (int c = 0; c < 4; c++)\n    // \t\tfor (int r = 0; r < 4; r++)\n    // \t\t\tmatrix.m[r][c] = m1.m[r][0] * m2.m[0][c] + m1.m[r][1] * m2.m[1][c] + m1.m[r][2] * m2.m[2][c] + m1.m[r][3] * m2.m[3][c];\n    // \treturn matrix;\n    // }\n    //\n    // mat4x4 Matrix_PointAt(vec3d &pos, vec3d &target, vec3d &up)\n    // {\n    // \t// Calculate new forward direction\n    // \tvec3d newForward = Vector_Sub(target, pos);\n    // \tnewForward = Vector_Normalise(newForward);\n    //\n    // \t// Calculate new Up direction\n    // \tvec3d a = Vector_Mul(newForward, Vector_DotProduct(up, newForward));\n    // \tvec3d newUp = Vector_Sub(up, a);\n    // \tnewUp = Vector_Normalise(newUp);\n    //\n    // \t// New Right direction is easy, its just cross product\n    // \tvec3d newRight = Vector_CrossProduct(newUp, newForward);\n    //\n    // \t// Construct Dimensioning and Translation Matrix\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = newRight.x;\tmatrix.m[0][1] = newRight.y;\tmatrix.m[0][2] = newRight.z;\tmatrix.m[0][3] = 0.0f;\n    // \tmatrix.m[1][0] = newUp.x;\t\tmatrix.m[1][1] = newUp.y;\t\tmatrix.m[1][2] = newUp.z;\t\tmatrix.m[1][3] = 0.0f;\n    // \tmatrix.m[2][0] = newForward.x;\tmatrix.m[2][1] = newForward.y;\tmatrix.m[2][2] = newForward.z;\tmatrix.m[2][3] = 0.0f;\n    // \tmatrix.m[3][0] = pos.x;\t\t\tmatrix.m[3][1] = pos.y;\t\t\tmatrix.m[3][2] = pos.z;\t\t\tmatrix.m[3][3] = 1.0f;\n    // \treturn matrix;\n    //\n    // }\n    //\n    // mat4x4 Matrix_QuickInverse(mat4x4 &m) // Only for Rotation/Translation Matrices\n    // {\n    // \tmat4x4 matrix;\n    // \tmatrix.m[0][0] = m.m[0][0]; matrix.m[0][1] = m.m[1][0]; matrix.m[0][2] = m.m[2][0]; matrix.m[0][3] = 0.0f;\n    // \tmatrix.m[1][0] = m.m[0][1]; matrix.m[1][1] = m.m[1][1]; matrix.m[1][2] = m.m[2][1]; matrix.m[1][3] = 0.0f;\n    // \tmatrix.m[2][0] = m.m[0][2]; matrix.m[2][1] = m.m[1][2]; matrix.m[2][2] = m.m[2][2]; matrix.m[2][3] = 0.0f;\n    // \tmatrix.m[3][0] = -(m.m[3][0] * matrix.m[0][0] + m.m[3][1] * matrix.m[1][0] + m.m[3][2] * matrix.m[2][0]);\n    // \tmatrix.m[3][1] = -(m.m[3][0] * matrix.m[0][1] + m.m[3][1] * matrix.m[1][1] + m.m[3][2] * matrix.m[2][1]);\n    // \tmatrix.m[3][2] = -(m.m[3][0] * matrix.m[0][2] + m.m[3][1] * matrix.m[1][2] + m.m[3][2] * matrix.m[2][2]);\n    // \tmatrix.m[3][3] = 1.0f;\n    // \treturn matrix;\n    // }\n    //\n    // vec3d Vector_Add(vec3d &v1, vec3d &v2)\n    // {\n    // \treturn { v1.x + v2.x, v1.y + v2.y, v1.z + v2.z };\n    // }\n    //\n    // vec3d Vector_Sub(vec3d &v1, vec3d &v2)\n    // {\n    // \treturn { v1.x - v2.x, v1.y - v2.y, v1.z - v2.z };\n    // }\n    //\n    // vec3d Vector_Mul(vec3d &v1, float k)\n    // {\n    // \treturn { v1.x * k, v1.y * k, v1.z * k };\n    // }\n    //\n    // vec3d Vector_Div(vec3d &v1, float k)\n    // {\n    // \treturn { v1.x / k, v1.y / k, v1.z / k };\n    // }\n    //\n    // float Vector_DotProduct(vec3d &v1, vec3d &v2)\n    // {\n    // \treturn v1.x*v2.x + v1.y*v2.y + v1.z * v2.z;\n    // }\n    //\n    // float Vector_Length(vec3d &v)\n    // {\n    // \treturn sqrtf(Vector_DotProduct(v, v));\n    // }\n    //\n    // vec3d Vector_Normalise(vec3d &v)\n    // {\n    // \tfloat l = Vector_Length(v);\n    // \treturn { v.x / l, v.y / l, v.z / l };\n    // }\n    //\n    // vec3d Vector_CrossProduct(vec3d &v1, vec3d &v2)\n    // {\n    // \tvec3d v;\n    // \tv.x = v1.y * v2.z - v1.z * v2.y;\n    // \tv.y = v1.z * v2.x - v1.x * v2.z;\n    // \tv.z = v1.x * v2.y - v1.y * v2.x;\n    // \treturn v;\n    // }\n\n  }]);\n\n  return Matrix;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Matrix);\n\n//# sourceURL=webpack:///./src/Matrix.ts?");

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

/***/ "./src/ProjectionMatrix.ts":
/*!*********************************!*\
  !*** ./src/ProjectionMatrix.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ \"./src/Matrix.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ProjectionMatrix = /*#__PURE__*/function (_Matrix) {\n  _inherits(ProjectionMatrix, _Matrix);\n\n  var _super = _createSuper(ProjectionMatrix);\n\n  function ProjectionMatrix(options) {\n    var _this;\n\n    _classCallCheck(this, ProjectionMatrix);\n\n    _this = _super.call(this, options);\n    var width = options.width,\n        height = options.height,\n        _options$fieldOfView = options.fieldOfView,\n        fieldOfView = _options$fieldOfView === void 0 ? 90.0 : _options$fieldOfView,\n        _options$near = options.near,\n        near = _options$near === void 0 ? 0.1 : _options$near,\n        _options$far = options.far,\n        far = _options$far === void 0 ? 1000.0 : _options$far;\n    _this.width = width;\n    _this.height = height;\n    _this.fieldOfView = fieldOfView;\n    _this.near = near;\n    _this.far = far; // Projection Matrix\n\n    _this.values = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];\n\n    _this.update();\n\n    return _this;\n  }\n\n  _createClass(ProjectionMatrix, [{\n    key: \"update\",\n    value: function update() {\n      var aspectRatio = this.height / this.width,\n          fovRad = 1.0 / Math.tan(this.fieldOfView * 0.5 / 180.0 * 3.14159);\n      this.values[0][0] = aspectRatio * fovRad;\n      this.values[1][1] = fovRad;\n      this.values[2][2] = this.far / (this.far - this.near);\n      this.values[3][2] = -this.far * this.near / (this.far - this.near);\n      this.values[2][3] = 1.0;\n      this.values[3][3] = 0.0;\n    }\n  }]);\n\n  return ProjectionMatrix;\n}(_Matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectionMatrix);\n\n//# sourceURL=webpack:///./src/ProjectionMatrix.ts?");

/***/ }),

/***/ "./src/Screen.ts":
/*!***********************!*\
  !*** ./src/Screen.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectionMatrix */ \"./src/ProjectionMatrix.ts\");\n/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector4 */ \"./src/Vector4.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Screen = /*#__PURE__*/function () {\n  function Screen(options) {\n    _classCallCheck(this, Screen);\n\n    var selector = options.selector,\n        _options$wireframe = options.wireframe,\n        wireframe = _options$wireframe === void 0 ? {} : _options$wireframe;\n    this.canvasDOM = document.querySelector(selector);\n    this.canvas = this.canvasDOM.getContext(\"2d\");\n    this.rect = this.canvasDOM.getBoundingClientRect();\n    this.meshes = [];\n    this.meshIndex = -1;\n    this.wireframe = wireframe;\n    this.projectionMatrix = new _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: this.width,\n      height: this.height\n    });\n    this.canvasDOM.width = this.width;\n    this.canvasDOM.height = this.height;\n    this.camera = new _Vector4__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(Screen, [{\n    key: \"fill\",\n    value: function fill(color) {\n      this.canvas.beginPath();\n      this.canvas.rect(0, 0, this.width, this.height);\n      this.canvas.fillStyle = color;\n      this.canvas.fill();\n    }\n  }, {\n    key: \"add\",\n    value: function add(mesh) {\n      if (!mesh.__id || !this.meshes.find(function (m) {\n        return m.__id == mesh.__id;\n      })) {\n        mesh.__id = ++this.meshIndex;\n        this.meshes.push(mesh);\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(mesh) {\n      var meshIndex = this.meshes.findIndex(function (m) {\n        return m.__id == mesh.__id;\n      });\n\n      if (meshIndex) {\n        this.meshes.splice(meshIndex, 1);\n      }\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this.rect.width;\n    }\n  }, {\n    key: \"height\",\n    get: function get() {\n      return this.rect.height;\n    }\n  }]);\n\n  return Screen;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Screen);\n\n//# sourceURL=webpack:///./src/Screen.ts?");

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

/***/ "./src/Vector4.ts":
/*!************************!*\
  !*** ./src/Vector4.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Vector4 = /*#__PURE__*/function () {\n  function Vector4(x, y, z, w) {\n    _classCallCheck(this, Vector4);\n\n    _defineProperty(this, \"values\", [0, 0, 0, 1]);\n\n    this.set(x, y, z, w);\n  }\n\n  _createClass(Vector4, [{\n    key: \"set\",\n    value: function set() {\n      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n      this.values[0] = x;\n      this.values[1] = y;\n      this.values[2] = z;\n      this.values[3] = w;\n    }\n  }, {\n    key: \"valueOf\",\n    value: function valueOf() {\n      return this.values;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this.values[0];\n    },\n    set: function set(value) {\n      this.values[0] = value;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.values[1];\n    },\n    set: function set(value) {\n      this.values[1] = value;\n    }\n  }, {\n    key: \"z\",\n    get: function get() {\n      return this.values[2];\n    },\n    set: function set(value) {\n      this.values[2] = value;\n    }\n  }, {\n    key: \"w\",\n    get: function get() {\n      return this.values[3];\n    },\n    set: function set(value) {\n      this.values[3] = value;\n    }\n  }]);\n\n  return Vector4;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector4);\n\n//# sourceURL=webpack:///./src/Vector4.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Vector4, Matrix, Triangle, Mesh, Cube, ProjectionMatrix, Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector4 */ \"./src/Vector4.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vector4\", function() { return _Vector4__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix */ \"./src/Matrix.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return _Matrix__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Triangle */ \"./src/Triangle.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Triangle\", function() { return _Triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mesh */ \"./src/Mesh.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mesh\", function() { return _Mesh__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Cube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cube */ \"./src/Cube.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cube\", function() { return _Cube__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectionMatrix */ \"./src/ProjectionMatrix.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ProjectionMatrix\", function() { return _ProjectionMatrix__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Screen */ \"./src/Screen.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Screen\", function() { return _Screen__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });