<template>
  <div class="vue-query-builder" :class="{ 'vue-query-builder-styled': styled }">
    <query-builder-group
      :index="0"
      :query.sync="query"
      :ruleTypes="ruleTypes"
      :rules="mergedRules"
      :maxDepth="maxDepth"
      :depth="depth"
      :styled="styled"
      :labels="mergedLabels"
      type="query-builder-group"
      ></query-builder-group>
  </div>
</template>

<script>
import QueryBuilderGroup from './components/QueryBuilderGroup.vue';
import deepClone from './utilities.js';

var defaultLabels = {
  matchType: "Match Type",
  matchTypes: [
    {"id": "all", "label": "All"},
    {"id": "any", "label": "Any"},
  ],
  addRule: "Add Rule",
  removeRule: "&times;",
  addGroup: "Add Group",
  removeGroup: "&times;",
  textInputPlaceholder: "value",
};

export default {
  name: 'vue-query-builder',

  components: {
    QueryBuilderGroup
  },

  props: {
    rules: Array,
    labels: {
      type: Object,
      default () {
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
        return value >= 1
      }
    },
    value: Object
  },

  data () {
    return {
      depth: 1,
      query: {
        logicalOperator: this.labels.matchTypes[0].id,
        children: []
      },
      ruleTypes: {
        "text": {
          operators: ['equals','does not equal','contains','does not contain','is empty','is not empty','begins with','ends with'],
          inputType: "text",
          id: "text-field"
        },
        "numeric": {
          operators: ['=','<>','<','<=','>','>='],
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
        },
      }
    }
  },

  computed: {
    mergedLabels () {
      return Object.assign({}, defaultLabels, this.labels);
    },

    mergedRules () {
      var mergedRules = [];
      var vm = this;

      vm.rules.forEach(function(rule){
        if ( typeof vm.ruleTypes[rule.type] !== "undefined" ) {
          mergedRules.push( Object.assign({}, vm.ruleTypes[rule.type], rule) );
        } else {
          mergedRules.push( rule );
        }
      });

      return mergedRules;
    }
  },

  mounted () {
    this.$watch(
      'query',
      newQuery => {
        if (JSON.stringify(newQuery) !== JSON.stringify(this.value)) {
          this.$emit('input', deepClone(newQuery));
        }
      }, {
      deep: true
    });

    this.$watch(
      'value',
      newValue => {
        if (JSON.stringify(newValue) !== JSON.stringify(this.query)) {
          this.query = deepClone(newValue);
        }
      }, {
      deep: true
    });

    if ( typeof this.$options.propsData.value !== "undefined" ) {
      this.query = Object.assign(this.query, this.$options.propsData.value);
    }
  }
}
</script>

<style module src="./VueQueryBuilder.scss" lang="scss"></style>