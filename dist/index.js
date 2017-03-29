module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=__webpack_require__(1);
var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _StaticContainer=__webpack_require__(4);var _StaticContainer2=_interopRequireDefault(_StaticContainer);
var _EventEmitter=__webpack_require__(5);var _EventEmitter2=_interopRequireDefault(_EventEmitter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
position:'relative'}});



var emitter=new _EventEmitter2.default();


var originRegister=_reactNative.AppRegistry.registerComponent;

_reactNative.AppRegistry.registerComponent=function(appKey,getAppComponent){
var siblings=new Map();
var updates=new Set();

return originRegister(appKey,function(){var _class,_temp;
var OriginAppComponent=getAppComponent();

return _temp=_class=function(_Component){_inherits(_class,_Component);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}_createClass(_class,[{key:'componentWillMount',value:function componentWillMount()


{
this._update=this._update.bind(this);
emitter.addListener('siblings.update',this._update);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
emitter.removeListener('siblings.update',this._update);
siblings.clear();
updates.clear();
}},{key:'_update',value:function _update(

id,element,callback){
if(siblings.has(id)&&!element){
siblings.delete(id);
}else{
siblings.set(id,element);
}
updates.add(id);
this.forceUpdate(callback);
}},{key:'render',value:function render()

{
var elements=[];
siblings.forEach(function(element,id){
elements.push(
_react2.default.createElement(_StaticContainer2.default,{
key:'root-sibling-'+id,
shouldUpdate:updates.has(id)},

element));


});
updates.clear();

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_StaticContainer2.default,{shouldUpdate:false},
_react2.default.createElement(OriginAppComponent,this.props)),

elements));


}}]);return _class;}(_react.Component),_class.displayName='Root('+appKey+')',_temp;

});
};exports.default=

emitter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);
var _AppRegistryInjection=__webpack_require__(2);var _AppRegistryInjection2=_interopRequireDefault(_AppRegistryInjection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var styles=_reactNative.StyleSheet.create({
offStream:{
position:'absolute'}});


var uid=0;var _class=function(){


function _class(element,callback){_classCallCheck(this,_class);
Object.defineProperty(this,'_id',{
enumerable:false,
configurable:false,
writable:false,
value:uid++});


this.update(element,callback);

this._id=null;
}_createClass(_class,[{key:'_offStreamElement',value:function _offStreamElement(

element){
return(0,_react.cloneElement)(element,{
style:[element.props.style,styles.offStream]});

}},{key:'update',value:function update(

element,callback){
_AppRegistryInjection2.default.emit('siblings.update',this._id,this._offStreamElement(element),callback);
}},{key:'destroy',value:function destroy(

callback){
_AppRegistryInjection2.default.emit('siblings.update',this._id,null,callback);
}}]);return _class;}();exports.default=_class;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

StaticContainer=function(_Component){_inherits(StaticContainer,_Component);function StaticContainer(){_classCallCheck(this,StaticContainer);return _possibleConstructorReturn(this,(StaticContainer.__proto__||Object.getPrototypeOf(StaticContainer)).apply(this,arguments));}_createClass(StaticContainer,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(
nextProps){
return!!nextProps.shouldUpdate;
}},{key:'render',value:function render()
{
var child=this.props.children;
return child===null||child===false?
null:
_react2.default.Children.only(child);
}}]);return StaticContainer;}(_react.Component);exports.default=StaticContainer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-native/Libraries/EventEmitter/EventEmitter");

/***/ })
/******/ ]);