module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "253b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _QueryBuilderGroup = _interopRequireDefault(__webpack_require__("aac1"));

var _utilities = _interopRequireDefault(__webpack_require__("9bf5"));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var defaultLabels = {
  matchType: "Match Type",
  matchTypes: [{
    "id": "all",
    "label": "All"
  }, {
    "id": "any",
    "label": "Any"
  }],
  addRule: "Add Rule",
  removeRule: "&times;",
  addGroup: "Add Group",
  removeGroup: "&times;",
  textInputPlaceholder: "value"
};
var _default = {
  name: 'vue-query-builder',
  components: {
    QueryBuilderGroup: _QueryBuilderGroup.default
  },
  props: {
    rules: Array,
    labels: {
      type: Object,

      default() {
        return defaultLabels;
      }

    },
    styled: {
      type: Boolean,
      default: true
    },
    maxDepth: {
      type: Number,
      default: 3,
      validator: function (value) {
        return value >= 1;
      }
    },
    value: Object
  },

  data() {
    return {
      depth: 1,
      query: {
        logicalOperator: this.labels.matchTypes[0].id,
        children: []
      },
      ruleTypes: {
        "text": {
          operators: ['equals', 'does not equal', 'contains', 'does not contain', 'is empty', 'is not empty', 'begins with', 'ends with'],
          inputType: "text",
          id: "text-field"
        },
        "numeric": {
          operators: ['=', '<>', '<', '<=', '>', '>='],
          inputType: "number",
          id: "number-field"
        },
        "custom": {
          operators: [],
          inputType: "text",
          id: "custom-field"
        },
        "radio": {
          operators: [],
          choices: [],
          inputType: "radio",
          id: "radio-field"
        },
        "checkbox": {
          operators: [],
          choices: [],
          inputType: "checkbox",
          id: "checkbox-field"
        },
        "select": {
          operators: [],
          choices: [],
          inputType: "select",
          id: "select-field"
        },
        "multi-select": {
          operators: ['='],
          choices: [],
          inputType: "select",
          id: "multi-select-field"
        }
      }
    };
  },

  computed: {
    mergedLabels() {
      return Object.assign({}, defaultLabels, this.labels);
    },

    mergedRules() {
      var mergedRules = [];
      var vm = this;
      vm.rules.forEach(function (rule) {
        if (typeof vm.ruleTypes[rule.type] !== "undefined") {
          mergedRules.push(Object.assign({}, vm.ruleTypes[rule.type], rule));
        } else {
          mergedRules.push(rule);
        }
      });
      return mergedRules;
    }

  },

  mounted() {
    this.$watch('query', newQuery => {
      if (JSON.stringify(newQuery) !== JSON.stringify(this.value)) {
        this.$emit('input', (0, _utilities.default)(newQuery));
      }
    }, {
      deep: true
    });
    this.$watch('value', newValue => {
      if (JSON.stringify(newValue) !== JSON.stringify(this.query)) {
        this.query = (0, _utilities.default)(newValue);
      }
    }, {
      deep: true
    });

    if (typeof this.$options.propsData.value !== "undefined") {
      this.query = Object.assign(this.query, this.$options.propsData.value);
    }
  }

};
exports.default = _default;

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "328a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("253b");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4ea4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "5df9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _QueryBuilderRule = _interopRequireDefault(__webpack_require__("e86f"));

var _utilities = _interopRequireDefault(__webpack_require__("9bf5"));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "query-builder-group",
  components: {
    QueryBuilderRule: _QueryBuilderRule.default
  },
  props: ['ruleTypes', 'type', 'query', 'rules', 'index', 'maxDepth', 'depth', 'styled', 'labels'],
  methods: {
    ruleById(ruleId) {
      var rule = null;
      this.rules.forEach(function (value) {
        if (value.id === ruleId) {
          rule = value;
          return false;
        }
      });
      return rule;
    },

    addRule() {
      let updated_query = (0, _utilities.default)(this.query);
      let child = {
        type: 'query-builder-rule',
        query: {
          rule: this.selectedRule.id,
          selectedOperator: this.selectedRule.operators[0],
          selectedOperand: typeof this.selectedRule.operands === "undefined" ? this.selectedRule.label : this.selectedRule.operands[0],
          value: null
        }
      }; // A bit hacky, but `v-model` on `select` requires an array.

      if (this.ruleById(child.query.rule).type === 'multi-select') {
        child.query.value = [];
      }

      updated_query.children.push(child);
      this.$emit('update:query', updated_query);
    },

    addGroup() {
      let updated_query = (0, _utilities.default)(this.query);

      if (this.depth < this.maxDepth) {
        updated_query.children.push({
          type: 'query-builder-group',
          query: {
            logicalOperator: this.labels.matchTypes[0].id,
            children: []
          }
        });
        this.$emit('update:query', updated_query);
      }
    },

    remove() {
      this.$emit('child-deletion-requested', this.index);
    },

    removeChild(index) {
      let updated_query = (0, _utilities.default)(this.query);
      updated_query.children.splice(index, 1);
      this.$emit('update:query', updated_query);
    }

  },

  data() {
    return {
      selectedRule: this.rules[0]
    };
  },

  computed: {
    classObject() {
      var classObject = {
        'panel panel-default': this.styled
      };
      classObject['depth-' + this.depth.toString()] = this.styled;
      return classObject;
    }

  }
};
exports.default = _default;

/***/ }),

/***/ "86b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("4ea4");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = _interopRequireDefault(__webpack_require__("9bf5"));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "query-builder-rule",
  props: ['query', 'index', 'rule', 'styled', 'labels'],

  beforeMount() {
    if (this.rule.type === 'custom-component') {
      this.$options.components[this.id] = this.rule.component;
    }
  },

  methods: {
    remove: function () {
      this.$emit('child-deletion-requested', this.index);
    },

    updateQuery(value) {
      let updated_query = (0, _utilities.default)(this.query);
      updated_query.value = value;
      this.$emit('update:query', updated_query);
    }

  },
  computed: {
    isCustomComponent() {
      return this.rule.type === 'custom-component';
    },

    selectOptions() {
      if (typeof this.rule.choices === 'undefined') {
        return {};
      }

      return this.rule.choices.reduce(function (groups, item, index) {
        let key = item['group'];

        if (typeof key !== 'undefined') {
          groups[key] = groups[key] || [];
          groups[key].push(item);
        } else {
          groups[index] = item;
        }

        return groups;
      }, {});
    }

  },

  mounted() {
    let updated_query = (0, _utilities.default)(this.query); // Set a default value for these types if one isn't provided already

    if (this.query.value === null) {
      if (this.rule.inputType === 'checkbox') {
        updated_query.value = [];
      }

      if (this.rule.type === 'select') {
        updated_query.value = this.rule.choices[0].value;
      }

      if (this.rule.type === 'custom-component') {
        updated_query.value = null;

        if (typeof this.rule.default !== 'undefined') {
          updated_query.value = (0, _utilities.default)(this.rule.default);
        }
      }

      this.$emit('update:query', updated_query);
    }
  }

};
exports.default = _default;

/***/ }),

/***/ "87b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73a0dc8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QueryBuilderRule.vue?vue&type=template&id=6d351146&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vqb-rule",class:{ 'panel panel-default form-inline': _vm.styled }},[_c('div',{class:{ 'form-group': _vm.styled }},[_c('label',[_vm._v(_vm._s(_vm.rule.label))]),(typeof _vm.rule.operands !== 'undefined')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.selectedOperand),expression:"query.selectedOperand"}],class:{ 'form-control': _vm.styled },on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query, "selectedOperand", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.rule.operands),function(operand){return _c('option',[_vm._v(_vm._s(operand))])}),0):_vm._e(),(typeof _vm.rule.operators !== 'undefined' && _vm.rule.operators.length > 1)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.selectedOperator),expression:"query.selectedOperator"}],class:{ 'form-control': _vm.styled },on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query, "selectedOperator", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.rule.operators),function(operator){return _c('option',{domProps:{"value":operator}},[_vm._v("\n        "+_vm._s(operator)+"\n      ")])}),0):_vm._e(),(_vm.rule.inputType === 'text')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.value),expression:"query.value"}],class:{ 'form-control': _vm.styled },attrs:{"type":"text","placeholder":_vm.labels.textInputPlaceholder},domProps:{"value":(_vm.query.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.query, "value", $event.target.value)}}}):_vm._e(),(_vm.rule.inputType === 'number')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.value),expression:"query.value"}],class:{ 'form-control': _vm.styled },attrs:{"type":"number"},domProps:{"value":(_vm.query.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.query, "value", $event.target.value)}}}):_vm._e(),(_vm.rule.inputType === 'date')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.value),expression:"query.value"}],class:{ 'form-control': _vm.styled },attrs:{"type":"date"},domProps:{"value":(_vm.query.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.query, "value", $event.target.value)}}}):_vm._e(),(_vm.isCustomComponent)?[_c(_vm.rule.component,{tag:"component",attrs:{"value":_vm.query.value},on:{"input":_vm.updateQuery}})]:_vm._e(),(_vm.rule.inputType === 'checkbox')?_c('div',{staticClass:"checkbox"},_vm._l((_vm.rule.choices),function(choice){return _c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.value),expression:"query.value"}],attrs:{"type":"checkbox"},domProps:{"value":choice.value,"checked":Array.isArray(_vm.query.value)?_vm._i(_vm.query.value,choice.value)>-1:(_vm.query.value)},on:{"change":function($event){var $$a=_vm.query.value,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=choice.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.query, "value", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.query, "value", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.query, "value", $$c)}}}}),_vm._v(" "+_vm._s(choice.label)+"\n      ")])}),0):_vm._e(),(_vm.rule.inputType === 'radio')?_c('div',{staticClass:"radio"},_vm._l((_vm.rule.choices),function(choice){return _c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.value),expression:"query.value"}],attrs:{"type":"radio"},domProps:{"value":choice.value,"checked":_vm._q(_vm.query.value,choice.value)},on:{"change":function($event){return _vm.$set(_vm.query, "value", choice.value)}}}),_vm._v(" "+_vm._s(choice.label)+"\n      ")])}),0):_vm._e(),(_vm.rule.inputType === 'select')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.value),expression:"query.value"}],class:{ 'form-control': _vm.styled },attrs:{"multiple":_vm.rule.type === 'multi-select'},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_vm._l((_vm.selectOptions),function(option,option_key){return [(!Array.isArray(option))?_c('option',{domProps:{"value":option.value}},[_vm._v("\n          "+_vm._s(option.label)+"\n        ")]):_vm._e(),(Array.isArray(option))?_c('optgroup',{attrs:{"label":option_key}},_vm._l((option),function(sub_option){return _c('option',{domProps:{"value":sub_option.value}},[_vm._v(_vm._s(sub_option.label))])}),0):_vm._e()]})],2):_vm._e(),_c('button',{class:{ 'close pull-right': _vm.styled },attrs:{"type":"button"},domProps:{"innerHTML":_vm._s(_vm.labels.removeRule)},on:{"click":_vm.remove}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QueryBuilderRule.vue?vue&type=template&id=6d351146&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "998e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc04");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueQueryBuilder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9bf5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a depply cloned object without reference.
 * Copied from Vue MultiSelect and Vuex.
 * @type {Object}
 */
const deepClone = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  } else if (obj && typeof obj === 'object') {
    var cloned = {};
    var keys = Object.keys(obj);

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      cloned[key] = deepClone(obj[key]);
    }

    return cloned;
  } else {
    return obj;
  }
};

var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ "aac1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QueryBuilderGroup_vue_vue_type_template_id_296f45cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d8fa");
/* harmony import */ var _QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bd57");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QueryBuilderGroup_vue_vue_type_template_id_296f45cb___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _QueryBuilderGroup_vue_vue_type_template_id_296f45cb___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "bc04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bd57":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5df9");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ceb4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("86b7");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d8fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73a0dc8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QueryBuilderGroup.vue?vue&type=template&id=296f45cb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vqb-group",class:_vm.classObject},[_c('div',{staticClass:"vqb-group-heading",class:{ 'panel-heading': _vm.styled }},[_c('div',{staticClass:"match-type-container",class:{ 'form-inline': _vm.styled }},[_c('div',{class:{ 'form-group': _vm.styled }},[_c('label',{attrs:{"for":"vqb-match-type"}},[_vm._v(_vm._s(_vm.labels.matchType))]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query.logicalOperator),expression:"query.logicalOperator"}],class:{ 'form-control': _vm.styled },attrs:{"id":"vqb-match-type"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query, "logicalOperator", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.labels.matchTypes),function(label,index){return _c('option',{key:index,domProps:{"value":label.id}},[_vm._v(_vm._s(label.label))])}),0)]),(this.depth > 1)?_c('button',{class:{ 'close pull-right': _vm.styled },attrs:{"type":"button"},domProps:{"innerHTML":_vm._s(_vm.labels.removeGroup)},on:{"click":_vm.remove}}):_vm._e()])]),_c('div',{staticClass:"vqb-group-body",class:{ 'panel-body': _vm.styled }},[_c('div',{staticClass:"rule-actions",class:{ 'form-inline': _vm.styled }},[_c('div',{class:{ 'form-group': _vm.styled }},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedRule),expression:"selectedRule"}],class:{ 'form-control': _vm.styled },on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selectedRule=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.rules),function(rule,index){return _c('option',{key:index,domProps:{"value":rule}},[_vm._v(_vm._s(rule.label))])}),0),_c('button',{class:{ 'btn btn-default': _vm.styled },attrs:{"type":"button"},domProps:{"innerHTML":_vm._s(_vm.labels.addRule)},on:{"click":_vm.addRule}}),(this.depth < this.maxDepth)?_c('button',{class:{ 'btn btn-default': _vm.styled },attrs:{"type":"button"},domProps:{"innerHTML":_vm._s(_vm.labels.addGroup)},on:{"click":_vm.addGroup}}):_vm._e()])]),_c('div',{staticClass:"children"},_vm._l((_vm.query.children),function(child,index){return _c(child.type,{key:index,tag:"component",attrs:{"type":child.type,"query":child.query,"ruleTypes":_vm.ruleTypes,"rules":_vm.rules,"rule":_vm.ruleById(child.query.rule),"index":index,"maxDepth":_vm.maxDepth,"depth":_vm.depth + 1,"styled":_vm.styled,"labels":_vm.labels},on:{"update:query":function($event){return _vm.$set(child, "query", $event)},"child-deletion-requested":_vm.removeChild}})}),1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QueryBuilderGroup.vue?vue&type=template&id=296f45cb&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "e0c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73a0dc8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueQueryBuilder.vue?vue&type=template&id=58599512&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-query-builder",class:{ 'vue-query-builder-styled': _vm.styled }},[_c('query-builder-group',{attrs:{"index":0,"query":_vm.query,"ruleTypes":_vm.ruleTypes,"rules":_vm.mergedRules,"maxDepth":_vm.maxDepth,"depth":_vm.depth,"styled":_vm.styled,"labels":_vm.mergedLabels,"type":"query-builder-group"},on:{"update:query":function($event){_vm.query=$event}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueQueryBuilder.vue?vue&type=template&id=58599512&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "e86f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QueryBuilderRule_vue_vue_type_template_id_6d351146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("87b1");
/* harmony import */ var _QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ceb4");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _QueryBuilderRule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QueryBuilderRule_vue_vue_type_template_id_6d351146___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _QueryBuilderRule_vue_vue_type_template_id_6d351146___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ebd5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueQueryBuilder_vue_vue_type_template_id_58599512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e0c4");
/* harmony import */ var _VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("328a");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _VueQueryBuilder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("998e");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _VueQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueQueryBuilder_vue_vue_type_template_id_58599512___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _VueQueryBuilder_vue_vue_type_template_id_58599512___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ebd5");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ })

/******/ })["default"];
//# sourceMappingURL=VueQueryBuilder.common.js.map