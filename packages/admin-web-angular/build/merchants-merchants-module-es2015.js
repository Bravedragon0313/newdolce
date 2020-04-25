(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merchants-merchants-module"],{

/***/ "../../node_modules/base64-js/index.js":
/*!***************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/base64-js/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../node_modules/buffer/index.js":
/*!************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/buffer/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../node_modules/ieee754/index.js")
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? Symbol.for('nodejs.util.inspect.custom')
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    var proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef'
  var table = new Array(256)
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()


/***/ }),

/***/ "../../node_modules/dijkstrajs/dijkstra.js":
/*!*******************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/dijkstrajs/dijkstra.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ "../../node_modules/ieee754/index.js":
/*!*************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/ieee754/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../node_modules/jsbarcode/bin/JsBarcode.js":
/*!***********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/JsBarcode.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _barcodes = __webpack_require__(/*! ./barcodes/ */ "../../node_modules/jsbarcode/bin/barcodes/index.js");

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ "../../node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ "../../node_modules/jsbarcode/bin/help/linearizeEncodings.js");

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ "../../node_modules/jsbarcode/bin/help/fixOptions.js");

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ "../../node_modules/jsbarcode/bin/help/getRenderProperties.js");

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ "../../node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ "../../node_modules/jsbarcode/bin/exceptions/ErrorHandler.js");

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ "../../node_modules/jsbarcode/bin/exceptions/exceptions.js");

var _defaults = __webpack_require__(/*! ./options/defaults.js */ "../../node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports.default = Barcode;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js":
/*!**************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports.default = CODE128;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js":
/*!***************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports.default = CODE128A;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js":
/*!***************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports.default = CODE128B;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js":
/*!***************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports.default = CODE128C;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js":
/*!*******************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE2 = __webpack_require__(/*! ./CODE128 */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/auto.js");

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports.default = CODE128AUTO;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/auto.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports.default = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/constants.js":
/*!****************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE128/index.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js");

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js");

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js");

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js");

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/CODE39/index.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js":
/*!**********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports.default = EAN;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _EAN2 = __webpack_require__(/*! ./EAN */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports.default = EAN13;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports.default = EAN2;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports.default = EAN5;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(/*! ./EAN */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports.default = EAN8;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js":
/*!**********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports.default = UPC;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(/*! ./encoder */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports.default = UPCE;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js":
/*!****************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js":
/*!**************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports.default = encode;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js");

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js");

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js");

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js");

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js");

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js":
/*!*******************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/ITF/ITF.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/jsbarcode/bin/barcodes/ITF/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports.default = ITF;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js":
/*!********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(/*! ./ITF */ "../../node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports.default = ITF14;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/ITF/constants.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/ITF/index.js":
/*!********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ "../../node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ "../../node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js");

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports.default = MSI;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js":
/*!********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports.default = MSI10;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js":
/*!**********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports.default = MSI1010;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js":
/*!********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports.default = MSI11;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js":
/*!**********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports.default = MSI1110;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/checksums.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/MSI/index.js":
/*!********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js");

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js");

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js");

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ "../../node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js");

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/codabar/index.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "101100110011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/index.js":
/*!****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE = __webpack_require__(/*! ./CODE39/ */ "../../node_modules/jsbarcode/bin/barcodes/CODE39/index.js");

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ "../../node_modules/jsbarcode/bin/barcodes/CODE128/index.js");

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ "../../node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js");

var _ITF = __webpack_require__(/*! ./ITF/ */ "../../node_modules/jsbarcode/bin/barcodes/ITF/index.js");

var _MSI = __webpack_require__(/*! ./MSI/ */ "../../node_modules/jsbarcode/bin/barcodes/MSI/index.js");

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ "../../node_modules/jsbarcode/bin/barcodes/pharmacode/index.js");

var _codabar = __webpack_require__(/*! ./codabar */ "../../node_modules/jsbarcode/bin/barcodes/codabar/index.js");

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ "../../node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js");

exports.default = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/barcodes/pharmacode/index.js":
/*!***************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "../../node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/exceptions/ErrorHandler.js":
/*!*************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports.default = ErrorHandler;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/exceptions/exceptions.js":
/*!***********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/help/fixOptions.js":
/*!*****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/help/getOptionsFromElement.js":
/*!****************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ "../../node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ "../../node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports.default = getOptionsFromElement;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/help/getRenderProperties.js":
/*!**************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ "../../node_modules/jsbarcode/bin/help/getOptionsFromElement.js");

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ "../../node_modules/jsbarcode/bin/renderers/index.js");

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ "../../node_modules/jsbarcode/bin/exceptions/exceptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports.default = getRenderProperties;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/help/linearizeEncodings.js":
/*!*************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/help/merge.js":
/*!************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/help/merge.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/help/optionsFromStrings.js":
/*!*************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/options/defaults.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/options/defaults.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports.default = defaults;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/renderers/canvas.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "../../node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "../../node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/renderers/index.js":
/*!*****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/renderers/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(/*! ./canvas.js */ "../../node_modules/jsbarcode/bin/renderers/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ "../../node_modules/jsbarcode/bin/renderers/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ "../../node_modules/jsbarcode/bin/renderers/object.js");

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/renderers/object.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/renderers/object.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports.default = ObjectRenderer;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/renderers/shared.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/renderers/shared.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ "../../node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var size = ctx.measureText(string).width;

	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ "../../node_modules/jsbarcode/bin/renderers/svg.js":
/*!***************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/jsbarcode/bin/renderers/svg.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "../../node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "../../node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports.default = SVGRenderer;

/***/ }),

/***/ "../../node_modules/qrcode/lib/browser.js":
/*!******************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/browser.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var canPromise = __webpack_require__(/*! ./can-promise */ "../../node_modules/qrcode/lib/can-promise.js")

var QRCode = __webpack_require__(/*! ./core/qrcode */ "../../node_modules/qrcode/lib/core/qrcode.js")
var CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ "../../node_modules/qrcode/lib/renderer/canvas.js")
var SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ "../../node_modules/qrcode/lib/renderer/svg-tag.js")

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ "../../node_modules/qrcode/lib/can-promise.js":
/*!**********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/can-promise.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/alignment-pattern.js":
/*!*********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js").getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/alphanumeric-data.js":
/*!*********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/bit-buffer.js":
/*!**************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/bit-buffer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/bit-matrix.js":
/*!**************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/bit-matrix.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js")

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = BufferUtil.alloc(size * size)
  this.reservedBit = BufferUtil.alloc(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/byte-data.js":
/*!*************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/byte-data.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = BufferUtil.from(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/error-correction-code.js":
/*!*************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/error-correction-code.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(/*! ./error-correction-level */ "../../node_modules/qrcode/lib/core/error-correction-level.js")

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/error-correction-level.js":
/*!**************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/error-correction-level.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/finder-pattern.js":
/*!******************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/finder-pattern.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js").getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/format-info.js":
/*!***************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/format-info.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js")

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/galois-field.js":
/*!****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/galois-field.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js")

var EXP_TABLE = BufferUtil.alloc(512)
var LOG_TABLE = BufferUtil.alloc(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/kanji-data.js":
/*!**************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/kanji-data.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")
var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js")

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/mask-pattern.js":
/*!****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/mask-pattern.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/mode.js":
/*!********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/mode.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var VersionCheck = __webpack_require__(/*! ./version-check */ "../../node_modules/qrcode/lib/core/version-check.js")
var Regex = __webpack_require__(/*! ./regex */ "../../node_modules/qrcode/lib/core/regex.js")

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/numeric-data.js":
/*!****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/numeric-data.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/polynomial.js":
/*!**************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/polynomial.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js")
var GF = __webpack_require__(/*! ./galois-field */ "../../node_modules/qrcode/lib/core/galois-field.js")

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = BufferUtil.alloc(p1.length + p2.length - 1)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = BufferUtil.from(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = BufferUtil.from([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/qrcode.js":
/*!**********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/qrcode.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js")
var ECLevel = __webpack_require__(/*! ./error-correction-level */ "../../node_modules/qrcode/lib/core/error-correction-level.js")
var BitBuffer = __webpack_require__(/*! ./bit-buffer */ "../../node_modules/qrcode/lib/core/bit-buffer.js")
var BitMatrix = __webpack_require__(/*! ./bit-matrix */ "../../node_modules/qrcode/lib/core/bit-matrix.js")
var AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ "../../node_modules/qrcode/lib/core/alignment-pattern.js")
var FinderPattern = __webpack_require__(/*! ./finder-pattern */ "../../node_modules/qrcode/lib/core/finder-pattern.js")
var MaskPattern = __webpack_require__(/*! ./mask-pattern */ "../../node_modules/qrcode/lib/core/mask-pattern.js")
var ECCode = __webpack_require__(/*! ./error-correction-code */ "../../node_modules/qrcode/lib/core/error-correction-code.js")
var ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ "../../node_modules/qrcode/lib/core/reed-solomon-encoder.js")
var Version = __webpack_require__(/*! ./version */ "../../node_modules/qrcode/lib/core/version.js")
var FormatInfo = __webpack_require__(/*! ./format-info */ "../../node_modules/qrcode/lib/core/format-info.js")
var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")
var Segments = __webpack_require__(/*! ./segments */ "../../node_modules/qrcode/lib/core/segments.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/qrcode/node_modules/isarray/index.js")

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = BufferUtil.from(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = BufferUtil.alloc(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/reed-solomon-encoder.js":
/*!************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BufferUtil = __webpack_require__(/*! ../utils/buffer */ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Polynomial = __webpack_require__(/*! ./polynomial */ "../../node_modules/qrcode/lib/core/polynomial.js")
var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js").Buffer

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = BufferUtil.alloc(this.degree)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = BufferUtil.alloc(this.degree)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/regex.js":
/*!*********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/regex.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/segments.js":
/*!************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/segments.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")
var NumericData = __webpack_require__(/*! ./numeric-data */ "../../node_modules/qrcode/lib/core/numeric-data.js")
var AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ "../../node_modules/qrcode/lib/core/alphanumeric-data.js")
var ByteData = __webpack_require__(/*! ./byte-data */ "../../node_modules/qrcode/lib/core/byte-data.js")
var KanjiData = __webpack_require__(/*! ./kanji-data */ "../../node_modules/qrcode/lib/core/kanji-data.js")
var Regex = __webpack_require__(/*! ./regex */ "../../node_modules/qrcode/lib/core/regex.js")
var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js")
var dijkstra = __webpack_require__(/*! dijkstrajs */ "../../node_modules/dijkstrajs/dijkstra.js")

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/utils.js":
/*!*********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/utils.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/version-check.js":
/*!*****************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/version-check.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/core/version.js":
/*!***********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/core/version.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/core/utils.js")
var ECCode = __webpack_require__(/*! ./error-correction-code */ "../../node_modules/qrcode/lib/core/error-correction-code.js")
var ECLevel = __webpack_require__(/*! ./error-correction-level */ "../../node_modules/qrcode/lib/core/error-correction-level.js")
var Mode = __webpack_require__(/*! ./mode */ "../../node_modules/qrcode/lib/core/mode.js")
var VersionCheck = __webpack_require__(/*! ./version-check */ "../../node_modules/qrcode/lib/core/version-check.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/qrcode/node_modules/isarray/index.js")

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/renderer/canvas.js":
/*!**************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/renderer/canvas.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/renderer/utils.js")

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/renderer/svg-tag.js":
/*!***************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "../../node_modules/qrcode/lib/renderer/utils.js")

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/renderer/utils.js":
/*!*************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/renderer/utils.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ "../../node_modules/qrcode/lib/utils/typedarray-buffer.js":
/*!**********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(/*! isarray */ "../../node_modules/qrcode/node_modules/isarray/index.js")

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports.alloc = function (size) {
  var buffer = new Buffer(size)
  buffer.fill(0)
  return buffer
}

module.exports.from = function (data) {
  return new Buffer(data)
}


/***/ }),

/***/ "../../node_modules/qrcode/node_modules/isarray/index.js":
/*!*********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/qrcode/node_modules/isarray/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/account/account.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/account/account.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-account\">\n\t<nb-card-header>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.ACCOUNT' | translate }}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<form class=\"row m-0\" #accountForm=\"ngForm\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.EMAIL_ADDRESS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"email\"\n\t\t\t\t\tname=\"email-input\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.EMAIL' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[(ngModel)]=\"accountModel.email\"\n\t\t\t\t\t(change)=\"emailChange()\"\n\t\t\t\t\t#email=\"ngModel\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\temail.invalid && (email.dirty || email.touched),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\temail.valid && (email.dirty || email.touched)\n\t\t\t\t\t}\"\n\t\t\t\t\trequired\n\t\t\t\t\temail\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"email.invalid && (email.dirty || email.touched)\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"email.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.EMAIL_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"email.errors.email\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.INVALID_EMAIL_FORMAT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"username\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.USERNAME' | translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"username\"\n\t\t\t\t\tname=\"username-input\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.USERNAME' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[(ngModel)]=\"accountModel.username\"\n\t\t\t\t\t#username=\"ngModel\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\tusername.invalid &&\n\t\t\t\t\t\t\t(username.dirty ||\n\t\t\t\t\t\t\t\tusername.touched ||\n\t\t\t\t\t\t\t\taccountModel.username !== ''),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\tusername.valid &&\n\t\t\t\t\t\t\t(username.dirty ||\n\t\t\t\t\t\t\t\tusername.touched ||\n\t\t\t\t\t\t\t\taccountModel.username !== '')\n\t\t\t\t\t}\"\n\t\t\t\t\trequired\n\t\t\t\t\tminlength=\"3\"\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tusername.invalid && (username.dirty || username.touched)\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"username.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.USERNAME_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"username.errors.minlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.USERNAME_MUST_BE_AT_LEAST_3_CHARACTERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"pass\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.PASSWORD' | translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"pass\"\n\t\t\t\t\tname=\"pass-input\"\n\t\t\t\t\t[(ngModel)]=\"accountModel.password\"\n\t\t\t\t\t#password=\"ngModel\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.PASSWORD' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\tpassword.invalid &&\n\t\t\t\t\t\t\t(password.dirty || password.touched),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\tpassword.valid &&\n\t\t\t\t\t\t\t(password.dirty || password.touched)\n\t\t\t\t\t}\"\n\t\t\t\t\tminlength=\"4\"\n\t\t\t\t\trequired\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tpassword.invalid && (password.dirty || password.touched)\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"password.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.PASSWORD_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"password.errors.minlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.PASSWORD_MUST_BE_AT_LEAST_4_CHARACTERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"r-pass\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.REPEAT_PASSWORD'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"rPass\"\n\t\t\t\t\tname=\"r-pass-input\"\n\t\t\t\t\t[(ngModel)]=\"accountModel.repeatPassword\"\n\t\t\t\t\t#rPassword=\"ngModel\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.REPEAT_PASSWORD'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\t(rPassword.invalid ||\n\t\t\t\t\t\t\t\trPassword.value !== password.value ||\n\t\t\t\t\t\t\t\tpassword.invalid) &&\n\t\t\t\t\t\t\t(rPassword.dirty || rPassword.touched),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\trPassword.value === password.value &&\n\t\t\t\t\t\t\tpassword.valid &&\n\t\t\t\t\t\t\t(rPassword.dirty || rPassword.touched)\n\t\t\t\t\t}\"\n\t\t\t\t\trequired\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t(rPassword.invalid ||\n\t\t\t\t\t\t\trPassword.value !== password.value) &&\n\t\t\t\t\t\t(rPassword.dirty || rPassword.touched)\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"rPassword.errors?.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.REPEAT_PASSWORD_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\t!rPassword.errors?.required &&\n\t\t\t\t\t\t\trPassword.value !== password.value\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ACCOUNT.PASSWORDS_DO_NOT_MATCH'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t</form>\n\t</nb-card-body>\n</nb-card>\n\n<button nbButton disabled (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton (click)=\"nextStep.emit()\" [disabled]=\"!formValid\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-basic-info\">\n\t<nb-card-header>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.BASIC_INFO' | translate }}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<form class=\"row m-0\" #basicInfoForm=\"ngForm\">\n\t\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t\t<label for=\"name\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.NAME' | translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"name\"\n\t\t\t\t\tname=\"name-input\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.NAME' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[(ngModel)]=\"basicInfoModel.name\"\n\t\t\t\t\t#name=\"ngModel\"\n\t\t\t\t\t(change)=\"nameChange()\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\tname.invalid && (name.dirty || name.touched),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\tname.valid && (name.dirty || name.touched)\n\t\t\t\t\t}\"\n\t\t\t\t\trequired\n\t\t\t\t\tminlength=\"4\"\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"name.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.NAME_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"name.errors.minlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.NAME_MUST_BE_AT_LEAST_4_CHARACTERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"offset-md-2 col-md-8\">\n\t\t\t\t<label for=\"name\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.PHOTO' | translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t[name]=\"name.value\"\n\t\t\t\t\t[fileUrl]=\"basicInfoModel.logo\"\n\t\t\t\t\t(uploadedImgUrl)=\"basicInfoModel.logo = $event\"\n\t\t\t\t\t[customClass]=\"\n\t\t\t\t\t\tbasicInfoModel.logo !== ''\n\t\t\t\t\t\t\t? invalidUrl\n\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\"\n\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"invalidUrl && basicInfoModel.logo !== ''\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"invalidUrl\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.ENTER_A_VALID_LOGO_URL_OR_BROWSE_FROM_A_DEVICE'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tclass=\"offset-md-2 col-md-8\"\n\t\t\t\t[hidden]=\"basicInfoModel.logo === '' || invalidUrl\"\n\t\t\t>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<div class=\"row preview-img\">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc=\"{{ basicInfoModel.logo }}\"\n\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t(error)=\"invalidUrl = true\"\n\t\t\t\t\t\t\t(load)=\"invalidUrl = false\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div class=\"remove-icon\" (click)=\"deleteImg()\">\n\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\tclass=\"ion-md-remove-circle text-danger pl-2\"\n\t\t\t\t\t\t\t\ttitle=\"{{\n\t\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.REMOVE'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t\t></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-3 col-12 p-0\">\n\t\t\t\t<div class=\"form-group offset-md-2 col-md-8 mt-3 mb-0\">\n\t\t\t\t\t<label for=\"barcodeData\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.BARCODE_DATA'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tnbInput\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tid=\"barcodeData\"\n\t\t\t\t\t\tname=\"barcode-data-input\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.BARCODE_DATA'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t[(ngModel)]=\"basicInfoModel.barcodeData\"\n\t\t\t\t\t\t(change)=\"barcodeDataChange()\"\n\t\t\t\t\t\t#barcodeData=\"ngModel\"\n\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\t\tbarcodeData.invalid &&\n\t\t\t\t\t\t\t\t(barcodeData.dirty || barcodeData.touched),\n\t\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\t\tbarcodeData.valid &&\n\t\t\t\t\t\t\t\t(barcodeData.dirty ||\n\t\t\t\t\t\t\t\t\tbarcodeData.touched ||\n\t\t\t\t\t\t\t\t\tbarcodeData.value)\n\t\t\t\t\t\t}\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\tbarcodeData.invalid &&\n\t\t\t\t\t\t\t(barcodeData.dirty || barcodeData.touched)\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span *ngIf=\"barcodeData.errors.required\">\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.BARCODE_DATA_IS_REQUIRED'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"offset-md-2 col-md-8\" [hidden]=\"!barcodetDataUrl\">\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<span class=\"row preview-barcode\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc=\"{{ barcodetDataUrl }}\"\n\t\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</nb-card-body>\n</nb-card>\n\n<button nbButton (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton (click)=\"nextStep.emit()\" [disabled]=\"!formValid\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-contact-info\">\n\t<nb-card-header>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.CONTACT_INFO' | translate }}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<form class=\"row m-0\" #contactInfoForm=\"ngForm\">\n\t\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t\t<label for=\"contactPhone\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.CONTACT_PHONE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"contactPhone\"\n\t\t\t\t\tname=\"contact-phone-input\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.CONTACT_PHONE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[(ngModel)]=\"contactInfoModel.contactPhone\"\n\t\t\t\t\t#contactPhone=\"ngModel\"\n\t\t\t\t\tpattern=\"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9x]*$\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\tcontactPhone.invalid &&\n\t\t\t\t\t\t\t(contactPhone.dirty || contactPhone.touched),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\tcontactPhone.valid &&\n\t\t\t\t\t\t\tcontactPhone.value !== '' &&\n\t\t\t\t\t\t\t(contactPhone.dirty || contactPhone.touched)\n\t\t\t\t\t}\"\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tcontactPhone.invalid &&\n\t\t\t\t\t\t(contactPhone.dirty || contactPhone.touched)\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"contactPhone.errors.pattern\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.INVALID_PHONE_NUMBER_FORMAT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group offset-md-2 col-md-4\">\n\t\t\t\t<nb-checkbox\n\t\t\t\t\t[value]=\"forwardingEmail\"\n\t\t\t\t\t(change)=\"forwardingEmail = !forwardingEmail\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDER_FORWARDING_EMAIL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t<nb-checkbox\n\t\t\t\t\t[value]=\"forwardingPhone\"\n\t\t\t\t\t(change)=\"forwardingPhone = !forwardingPhone\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDER_FORWARDING_PHONE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t</div>\n\n\t\t\t<div\n\t\t\t\t*ngIf=\"forwardingEmail\"\n\t\t\t\tclass=\"form-group offset-md-2 col-md-8\"\n\t\t\t>\n\t\t\t\t<label for=\"ordersEmail\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDERS_EMAIL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"ordersEmail\"\n\t\t\t\t\tname=\"orders-email-input\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDERS_EMAIL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[(ngModel)]=\"contactInfoModel.ordersEmail\"\n\t\t\t\t\t#ordersEmail=\"ngModel\"\n\t\t\t\t\trequired\n\t\t\t\t\temail\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\tordersEmail.invalid &&\n\t\t\t\t\t\t\t(ordersEmail.dirty ||\n\t\t\t\t\t\t\t\tordersEmail.touched ||\n\t\t\t\t\t\t\t\tordersEmail.value !== ''),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\tordersEmail.valid &&\n\t\t\t\t\t\t\t(ordersEmail.dirty ||\n\t\t\t\t\t\t\t\tordersEmail.touched ||\n\t\t\t\t\t\t\t\tordersEmail.value !== '')\n\t\t\t\t\t}\"\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tordersEmail.invalid &&\n\t\t\t\t\t\t(ordersEmail.dirty ||\n\t\t\t\t\t\t\tordersEmail.touched ||\n\t\t\t\t\t\t\tordersEmail.value !== '')\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"ordersEmail.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDERS_EMAIL_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"ordersEmail.errors.email\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.INVALID_EMAIL_FORMAT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\n\t\t\t<div\n\t\t\t\t*ngIf=\"forwardingPhone\"\n\t\t\t\tclass=\"form-group offset-md-2 col-md-8\"\n\t\t\t>\n\t\t\t\t<label for=\"ordersPhone\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDERS_PHONE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<input\n\t\t\t\t\tnbInput\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"ordersPhone\"\n\t\t\t\t\tname=\"orders-phone-input\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDERS_PHONE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\t[(ngModel)]=\"contactInfoModel.ordersPhone\"\n\t\t\t\t\t#ordersPhone=\"ngModel\"\n\t\t\t\t\trequired\n\t\t\t\t\tpattern=\"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9x]*$\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'input-danger':\n\t\t\t\t\t\t\tordersPhone.invalid &&\n\t\t\t\t\t\t\t(ordersPhone.dirty ||\n\t\t\t\t\t\t\t\tordersPhone.touched ||\n\t\t\t\t\t\t\t\tordersPhone.value !== ''),\n\t\t\t\t\t\t'input-success':\n\t\t\t\t\t\t\tordersPhone.valid &&\n\t\t\t\t\t\t\t(ordersPhone.dirty ||\n\t\t\t\t\t\t\t\tordersPhone.touched ||\n\t\t\t\t\t\t\t\tordersPhone.value !== '')\n\t\t\t\t\t}\"\n\t\t\t\t/>\n\t\t\t\t<small\n\t\t\t\t\tclass=\"text-danger\"\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tordersPhone.invalid &&\n\t\t\t\t\t\t(ordersPhone.dirty ||\n\t\t\t\t\t\t\tordersPhone.touched ||\n\t\t\t\t\t\t\tordersPhone.value !== '')\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"ordersPhone.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.ORDERS_PHONE_IS_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"ordersPhone.errors.pattern\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.CONTACT_INFO.INVALID_PHONE_NUMBER_FORMAT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t</form>\n\t</nb-card-body></nb-card\n>\n\n<button nbButton (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton (click)=\"nextStep.emit()\" [disabled]=\"contactInfoForm.invalid\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/instructions/instructions.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/instructions/instructions.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n\t<nb-card-header>\n\t\t<h5>\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.HOW_TO_SET_UP.HOW_TO_SET_UP'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t\t{{ stepper.selected.label }}?\n\t\t</h5>\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div *ngIf=\"stepper.index === 0\">\n\t\t\tTODO add instructions for Account\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 1\">\n\t\t\tTODO add instructions for Basic info\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 2\">\n\t\t\tTODO add instructions for Contact info\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 3\">\n\t\t\tTODO add instructions for Location\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 4\">\n\t\t\tTODO add instructions for Payments\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 5\">\n\t\t\tTODO add instructions for Manufacturing\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 6\">\n\t\t\tTODO add instructions for Delivery & Takeaway Settings\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 7\">\n\t\t\tTODO add instructions for Orders Settings\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 8\">\n\t\t\tTODO add instructions for Product categories\n\t\t</div>\n\t\t<div *ngIf=\"stepper.index === 9\">\n\t\t\tTODO add instructions for Products\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/location/location.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/location/location.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-location\">\n\t<nb-card-header>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.LOCATION.LOCATION' | translate }}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<ea-location-form\n\t\t\t#locationForm\n\t\t\t[form]=\"location\"\n\t\t\t[showAutocompleteSearch]=\"true\"\n\t\t\t(mapCoordinatesEmitter)=\"mapCoordEmitter.emit($event)\"\n\t\t\t(mapGeometryEmitter)=\"mapGeometryEmitter.emit($event)\"\n\t\t>\n\t\t</ea-location-form>\n\t\t<google-map\n\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t>\n\t\t</google-map>\n\t</nb-card-body>\n</nb-card>\n\n<button nbButton (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton (click)=\"nextStep.emit()\" [disabled]=\"location.invalid\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-manufacturing\">\n\t<nb-card-header>\n\t\t{{\n\t\t\t'FAKE_DATA.SETUP_MERCHANTS.MANUFACTURING.MANUFACTURING' | translate\n\t\t}}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"form-group offset-md-2 col-md-4\">\n\t\t\t\t<nb-checkbox [(ngModel)]=\"isManufacturing\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.MANUFACTURING.PRODUCTS_MANUFACTURING'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t</div>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n\n<button nbButton (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton (click)=\"nextStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/payments/payments.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/payments/payments.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-payments\">\n\t<nb-card-header>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PAYMENTS.PAYMENTS' | translate }}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t\t<nb-checkbox [(ngModel)]=\"isPaymentEnabled\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PAYMENTS.ALLOW_ONLINE_PAYMENT'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t</div>\n\t\t</div>\n\t\t<div [hidden]=\"!isPaymentEnabled\" class=\"row m-0\">\n\t\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t\t<ea-payment-gateways\n\t\t\t\t\t#paymentGateways\n\t\t\t\t\t[warehouseLogo]=\"warehouseLogo\"\n\t\t\t\t\t[warehouseCountry]=\"locationForm.countryId.value\"\n\t\t\t\t></ea-payment-gateways>\n\t\t\t</div>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n\n<button nbButton (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton [disabled]=\"!isPaymentValid\" (click)=\"nextStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-product-categories\">\n\t<nb-card-header>\n\t\t{{\n\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PRODUCT_CATEGORIES.PRODUCT_CATEGORIES'\n\t\t\t\t| translate\n\t\t}}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div class=\"row actions\">\n\t\t\t<div\n\t\t\t\t*ngIf=\"!showMutationForm\"\n\t\t\t\tclass=\"form-group offset-md-4 col-md-4 text-center\"\n\t\t\t>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-success\"\n\t\t\t\t\t(click)=\"showMutationForm = true\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PRODUCT_CATEGORIES.ADD_OWN_PRODUCT_CATEGORY'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class=\"offset-md-1 col-md-11\" *ngIf=\"showMutationForm\">\n\t\t\t\t<ea-product-category-basic-info-form\n\t\t\t\t\t[category]=\"currentCategory\"\n\t\t\t\t\t#basicInfo\n\t\t\t\t></ea-product-category-basic-info-form>\n\t\t\t</div>\n\n\t\t\t<div\n\t\t\t\t[hidden]=\"showMutationForm || productCategories.length == 0\"\n\t\t\t\tclass=\"col-md-12 p-0\"\n\t\t\t>\n\t\t\t\t<ea-categories-table\n\t\t\t\t\t[selectMode]=\"null\"\n\t\t\t\t\t[showPerPage]=\"showPerPage\"\n\t\t\t\t\t[editWithModal]=\"false\"\n\t\t\t\t\t(deleteRow)=\"removeCategory($event)\"\n\t\t\t\t\t(editRow)=\"editCategory($event)\"\n\t\t\t\t\t#categoriesTable\n\t\t\t\t></ea-categories-table>\n\t\t\t</div>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n\n<div *ngIf=\"!showMutationForm\">\n\t<button nbButton (click)=\"previousStep.emit()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n\t</button>\n\n\t<button nbButton (click)=\"nextStep.emit()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n\t</button>\n</div>\n\n<div *ngIf=\"showMutationForm\">\n\t<button nbButton (click)=\"showMutationForm = false\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.BACK' | translate }}\n\t</button>\n\n\t<button\n\t\t*ngIf=\"mutationType === 'add'\"\n\t\tnbButton\n\t\t[disabled]=\"showMutationForm ? !isValidForm : false\"\n\t\t(click)=\"add()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.ADD' | translate }}\n\t</button>\n\n\t<button\n\t\t*ngIf=\"mutationType === 'edit'\"\n\t\tnbButton\n\t\t[disabled]=\"showMutationForm ? isInvalidValidForm : false\"\n\t\t(click)=\"edit()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.SAVE' | translate }}\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ea-add-warehouse-products-table\n\t#addWarehouseProductsTable\n\t[boxShadow]=\"'none'\"\n></ea-add-warehouse-products-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ea-product-basic-info-form\n\t*ngIf=\"areCategoriesLoaded\"\n\t#basicInfoForm\n\t[productCategories]=\"productsCategories\"\n\t[form]=\"basicInfo\"\n\t[currentProduct]=\"product\"\n></ea-product-basic-info-form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ea-products-table\n\t[perPage]=\"perPage\"\n\t[hiddenTableActions]=\"true\"\n\t[boxShadow]=\"'none'\"\n\t#productsTable\n>\n</ea-products-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/products.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/products.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-products\">\n\t<nb-card-header>\n\t\t<span *ngIf=\"currentView == componentViews.main\">\n\t\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.PRODUCTS' | translate }}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.productsTable\">\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.SELECT_FROM_PRODUCTS_CATALOG'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.createProduct\">\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.CREATE_PRODUCT' | translate\n\t\t\t}}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.editProduct\">\n\t\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.EDIT_PRODUCT' | translate }}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.addProducts\">\n\t\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.ADD_PRODUCT' | translate }}\n\t\t</span>\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div\n\t\t\t[hidden]=\"currentView !== componentViews.main\"\n\t\t\tclass=\"main-content\"\n\t\t>\n\t\t\t<div class=\"row actions\">\n\t\t\t\t<div class=\"form-group offset-md-2 col-md-4\">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-outline-success\"\n\t\t\t\t\t\t[disabled]=\"!storeId\"\n\t\t\t\t\t\t(click)=\"currentView = componentViews.productsTable\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.SELECT_FROM_PRODUCTS_CATALOG'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-outline-success\"\n\t\t\t\t\t\t[disabled]=\"!storeId\"\n\t\t\t\t\t\t(click)=\"currentView = componentViews.createProduct\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.PRODUCTS.CREATE_NEW_PRODUCT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div [hidden]=\"!showProductsTable\">\n\t\t\t\t\t<ea-warehouse-products-table\n\t\t\t\t\t\t#productsTable\n\t\t\t\t\t\t[selectMode]=\"null\"\n\t\t\t\t\t\t[perPage]=\"productsPerPage\"\n\t\t\t\t\t\t(onEdit)=\"editProduct($event)\"\n\t\t\t\t\t\t(onDelete)=\"removeProduct($event)\"\n\t\t\t\t\t></ea-warehouse-products-table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"currentView == componentViews.productsTable\" class=\"row\">\n\t\t\t<ea-merchants-setup-products-catalog\n\t\t\t\t[existedProductsIds]=\"existedProductsIds\"\n\t\t\t\t#productsCatalog\n\t\t\t></ea-merchants-setup-products-catalog>\n\t\t</div>\n\n\t\t<div\n\t\t\t*ngIf=\"\n\t\t\t\tcurrentView == componentViews.createProduct ||\n\t\t\t\tcurrentView == componentViews.editProduct\n\t\t\t\"\n\t\t\tclass=\"row\"\n\t\t>\n\t\t\t<div class=\"form-group offset-md-2 col-md-8\">\n\t\t\t\t<ea-merchants-setup-product-mutation\n\t\t\t\t\t(onCreate)=\"select([$event])\"\n\t\t\t\t\t(onEdit)=\"updateMain()\"\n\t\t\t\t\t[product]=\"currentProduct\"\n\t\t\t\t\t#productMutation\n\t\t\t\t></ea-merchants-setup-product-mutation>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"currentView == componentViews.addProducts\" class=\"row\">\n\t\t\t<ea-merchants-setup-add-products\n\t\t\t\t#addProducts\n\t\t\t\t[products]=\"productsForAdd\"\n\t\t\t\t[storeId]=\"storeId\"\n\t\t\t\t(successAdd)=\"currentView = componentViews.main\"\n\t\t\t></ea-merchants-setup-add-products>\n\t\t</div> </nb-card-body\n></nb-card>\n\n<div *ngIf=\"currentView === componentViews.main\">\n\t<button nbButton (click)=\"previousStep.emit()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n\t</button>\n\t<button nbButton (click)=\"finish()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n\t</button>\n</div>\n<div *ngIf=\"currentView !== componentViews.main\">\n\t<button nbButton (click)=\"back()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.BACK' | translate }}\n\t</button>\n\t<button\n\t\t*ngIf=\"currentView === componentViews.productsTable\"\n\t\t[disabled]=\"!haveProductsForAdd\"\n\t\tnbButton\n\t\t(click)=\"select(productsCatalog?.productsTable.selectedProducts)\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.SELECT' | translate }}\n\t</button>\n\n\t<button\n\t\t*ngIf=\"currentView === componentViews.addProducts\"\n\t\t[disabled]=\"!addProducts?.addWarehouseProductsTable.productsIsValid()\"\n\t\tnbButton\n\t\t(click)=\"addProducts.add()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.ADD' | translate }}\n\t</button>\n\n\t<button\n\t\t*ngIf=\"currentView === componentViews.createProduct\"\n\t\tnbButton\n\t\t[disabled]=\"!productMutation?.basicInfo.valid || false\"\n\t\t(click)=\"productMutation.create()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.CREATE' | translate }}\n\t</button>\n\n\t<button\n\t\t*ngIf=\"currentView === componentViews.editProduct\"\n\t\tnbButton\n\t\t[disabled]=\"!productMutation?.basicInfo.valid || false\"\n\t\t(click)=\"productMutation.save()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.SAVE' | translate }}\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.html":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.html ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ea-carrier-basic-info-form\n\t#basicInfoForm\n\t[form]=\"basicInfo\"\n\t[password]=\"password\"\n\t[boxShadow]=\"'none'\"\n></ea-carrier-basic-info-form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-delivery-takeaway\">\n\t<nb-card-header\n\t\t><span *ngIf=\"currentView == componentViews.main\">\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.DELIVERY_AND_TAKEAWAY_SETTINGS'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.carriersTable\">\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.SELECT_FROM_SHARED_CARRIERS'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.addNewCarrier\">\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.ADD_YOUR_CARRIER'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t</span>\n\t\t<span *ngIf=\"currentView == componentViews.editCarrier\">\n\t\t\t{{\n\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.EDIT_CARRIER'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t</span>\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div *ngIf=\"currentView === componentViews.main\" class=\"main-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group offset-md-2 col-md-4\">\n\t\t\t\t\t<nb-checkbox [(ngModel)]=\"isCarrierRequired\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.CARRIER_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-checkbox>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group offset-md-2 col-md-4\">\n\t\t\t\t\t<nb-checkbox\n\t\t\t\t\t\t(change)=\"productsDeliveryChange()\"\n\t\t\t\t\t\t[(ngModel)]=\"productsDelivery\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.PRODUCTS_DELIVERY_BY_DEFAULT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-checkbox>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t<nb-checkbox [(ngModel)]=\"productsTakeaway\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.PRODUCTS_TAKEAWAY_BY_DEFAULT'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-checkbox>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div [hidden]=\"!productsDelivery\" class=\"row actions\">\n\t\t\t\t<div class=\"form-group offset-md-2 col-md-4\">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-outline-success\"\n\t\t\t\t\t\t(click)=\"currentView = componentViews.carriersTable\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.USE_SELECTED_SHARED_CARRIERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-outline-success\"\n\t\t\t\t\t\t(click)=\"currentView = componentViews.addNewCarrier\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.DELIVERY_AND_TAKEAWAY_SETTINGS.ADD_YOUR_CARRIERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\trestrictedCarriers && restrictedCarriers.length !== 0\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t<ea-carriers-smart-table\n\t\t\t\t\t\t[perPage]=\"carriersPerPage\"\n\t\t\t\t\t\t[selectMode]=\"null\"\n\t\t\t\t\t\t[redirectPage]=\"''\"\n\t\t\t\t\t\t[actions]=\"'show'\"\n\t\t\t\t\t\t[loadWholeData]=\"restrictedCarriers\"\n\t\t\t\t\t\t(deleteRow)=\"removeCarrier($event)\"\n\t\t\t\t\t\t(editRow)=\"editCarrier($event)\"\n\t\t\t\t\t\t#carriersTable\n\t\t\t\t\t></ea-carriers-smart-table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<ea-merchants-setup-shared-carriers\n\t\t\t\t#sharedCarriers\n\t\t\t\t[existedCarriersIds]=\"restrictedCarriersIds\"\n\t\t\t\t*ngIf=\"currentView == componentViews.carriersTable\"\n\t\t\t></ea-merchants-setup-shared-carriers>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<ea-merchants-setup-add-new-carrier\n\t\t\t\t#newCarrier\n\t\t\t\t[carrierId]=\"carrierId\"\n\t\t\t\t*ngIf=\"\n\t\t\t\t\tcurrentView == componentViews.addNewCarrier ||\n\t\t\t\t\tcurrentView == componentViews.editCarrier\n\t\t\t\t\"\n\t\t\t></ea-merchants-setup-add-new-carrier>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n\n<div *ngIf=\"currentView === componentViews.main\">\n\t<button nbButton (click)=\"previousStep.emit()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n\t</button>\n\t<button nbButton (click)=\"nextStep.emit()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n\t</button>\n</div>\n<div *ngIf=\"currentView !== componentViews.main\">\n\t<button nbButton (click)=\"back()\">\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.BACK' | translate }}\n\t</button>\n\t<button\n\t\t*ngIf=\"currentView !== componentViews.editCarrier\"\n\t\t[disabled]=\"!haveCarriersForAdd\"\n\t\tnbButton\n\t\t(click)=\"add()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.ADD' | translate }}\n\t</button>\n\n\t<button\n\t\t*ngIf=\"currentView === componentViews.editCarrier\"\n\t\t[disabled]=\"!isBasicInfoValid\"\n\t\tnbButton\n\t\t(click)=\"save()\"\n\t>\n\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.SAVE' | translate }}\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.html":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.html ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ea-carriers-smart-table\n\t[perPage]=\"perPage\"\n\t[redirectPage]=\"''\"\n\t#carriersTable\n></ea-carriers-smart-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"setup-merchant-orders-settings\">\n\t<nb-card-header>\n\t\t{{\n\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ORDERS_SETTINGS.ORDERS_SETTINGS'\n\t\t\t\t| translate\n\t\t}}\n\t</nb-card-header>\n\t<nb-card-body>\n\t\t<div class=\"form-group offset-md-2 col-md-8 row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<label>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.ORDERS_SETTINGS.ORDER_BARCODE_QR_CODE_TYPES'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</label>\n\t\t\t\t<nb-radio-group\n\t\t\t\t\t(valueChange)=\"typeChange($event)\"\n\t\t\t\t\t[(ngModel)]=\"iorderBarcodeType\"\n\t\t\t\t>\n\t\t\t\t\t<nb-radio\n\t\t\t\t\t\t*ngFor=\"let type of orderBarcodeTypes\"\n\t\t\t\t\t\t[value]=\"type.value\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{ type.label }}\n\t\t\t\t\t</nb-radio>\n\t\t\t\t</nb-radio-group>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"row preview-barcode\">\n\t\t\t\t\t<img\n\t\t\t\t\t\t*ngIf=\"isQRCode\"\n\t\t\t\t\t\tsrc=\"{{ barcodetDataUrl }}\"\n\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t/>\n\t\t\t\t\t<ngx-barcode\n\t\t\t\t\t\t*ngIf=\"!isQRCode\"\n\t\t\t\t\t\t[bc-value]=\"barcodetData\"\n\t\t\t\t\t\t[bc-format]=\"ngxBarcodeFormat\"\n\t\t\t\t\t\t[bc-element-type]=\"img\"\n\t\t\t\t\t\t[bc-height]=\"30\"\n\t\t\t\t\t\t[bc-width]=\"1\"\n\t\t\t\t\t></ngx-barcode>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n\n<button nbButton (click)=\"previousStep.emit()\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.PREV' | translate }}\n</button>\n<button nbButton (click)=\"nextStep.emit()\" [disabled]=\"!canCreateMerchant\">\n\t{{ 'FAKE_DATA.SETUP_MERCHANTS.NEXT' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/merchants.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/merchants.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container></toaster-container>\n\n<div class=\"setup-merchants-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\t\t\t<nb-card>\n\t\t\t\t<nb-card-body>\n\t\t\t\t\t<nb-stepper #nbStepper orientation=\"vertical\">\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.ACCOUNT'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-account\n\t\t\t\t\t\t\t\t#account\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-account>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.BASIC_INFO'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-basic-info\n\t\t\t\t\t\t\t\t#basicInfo\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-basic-info>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.CONTACT_INFO'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-contact-info\n\t\t\t\t\t\t\t\t#contactInfo\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-contact-info>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.LOCATION'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-location\n\t\t\t\t\t\t\t\t#location\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-location>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.PAYMENTS'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-payments\n\t\t\t\t\t\t\t\t#payments\n\t\t\t\t\t\t\t\t[warehouseLogo]=\"basicInfo.basicInfoModel.logo\"\n\t\t\t\t\t\t\t\t[locationForm]=\"location.locationForm\"\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-payments>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.MANUFACTURING'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-manufacturing\n\t\t\t\t\t\t\t\t#manufacturing\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-manufacturing>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.DELIVERY_AND_TAKEAWAY_SETTINGS'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-delivery-takeaway\n\t\t\t\t\t\t\t\t[locationForm]=\"location.locationForm\"\n\t\t\t\t\t\t\t\t#deliveryAndTakeaway\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-delivery-takeaway>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.ORDERS_SETTINGS'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-orders-settings\n\t\t\t\t\t\t\t\t#ordersSettings\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"createMerchant()\"\n\t\t\t\t\t\t\t\t[canCreateMerchant]=\"canCreateMerchant\"\n\t\t\t\t\t\t\t></ea-merchants-setup-orders-settings>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.PRODUCT_CATEGORIES'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-product-categories\n\t\t\t\t\t\t\t\t#productCategories\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-product-categories>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t\t<nb-step\n\t\t\t\t\t\t\tlabel=\"{{\n\t\t\t\t\t\t\t\t'FAKE_DATA.SETUP_MERCHANTS.STEPPER.PRODUCTS'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ea-merchants-setup-products\n\t\t\t\t\t\t\t\t[storeId]=\"currentStore?.id\"\n\t\t\t\t\t\t\t\t#products\n\t\t\t\t\t\t\t\t(previousStep)=\"nbStepper.previous()\"\n\t\t\t\t\t\t\t\t(nextStep)=\"nbStepper.next()\"\n\t\t\t\t\t\t\t></ea-merchants-setup-products>\n\t\t\t\t\t\t</nb-step>\n\t\t\t\t\t</nb-stepper>\n\t\t\t\t</nb-card-body>\n\t\t\t</nb-card>\n\t\t</div>\n\n\t\t<div class=\"col-md-3\">\n\t\t\t<ea-merchants-setup-instructions\n\t\t\t\t[stepper]=\"nbStepper\"\n\t\t\t></ea-merchants-setup-instructions>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../common-angular/src/components/ngx-barcode/ngx-barcode.component.ts":
/*!*****************************************************************************!*\
  !*** ../common-angular/src/components/ngx-barcode/ngx-barcode.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NgxBarcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBarcodeComponent", function() { return NgxBarcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const jsbarcode = __webpack_require__(/*! jsbarcode */ "../../node_modules/jsbarcode/bin/JsBarcode.js");
let NgxBarcodeComponent = class NgxBarcodeComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.elementType = 'svg';
        this.cssClass = 'barcode';
        this.format = 'CODE128';
        this.lineColor = '#000000';
        this.width = 2;
        this.height = 100;
        this.displayValue = false;
        this.fontOptions = '';
        this.font = 'monospace';
        this.textAlign = 'center';
        this.textPosition = 'bottom';
        this.textMargin = 2;
        this.fontSize = 20;
        this.background = '#ffffff';
        this.value = '';
        this.valid = () => true;
    }
    get options() {
        const options = {
            format: this.format,
            lineColor: this.lineColor,
            width: this.width,
            height: this.height,
            displayValue: this.displayValue,
            fontOptions: this.fontOptions,
            font: this.font,
            textAlign: this.textAlign,
            textPosition: this.textPosition,
            textMargin: this.textMargin,
            fontSize: this.fontSize,
            background: this.background,
            valid: this.valid,
        };
        if (this.margin) {
            options['margin'] = this.margin;
        }
        if (this.marginTop) {
            options['marginTop'] = this.marginTop;
        }
        if (this.marginBottom) {
            options['marginBottom'] = this.marginBottom;
        }
        if (this.marginLeft) {
            options['marginLeft'] = this.marginLeft;
        }
        if (this.marginRight) {
            options['marginRight'] = this.marginRight;
        }
        return options;
    }
    ngOnChanges() {
        this.createBarcode();
    }
    createBarcode() {
        if (!this.value) {
            return;
        }
        let element;
        switch (this.elementType) {
            case 'img':
                element = this.renderer.createElement('img');
                break;
            case 'canvas':
                element = this.renderer.createElement('canvas');
                break;
            case 'svg':
            default:
                element = this.renderer.createElement('svg', 'svg');
        }
        jsbarcode(element, this.value, this.options);
        for (const node of this.bcElement.nativeElement.childNodes) {
            this.renderer.removeChild(this.bcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.bcElement.nativeElement, element);
    }
};
NgxBarcodeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-element-type'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NgxBarcodeComponent.prototype, "elementType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-class'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "cssClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-format'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NgxBarcodeComponent.prototype, "format", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-line-color'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "lineColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-width'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-height'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-display-value'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "displayValue", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-font-options'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "fontOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-font'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "font", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-text-align'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "textAlign", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-text-position'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "textPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-text-margin'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "textMargin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-font-size'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "fontSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-background'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "background", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-margin'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "margin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-margin-top'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "marginTop", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-margin-bottom'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "marginBottom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-margin-left'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "marginLeft", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-margin-right'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "marginRight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-value'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgxBarcodeComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bcElement', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NgxBarcodeComponent.prototype, "bcElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('bc-valid'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
], NgxBarcodeComponent.prototype, "valid", void 0);
NgxBarcodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-barcode',
        template: ` <div #bcElement [class]="cssClass"></div> `,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], NgxBarcodeComponent);



/***/ }),

/***/ "../common-angular/src/components/ngx-barcode/ngx-barcode.module.ts":
/*!**************************************************************************!*\
  !*** ../common-angular/src/components/ngx-barcode/ngx-barcode.module.ts ***!
  \**************************************************************************/
/*! exports provided: NgxBarcodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBarcodeModule", function() { return NgxBarcodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_barcode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-barcode.component */ "../common-angular/src/components/ngx-barcode/ngx-barcode.component.ts");
var NgxBarcodeModule_1;



let NgxBarcodeModule = NgxBarcodeModule_1 = class NgxBarcodeModule {
    static forRoot() {
        return {
            ngModule: NgxBarcodeModule_1,
            providers: [],
        };
    }
};
NgxBarcodeModule = NgxBarcodeModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [_ngx_barcode_component__WEBPACK_IMPORTED_MODULE_2__["NgxBarcodeComponent"]],
        exports: [_ngx_barcode_component__WEBPACK_IMPORTED_MODULE_2__["NgxBarcodeComponent"]],
    })
], NgxBarcodeModule);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/account/account.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/account/account.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-account nb-card-body {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytzZXR1cC8rbWVyY2hhbnRzL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQWdCO0FDQWxCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtYWNjb3VudCB7XG5cdG5iLWNhcmQtYm9keSB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxufVxuIiwiLnNldHVwLW1lcmNoYW50LWFjY291bnQgbmItY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/account/account.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/account/account.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SetupMerchantAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantAccountComponent", function() { return SetupMerchantAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SetupMerchantAccountComponent = class SetupMerchantAccountComponent {
    constructor() {
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.accountModel = {
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
        };
    }
    get formValid() {
        return (this.accountForm.valid &&
            this.accountModel.password === this.accountModel.repeatPassword);
    }
    emailChange() {
        let targetIndex = this.accountModel.email.indexOf('@');
        if (targetIndex > 0 && this.accountModel.username === '') {
            let defaultUsername = this.accountModel.email.substring(0, targetIndex);
            this.accountModel.username = defaultUsername;
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accountForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], SetupMerchantAccountComponent.prototype, "accountForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantAccountComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantAccountComponent.prototype, "nextStep", void 0);
SetupMerchantAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/account/account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/+setup/+merchants/components/account/account.component.scss")).default]
    })
], SetupMerchantAccountComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-basic-info nb-card-body {\n  text-align: left;\n}\n\n.setup-merchant-basic-info .preview-img {\n  padding-right: 16px;\n}\n\n.setup-merchant-basic-info .preview-barcode {\n  padding: 8px;\n  background: #dedede;\n  display: inline-block;\n  margin-top: 3px;\n}\n\n.setup-merchant-basic-info .preview-barcode img {\n  margin: 0;\n}\n\n.setup-merchant-basic-info .img-rounded {\n  margin-top: 3px;\n  max-height: 70px;\n}\n\n.setup-merchant-basic-info .remove-icon {\n  cursor: pointer;\n}\n\n.setup-merchant-basic-info .remove-icon span {\n  padding-right: 7px;\n  position: absolute;\n  font-size: 1.1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytzZXR1cC8rbWVyY2hhbnRzL2NvbXBvbmVudHMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQWdCO0FDQWxCOztBREZBO0VBTUUsbUJBQW1CO0FDQXJCOztBRE5BO0VBVUUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQ0FqQjs7QURiQTtFQWVHLFNBQVM7QUNFWjs7QURqQkE7RUFvQkUsZUFBZTtFQUNmLGdCQUFnQjtBQ0NsQjs7QUR0QkE7RUF5QkUsZUFBZTtBQ0NqQjs7QUQxQkE7RUE0Qkcsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNFbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL2Jhc2ljLWluZm8vYmFzaWMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR1cC1tZXJjaGFudC1iYXNpYy1pbmZvIHtcblx0bmItY2FyZC1ib2R5IHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR9XG5cblx0LnByZXZpZXctaW1nIHtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXHR9XG5cblx0LnByZXZpZXctYmFyY29kZSB7XG5cdFx0cGFkZGluZzogOHB4O1xuXHRcdGJhY2tncm91bmQ6ICNkZWRlZGU7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdG1hcmdpbi10b3A6IDNweDtcblx0XHRpbWcge1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5pbWctcm91bmRlZCB7XG5cdFx0bWFyZ2luLXRvcDogM3B4O1xuXHRcdG1heC1oZWlnaHQ6IDcwcHg7XG5cdH1cblxuXHQucmVtb3ZlLWljb24ge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblxuXHRcdHNwYW4ge1xuXHRcdFx0cGFkZGluZy1yaWdodDogN3B4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0Zm9udC1zaXplOiAxLjFlbTtcblx0XHR9XG5cdH1cbn1cbiIsIi5zZXR1cC1tZXJjaGFudC1iYXNpYy1pbmZvIG5iLWNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZXR1cC1tZXJjaGFudC1iYXNpYy1pbmZvIC5wcmV2aWV3LWltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5zZXR1cC1tZXJjaGFudC1iYXNpYy1pbmZvIC5wcmV2aWV3LWJhcmNvZGUge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uc2V0dXAtbWVyY2hhbnQtYmFzaWMtaW5mbyAucHJldmlldy1iYXJjb2RlIGltZyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNldHVwLW1lcmNoYW50LWJhc2ljLWluZm8gLmltZy1yb3VuZGVkIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4uc2V0dXAtbWVyY2hhbnQtYmFzaWMtaW5mbyAucmVtb3ZlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZXR1cC1tZXJjaGFudC1iYXNpYy1pbmZvIC5yZW1vdmUtaWNvbiBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SetupMerchantBasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantBasicInfoComponent", function() { return SetupMerchantBasicInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode */ "../../node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");








let SetupMerchantBasicInfoComponent = class SetupMerchantBasicInfoComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.uploaderPlaceholder = 'Photo (optional)';
        this.basicInfoModel = {
            name: '',
            logo: '',
            barcodeData: '',
        };
    }
    ngOnInit() {
        this.getUploaderPlaceholderText();
    }
    get basicInfoCreateObj() {
        const model = Object.assign({}, this.basicInfoModel);
        if (!model.logo && model.name) {
            const letter = model.name.charAt(0).toUpperCase();
            const pictureUrl = Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_7__["getDummyImage"])(300, 300, letter);
            model.logo = pictureUrl;
        }
        return model;
    }
    get formValid() {
        return (this.basicInfoForm.valid &&
            (this.basicInfoModel.logo === '' || !this.invalidUrl));
    }
    deleteImg() {
        this.basicInfoModel.logo = '';
    }
    nameChange() {
        if (this.name.valid && this.basicInfoModel.barcodeData === '') {
            this.basicInfoModel.barcodeData = this.name.value;
            this.barcodeDataChange();
        }
    }
    barcodeDataChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.basicInfoModel.barcodeData) {
                this.barcodetDataUrl = yield qrcode__WEBPACK_IMPORTED_MODULE_3___default.a.toDataURL(this.basicInfoModel.barcodeData);
            }
            else {
                this.barcodetDataUrl = null;
            }
        });
    }
    getUploaderPlaceholderText() {
        this.translateService
            .stream('FAKE_DATA.SETUP_MERCHANTS.BASIC_INFO.PHOTO_OPTIONAL')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._ngDestroy$))
            .subscribe((text) => {
            this.uploaderPlaceholder = text;
        });
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
SetupMerchantBasicInfoComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], SetupMerchantBasicInfoComponent.prototype, "basicInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"])
], SetupMerchantBasicInfoComponent.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantBasicInfoComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantBasicInfoComponent.prototype, "nextStep", void 0);
SetupMerchantBasicInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-basic-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info.component.scss */ "./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], SetupMerchantBasicInfoComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/components.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/components.module.ts ***!
  \*************************************************************************/
/*! exports provided: SetupMerchantsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsComponentsModule", function() { return SetupMerchantsComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/pages/+setup/+merchants/components/instructions/instructions.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/account.component */ "./src/app/pages/+setup/+merchants/components/account/account.component.ts");
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-info/basic-info.component */ "./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.ts");
/* harmony import */ var _manufacturing_manufacturing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manufacturing/manufacturing.component */ "./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.ts");
/* harmony import */ var _settings_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/orders/orders.component */ "./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _product_categories_product_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-categories/product-categories.component */ "./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.ts");
/* harmony import */ var _app_shared_product_categories_forms_product_categories_forms_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/@shared/product/categories/forms/product-categories-forms.module */ "./src/app/@shared/product/categories/forms/product-categories-forms.module.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var _modules_client_common_angular2_components_ngx_barcode_ngx_barcode_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/client.common.angular2/components/ngx-barcode/ngx-barcode.module */ "../common-angular/src/components/ngx-barcode/ngx-barcode.module.ts");


















const COMPONENTS = [
    _account_account_component__WEBPACK_IMPORTED_MODULE_8__["SetupMerchantAccountComponent"],
    _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["SetupMerchantBasicInfoComponent"],
    _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__["SetupMerchantContactInfoComponent"],
    _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_7__["MerchantsSetupInstructionsComponent"],
    _manufacturing_manufacturing_component__WEBPACK_IMPORTED_MODULE_11__["SetupMerchantManufacturingComponent"],
    _settings_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["SetupMerchantOrdersSettingsComponent"],
    _product_categories_product_categories_component__WEBPACK_IMPORTED_MODULE_14__["SetupMerchantProductCategoriesComponent"],
];
let SetupMerchantsComponentsModule = class SetupMerchantsComponentsModule {
};
SetupMerchantsComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbRadioModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__["FileUploaderModule"],
            _app_shared_product_categories_forms_product_categories_forms_module__WEBPACK_IMPORTED_MODULE_15__["ProductCategoriesFormsModule"],
            _modules_client_common_angular2_components_ngx_barcode_ngx_barcode_module__WEBPACK_IMPORTED_MODULE_17__["NgxBarcodeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
        providers: [_app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_16__["NotifyService"]],
    })
], SetupMerchantsComponentsModule);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-contact-info nb-card-body {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9jb250YWN0LWluZm8vY29udGFjdC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL2NvbnRhY3QtaW5mby9jb250YWN0LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBZ0I7QUNBbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL2NvbnRhY3QtaW5mby9jb250YWN0LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtY29udGFjdC1pbmZvIHtcblx0bmItY2FyZC1ib2R5IHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR9XG59XG4iLCIuc2V0dXAtbWVyY2hhbnQtY29udGFjdC1pbmZvIG5iLWNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SetupMerchantContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantContactInfoComponent", function() { return SetupMerchantContactInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SetupMerchantContactInfoComponent = class SetupMerchantContactInfoComponent {
    constructor() {
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contactInfoModel = {
            contactPhone: '',
            forwardOrdersUsing: [],
            ordersEmail: '',
            ordersPhone: '',
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactInfoForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], SetupMerchantContactInfoComponent.prototype, "contactInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantContactInfoComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantContactInfoComponent.prototype, "nextStep", void 0);
SetupMerchantContactInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-contact-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-info.component.scss */ "./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.scss")).default]
    })
], SetupMerchantContactInfoComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/instructions/instructions.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/instructions/instructions.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MerchantsSetupInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantsSetupInstructionsComponent", function() { return MerchantsSetupInstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let MerchantsSetupInstructionsComponent = class MerchantsSetupInstructionsComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbStepperComponent"])
], MerchantsSetupInstructionsComponent.prototype, "stepper", void 0);
MerchantsSetupInstructionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-instructions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./instructions.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/instructions/instructions.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MerchantsSetupInstructionsComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/location/location.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/location/location.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-location nb-card-body {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFnQjtBQ0FsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytzZXR1cC8rbWVyY2hhbnRzL2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtbG9jYXRpb24ge1xuXHRuYi1jYXJkLWJvZHkge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cbn1cbiIsIi5zZXR1cC1tZXJjaGFudC1sb2NhdGlvbiBuYi1jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/location/location.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/location/location.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SetupMerchantLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantLocationComponent", function() { return SetupMerchantLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SetupMerchantLocationComponent = class SetupMerchantLocationComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.location = _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__["LocationFormComponent"].buildForm(this.formBuilder);
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
SetupMerchantLocationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__["LocationFormComponent"])
], SetupMerchantLocationComponent.prototype, "locationForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantLocationComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantLocationComponent.prototype, "nextStep", void 0);
SetupMerchantLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/location/location.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location.component.scss */ "./src/app/pages/+setup/+merchants/components/location/location.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], SetupMerchantLocationComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/location/location.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/location/location.module.ts ***!
  \********************************************************************************/
/*! exports provided: SetupMerchantsLocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsLocationModule", function() { return SetupMerchantsLocationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.component */ "./src/app/pages/+setup/+merchants/components/location/location.component.ts");
/* harmony import */ var _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _app_shared_forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@shared/forms/google-map/google-map.module */ "./src/app/@shared/forms/google-map/google-map.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");










const COMPONENTS = [_location_component__WEBPACK_IMPORTED_MODULE_6__["SetupMerchantLocationComponent"]];
let SetupMerchantsLocationModule = class SetupMerchantsLocationModule {
};
SetupMerchantsLocationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormModule"],
            _app_shared_forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__["GoogleMapModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], SetupMerchantsLocationModule);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-manufacturing nb-card-body {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9tYW51ZmFjdHVyaW5nL21hbnVmYWN0dXJpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytzZXR1cC8rbWVyY2hhbnRzL2NvbXBvbmVudHMvbWFudWZhY3R1cmluZy9tYW51ZmFjdHVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQWdCO0FDQWxCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9tYW51ZmFjdHVyaW5nL21hbnVmYWN0dXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtbWFudWZhY3R1cmluZyB7XG5cdG5iLWNhcmQtYm9keSB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxufVxuIiwiLnNldHVwLW1lcmNoYW50LW1hbnVmYWN0dXJpbmcgbmItY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SetupMerchantManufacturingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantManufacturingComponent", function() { return SetupMerchantManufacturingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SetupMerchantManufacturingComponent = class SetupMerchantManufacturingComponent {
    constructor() {
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantManufacturingComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantManufacturingComponent.prototype, "nextStep", void 0);
SetupMerchantManufacturingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-manufacturing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manufacturing.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manufacturing.component.scss */ "./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.scss")).default]
    })
], SetupMerchantManufacturingComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/payments/payments.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/payments/payments.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-payments nb-card-body {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFnQjtBQ0FsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytzZXR1cC8rbWVyY2hhbnRzL2NvbXBvbmVudHMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtcGF5bWVudHMge1xuXHRuYi1jYXJkLWJvZHkge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cbn1cbiIsIi5zZXR1cC1tZXJjaGFudC1wYXltZW50cyBuYi1jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/payments/payments.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/payments/payments.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SetupMerchantPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantPaymentsComponent", function() { return SetupMerchantPaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _app_shared_payment_gateways_payment_gateways_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/payment-gateways/payment-gateways.component */ "./src/app/@shared/payment-gateways/payment-gateways.component.ts");




let SetupMerchantPaymentsComponent = class SetupMerchantPaymentsComponent {
    constructor() {
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get isPaymentValid() {
        return !this.isPaymentEnabled || this.paymentGateways.isValid;
    }
    get paymentsGateways() {
        return this.paymentGateways.paymentsGateways;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentGateways', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_payment_gateways_payment_gateways_component__WEBPACK_IMPORTED_MODULE_3__["PaymentGatewaysComponent"])
], SetupMerchantPaymentsComponent.prototype, "paymentGateways", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantPaymentsComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantPaymentsComponent.prototype, "nextStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SetupMerchantPaymentsComponent.prototype, "warehouseLogo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__["LocationFormComponent"])
], SetupMerchantPaymentsComponent.prototype, "locationForm", void 0);
SetupMerchantPaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payments.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/payments/payments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payments.component.scss */ "./src/app/pages/+setup/+merchants/components/payments/payments.component.scss")).default]
    })
], SetupMerchantPaymentsComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/payments/payments.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/payments/payments.module.ts ***!
  \********************************************************************************/
/*! exports provided: SetupMerchantsPaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsPaymentsModule", function() { return SetupMerchantsPaymentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments.component */ "./src/app/pages/+setup/+merchants/components/payments/payments.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_payment_gateways_payment_gateways_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/payment-gateways/payment-gateways.module */ "./src/app/@shared/payment-gateways/payment-gateways.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");









let SetupMerchantsPaymentsModule = class SetupMerchantsPaymentsModule {
};
SetupMerchantsPaymentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _app_shared_payment_gateways_payment_gateways_module__WEBPACK_IMPORTED_MODULE_7__["PaymentGatewaysModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
        ],
        declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_5__["SetupMerchantPaymentsComponent"]],
        exports: [_payments_component__WEBPACK_IMPORTED_MODULE_5__["SetupMerchantPaymentsComponent"]],
    })
], SetupMerchantsPaymentsModule);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-product-categories nb-card-body {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9wcm9kdWN0LWNhdGVnb3JpZXMvcHJvZHVjdC1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL3Byb2R1Y3QtY2F0ZWdvcmllcy9wcm9kdWN0LWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBZ0I7QUNBbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL3Byb2R1Y3QtY2F0ZWdvcmllcy9wcm9kdWN0LWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtcHJvZHVjdC1jYXRlZ29yaWVzIHtcblx0bmItY2FyZC1ib2R5IHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR9XG59XG4iLCIuc2V0dXAtbWVyY2hhbnQtcHJvZHVjdC1jYXRlZ29yaWVzIG5iLWNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SetupMerchantProductCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantProductCategoriesComponent", function() { return SetupMerchantProductCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _app_shared_product_categories_forms_basic_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@shared/product/categories/forms/basic-info */ "./src/app/@shared/product/categories/forms/basic-info/index.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var _app_shared_product_categories_categories_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/product/categories/categories-table */ "./src/app/@shared/product/categories/categories-table/index.ts");








let SetupMerchantProductCategoriesComponent = class SetupMerchantProductCategoriesComponent {
    constructor(productsCategoryService, notifyService, productLocalesService) {
        this.productsCategoryService = productsCategoryService;
        this.notifyService = notifyService;
        this.productLocalesService = productLocalesService;
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productCategories = [];
        this.showPerPage = 3;
        this.mutationType = 'add';
        this._showMutationForm = false;
    }
    get isValidForm() {
        let res = false;
        if (this.basicInfo) {
            res = this.basicInfo.form.valid;
        }
        return res;
    }
    get isInvalidValidForm() {
        let res = false;
        if (this.basicInfo) {
            res = this.basicInfo.form.invalid;
        }
        return res;
    }
    get showMutationForm() {
        return this._showMutationForm;
    }
    set showMutationForm(isShow) {
        this._showMutationForm = isShow;
        this.currentCategory = null;
        this.mutationType = 'add';
        if (!isShow) {
            this.loadCategories();
        }
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const category = yield this.productsCategoryService
                    .create(this.basicInfo.createObject)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                    .toPromise();
                this.productCategories.unshift(category);
                const message = `Category ${this.localeTranslate(this.basicInfo.createObject.name)} is added!`;
                this.notifyService.success(message);
                this.showMutationForm = false;
            }
            catch (err) {
                const message = `Something went wrong!`;
                const body = err.message
                    ? '\n' + `Error message: ${err.message}`
                    : '';
                this.notifyService.error(message, body);
            }
        });
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const editObj = this.basicInfo.getEditObject(this.currentCategory);
                const category = yield this.productsCategoryService
                    .update(this.currentCategory.id, editObj)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                    .toPromise();
                this.productCategories = this.productCategories.filter((c) => c.id !== category.id);
                this.productCategories.unshift(category);
                const message = `Category ${this.localeTranslate(this.basicInfo.createObject.name)} is edited`;
                this.notifyService.success(message);
                this.showMutationForm = false;
            }
            catch (err) {
                const message = `Something went wrong!`;
                const body = err.message
                    ? '\n' + `Error message: ${err.message}`
                    : '';
                this.notifyService.error(message, body);
            }
        });
    }
    loadCategories() {
        if (this.productCategories.length > 0) {
            this.categoriesTable.loadDataSmartTable(this.productCategories);
        }
    }
    removeCategory(category) {
        this.productCategories = this.productCategories.filter((c) => c.id !== category.id);
        this.loadCategories();
    }
    editCategory(category) {
        this.showMutationForm = true;
        this.mutationType = 'edit';
        this.currentCategory = category;
    }
    localeTranslate(member) {
        return this.productLocalesService.getTranslate(member);
    }
};
SetupMerchantProductCategoriesComponent.ctorParameters = () => [
    { type: _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_3__["ProductsCategoryService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfo'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_product_categories_forms_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"])
], SetupMerchantProductCategoriesComponent.prototype, "basicInfo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoriesTable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_product_categories_categories_table__WEBPACK_IMPORTED_MODULE_7__["CategoriesTableComponent"])
], SetupMerchantProductCategoriesComponent.prototype, "categoriesTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantProductCategoriesComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantProductCategoriesComponent.prototype, "nextStep", void 0);
SetupMerchantProductCategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-product-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-categories.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-categories.component.scss */ "./src/app/pages/+setup/+merchants/components/product-categories/product-categories.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_3__["ProductsCategoryService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"]])
], SetupMerchantProductCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SetupMerchantAddProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantAddProductsComponent", function() { return SetupMerchantAddProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_warehouse_product_forms_add_warehouse_products_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/warehouse-product/forms/add-warehouse-products-table */ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts");
/* harmony import */ var _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@core/data/warehouses.service */ "./src/app/@core/data/warehouses.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");






let SetupMerchantAddProductsComponent = class SetupMerchantAddProductsComponent {
    constructor(warehousesService, notifyService) {
        this.warehousesService = warehousesService;
        this.notifyService = notifyService;
        this.successAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.addWarehouseProductsTable.loadDataSmartTable(this.products || [], this.storeId);
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const productsForAdd = this.addWarehouseProductsTable
                    .allWarehouseProducts;
                yield this.warehousesService
                    .addProducts(this.storeId, productsForAdd)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .toPromise();
                this.successAdd.emit(true);
                const message = `${productsForAdd.length} products was added`;
                this.notifyService.success(message);
            }
            catch (error) {
                let message = `Something went wrong`;
                if (error.message === 'Validation error') {
                    message = error.message;
                }
                this.notifyService.error(message);
            }
        });
    }
};
SetupMerchantAddProductsComponent.ctorParameters = () => [
    { type: _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_3__["WarehousesService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addWarehouseProductsTable', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_warehouse_product_forms_add_warehouse_products_table__WEBPACK_IMPORTED_MODULE_2__["AddWarehouseProductsComponent"])
], SetupMerchantAddProductsComponent.prototype, "addWarehouseProductsTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SetupMerchantAddProductsComponent.prototype, "products", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SetupMerchantAddProductsComponent.prototype, "storeId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantAddProductsComponent.prototype, "successAdd", void 0);
SetupMerchantAddProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-add-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_3__["WarehousesService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]])
], SetupMerchantAddProductsComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SetupMerchantProductMutationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantProductMutationComponent", function() { return SetupMerchantProductMutationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_product_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/product/forms/basic-info/basic-info-form.component */ "./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts");
/* harmony import */ var _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_data_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@core/data/products.service */ "./src/app/@core/data/products.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/server.common/entities/Product */ "../common/src/entities/Product.ts");









let SetupMerchantProductMutationComponent = class SetupMerchantProductMutationComponent {
    constructor(_formBuilder, _productsService, _productLocalesService, _productsCategoryService) {
        this._formBuilder = _formBuilder;
        this._productsService = _productsService;
        this._productLocalesService = _productLocalesService;
        this._productsCategoryService = _productsCategoryService;
        this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.areCategoriesLoaded = false;
        this.form = this._formBuilder.group({
            basicInfo: _app_shared_product_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoFormComponent"].buildForm(this._formBuilder),
        });
        this.basicInfo = this.form.get('basicInfo');
        this.loadProductCategories();
    }
    loadProductCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.productsCategories = yield this._productsCategoryService
                    .getCategories()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
            }
            catch (error) {
                console.warn(`Error during load product categories. message: ${error.message}`);
            }
            this.areCategoriesLoaded = true;
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const productCreateObject = yield this.basicInfoForm.setupProductCreateObject();
            try {
                const product = yield this._productsService
                    .create(productCreateObject)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
                this.onCreate.emit({
                    id: product.id,
                    title: this._productLocalesService.getMemberValue(product.title),
                    image: this._productLocalesService.getMemberValue(product.images),
                });
            }
            catch (error) {
                console.error(error.message);
            }
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield this.basicInfoForm.setupProductCreateObject();
                yield this._productsService
                    .save(Object.assign({ _id: this.product._id }, res))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
                this.onEdit.emit(true);
            }
            catch (error) {
                console.error(error.message);
            }
        });
    }
};
SetupMerchantProductMutationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_core_data_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"] },
    { type: _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_4__["ProductsCategoryService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_product_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoFormComponent"])
], SetupMerchantProductMutationComponent.prototype, "basicInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantProductMutationComponent.prototype, "onCreate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantProductMutationComponent.prototype, "onEdit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_8__["default"])
], SetupMerchantProductMutationComponent.prototype, "product", void 0);
SetupMerchantProductMutationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-product-mutation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-mutation.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _app_core_data_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"],
        _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_4__["ProductsCategoryService"]])
], SetupMerchantProductMutationComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SetupMerchantProductsCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantProductsCatalogComponent", function() { return SetupMerchantProductsCatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_product_forms_products_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/product/forms/products-table */ "./src/app/@shared/product/forms/products-table/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_data_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@core/data/products.service */ "./src/app/@core/data/products.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let SetupMerchantProductsCatalogComponent = class SetupMerchantProductsCatalogComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.perPage = 3;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.loadData();
        this.smartTablePageChange();
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
    loadData(page = 1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let products = yield this.productsService
                .getProducts({
                skip: this.perPage * (page - 1),
                limit: this.perPage,
            }, this.existedProductsIds)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            const dataCount = yield this.getDataCount(this.existedProductsIds);
            this.productsTable.loadDataSmartTable(products, dataCount, page);
        });
    }
    smartTablePageChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.productsTable) {
                this.productsTable.pagesChanges$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                    .subscribe((page) => {
                    this.loadData(page);
                });
            }
        });
    }
    getDataCount(existedProductsIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.productsService.getCountOfProducts(existedProductsIds);
        });
    }
};
SetupMerchantProductsCatalogComponent.ctorParameters = () => [
    { type: _app_core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsTable', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_product_forms_products_table__WEBPACK_IMPORTED_MODULE_2__["ProductsTableComponent"])
], SetupMerchantProductsCatalogComponent.prototype, "productsTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SetupMerchantProductsCatalogComponent.prototype, "existedProductsIds", void 0);
SetupMerchantProductsCatalogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-products-catalog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products-catalog.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]])
], SetupMerchantProductsCatalogComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/products/products.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/products/products.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-products nb-card-body {\n  text-align: left;\n}\n\n.setup-merchant-products .actions button {\n  width: 100%;\n  margin: 0;\n}\n\n.setup-merchant-products ea-merchants-setup-add-products {\n  width: 100%;\n}\n\n.setup-merchant-products .btn {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFnQjtBQ0FsQjs7QURGQTtFQU9HLFdBQVc7RUFDWCxTQUFTO0FDRFo7O0FEUEE7RUFhRSxXQUFXO0FDRmI7O0FEWEE7RUFpQkUsWUFBWTtBQ0ZkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR1cC1tZXJjaGFudC1wcm9kdWN0cyB7XG5cdG5iLWNhcmQtYm9keSB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxuXG5cdC5hY3Rpb25zIHtcblx0XHRidXR0b24ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0ZWEtbWVyY2hhbnRzLXNldHVwLWFkZC1wcm9kdWN0cyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblxuXHQuYnRuIHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cbn1cbiIsIi5zZXR1cC1tZXJjaGFudC1wcm9kdWN0cyBuYi1jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2V0dXAtbWVyY2hhbnQtcHJvZHVjdHMgLmFjdGlvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNldHVwLW1lcmNoYW50LXByb2R1Y3RzIGVhLW1lcmNoYW50cy1zZXR1cC1hZGQtcHJvZHVjdHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHVwLW1lcmNoYW50LXByb2R1Y3RzIC5idG4ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/products/products.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/products/products.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SetupMerchantProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantProductsComponent", function() { return SetupMerchantProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_catalog_products_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-catalog/products-catalog.component */ "./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.ts");
/* harmony import */ var _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-products/add-products.component */ "./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_warehouse_product_forms_warehouse_products_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/warehouse-product/forms/warehouse-products-table */ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts");
/* harmony import */ var _product_mutation_product_mutation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-mutation/product-mutation.component */ "./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let SetupMerchantProductsComponent = class SetupMerchantProductsComponent {
    constructor(warehouseProductsRouter, warehouseRouter, notifyService, router) {
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.warehouseRouter = warehouseRouter;
        this.notifyService = notifyService;
        this.router = router;
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentViews = {
            main: 'main',
            productsTable: 'productsTable',
            createProduct: 'createProduct',
            editProduct: 'editProduct',
            addProducts: 'addProducts',
        };
        this.productsPerPage = 3;
        this.showProductsTable = false;
        this.productsForAdd = [];
        this._currentView = this.componentViews.main;
        this._prevView = this.componentViews.main;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    get haveProductsForAdd() {
        let hasSelectedCarriers = false;
        if (this.productsCatalog) {
            hasSelectedCarriers = this.productsCatalog.productsTable
                .hasSelectedProducts;
        }
        return hasSelectedCarriers;
    }
    get currentView() {
        return this._currentView;
    }
    set currentView(view) {
        this._prevView = this.currentView;
        this._currentView = view;
    }
    get existedProductsIds() {
        let ids = [];
        if (this.storeProducts) {
            ids = this.storeProducts.map((p) => p.productId);
        }
        return ids;
    }
    select(products) {
        this.productsForAdd = products;
        this.currentView = this.componentViews.addProducts;
    }
    back() {
        if (this.currentView === this.componentViews.addProducts) {
            this.currentView = this._prevView;
            return;
        }
        this.currentProduct = null;
        this.currentView = this.componentViews.main;
    }
    editProduct({ data }) {
        this.currentProduct = data.product;
        this.currentView = this.componentViews.editProduct;
    }
    removeProduct({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.storeId) {
                    const store = yield this.warehouseRouter
                        .get(this.storeId, true)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                        .toPromise();
                    store.products = store.products.filter((p) => p.productId !== data.id);
                    yield this.warehouseRouter.save(store);
                }
                else {
                    throw new Error("Store id don't exist");
                }
            }
            catch (error) {
                const message = `Can't remove products error: ${error.message}`;
                this.notifyService.error(message);
            }
        });
    }
    loadProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.storeId) {
                if (this.products$) {
                    yield this.products$.unsubscribe();
                }
                this.products$ = this.warehouseProductsRouter
                    .get(this.storeId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._ngDestroy$))
                    .subscribe((products) => {
                    this.showProductsTable = products.length > 0;
                    this.productsTable.loadDataSmartTable(products, this.storeId);
                    this.storeProducts = products;
                });
            }
        });
    }
    updateMain() {
        this.currentProduct = null;
        this.currentView = this.componentViews.main;
        this.loadProducts();
    }
    finish() {
        this.nextStep.emit();
        this.router.navigateByUrl('/setup');
    }
    ngOnChanges() {
        this.loadProducts();
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
SetupMerchantProductsComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseProductsRouter"] },
    { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_9__["WarehouseRouter"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsCatalog'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _products_catalog_products_catalog_component__WEBPACK_IMPORTED_MODULE_2__["SetupMerchantProductsCatalogComponent"])
], SetupMerchantProductsComponent.prototype, "productsCatalog", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addProducts'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_3__["SetupMerchantAddProductsComponent"])
], SetupMerchantProductsComponent.prototype, "addProducts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsTable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_warehouse_product_forms_warehouse_products_table__WEBPACK_IMPORTED_MODULE_7__["WarehouseProductsComponent"])
], SetupMerchantProductsComponent.prototype, "productsTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productMutation'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _product_mutation_product_mutation_component__WEBPACK_IMPORTED_MODULE_8__["SetupMerchantProductMutationComponent"])
], SetupMerchantProductsComponent.prototype, "productMutation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantProductsComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantProductsComponent.prototype, "nextStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SetupMerchantProductsComponent.prototype, "storeId", void 0);
SetupMerchantProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/products/products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/+setup/+merchants/components/products/products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseProductsRouter"],
        _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_9__["WarehouseRouter"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], SetupMerchantProductsComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/products/products.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/products/products.module.ts ***!
  \********************************************************************************/
/*! exports provided: SetupMerchantsProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsProductsModule", function() { return SetupMerchantsProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/+setup/+merchants/components/products/products.component.ts");
/* harmony import */ var _products_catalog_products_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-catalog/products-catalog.component */ "./src/app/pages/+setup/+merchants/components/products/products-catalog/products-catalog.component.ts");
/* harmony import */ var _app_shared_product_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@shared/product/forms */ "./src/app/@shared/product/forms/index.ts");
/* harmony import */ var _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-products/add-products.component */ "./src/app/pages/+setup/+merchants/components/products/add-products/add-products.component.ts");
/* harmony import */ var _app_shared_warehouse_product_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@shared/warehouse-product/forms */ "./src/app/@shared/warehouse-product/forms/index.ts");
/* harmony import */ var _product_mutation_product_mutation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-mutation/product-mutation.component */ "./src/app/pages/+setup/+merchants/components/products/product-mutation/product-mutation.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");













const COMPONENTS = [
    _products_component__WEBPACK_IMPORTED_MODULE_6__["SetupMerchantProductsComponent"],
    _products_catalog_products_catalog_component__WEBPACK_IMPORTED_MODULE_7__["SetupMerchantProductsCatalogComponent"],
    _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_9__["SetupMerchantAddProductsComponent"],
    _product_mutation_product_mutation_component__WEBPACK_IMPORTED_MODULE_11__["SetupMerchantProductMutationComponent"],
];
let SetupMerchantsProductsModule = class SetupMerchantsProductsModule {
};
SetupMerchantsProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _app_shared_product_forms__WEBPACK_IMPORTED_MODULE_8__["ProductFormsModule"],
            _app_shared_warehouse_product_forms__WEBPACK_IMPORTED_MODULE_10__["WarehouseProductFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], SetupMerchantsProductsModule);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SetupMerchantAddNewCarrierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantAddNewCarrierComponent", function() { return SetupMerchantAddNewCarrierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_carrier_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/carrier/forms/basic-info/basic-info-form.component */ "./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SetupMerchantAddNewCarrierComponent = class SetupMerchantAddNewCarrierComponent {
    constructor(formBuilder, carrierRouter) {
        this.formBuilder = formBuilder;
        this.carrierRouter = carrierRouter;
        this.form = this.formBuilder.group({
            basicInfo: _app_shared_carrier_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoFormComponent"].buildForm(this.formBuilder),
            password: _app_shared_carrier_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoFormComponent"].buildPasswordForm(this.formBuilder),
        });
        this.basicInfo = this.form.get('basicInfo');
    }
    ngOnInit() {
        if (!this.carrierId) {
            this.password = this.form.get('password');
        }
    }
    ngAfterViewInit() {
        this.laodData();
    }
    laodData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.carrierId) {
                const carrier = yield this.carrierRouter
                    .get(this.carrierId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
                this.basicInfoForm.setValue(carrier);
            }
        });
    }
};
SetupMerchantAddNewCarrierComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_carrier_forms_basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoFormComponent"])
], SetupMerchantAddNewCarrierComponent.prototype, "basicInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SetupMerchantAddNewCarrierComponent.prototype, "carrierId", void 0);
SetupMerchantAddNewCarrierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-add-new-carrier',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-new-carrier.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"]])
], SetupMerchantAddNewCarrierComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-delivery-takeaway nb-card-body {\n  text-align: left;\n}\n\n.setup-merchant-delivery-takeaway .actions button {\n  width: 100%;\n  margin: 0;\n}\n\n.setup-merchant-delivery-takeaway ea-merchants-setup-add-new-carrier {\n  margin: auto;\n}\n\n.setup-merchant-delivery-takeaway .btn {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9zZXR0aW5ncy9kZWxpdmVyeS10YWtlYXdheS9kZWxpdmVyeS10YWtlYXdheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9zZXR0aW5ncy9kZWxpdmVyeS10YWtlYXdheS9kZWxpdmVyeS10YWtlYXdheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFnQjtBQ0FsQjs7QURGQTtFQU9HLFdBQVc7RUFDWCxTQUFTO0FDRFo7O0FEUEE7RUFhRSxZQUFZO0FDRmQ7O0FEWEE7RUFpQkUsWUFBWTtBQ0ZkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9zZXR0aW5ncy9kZWxpdmVyeS10YWtlYXdheS9kZWxpdmVyeS10YWtlYXdheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR1cC1tZXJjaGFudC1kZWxpdmVyeS10YWtlYXdheSB7XG5cdG5iLWNhcmQtYm9keSB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxuXG5cdC5hY3Rpb25zIHtcblx0XHRidXR0b24ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0ZWEtbWVyY2hhbnRzLXNldHVwLWFkZC1uZXctY2FycmllciB7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cblx0LmJ0biB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG59XG4iLCIuc2V0dXAtbWVyY2hhbnQtZGVsaXZlcnktdGFrZWF3YXkgbmItY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNldHVwLW1lcmNoYW50LWRlbGl2ZXJ5LXRha2Vhd2F5IC5hY3Rpb25zIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5zZXR1cC1tZXJjaGFudC1kZWxpdmVyeS10YWtlYXdheSBlYS1tZXJjaGFudHMtc2V0dXAtYWRkLW5ldy1jYXJyaWVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2V0dXAtbWVyY2hhbnQtZGVsaXZlcnktdGFrZWF3YXkgLmJ0biB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SetupMerchantDeliveryAndTakeawayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantDeliveryAndTakeawayComponent", function() { return SetupMerchantDeliveryAndTakeawayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_carriers_shared_carriers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-carriers/shared-carriers.component */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.ts");
/* harmony import */ var _app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/carrier/carriers-table/carriers-table.component */ "./src/app/@shared/carrier/carriers-table/carriers-table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _add_new_carrier_add_new_carrier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-carrier/add-new-carrier.component */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");








let SetupMerchantDeliveryAndTakeawayComponent = class SetupMerchantDeliveryAndTakeawayComponent {
    constructor(carrierRouter) {
        this.carrierRouter = carrierRouter;
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentViews = {
            main: 'main',
            carriersTable: 'carriersTable',
            addNewCarrier: 'addNewCarrier',
            editCarrier: 'editCarrier',
        };
        this.currentView = this.componentViews.main;
        this.carriersPerPage = 3;
        this.restrictedCarriers = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    get haveCarriersForAdd() {
        let hasSelectedCarriers = false;
        if (this.sharedCarriers) {
            hasSelectedCarriers = this.sharedCarriers.carriersTable
                .hasSelectedCarriers;
        }
        if (this.newCarrier) {
            hasSelectedCarriers =
                this.newCarrier.form.valid &&
                    this.locationForm &&
                    this.locationForm.form.valid;
        }
        return hasSelectedCarriers;
    }
    get isBasicInfoValid() {
        let res = false;
        if (this.newCarrier) {
            res = this.newCarrier.basicInfoForm.form.valid;
        }
        return res;
    }
    get restrictedCarriersIds() {
        let ids = [];
        if (this.restrictedCarriers) {
            ids = this.restrictedCarriers.map((c) => c.id);
        }
        return ids;
    }
    ngAfterViewInit() { }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.currentView === this.componentViews.carriersTable) {
                const carriers = this.sharedCarriers.carriersTable.selectedCarriers
                    .map((data) => data['carrier'])
                    .map(_app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_3__["CarriersSmartTableComponent"].getCarrierSmartTableObject);
                this.restrictedCarriers.unshift(...carriers);
            }
            else if (this.currentView === this.componentViews.addNewCarrier) {
                const geoLocationInput = this.locationForm.getValue();
                geoLocationInput.loc.coordinates.reverse();
                const carrierCreateObj = Object.assign(Object.assign({}, this.newCarrier.basicInfoForm.getValue()), { geoLocation: geoLocationInput });
                if (!carrierCreateObj.logo) {
                    const letter = carrierCreateObj.firstName
                        .charAt(0)
                        .toUpperCase();
                    carrierCreateObj.logo = Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_6__["getDummyImage"])(300, 300, letter);
                }
                let carrier = yield this.carrierRouter.register({
                    carrier: carrierCreateObj,
                    password: this.newCarrier.basicInfoForm.getPassword(),
                });
                this.restrictedCarriers.unshift(_app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_3__["CarriersSmartTableComponent"].getCarrierSmartTableObject(carrier));
            }
            this.currentView = this.componentViews.main;
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const basicInfo = this.newCarrier.basicInfoForm.getValue();
            const carrier = yield this.carrierRouter.updateById(this.carrierId, Object.assign({}, basicInfo));
            this.restrictedCarriers = this.restrictedCarriers.filter((c) => c.id !== this.carrierId);
            this.restrictedCarriers.unshift(_app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_3__["CarriersSmartTableComponent"].getCarrierSmartTableObject(carrier));
            this.carrierId = null;
            this.currentView = this.componentViews.main;
        });
    }
    back() {
        this.currentView = this.componentViews.main;
    }
    productsDeliveryChange() {
        if (!this.productsDelivery) {
            this.restrictedCarriers = [];
        }
    }
    removeCarrier(e) {
        if (this.restrictedCarriers) {
            this.restrictedCarriers = this.restrictedCarriers.filter((c) => c.id !== e.data.id);
        }
        this.carriersTable.loadData(this.restrictedCarriers);
    }
    editCarrier(e) {
        this.carrierId = e.data.id;
        this.currentView = this.componentViews.editCarrier;
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
SetupMerchantDeliveryAndTakeawayComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_7__["CarrierRouter"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newCarrier'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _add_new_carrier_add_new_carrier_component__WEBPACK_IMPORTED_MODULE_5__["SetupMerchantAddNewCarrierComponent"])
], SetupMerchantDeliveryAndTakeawayComponent.prototype, "newCarrier", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sharedCarriers'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_carriers_shared_carriers_component__WEBPACK_IMPORTED_MODULE_2__["SetupMerchantSharedCarriersComponent"])
], SetupMerchantDeliveryAndTakeawayComponent.prototype, "sharedCarriers", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carriersTable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_3__["CarriersSmartTableComponent"])
], SetupMerchantDeliveryAndTakeawayComponent.prototype, "carriersTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantDeliveryAndTakeawayComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantDeliveryAndTakeawayComponent.prototype, "nextStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SetupMerchantDeliveryAndTakeawayComponent.prototype, "locationForm", void 0);
SetupMerchantDeliveryAndTakeawayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-delivery-takeaway',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-takeaway.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-takeaway.component.scss */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_7__["CarrierRouter"]])
], SetupMerchantDeliveryAndTakeawayComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SetupMerchantsDeliveryAndTakeawayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsDeliveryAndTakeawayModule", function() { return SetupMerchantsDeliveryAndTakeawayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delivery_takeaway_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-takeaway.component */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_shared_carrier_carriers_table_carriers_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/carrier/carriers-table/carriers-table.module */ "./src/app/@shared/carrier/carriers-table/carriers-table.module.ts");
/* harmony import */ var _shared_carriers_shared_carriers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-carriers/shared-carriers.component */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.ts");
/* harmony import */ var _app_pages_carriers_carrier_location_carrier_location_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/+carriers/+carrier/location/carrier-location.module */ "./src/app/pages/+carriers/+carrier/location/carrier-location.module.ts");
/* harmony import */ var _app_pages_carriers_track_track_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/+carriers/track/track.module */ "./src/app/pages/+carriers/track/track.module.ts");
/* harmony import */ var _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/@shared/render-component/render-components.module */ "./src/app/@shared/render-component/render-components.module.ts");
/* harmony import */ var _app_shared_carrier_carrier_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/@shared/carrier/carrier-mutation */ "./src/app/@shared/carrier/carrier-mutation/index.ts");
/* harmony import */ var _add_new_carrier_add_new_carrier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-new-carrier/add-new-carrier.component */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/add-new-carrier/add-new-carrier.component.ts");
/* harmony import */ var _app_shared_carrier_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/@shared/carrier/forms */ "./src/app/@shared/carrier/forms/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
















const COMPONENTS = [
    _delivery_takeaway_component__WEBPACK_IMPORTED_MODULE_1__["SetupMerchantDeliveryAndTakeawayComponent"],
    _shared_carriers_shared_carriers_component__WEBPACK_IMPORTED_MODULE_8__["SetupMerchantSharedCarriersComponent"],
    _add_new_carrier_add_new_carrier_component__WEBPACK_IMPORTED_MODULE_13__["SetupMerchantAddNewCarrierComponent"],
];
let SetupMerchantsDeliveryAndTakeawayModule = class SetupMerchantsDeliveryAndTakeawayModule {
};
SetupMerchantsDeliveryAndTakeawayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _app_shared_carrier_carriers_table_carriers_table_module__WEBPACK_IMPORTED_MODULE_7__["CarriersSmartTableModule"],
            _app_pages_carriers_carrier_location_carrier_location_module__WEBPACK_IMPORTED_MODULE_9__["CarrierLocationModule"],
            _app_pages_carriers_track_track_module__WEBPACK_IMPORTED_MODULE_10__["TrackModule"],
            _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_11__["RenderComponentsModule"],
            _app_shared_carrier_carrier_mutation__WEBPACK_IMPORTED_MODULE_12__["CarrierMutationModule"],
            _app_shared_carrier_forms__WEBPACK_IMPORTED_MODULE_14__["CarrierFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], SetupMerchantsDeliveryAndTakeawayModule);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SetupMerchantSharedCarriersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantSharedCarriersComponent", function() { return SetupMerchantSharedCarriersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/carrier/carriers-table/carriers-table.component */ "./src/app/@shared/carrier/carriers-table/carriers-table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@core/data/carriers.service */ "./src/app/@core/data/carriers.service.ts");







const perPage = 5;
let SetupMerchantSharedCarriersComponent = class SetupMerchantSharedCarriersComponent {
    constructor(_translateService, _carriersService) {
        this._translateService = _translateService;
        this._carriersService = _carriersService;
        this.existedCarriersIds = [];
        this.perPage = perPage;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._applyTranslationOnSmartTable();
    }
    ngAfterViewInit() {
        this._loadDataSmartTable();
        this.smartTablePageChange();
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
    _loadDataSmartTable(page = 1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.$carriers) {
                yield this.$carriers.unsubscribe();
            }
            this.$carriers = this._carriersService
                .getCarriers({
                skip: perPage * (page - 1),
                limit: perPage,
            }, {
                isSharedCarrier: true,
                _id: {
                    $nin: this.existedCarriersIds,
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
                .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const carriersVm = data.map(_app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_2__["CarriersSmartTableComponent"].getCarrierSmartTableObject);
                yield this.loadDataCount();
                const carriersData = new Array(this.dataCount);
                carriersData.splice(perPage * (page - 1), perPage, ...carriersVm);
                yield this.carriersTable.loadData(carriersData);
            }));
        });
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
            .subscribe(() => {
            if (this.carriersTable) {
                this.carriersTable.loadSettingsSmartTable(this.perPage);
                this._loadDataSmartTable();
            }
        });
    }
    smartTablePageChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.carriersTable) {
                this.carriersTable.pageChange
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
                    .subscribe((page) => {
                    this._loadDataSmartTable(page);
                });
            }
        });
    }
    loadDataCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataCount = yield this._carriersService.getCountOfCarriers({
                isSharedCarrier: true,
                _id: {
                    $nin: this.existedCarriersIds,
                },
            });
        });
    }
};
SetupMerchantSharedCarriersComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_6__["CarriersService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carriersTable', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_carrier_carriers_table_carriers_table_component__WEBPACK_IMPORTED_MODULE_2__["CarriersSmartTableComponent"])
], SetupMerchantSharedCarriersComponent.prototype, "carriersTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SetupMerchantSharedCarriersComponent.prototype, "existedCarriersIds", void 0);
SetupMerchantSharedCarriersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-shared-carriers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shared-carriers.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/shared-carriers/shared-carriers.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_6__["CarriersService"]])
], SetupMerchantSharedCarriersComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-merchant-orders-settings nb-card-body {\n  text-align: left;\n}\n\n.setup-merchant-orders-settings nb-card-body .preview-barcode {\n  padding: 8px;\n  background: #dedede;\n  display: inline-block;\n}\n\n.setup-merchant-orders-settings nb-card-body .preview-barcode img {\n  margin: 0;\n  max-height: 5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NldHVwLyttZXJjaGFudHMvY29tcG9uZW50cy9zZXR0aW5ncy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL3NldHRpbmdzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBZ0I7QUNBbEI7O0FERkE7RUFLRyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQ0N4Qjs7QURSQTtFQVVJLFNBQVM7RUFDVCxnQkFBZ0I7QUNFcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2V0dXAvK21lcmNoYW50cy9jb21wb25lbnRzL3NldHRpbmdzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dXAtbWVyY2hhbnQtb3JkZXJzLXNldHRpbmdzIHtcblx0bmItY2FyZC1ib2R5IHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXG5cdFx0LnByZXZpZXctYmFyY29kZSB7XG5cdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdG1heC1oZWlnaHQ6IDVyZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIuc2V0dXAtbWVyY2hhbnQtb3JkZXJzLXNldHRpbmdzIG5iLWNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZXR1cC1tZXJjaGFudC1vcmRlcnMtc2V0dGluZ3MgbmItY2FyZC1ib2R5IC5wcmV2aWV3LWJhcmNvZGUge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNldHVwLW1lcmNoYW50LW9yZGVycy1zZXR0aW5ncyBuYi1jYXJkLWJvZHkgLnByZXZpZXctYmFyY29kZSBpbWcge1xuICBtYXJnaW46IDA7XG4gIG1heC1oZWlnaHQ6IDVyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SetupMerchantOrdersSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantOrdersSettingsComponent", function() { return SetupMerchantOrdersSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/enums/OrderBarcodeTypes */ "../common/src/enums/OrderBarcodeTypes.ts");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode */ "../../node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_3__);




let SetupMerchantOrdersSettingsComponent = class SetupMerchantOrdersSettingsComponent {
    constructor() {
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canCreateMerchant = false;
        this.iorderBarcodeType = _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].QR;
        this.isQRCode = true;
        this.orderBarcodeTypes = [
            {
                label: Object(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["orderBarcodeTypesToString"])(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].QR),
                value: _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].QR,
            },
            {
                label: Object(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["orderBarcodeTypesToString"])(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].CODE128),
                value: _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].CODE128,
            },
            {
                label: Object(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["orderBarcodeTypesToString"])(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].CODE39),
                value: _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].CODE39,
            },
            {
                label: Object(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["orderBarcodeTypesToString"])(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].MSI),
                value: _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].MSI,
            },
        ];
        this.loadBarcodetDataUrl();
    }
    loadBarcodetDataUrl() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dummyId = Date.now();
            this.barcodetDataUrl = yield qrcode__WEBPACK_IMPORTED_MODULE_3___default.a.toDataURL(dummyId.toString());
            this.barcodetData = dummyId.toString();
        });
    }
    typeChange(type) {
        this.isQRCode = type === _modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["default"].QR;
        if (!this.isQRCode) {
            this.ngxBarcodeFormat = Object(_modules_server_common_enums_OrderBarcodeTypes__WEBPACK_IMPORTED_MODULE_2__["orderBarcodeTypesToString"])(type);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantOrdersSettingsComponent.prototype, "previousStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SetupMerchantOrdersSettingsComponent.prototype, "nextStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SetupMerchantOrdersSettingsComponent.prototype, "canCreateMerchant", void 0);
SetupMerchantOrdersSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-merchants-setup-orders-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SetupMerchantOrdersSettingsComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/merchants.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/merchants.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytzZXR1cC8rbWVyY2hhbnRzL21lcmNoYW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/+setup/+merchants/merchants.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/merchants.component.ts ***!
  \****************************************************************/
/*! exports provided: SetupMerchantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsComponent", function() { return SetupMerchantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/pages/+setup/+merchants/components/account/account.component.ts");
/* harmony import */ var _components_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/basic-info/basic-info.component */ "./src/app/pages/+setup/+merchants/components/basic-info/basic-info.component.ts");
/* harmony import */ var _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-info/contact-info.component */ "./src/app/pages/+setup/+merchants/components/contact-info/contact-info.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/pages/+setup/+merchants/components/location/location.component.ts");
/* harmony import */ var _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/payments/payments.component */ "./src/app/pages/+setup/+merchants/components/payments/payments.component.ts");
/* harmony import */ var _components_manufacturing_manufacturing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/manufacturing/manufacturing.component */ "./src/app/pages/+setup/+merchants/components/manufacturing/manufacturing.component.ts");
/* harmony import */ var _components_settings_delivery_takeaway_delivery_takeaway_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings/delivery-takeaway/delivery-takeaway.component */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.component.ts");
/* harmony import */ var _components_settings_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/settings/orders/orders.component */ "./src/app/pages/+setup/+merchants/components/settings/orders/orders.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");













let SetupMerchantsComponent = class SetupMerchantsComponent {
    constructor(warehouseRouter, toasterService) {
        this.warehouseRouter = warehouseRouter;
        this.toasterService = toasterService;
    }
    get canCreateMerchant() {
        return (this.stepAccount.formValid &&
            this.stepBasicInfo.formValid &&
            this.stepContactInfo.contactInfoForm.valid &&
            this.stepLocation.location.valid);
    }
    createMerchant() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.currentStore = yield this.warehouseRouter.register(this.getMerchantCreateObj());
                this.toasterService.pop('success', `Warehouse ${this.currentStore.name} was created!`);
                this.nbStepper.next();
            }
            catch (error) {
                this.toasterService.pop({
                    type: 'error',
                    title: `Error in creating warehouse: "${error.message}"`,
                    timeout: 0,
                });
            }
        });
    }
    getMerchantCreateObj() {
        let warehouse;
        let password;
        if (this.canCreateMerchant) {
            const geoLocationInput = this.stepLocation.locationForm.getValue();
            geoLocationInput.loc.coordinates.reverse();
            const accountModel = this.stepAccount.accountModel;
            warehouse = Object.assign(Object.assign(Object.assign({ contactEmail: accountModel.email, username: accountModel.username }, this.stepBasicInfo.basicInfoCreateObj), this.stepContactInfo.contactInfoModel), { geoLocation: geoLocationInput, isPaymentEnabled: this.stepPayments.isPaymentEnabled, isManufacturing: this.stepManufacturing.isManufacturing, isCarrierRequired: this.stepDeliveryAndTakeaway
                    .isCarrierRequired, productsDelivery: this.stepDeliveryAndTakeaway.productsDelivery, productsTakeaway: this.stepDeliveryAndTakeaway.productsTakeaway, hasRestrictedCarriers: this.stepDeliveryAndTakeaway.restrictedCarriersIds.length >
                    0, carriersIds: this.stepDeliveryAndTakeaway.restrictedCarriersIds, orderBarcodeType: this.stepOrdersSettings.iorderBarcodeType, isActive: true, paymentGateways: this.stepPayments.paymentsGateways });
            password = accountModel.password;
        }
        return { warehouse, password };
    }
};
SetupMerchantsComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseRouter"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nbStepper'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbStepperComponent"])
], SetupMerchantsComponent.prototype, "nbStepper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('account', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["SetupMerchantAccountComponent"])
], SetupMerchantsComponent.prototype, "stepAccount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfo', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__["SetupMerchantBasicInfoComponent"])
], SetupMerchantsComponent.prototype, "stepBasicInfo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactInfo', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_4__["SetupMerchantContactInfoComponent"])
], SetupMerchantsComponent.prototype, "stepContactInfo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('location', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_location_location_component__WEBPACK_IMPORTED_MODULE_5__["SetupMerchantLocationComponent"])
], SetupMerchantsComponent.prototype, "stepLocation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('payments'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__["SetupMerchantPaymentsComponent"])
], SetupMerchantsComponent.prototype, "stepPayments", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('manufacturing'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_manufacturing_manufacturing_component__WEBPACK_IMPORTED_MODULE_7__["SetupMerchantManufacturingComponent"])
], SetupMerchantsComponent.prototype, "stepManufacturing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deliveryAndTakeaway'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_settings_delivery_takeaway_delivery_takeaway_component__WEBPACK_IMPORTED_MODULE_8__["SetupMerchantDeliveryAndTakeawayComponent"])
], SetupMerchantsComponent.prototype, "stepDeliveryAndTakeaway", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ordersSettings'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_settings_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["SetupMerchantOrdersSettingsComponent"])
], SetupMerchantsComponent.prototype, "stepOrdersSettings", void 0);
SetupMerchantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./merchants.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/+merchants/merchants.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./merchants.component.scss */ "./src/app/pages/+setup/+merchants/merchants.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseRouter"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterService"]])
], SetupMerchantsComponent);



/***/ }),

/***/ "./src/app/pages/+setup/+merchants/merchants.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/+setup/+merchants/merchants.module.ts ***!
  \*************************************************************/
/*! exports provided: SetupMerchantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMerchantsModule", function() { return SetupMerchantsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _merchants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchants.component */ "./src/app/pages/+setup/+merchants/merchants.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "./src/app/pages/+setup/+merchants/components/components.module.ts");
/* harmony import */ var _components_location_location_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/location/location.module */ "./src/app/pages/+setup/+merchants/components/location/location.module.ts");
/* harmony import */ var _components_settings_delivery_takeaway_delivery_takeaway_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings/delivery-takeaway/delivery-takeaway.module */ "./src/app/pages/+setup/+merchants/components/settings/delivery-takeaway/delivery-takeaway.module.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _components_products_products_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/products/products.module */ "./src/app/pages/+setup/+merchants/components/products/products.module.ts");
/* harmony import */ var _components_payments_payments_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/payments/payments.module */ "./src/app/pages/+setup/+merchants/components/payments/payments.module.ts");














const routes = [
    {
        path: '',
        component: _merchants_component__WEBPACK_IMPORTED_MODULE_6__["SetupMerchantsComponent"],
    },
];
let SetupMerchantsModule = class SetupMerchantsModule {
};
SetupMerchantsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["SetupMerchantsComponentsModule"],
            _components_location_location_module__WEBPACK_IMPORTED_MODULE_9__["SetupMerchantsLocationModule"],
            _components_settings_delivery_takeaway_delivery_takeaway_module__WEBPACK_IMPORTED_MODULE_10__["SetupMerchantsDeliveryAndTakeawayModule"],
            _components_products_products_module__WEBPACK_IMPORTED_MODULE_12__["SetupMerchantsProductsModule"],
            _components_payments_payments_module__WEBPACK_IMPORTED_MODULE_13__["SetupMerchantsPaymentsModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterModule"].forRoot(),
        ],
        declarations: [_merchants_component__WEBPACK_IMPORTED_MODULE_6__["SetupMerchantsComponent"]],
    })
], SetupMerchantsModule);



/***/ })

}]);
//# sourceMappingURL=merchants-merchants-module-es2015.js.map