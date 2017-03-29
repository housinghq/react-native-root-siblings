module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import React, { cloneElement } from 'react';
	import { StyleSheet } from 'react-native';
	import emitter from './AppRegistryInjection';

	const styles = StyleSheet.create({
	    offStream: {
	        position: 'absolute'
	    }
	});
	let uid = 0;

	export default class {
	    constructor(element, callback) {
	        Object.defineProperty(this, '_id', {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: uid++
	        });

	        this.update(element, callback);

	        this._id = null;
	    };

	    _offStreamElement(element) {
	        return cloneElement(element, {
	            style: [element.props.style, styles.offStream]
	        });
	    };

	    update(element, callback) {
	        emitter.emit('siblings.update', this._id, this._offStreamElement(element), callback);
	    };

	    destroy(callback) {
	        emitter.emit('siblings.update', this._id, null, callback);
	    };
	}


/***/ }
/******/ ]);