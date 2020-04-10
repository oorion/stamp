// source: filters.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.filters.Filters', null, global);
goog.exportSymbol('proto.filters.PriceFilter', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.filters.PriceFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.filters.PriceFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.filters.PriceFilter.displayName = 'proto.filters.PriceFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.filters.Filters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.filters.Filters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.filters.Filters.displayName = 'proto.filters.Filters';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.filters.PriceFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.filters.PriceFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.filters.PriceFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.filters.PriceFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    acceptancePrice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    notificationPrice: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.filters.PriceFilter}
 */
proto.filters.PriceFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.filters.PriceFilter;
  return proto.filters.PriceFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.filters.PriceFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.filters.PriceFilter}
 */
proto.filters.PriceFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAcceptancePrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNotificationPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.filters.PriceFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.filters.PriceFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.filters.PriceFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.filters.PriceFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAcceptancePrice();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getNotificationPrice();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bool public = 1;
 * @return {boolean}
 */
proto.filters.PriceFilter.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.filters.PriceFilter} returns this
 */
proto.filters.PriceFilter.prototype.setPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 acceptance_price = 2;
 * @return {number}
 */
proto.filters.PriceFilter.prototype.getAcceptancePrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.filters.PriceFilter} returns this
 */
proto.filters.PriceFilter.prototype.setAcceptancePrice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 notification_price = 3;
 * @return {number}
 */
proto.filters.PriceFilter.prototype.getNotificationPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.filters.PriceFilter} returns this
 */
proto.filters.PriceFilter.prototype.setNotificationPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.filters.Filters.prototype.toObject = function(opt_includeInstance) {
  return proto.filters.Filters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.filters.Filters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.filters.Filters.toObject = function(includeInstance, msg) {
  var f, obj = {
    priceFilter: (f = msg.getPriceFilter()) && proto.filters.PriceFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.filters.Filters}
 */
proto.filters.Filters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.filters.Filters;
  return proto.filters.Filters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.filters.Filters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.filters.Filters}
 */
proto.filters.Filters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.filters.PriceFilter;
      reader.readMessage(value,proto.filters.PriceFilter.deserializeBinaryFromReader);
      msg.setPriceFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.filters.Filters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.filters.Filters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.filters.Filters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.filters.Filters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriceFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.filters.PriceFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional PriceFilter price_filter = 1;
 * @return {?proto.filters.PriceFilter}
 */
proto.filters.Filters.prototype.getPriceFilter = function() {
  return /** @type{?proto.filters.PriceFilter} */ (
    jspb.Message.getWrapperField(this, proto.filters.PriceFilter, 1));
};


/**
 * @param {?proto.filters.PriceFilter|undefined} value
 * @return {!proto.filters.Filters} returns this
*/
proto.filters.Filters.prototype.setPriceFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.filters.Filters} returns this
 */
proto.filters.Filters.prototype.clearPriceFilter = function() {
  return this.setPriceFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.filters.Filters.prototype.hasPriceFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.filters);
