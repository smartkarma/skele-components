'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _jsxFileName="/Users/lukaskurucz/Git/skele/packages/components/src/viewport/withPlaceholder/index.js";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var _default=function _default(WrappedComponent,PlaceholderComponent){var _class,_temp;return _temp=_class=function(_React$Component){_inherits(_class,_React$Component);function _class(props,context){_classCallCheck(this,_class);return _possibleConstructorReturn(this,_getPrototypeOf(_class).call(this,props,context));}_createClass(_class,[{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.props.inViewport&&!this._hasEnteredViewport){this._hasEnteredViewport=true;}}},{key:"render",value:function render(){if(this.props.inViewport){return _react.default.createElement(WrappedComponent,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:20}}));}if(this.props.retainOnceInViewport&&this._hasEnteredViewport){return _react.default.createElement(WrappedComponent,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:24}}));}return this.props.placeholder?_react.default.createElement(this.props.placeholder,{__source:{fileName:_jsxFileName,lineNumber:28}}):PlaceholderComponent?_react.default.createElement(PlaceholderComponent,{__source:{fileName:_jsxFileName,lineNumber:30}}):null;}}]);return _class;}(_react.default.Component),_class.propTypes={inViewport:_propTypes.default.bool.isRequired,placeholder:_propTypes.default.func,retainOnceInViewport:_propTypes.default.bool},_class.displayName="WithPlaceholder("+(WrappedComponent.displayName||WrappedComponent.name||'Component')+")",_temp;};exports.default=_default;