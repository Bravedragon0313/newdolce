/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "a41385d1e8562dc9d819";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ever-platform/common/src/@pyro/db/db-object.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/@pyro/db/db-object.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const schema_1 = __webpack_require__(/*! ./schema */ "./node_modules/@ever-platform/common/src/@pyro/db/schema.ts");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const utils_1 = __webpack_require__(/*! ../../utils */ "./node_modules/@ever-platform/common/src/utils.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
class DBObject {
    constructor(obj) {
        lodash_1.default.assign(this, obj);
        if (mongoose_1.default != null &&
            mongoose_1.default.Types != null &&
            mongoose_1.default.Types.ObjectId != null) {
            if (obj && obj['_id']) {
                this['_id'] = mongoose_1.default.Types.ObjectId.createFromHexString(obj['_id'].toString());
            }
        }
    }
    get createdAt() {
        return this._createdAt != null ? utils_1.toDate(this._createdAt) : null;
    }
    get updatedAt() {
        return this._updatedAt != null ? utils_1.toDate(this._updatedAt) : null;
    }
    get id() {
        return this._id.toString();
    }
    isEqual(p) {
        for (const prop in schema_1.getPreSchema(this.constructor)) {
            if (this[prop] !== p[prop]) {
                return false;
            }
        }
        return true;
    }
}
DBObject.modelName = '';
tslib_1.__decorate([
    typeorm_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Object)
], DBObject.prototype, "_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Object)
], DBObject.prototype, "_createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Object)
], DBObject.prototype, "_updatedAt", void 0);
exports.DBObject = DBObject;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/@pyro/db/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var db_object_1 = __webpack_require__(/*! ./db-object */ "./node_modules/@ever-platform/common/src/@pyro/db/db-object.ts");
exports.DBObject = db_object_1.DBObject;
var model_1 = __webpack_require__(/*! ./model */ "./node_modules/@ever-platform/common/src/@pyro/db/model.ts");
exports.ModelName = model_1.ModelName;
var schema_1 = __webpack_require__(/*! ./schema */ "./node_modules/@ever-platform/common/src/@pyro/db/schema.ts");
exports.Schema = schema_1.Schema;
exports.getSchema = schema_1.getSchema;
exports.getPreSchema = schema_1.getPreSchema;
exports.Index = schema_1.Index;
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@ever-platform/common/src/@pyro/db/types.ts");
exports.Types = types_1.Types;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/@pyro/db/model.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/@pyro/db/model.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ModelName(name) {
    return (target) => {
        target.modelName = name;
    };
}
exports.ModelName = ModelName;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/@pyro/db/schema.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/@pyro/db/schema.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_object_1 = __webpack_require__(/*! ./db-object */ "./node_modules/@ever-platform/common/src/@pyro/db/db-object.ts");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const _ = tslib_1.__importStar(__webpack_require__(/*! lodash */ "lodash"));
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const mongooseSchemasKey = 'mongooseSchemas';
const mongooseIndexesKey = 'mongooseIndexes';
function Schema(schema) {
    return (target, propertyKey) => {
        let mongooseSchemas = Reflect.getMetadata(mongooseSchemasKey, target.constructor);
        if (typeof mongooseSchemas === 'undefined' || mongooseSchemas == null) {
            mongooseSchemas = {};
        }
        mongooseSchemas[propertyKey] = schema;
        Reflect.defineMetadata(mongooseSchemasKey, mongooseSchemas, target.constructor);
    };
}
exports.Schema = Schema;
function Index(value) {
    return (target, propertyKey) => {
        let indexesObj = Reflect.getMetadata(mongooseIndexesKey, target.constructor);
        if (typeof indexesObj === 'undefined' || indexesObj == null) {
            indexesObj = {};
        }
        indexesObj[propertyKey] = value;
        Reflect.defineMetadata(mongooseIndexesKey, indexesObj, target.constructor);
    };
}
exports.Index = Index;
function getPreSchema(DBObj) {
    const mongooseSchemas = Reflect.getMetadata(mongooseSchemasKey, DBObj);
    if (mongooseSchemas != null) {
        return mongooseSchemas;
    }
    else {
        return {};
    }
}
exports.getPreSchema = getPreSchema;
function getSchema(DBObj) {
    const preSchema = getPreSchema(DBObj);
    const schema = new mongoose_1.Schema(preSchema, {
        timestamps: {
            createdAt: '_createdAt',
            updatedAt: '_updatedAt',
        },
    });
    const mongooseIndexes = Reflect.getMetadata(mongooseIndexesKey, DBObj);
    if (mongooseIndexes != null) {
        schema.index(mongooseIndexes);
    }
    _.each(preSchema, (SubType, property) => {
        if (SubType.prototype instanceof db_object_1.DBObject) {
            _.each(getSchema(SubType).indexes(), (index) => {
                _.each(index, (indexValue, indexProperty) => {
                    schema.index({
                        [property + '.' + indexProperty]: indexValue,
                    });
                });
            });
        }
    });
    return schema;
}
exports.getSchema = getSchema;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/@pyro/db/types.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/@pyro/db/types.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __webpack_require__(/*! ./schema */ "./node_modules/@ever-platform/common/src/@pyro/db/schema.ts");
exports.Types = {
    String: (s) => {
        if (s == null) {
            return schema_1.Schema({ type: String, required: true });
        }
        else {
            return schema_1.Schema({ type: String, default: s });
        }
    },
    Number: (n) => {
        if (n == null) {
            return schema_1.Schema({ type: Number, required: true });
        }
        else {
            return schema_1.Schema({ type: Number, default: n });
        }
    },
    Boolean: (b) => {
        if (b == null) {
            return schema_1.Schema({ type: Boolean, required: true });
        }
        else {
            return schema_1.Schema({ type: Boolean, default: b });
        }
    },
    Date: (d) => {
        if (d == null) {
            return schema_1.Schema({ type: Date, required: true });
        }
        else {
            return schema_1.Schema({ type: Date, default: d });
        }
    },
    Ref(Type, options = {}) {
        return (target, propertyKey) => {
            const multi = Array.isArray(Type);
            const op = Object.assign({}, options);
            op.type = String;
            op.ref = (multi ? Type[0] : Type).modelName;
            schema_1.Schema(multi ? [op] : op)(target, propertyKey);
        };
    },
};


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/data/abbreviation-to-country.ts":
/*!********************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/data/abbreviation-to-country.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.countries = {
    AD: 'Andorra',
    AE: 'United Arab Emirates',
    AF: 'Afghanistan',
    AG: 'Antigua and Barbuda',
    AI: 'Anguilla',
    AL: 'Albania',
    AM: 'Armenia',
    AO: 'Angola',
    AQ: 'Antarctica',
    AR: 'Argentina',
    AS: 'American Samoa',
    AT: 'Austria',
    AU: 'Australia',
    AW: 'Aruba',
    AX: 'Åland',
    AZ: 'Azerbaijan',
    BA: 'Bosnia and Herzegovina',
    BB: 'Barbados',
    BD: 'Bangladesh',
    BE: 'Belgium',
    BF: 'Burkina Faso',
    BG: 'Bulgaria',
    BH: 'Bahrain',
    BI: 'Burundi',
    BJ: 'Benin',
    BL: 'Saint Barthélemy',
    BM: 'Bermuda',
    BN: 'Brunei',
    BO: 'Bolivia',
    BQ: 'Bonaire',
    BR: 'Brazil',
    BS: 'Bahamas',
    BT: 'Bhutan',
    BV: 'Bouvet Island',
    BW: 'Botswana',
    BY: 'Belarus',
    BZ: 'Belize',
    CA: 'Canada',
    CC: 'Cocos [Keeling] Islands',
    CD: 'Democratic Republic of the Congo',
    CF: 'Central African Republic',
    CG: 'Republic of the Congo',
    CH: 'Switzerland',
    CI: 'Ivory Coast',
    CK: 'Cook Islands',
    CL: 'Chile',
    CM: 'Cameroon',
    CN: 'China',
    CO: 'Colombia',
    CR: 'Costa Rica',
    CU: 'Cuba',
    CV: 'Cape Verde',
    CW: 'Curacao',
    CX: 'Christmas Island',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    DE: 'Germany',
    DJ: 'Djibouti',
    DK: 'Denmark',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    DZ: 'Algeria',
    EC: 'Ecuador',
    EE: 'Estonia',
    EG: 'Egypt',
    EH: 'Western Sahara',
    ER: 'Eritrea',
    ES: 'Spain',
    ET: 'Ethiopia',
    FI: 'Finland',
    FJ: 'Fiji',
    FK: 'Falkland Islands',
    FM: 'Micronesia',
    FO: 'Faroe Islands',
    FR: 'France',
    GA: 'Gabon',
    GB: 'United Kingdom',
    GD: 'Grenada',
    GE: 'Georgia',
    GF: 'French Guiana',
    GG: 'Guernsey',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GL: 'Greenland',
    GM: 'Gambia',
    GN: 'Guinea',
    GP: 'Guadeloupe',
    GQ: 'Equatorial Guinea',
    GR: 'Greece',
    GS: 'South Georgia and the South Sandwich Islands',
    GT: 'Guatemala',
    GU: 'Guam',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HK: 'Hong Kong',
    HM: 'Heard Island and McDonald Islands',
    HN: 'Honduras',
    HR: 'Croatia',
    HT: 'Haiti',
    HU: 'Hungary',
    ID: 'Indonesia',
    IE: 'Ireland',
    IL: 'Israel',
    IM: 'Isle of Man',
    IN: 'India',
    IO: 'British Indian Ocean Territory',
    IQ: 'Iraq',
    IR: 'Iran',
    IS: 'Iceland',
    IT: 'Italy',
    JE: 'Jersey',
    JM: 'Jamaica',
    JO: 'Jordan',
    JP: 'Japan',
    KE: 'Kenya',
    KG: 'Kyrgyzstan',
    KH: 'Cambodia',
    KI: 'Kiribati',
    KM: 'Comoros',
    KN: 'Saint Kitts and Nevis',
    KP: 'North Korea',
    KR: 'South Korea',
    KW: 'Kuwait',
    KY: 'Cayman Islands',
    KZ: 'Kazakhstan',
    LA: 'Laos',
    LB: 'Lebanon',
    LC: 'Saint Lucia',
    LI: 'Liechtenstein',
    LK: 'Sri Lanka',
    LR: 'Liberia',
    LS: 'Lesotho',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    LV: 'Latvia',
    LY: 'Libya',
    MA: 'Morocco',
    MC: 'Monaco',
    MD: 'Moldova',
    ME: 'Montenegro',
    MF: 'Saint Martin',
    MG: 'Madagascar',
    MH: 'Marshall Islands',
    MK: 'Macedonia',
    ML: 'Mali',
    MM: 'Myanmar [Burma]',
    MN: 'Mongolia',
    MO: 'Macao',
    MP: 'Northern Mariana Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MS: 'Montserrat',
    MT: 'Malta',
    MU: 'Mauritius',
    MV: 'Maldives',
    MW: 'Malawi',
    MX: 'Mexico',
    MY: 'Malaysia',
    MZ: 'Mozambique',
    NA: 'Namibia',
    NC: 'New Caledonia',
    NE: 'Niger',
    NF: 'Norfolk Island',
    NG: 'Nigeria',
    NI: 'Nicaragua',
    NL: 'Netherlands',
    NO: 'Norway',
    NP: 'Nepal',
    NR: 'Nauru',
    NU: 'Niue',
    NZ: 'New Zealand',
    OM: 'Oman',
    PA: 'Panama',
    PE: 'Peru',
    PF: 'French Polynesia',
    PG: 'Papua New Guinea',
    PH: 'Philippines',
    PK: 'Pakistan',
    PL: 'Poland',
    PM: 'Saint Pierre and Miquelon',
    PN: 'Pitcairn Islands',
    PR: 'Puerto Rico',
    PS: 'Palestine',
    PT: 'Portugal',
    PW: 'Palau',
    PY: 'Paraguay',
    QA: 'Qatar',
    RE: 'Réunion',
    RO: 'Romania',
    RS: 'Serbia',
    RU: 'Russia',
    RW: 'Rwanda',
    SA: 'Saudi Arabia',
    SB: 'Solomon Islands',
    SC: 'Seychelles',
    SD: 'Sudan',
    SE: 'Sweden',
    SG: 'Singapore',
    SH: 'Saint Helena',
    SI: 'Slovenia',
    SJ: 'Svalbard and Jan Mayen',
    SK: 'Slovakia',
    SL: 'Sierra Leone',
    SM: 'San Marino',
    SN: 'Senegal',
    SO: 'Somalia',
    SR: 'Suriname',
    SS: 'South Sudan',
    ST: 'São Tomé and Príncipe',
    SV: 'El Salvador',
    SX: 'Sint Maarten',
    SY: 'Syria',
    SZ: 'Swaziland',
    TC: 'Turks and Caicos Islands',
    TD: 'Chad',
    TF: 'French Southern Territories',
    TG: 'Togo',
    TH: 'Thailand',
    TJ: 'Tajikistan',
    TK: 'Tokelau',
    TL: 'East Timor',
    TM: 'Turkmenistan',
    TN: 'Tunisia',
    TO: 'Tonga',
    TR: 'Turkey',
    TT: 'Trinidad and Tobago',
    TV: 'Tuvalu',
    TW: 'Taiwan',
    TZ: 'Tanzania',
    UA: 'Ukraine',
    UG: 'Uganda',
    UM: 'U.S. Minor Outlying Islands',
    US: 'United States',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VA: 'Vatican City',
    VC: 'Saint Vincent and the Grenadines',
    VE: 'Venezuela',
    VG: 'British Virgin Islands',
    VI: 'U.S. Virgin Islands',
    VN: 'Vietnam',
    VU: 'Vanuatu',
    WF: 'Wallis and Futuna',
    WS: 'Samoa',
    XK: 'Kosovo',
    YE: 'Yemen',
    YT: 'Mayotte',
    ZA: 'South Africa',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
};


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Admin.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Admin.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const db_2 = __webpack_require__(/*! @pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Admin = class Admin extends db_1.DBObject {
};
tslib_1.__decorate([
    db_2.Schema({ type: String, unique: true }),
    db_2.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "email", void 0);
tslib_1.__decorate([
    db_2.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "name", void 0);
tslib_1.__decorate([
    db_2.Schema({ type: String, select: false }),
    db_2.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "hash", void 0);
tslib_1.__decorate([
    db_2.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "pictureUrl", void 0);
tslib_1.__decorate([
    db_2.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Admin.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    db_2.Schema({
        type: String,
        required: false,
        validate: new RegExp(`^[a-z ,.'-]+$`, 'i'),
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "firstName", void 0);
tslib_1.__decorate([
    db_2.Schema({
        type: String,
        required: false,
        validate: new RegExp(`^[a-z ,.'-]+$`, 'i'),
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "lastName", void 0);
Admin = tslib_1.__decorate([
    db_1.ModelName('Admin'),
    typeorm_1.Entity({ name: 'admins' })
], Admin);
exports.default = Admin;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Carrier.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Carrier.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const CarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! ../enums/CarrierStatus */ "./node_modules/@ever-platform/common/src/enums/CarrierStatus.ts"));
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! ./GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Carrier = class Carrier extends db_1.DBObject {
    constructor(carrier) {
        super(carrier);
        if (carrier && carrier.geoLocation) {
            this.geoLocation = new GeoLocation_1.default(carrier.geoLocation);
        }
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: true,
        validate: new RegExp(`^[a-z ,.'-]+$`, 'i'),
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "firstName", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: true,
        validate: new RegExp(`^[a-z ,.'-]+$`, 'i'),
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "lastName", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Carrier.prototype, "numberOfDeliveries", void 0);
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
    tslib_1.__metadata("design:type", GeoLocation_1.default)
], Carrier.prototype, "geoLocation", void 0);
tslib_1.__decorate([
    db_1.Schema(String),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "apartment", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Carrier.prototype, "isActive", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Carrier.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    db_1.Types.Number(CarrierStatus_1.default.Offline),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Carrier.prototype, "status", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, unique: true, required: true }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "username", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Boolean, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Carrier.prototype, "shared", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false, select: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "hash", void 0);
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "phone", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: true,
        validate: new RegExp(`(http(s?):)s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`),
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "logo", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: false,
        sparse: true,
        unique: true,
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Carrier.prototype, "email", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Array)
], Carrier.prototype, "skippedOrderIds", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Carrier.prototype, "deliveriesCountToday", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Carrier.prototype, "totalDistanceToday", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], Carrier.prototype, "devicesIds", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Carrier.prototype, "isSharedCarrier", void 0);
Carrier = tslib_1.__decorate([
    db_1.ModelName('Carrier'),
    typeorm_1.Entity({ name: 'carriers' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Carrier);
exports.default = Carrier;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Currency.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Currency.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! @pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Currency = class Currency extends db_1.DBObject {
};
tslib_1.__decorate([
    db_1.Schema({ type: String, unique: true }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Currency.prototype, "currencyCode", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Currency.prototype, "isDeleted", void 0);
Currency = tslib_1.__decorate([
    db_1.ModelName('Currency'),
    typeorm_1.Entity({ name: 'currencies' })
], Currency);
exports.default = Currency;
exports.countriesDefaultCurrencies = {
    IL: 'ILS',
    RU: 'RUB',
    US: 'USD',
    BG: 'BGN',
};


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Device.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Device.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Device = class Device extends db_1.DBObject {
};
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "channelId", void 0);
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "type", void 0);
tslib_1.__decorate([
    db_1.Types.String('en-US'),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "language", void 0);
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "uuid", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Device.prototype, "isDeleted", void 0);
Device = tslib_1.__decorate([
    db_1.ModelName('Device'),
    typeorm_1.Entity({ name: 'devices' })
], Device);
exports.default = Device;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/GeoLocation.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const abbreviation_to_country_1 = __webpack_require__(/*! ../data/abbreviation-to-country */ "./node_modules/@ever-platform/common/src/data/abbreviation-to-country.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
exports.locationPreSchema = {
    type: { type: String },
    coordinates: [Number],
};
let GeoLocation = class GeoLocation extends db_1.DBObject {
    get countryName() {
        return getCountryName(this.countryId);
    }
    get isLocValid() {
        return (this.loc.type === 'Point' &&
            typeof lodash_1.default.isArray(this.loc.coordinates) &&
            this.loc.coordinates.length === 2 &&
            lodash_1.default.every(this.loc.coordinates, (c) => lodash_1.default.isFinite(c)));
    }
    get isValid() {
        const notEmptyString = (s) => lodash_1.default.isString(s) && !lodash_1.default.isEmpty(s);
        return lodash_1.default.every([this.city, this.streetAddress, this.house], notEmptyString);
    }
    get coordinates() {
        return {
            lng: this.loc.coordinates[0],
            lat: this.loc.coordinates[1],
        };
    }
    set coordinates(coords) {
        this.loc.coordinates = [coords.lng, coords.lat];
    }
};
tslib_1.__decorate([
    db_1.Schema({ type: Number, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], GeoLocation.prototype, "countryId", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: String }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], GeoLocation.prototype, "postcode", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], GeoLocation.prototype, "apartment", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], GeoLocation.prototype, "city", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], GeoLocation.prototype, "streetAddress", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], GeoLocation.prototype, "house", void 0);
tslib_1.__decorate([
    db_1.Index('2dsphere'),
    db_1.Schema(exports.locationPreSchema),
    tslib_1.__metadata("design:type", Object)
], GeoLocation.prototype, "loc", void 0);
GeoLocation = tslib_1.__decorate([
    db_1.ModelName('GeoLocation')
], GeoLocation);
exports.default = GeoLocation;
var Country;
(function (Country) {
    Country[Country["AD"] = 0] = "AD";
    Country[Country["AE"] = 1] = "AE";
    Country[Country["AF"] = 2] = "AF";
    Country[Country["AG"] = 3] = "AG";
    Country[Country["AI"] = 4] = "AI";
    Country[Country["AL"] = 5] = "AL";
    Country[Country["AM"] = 6] = "AM";
    Country[Country["AO"] = 7] = "AO";
    Country[Country["AQ"] = 8] = "AQ";
    Country[Country["AR"] = 9] = "AR";
    Country[Country["AS"] = 10] = "AS";
    Country[Country["AT"] = 11] = "AT";
    Country[Country["AU"] = 12] = "AU";
    Country[Country["AW"] = 13] = "AW";
    Country[Country["AX"] = 14] = "AX";
    Country[Country["AZ"] = 15] = "AZ";
    Country[Country["BA"] = 16] = "BA";
    Country[Country["BB"] = 17] = "BB";
    Country[Country["BD"] = 18] = "BD";
    Country[Country["BE"] = 19] = "BE";
    Country[Country["BF"] = 20] = "BF";
    Country[Country["BG"] = 21] = "BG";
    Country[Country["BH"] = 22] = "BH";
    Country[Country["BI"] = 23] = "BI";
    Country[Country["BJ"] = 24] = "BJ";
    Country[Country["BL"] = 25] = "BL";
    Country[Country["BM"] = 26] = "BM";
    Country[Country["BN"] = 27] = "BN";
    Country[Country["BO"] = 28] = "BO";
    Country[Country["BQ"] = 29] = "BQ";
    Country[Country["BR"] = 30] = "BR";
    Country[Country["BS"] = 31] = "BS";
    Country[Country["BT"] = 32] = "BT";
    Country[Country["BV"] = 33] = "BV";
    Country[Country["BW"] = 34] = "BW";
    Country[Country["BY"] = 35] = "BY";
    Country[Country["BZ"] = 36] = "BZ";
    Country[Country["CA"] = 37] = "CA";
    Country[Country["CC"] = 38] = "CC";
    Country[Country["CD"] = 39] = "CD";
    Country[Country["CF"] = 40] = "CF";
    Country[Country["CG"] = 41] = "CG";
    Country[Country["CH"] = 42] = "CH";
    Country[Country["CI"] = 43] = "CI";
    Country[Country["CK"] = 44] = "CK";
    Country[Country["CL"] = 45] = "CL";
    Country[Country["CM"] = 46] = "CM";
    Country[Country["CN"] = 47] = "CN";
    Country[Country["CO"] = 48] = "CO";
    Country[Country["CR"] = 49] = "CR";
    Country[Country["CU"] = 50] = "CU";
    Country[Country["CV"] = 51] = "CV";
    Country[Country["CW"] = 52] = "CW";
    Country[Country["CX"] = 53] = "CX";
    Country[Country["CY"] = 54] = "CY";
    Country[Country["CZ"] = 55] = "CZ";
    Country[Country["DE"] = 56] = "DE";
    Country[Country["DJ"] = 57] = "DJ";
    Country[Country["DK"] = 58] = "DK";
    Country[Country["DM"] = 59] = "DM";
    Country[Country["DO"] = 60] = "DO";
    Country[Country["DZ"] = 61] = "DZ";
    Country[Country["EC"] = 62] = "EC";
    Country[Country["EE"] = 63] = "EE";
    Country[Country["EG"] = 64] = "EG";
    Country[Country["EH"] = 65] = "EH";
    Country[Country["ER"] = 66] = "ER";
    Country[Country["ES"] = 67] = "ES";
    Country[Country["ET"] = 68] = "ET";
    Country[Country["FI"] = 69] = "FI";
    Country[Country["FJ"] = 70] = "FJ";
    Country[Country["FK"] = 71] = "FK";
    Country[Country["FM"] = 72] = "FM";
    Country[Country["FO"] = 73] = "FO";
    Country[Country["FR"] = 74] = "FR";
    Country[Country["GA"] = 75] = "GA";
    Country[Country["GB"] = 76] = "GB";
    Country[Country["GD"] = 77] = "GD";
    Country[Country["GE"] = 78] = "GE";
    Country[Country["GF"] = 79] = "GF";
    Country[Country["GG"] = 80] = "GG";
    Country[Country["GH"] = 81] = "GH";
    Country[Country["GI"] = 82] = "GI";
    Country[Country["GL"] = 83] = "GL";
    Country[Country["GM"] = 84] = "GM";
    Country[Country["GN"] = 85] = "GN";
    Country[Country["GP"] = 86] = "GP";
    Country[Country["GQ"] = 87] = "GQ";
    Country[Country["GR"] = 88] = "GR";
    Country[Country["GS"] = 89] = "GS";
    Country[Country["GT"] = 90] = "GT";
    Country[Country["GU"] = 91] = "GU";
    Country[Country["GW"] = 92] = "GW";
    Country[Country["GY"] = 93] = "GY";
    Country[Country["HK"] = 94] = "HK";
    Country[Country["HM"] = 95] = "HM";
    Country[Country["HN"] = 96] = "HN";
    Country[Country["HR"] = 97] = "HR";
    Country[Country["HT"] = 98] = "HT";
    Country[Country["HU"] = 99] = "HU";
    Country[Country["ID"] = 100] = "ID";
    Country[Country["IE"] = 101] = "IE";
    Country[Country["IL"] = 102] = "IL";
    Country[Country["IM"] = 103] = "IM";
    Country[Country["IN"] = 104] = "IN";
    Country[Country["IO"] = 105] = "IO";
    Country[Country["IQ"] = 106] = "IQ";
    Country[Country["IR"] = 107] = "IR";
    Country[Country["IS"] = 108] = "IS";
    Country[Country["IT"] = 109] = "IT";
    Country[Country["JE"] = 110] = "JE";
    Country[Country["JM"] = 111] = "JM";
    Country[Country["JO"] = 112] = "JO";
    Country[Country["JP"] = 113] = "JP";
    Country[Country["KE"] = 114] = "KE";
    Country[Country["KG"] = 115] = "KG";
    Country[Country["KH"] = 116] = "KH";
    Country[Country["KI"] = 117] = "KI";
    Country[Country["KM"] = 118] = "KM";
    Country[Country["KN"] = 119] = "KN";
    Country[Country["KP"] = 120] = "KP";
    Country[Country["KR"] = 121] = "KR";
    Country[Country["KW"] = 122] = "KW";
    Country[Country["KY"] = 123] = "KY";
    Country[Country["KZ"] = 124] = "KZ";
    Country[Country["LA"] = 125] = "LA";
    Country[Country["LB"] = 126] = "LB";
    Country[Country["LC"] = 127] = "LC";
    Country[Country["LI"] = 128] = "LI";
    Country[Country["LK"] = 129] = "LK";
    Country[Country["LR"] = 130] = "LR";
    Country[Country["LS"] = 131] = "LS";
    Country[Country["LT"] = 132] = "LT";
    Country[Country["LU"] = 133] = "LU";
    Country[Country["LV"] = 134] = "LV";
    Country[Country["LY"] = 135] = "LY";
    Country[Country["MA"] = 136] = "MA";
    Country[Country["MC"] = 137] = "MC";
    Country[Country["MD"] = 138] = "MD";
    Country[Country["ME"] = 139] = "ME";
    Country[Country["MF"] = 140] = "MF";
    Country[Country["MG"] = 141] = "MG";
    Country[Country["MH"] = 142] = "MH";
    Country[Country["MK"] = 143] = "MK";
    Country[Country["ML"] = 144] = "ML";
    Country[Country["MM"] = 145] = "MM";
    Country[Country["MN"] = 146] = "MN";
    Country[Country["MO"] = 147] = "MO";
    Country[Country["MP"] = 148] = "MP";
    Country[Country["MQ"] = 149] = "MQ";
    Country[Country["MR"] = 150] = "MR";
    Country[Country["MS"] = 151] = "MS";
    Country[Country["MT"] = 152] = "MT";
    Country[Country["MU"] = 153] = "MU";
    Country[Country["MV"] = 154] = "MV";
    Country[Country["MW"] = 155] = "MW";
    Country[Country["MX"] = 156] = "MX";
    Country[Country["MY"] = 157] = "MY";
    Country[Country["MZ"] = 158] = "MZ";
    Country[Country["NA"] = 159] = "NA";
    Country[Country["NC"] = 160] = "NC";
    Country[Country["NE"] = 161] = "NE";
    Country[Country["NF"] = 162] = "NF";
    Country[Country["NG"] = 163] = "NG";
    Country[Country["NI"] = 164] = "NI";
    Country[Country["NL"] = 165] = "NL";
    Country[Country["NO"] = 166] = "NO";
    Country[Country["NP"] = 167] = "NP";
    Country[Country["NR"] = 168] = "NR";
    Country[Country["NU"] = 169] = "NU";
    Country[Country["NZ"] = 170] = "NZ";
    Country[Country["OM"] = 171] = "OM";
    Country[Country["PA"] = 172] = "PA";
    Country[Country["PE"] = 173] = "PE";
    Country[Country["PF"] = 174] = "PF";
    Country[Country["PG"] = 175] = "PG";
    Country[Country["PH"] = 176] = "PH";
    Country[Country["PK"] = 177] = "PK";
    Country[Country["PL"] = 178] = "PL";
    Country[Country["PM"] = 179] = "PM";
    Country[Country["PN"] = 180] = "PN";
    Country[Country["PR"] = 181] = "PR";
    Country[Country["PS"] = 182] = "PS";
    Country[Country["PT"] = 183] = "PT";
    Country[Country["PW"] = 184] = "PW";
    Country[Country["PY"] = 185] = "PY";
    Country[Country["QA"] = 186] = "QA";
    Country[Country["RE"] = 187] = "RE";
    Country[Country["RO"] = 188] = "RO";
    Country[Country["RS"] = 189] = "RS";
    Country[Country["RU"] = 190] = "RU";
    Country[Country["RW"] = 191] = "RW";
    Country[Country["SA"] = 192] = "SA";
    Country[Country["SB"] = 193] = "SB";
    Country[Country["SC"] = 194] = "SC";
    Country[Country["SD"] = 195] = "SD";
    Country[Country["SE"] = 196] = "SE";
    Country[Country["SG"] = 197] = "SG";
    Country[Country["SH"] = 198] = "SH";
    Country[Country["SI"] = 199] = "SI";
    Country[Country["SJ"] = 200] = "SJ";
    Country[Country["SK"] = 201] = "SK";
    Country[Country["SL"] = 202] = "SL";
    Country[Country["SM"] = 203] = "SM";
    Country[Country["SN"] = 204] = "SN";
    Country[Country["SO"] = 205] = "SO";
    Country[Country["SR"] = 206] = "SR";
    Country[Country["SS"] = 207] = "SS";
    Country[Country["ST"] = 208] = "ST";
    Country[Country["SV"] = 209] = "SV";
    Country[Country["SX"] = 210] = "SX";
    Country[Country["SY"] = 211] = "SY";
    Country[Country["SZ"] = 212] = "SZ";
    Country[Country["TC"] = 213] = "TC";
    Country[Country["TD"] = 214] = "TD";
    Country[Country["TF"] = 215] = "TF";
    Country[Country["TG"] = 216] = "TG";
    Country[Country["TH"] = 217] = "TH";
    Country[Country["TJ"] = 218] = "TJ";
    Country[Country["TK"] = 219] = "TK";
    Country[Country["TL"] = 220] = "TL";
    Country[Country["TM"] = 221] = "TM";
    Country[Country["TN"] = 222] = "TN";
    Country[Country["TO"] = 223] = "TO";
    Country[Country["TR"] = 224] = "TR";
    Country[Country["TT"] = 225] = "TT";
    Country[Country["TV"] = 226] = "TV";
    Country[Country["TW"] = 227] = "TW";
    Country[Country["TZ"] = 228] = "TZ";
    Country[Country["UA"] = 229] = "UA";
    Country[Country["UG"] = 230] = "UG";
    Country[Country["UM"] = 231] = "UM";
    Country[Country["US"] = 232] = "US";
    Country[Country["UY"] = 233] = "UY";
    Country[Country["UZ"] = 234] = "UZ";
    Country[Country["VA"] = 235] = "VA";
    Country[Country["VC"] = 236] = "VC";
    Country[Country["VE"] = 237] = "VE";
    Country[Country["VG"] = 238] = "VG";
    Country[Country["VI"] = 239] = "VI";
    Country[Country["VN"] = 240] = "VN";
    Country[Country["VU"] = 241] = "VU";
    Country[Country["WF"] = 242] = "WF";
    Country[Country["WS"] = 243] = "WS";
    Country[Country["XK"] = 244] = "XK";
    Country[Country["YE"] = 245] = "YE";
    Country[Country["YT"] = 246] = "YT";
    Country[Country["ZA"] = 247] = "ZA";
    Country[Country["ZM"] = 248] = "ZM";
    Country[Country["ZW"] = 249] = "ZW";
})(Country = exports.Country || (exports.Country = {}));
function getCountryName(country) {
    return abbreviation_to_country_1.countries[Country[country]] || null;
}
exports.getCountryName = getCountryName;
exports.countriesIdsToNamesArray = Object.keys(abbreviation_to_country_1.countries).map((abbr) => {
    return { id: Country[abbr], name: getCountryName(+Country[abbr]) };
});


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Invite.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Invite.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! ./GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Invite = class Invite extends db_1.DBObject {
    constructor(invite) {
        super(invite);
        if (invite && invite.geoLocation) {
            this.geoLocation = new GeoLocation_1.default(invite.geoLocation);
        }
    }
    toInviteRequestFindObject() {
        return {
            geoLocation: this.geoLocation,
            apartment: this.apartment,
        };
    }
};
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "code", void 0);
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "apartment", void 0);
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
    tslib_1.__metadata("design:type", GeoLocation_1.default)
], Invite.prototype, "geoLocation", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Invite.prototype, "isDeleted", void 0);
Invite = tslib_1.__decorate([
    db_1.ModelName('Invite'),
    typeorm_1.Entity({ name: 'invites' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Invite);
exports.default = Invite;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/InviteRequest.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/InviteRequest.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! ./GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let InviteRequest = class InviteRequest extends db_1.DBObject {
    constructor(inviteRequest) {
        super(inviteRequest);
        if (inviteRequest && inviteRequest.geoLocation) {
            this.geoLocation = new GeoLocation_1.default(inviteRequest.geoLocation);
        }
    }
    toAddressString() {
        if (!this.geoLocation) {
            return null;
        }
        let address = `${this.geoLocation.streetAddress} ${this.geoLocation.house}`;
        if (this.apartment) {
            address += `/${this.apartment}`;
        }
        address += `, ${this.geoLocation.city}`;
        return address;
    }
    toEnterByLocationToken() {
        if (this.geoLocation.house != null &&
            this.geoLocation.streetAddress != null &&
            this.geoLocation.city != null &&
            this.geoLocation.countryId != null) {
            return {
                apartment: this.apartment,
                house: this.geoLocation.house,
                streetAddress: this.geoLocation.streetAddress,
                city: this.geoLocation.city,
                postcode: this.geoLocation.postcode,
                countryId: this.geoLocation.countryId,
            };
        }
        else {
            throw new Error('GeoLocation is not full!');
        }
    }
};
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
    tslib_1.__metadata("design:type", GeoLocation_1.default)
], InviteRequest.prototype, "geoLocation", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: String }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], InviteRequest.prototype, "deviceId", void 0);
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], InviteRequest.prototype, "apartment", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Boolean, default: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], InviteRequest.prototype, "isManual", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], InviteRequest.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], InviteRequest.prototype, "isInvited", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Date, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], InviteRequest.prototype, "invitedDate", void 0);
InviteRequest = tslib_1.__decorate([
    db_1.ModelName('InviteRequest'),
    typeorm_1.Entity({ name: 'inviterequests' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], InviteRequest);
exports.default = InviteRequest;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Order.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Order.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const UserOrder_1 = tslib_1.__importDefault(__webpack_require__(/*! ./UserOrder */ "./node_modules/@ever-platform/common/src/entities/UserOrder.ts"));
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const OrderProduct_1 = tslib_1.__importDefault(__webpack_require__(/*! ./OrderProduct */ "./node_modules/@ever-platform/common/src/entities/OrderProduct.ts"));
const Carrier_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Carrier */ "./node_modules/@ever-platform/common/src/entities/Carrier.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const OrderWarehouseStatus_1 = tslib_1.__importStar(__webpack_require__(/*! ../enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
const OrderCarrierStatus_1 = tslib_1.__importStar(__webpack_require__(/*! ../enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const OrderStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! ../enums/OrderStatus */ "./node_modules/@ever-platform/common/src/enums/OrderStatus.ts"));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const DeliveryType_1 = tslib_1.__importDefault(__webpack_require__(/*! ../enums/DeliveryType */ "./node_modules/@ever-platform/common/src/enums/DeliveryType.ts"));
let Order = class Order extends db_1.DBObject {
    constructor(order) {
        super(order);
        if (order) {
            if (order.user) {
                this.user = new UserOrder_1.default(order.user);
            }
            if (order.warehouse &&
                order.warehouse != null &&
                typeof order.warehouse !== 'string') {
                this.warehouse = new Warehouse_1.default(order.warehouse);
            }
            if (order.carrier &&
                order.carrier != null &&
                typeof order.carrier !== 'string') {
                this.carrier = new Carrier_1.default(order.carrier);
            }
            if (order.products && order.products != null) {
                this.products = lodash_1.default.map(order.products, (orderProduct) => {
                    return new OrderProduct_1.default(orderProduct);
                });
            }
        }
    }
    get warehouseId() {
        if (typeof this.warehouse === 'string') {
            return this.warehouse;
        }
        else {
            return this.warehouse.id;
        }
    }
    get isCompleted() {
        return ((this.isPaid && this.status === OrderStatus_1.default.Delivered) ||
            this.isCancelled);
    }
    get carrierId() {
        if (this.carrier == null) {
            return null;
        }
        else if (typeof this.carrier === 'string') {
            return this.carrier;
        }
        else {
            return this.carrier.id;
        }
    }
    get warehouseStatusText() {
        return OrderWarehouseStatus_1.warehouseStatusToString(this.warehouseStatus);
    }
    get carrierStatusText() {
        return OrderCarrierStatus_1.carrierStatusToString(this.carrierStatus);
    }
    get totalPrice() {
        return lodash_1.default.sum(lodash_1.default.map(this.products, (product) => product.count * product.price));
    }
    getStatusText(language) {
        switch (language) {
            case 'en-US':
                return this._getStatusTextEnglish();
            case 'he-IL':
                return this._getStatusTextHebrew();
            case 'ru-RU':
                return this._getStatusTextRussian();
            case 'bg-BG':
                return this._getStatusTextBulgarian();
            case 'es-ES':
                return this._getStatusTextSpanish();
            case 'it-IT':
                return this._getStatusTextItalian();
            case 'fr-FR':
                return this._getStatusTextFrench();
            default:
                return 'BAD_STATUS';
        }
    }
    get status() {
        if (this.carrier == null ||
            this.carrierStatus <= OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
            if (this.warehouseStatus >= 200) {
                return OrderStatus_1.default.WarehouseIssue;
            }
            else if (this.isCancelled) {
                return OrderStatus_1.default.CanceledWhileWarehousePreparation;
            }
            else {
                return OrderStatus_1.default.WarehousePreparation;
            }
        }
        else {
            if (this.carrierStatus >= 200) {
                return OrderStatus_1.default.CarrierIssue;
            }
            else if (this.isCancelled) {
                return OrderStatus_1.default.CanceledWhileInDelivery;
            }
            else if (this.isPaid &&
                this.carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted) {
                return OrderStatus_1.default.Delivered;
            }
            else {
                return OrderStatus_1.default.InDelivery;
            }
        }
    }
    _getStatusTextEnglish() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Preparation';
            case OrderStatus_1.default.InDelivery:
                return 'In Delivery';
            case OrderStatus_1.default.Delivered:
                return 'Delivered';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Cancelled';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Preparation Issue';
            case OrderStatus_1.default.CarrierIssue:
                return 'Delivery Issue';
            default:
                return 'BAD_STATUS';
        }
    }
    _getStatusTextBulgarian() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Подготовка';
            case OrderStatus_1.default.InDelivery:
                return 'Доставя се';
            case OrderStatus_1.default.Delivered:
                return 'Доставено';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Отказана';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Проблем при подготовката';
            case OrderStatus_1.default.CarrierIssue:
                return 'Проблем при доставката';
            default:
                return 'Проблем с поръчката';
        }
    }
    _getStatusTextHebrew() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'בהכנה';
            case OrderStatus_1.default.InDelivery:
                return 'במשלוח';
            case OrderStatus_1.default.Delivered:
                return 'הסתיים בצלחה';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'התבטל';
            case OrderStatus_1.default.WarehouseIssue:
                return 'בעייה בהכנה';
            case OrderStatus_1.default.CarrierIssue:
                return 'בעייה במשלוח';
            default:
                return 'BAD_STATUS';
        }
    }
    _getStatusTextRussian() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'В подготовке';
            case OrderStatus_1.default.InDelivery:
                return 'В доставки';
            case OrderStatus_1.default.Delivered:
                return 'Доставлено';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Отменено';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Проблема с подготовкой';
            case OrderStatus_1.default.CarrierIssue:
                return 'Проблема с доставкой';
            default:
                return 'BAD_STATUS';
        }
    }
    _getStatusTextSpanish() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Preparación';
            case OrderStatus_1.default.InDelivery:
                return 'En la entrega';
            case OrderStatus_1.default.Delivered:
                return 'Entregado';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Cancelado';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Problema de preparación';
            case OrderStatus_1.default.CarrierIssue:
                return 'Problema de envio';
            default:
                return 'BAD_STATUS';
        }
    }
    _getStatusTextItalian() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Preparazione';
            case OrderStatus_1.default.InDelivery:
                return 'In consegna';
            case OrderStatus_1.default.Delivered:
                return 'consegnato';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Annullato';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Problema di preparazione';
            case OrderStatus_1.default.CarrierIssue:
                return 'Problema di consegna';
            default:
                return 'BAD_STATUS';
        }
    }
    _getStatusTextFrench() {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Préparation';
            case OrderStatus_1.default.InDelivery:
                return 'En livraison';
            case OrderStatus_1.default.Delivered:
                return 'Livré';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Annulé';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Problème de préparation';
            case OrderStatus_1.default.CarrierIssue:
                return 'Problème de livraison';
            default:
                return 'BAD_STATUS';
        }
    }
};
tslib_1.__decorate([
    db_1.Index(1),
    db_1.Schema(db_1.getSchema(UserOrder_1.default)),
    tslib_1.__metadata("design:type", UserOrder_1.default)
], Order.prototype, "user", void 0);
tslib_1.__decorate([
    db_1.Index(1),
    db_1.Types.Ref(Warehouse_1.default),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "warehouse", void 0);
tslib_1.__decorate([
    db_1.Schema([db_1.getSchema(OrderProduct_1.default)]),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "products", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "isConfirmed", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "isCancelled", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "isPaid", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Date, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "deliveryTime", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Date, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "finishedProcessingTime", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Date, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "startDeliveryTime", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "deliveryTimeEstimate", void 0);
tslib_1.__decorate([
    db_1.Types.Number(OrderWarehouseStatus_1.default.NoStatus),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "warehouseStatus", void 0);
tslib_1.__decorate([
    db_1.Types.Number(OrderCarrierStatus_1.default.NoCarrier),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "carrierStatus", void 0);
tslib_1.__decorate([
    db_1.Types.Ref(Carrier_1.default, { required: false }),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "carrier", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "stripeChargeId", void 0);
tslib_1.__decorate([
    db_1.Types.Number(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "orderNumber", void 0);
tslib_1.__decorate([
    db_1.Types.Number(DeliveryType_1.default.Delivery),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "orderType", void 0);
Order = tslib_1.__decorate([
    db_1.ModelName('Order'),
    typeorm_1.Entity({ name: 'orders' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Order);
exports.default = Order;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/OrderProduct.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/OrderProduct.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Product_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Product */ "./node_modules/@ever-platform/common/src/entities/Product.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let OrderProduct = class OrderProduct extends db_1.DBObject {
    constructor(orderProduct) {
        super(orderProduct);
        if (orderProduct && orderProduct.product) {
            this.product = new Product_1.default(orderProduct.product);
        }
    }
};
tslib_1.__decorate([
    db_1.Types.Number(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "price", void 0);
tslib_1.__decorate([
    db_1.Types.Number(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "initialPrice", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "count", void 0);
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(Product_1.default)),
    tslib_1.__metadata("design:type", Product_1.default)
], OrderProduct.prototype, "product", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], OrderProduct.prototype, "isManufacturing", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], OrderProduct.prototype, "isCarrierRequired", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], OrderProduct.prototype, "isDeliveryRequired", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Boolean }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], OrderProduct.prototype, "isTakeaway", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Number }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "deliveryTimeMin", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Number }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], OrderProduct.prototype, "deliveryTimeMax", void 0);
OrderProduct = tslib_1.__decorate([
    db_1.ModelName('OrderProduct'),
    tslib_1.__metadata("design:paramtypes", [Object])
], OrderProduct);
exports.default = OrderProduct;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/PaymentGateway.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/PaymentGateway.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! @pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const PaymentGateways_1 = tslib_1.__importDefault(__webpack_require__(/*! ../enums/PaymentGateways */ "./node_modules/@ever-platform/common/src/enums/PaymentGateways.ts"));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let PaymentGateway = class PaymentGateway extends db_1.DBObject {
};
tslib_1.__decorate([
    db_1.Types.Number(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], PaymentGateway.prototype, "paymentGateway", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Object }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Object)
], PaymentGateway.prototype, "configureObject", void 0);
PaymentGateway = tslib_1.__decorate([
    db_1.ModelName('PaymentGateway')
], PaymentGateway);
exports.default = PaymentGateway;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Product.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Product.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const ProductsCategory_1 = tslib_1.__importDefault(__webpack_require__(/*! ./ProductsCategory */ "./node_modules/@ever-platform/common/src/entities/ProductsCategory.ts"));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Product = class Product extends db_1.DBObject {
};
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "title", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "descriptionHTML", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "details", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "detailsHTML", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "images", void 0);
tslib_1.__decorate([
    db_1.Types.Ref([ProductsCategory_1.default]),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "categories", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Product.prototype, "isDeleted", void 0);
Product = tslib_1.__decorate([
    db_1.ModelName('Product'),
    typeorm_1.Entity({ name: 'products' })
], Product);
exports.default = Product;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/ProductInfo.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/ProductInfo.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const WarehouseProduct_1 = tslib_1.__importDefault(__webpack_require__(/*! ./WarehouseProduct */ "./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts"));
class ProductInfo {
    constructor(productInfo) {
        if (productInfo) {
            lodash_1.default.assign(this, productInfo);
            if (productInfo.warehouseProduct) {
                this.warehouseProduct = new WarehouseProduct_1.default(productInfo.warehouseProduct);
            }
        }
    }
    get product() {
        return this.warehouseProduct.product;
    }
    getOrderProductCreateObject(count) {
        return {
            initialPrice: this.warehouseProduct.initialPrice,
            price: this.warehouseProduct.price,
            deliveryTimeMin: this.warehouseProduct.deliveryTimeMin,
            deliveryTimeMax: this.warehouseProduct.deliveryTimeMax,
            count,
            product: this.warehouseProduct.product,
        };
    }
}
exports.default = ProductInfo;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/ProductsCategory.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/ProductsCategory.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ProductsCategory = class ProductsCategory extends db_1.DBObject {
};
tslib_1.__decorate([
    db_1.Schema({ type: Array }),
    tslib_1.__metadata("design:type", Array)
], ProductsCategory.prototype, "name", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: false,
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ProductsCategory.prototype, "image", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], ProductsCategory.prototype, "isDeleted", void 0);
ProductsCategory = tslib_1.__decorate([
    db_1.ModelName('ProductCategory'),
    typeorm_1.Entity({ name: 'productcategories' })
], ProductsCategory);
exports.default = ProductsCategory;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/User.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/User.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! ./GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let User = class User extends db_1.DBObject {
    constructor(user) {
        super(user);
        if (user && user.geoLocation) {
            this.geoLocation = new GeoLocation_1.default(user.geoLocation);
        }
    }
    get fullAddress() {
        return (`${this.geoLocation.city}, ${this.geoLocation.streetAddress} ` +
            `${this.apartment}/${this.geoLocation.house}`);
    }
};
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "image", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: false,
        sparse: true,
        unique: true,
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: false,
        select: false,
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "hash", void 0);
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
    tslib_1.__metadata("design:type", GeoLocation_1.default)
], User.prototype, "geoLocation", void 0);
tslib_1.__decorate([
    db_1.Schema(String),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "apartment", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "devicesIds", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "socialIds", void 0);
tslib_1.__decorate([
    db_1.Schema(String),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    db_1.Schema(Boolean),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isRegistrationCompleted", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isBanned", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
User = tslib_1.__decorate([
    db_1.ModelName('User'),
    typeorm_1.Entity({ name: 'users' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.default = User;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/UserOrder.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/UserOrder.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! ./GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UserOrder = class UserOrder extends db_1.DBObject {
    constructor(userOrder) {
        super(userOrder);
        if (userOrder && userOrder.geoLocation) {
            this.geoLocation = new GeoLocation_1.default(userOrder.geoLocation);
        }
    }
    get fullAddress() {
        return (`${this.geoLocation.city}, ${this.geoLocation.streetAddress} ` +
            `${this.apartment}/${this.geoLocation.house}`);
    }
};
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "firstName", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "lastName", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "image", void 0);
tslib_1.__decorate([
    db_1.Schema({
        type: String,
        required: false,
        sparse: true,
    }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "email", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false, select: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "hash", void 0);
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
    tslib_1.__metadata("design:type", GeoLocation_1.default)
], UserOrder.prototype, "geoLocation", void 0);
tslib_1.__decorate([
    db_1.Schema(String),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "apartment", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], UserOrder.prototype, "devicesIds", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], UserOrder.prototype, "socialIds", void 0);
tslib_1.__decorate([
    db_1.Schema(String),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "phone", void 0);
tslib_1.__decorate([
    db_1.Schema(Boolean),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], UserOrder.prototype, "isRegistrationCompleted", void 0);
UserOrder = tslib_1.__decorate([
    db_1.ModelName('UserOrder'),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserOrder);
exports.default = UserOrder;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/Warehouse.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! ./GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const WarehouseProduct_1 = tslib_1.__importDefault(__webpack_require__(/*! ./WarehouseProduct */ "./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts"));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const OrderBarcodeTypes_1 = tslib_1.__importDefault(__webpack_require__(/*! ../enums/OrderBarcodeTypes */ "./node_modules/@ever-platform/common/src/enums/OrderBarcodeTypes.ts"));
const PaymentGateway_1 = tslib_1.__importDefault(__webpack_require__(/*! ./PaymentGateway */ "./node_modules/@ever-platform/common/src/entities/PaymentGateway.ts"));
let Warehouse = class Warehouse extends db_1.DBObject {
    constructor(warehouse) {
        super(warehouse);
        if (warehouse) {
            if (warehouse.geoLocation) {
                this.geoLocation = new GeoLocation_1.default(warehouse.geoLocation);
            }
            if (warehouse.products) {
                this.products = lodash_1.default.map(warehouse.products, (warehouseProduct) => {
                    return new WarehouseProduct_1.default(warehouseProduct);
                });
            }
            if (!warehouse.barcodeData) {
                this.barcodeData = warehouse._id.toString();
            }
        }
    }
};
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "isActive", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "isPaymentEnabled", void 0);
tslib_1.__decorate([
    db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
    tslib_1.__metadata("design:type", GeoLocation_1.default)
], Warehouse.prototype, "geoLocation", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Object }),
    tslib_1.__metadata("design:type", Object)
], Warehouse.prototype, "deliveryAreas", void 0);
tslib_1.__decorate([
    db_1.Schema([db_1.getSchema(WarehouseProduct_1.default)]),
    tslib_1.__metadata("design:type", Array)
], Warehouse.prototype, "products", void 0);
tslib_1.__decorate([
    db_1.Types.String(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "name", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "logo", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, unique: true }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "username", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false, select: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "hash", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "contactEmail", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "contactPhone", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "ordersPhone", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "ordersEmail", void 0);
tslib_1.__decorate([
    db_1.Schema([Number]),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Array)
], Warehouse.prototype, "forwardOrdersUsing", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "isManufacturing", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(true),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "isCarrierRequired", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], Warehouse.prototype, "devicesIds", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], Warehouse.prototype, "usedCarriersIds", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "hasRestrictedCarriers", void 0);
tslib_1.__decorate([
    db_1.Schema([String]),
    tslib_1.__metadata("design:type", Array)
], Warehouse.prototype, "carriersIds", void 0);
tslib_1.__decorate([
    db_1.Types.Boolean(false),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Boolean, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "productsDelivery", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Boolean, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "productsTakeaway", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Number, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Warehouse.prototype, "orderBarcodeType", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: String, unique: true, sparse: true }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Warehouse.prototype, "barcodeData", void 0);
tslib_1.__decorate([
    db_1.Schema([db_1.getSchema(PaymentGateway_1.default)]),
    tslib_1.__metadata("design:type", Array)
], Warehouse.prototype, "paymentGateways", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Boolean, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "useOnlyRestrictedCarriersForDelivery", void 0);
tslib_1.__decorate([
    db_1.Schema({ type: Boolean, required: false }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Warehouse.prototype, "preferRestrictedCarriersForDelivery", void 0);
Warehouse = tslib_1.__decorate([
    db_1.ModelName('Warehouse'),
    typeorm_1.Entity({ name: 'warehouses' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Warehouse);
exports.default = Warehouse;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Product_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Product */ "./node_modules/@ever-platform/common/src/entities/Product.ts"));
const db_1 = __webpack_require__(/*! ../@pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let WarehouseProduct = class WarehouseProduct extends db_1.DBObject {
    constructor(warehouseProduct) {
        super(warehouseProduct);
        if (typeof warehouseProduct.product !== 'string') {
            this.product = new Product_1.default(warehouseProduct.product);
        }
    }
    get productId() {
        if (typeof this.product === 'string') {
            return this.product;
        }
        else {
            return this.product.id;
        }
    }
};
tslib_1.__decorate([
    db_1.Types.Number(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], WarehouseProduct.prototype, "price", void 0);
tslib_1.__decorate([
    db_1.Types.Number(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], WarehouseProduct.prototype, "initialPrice", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], WarehouseProduct.prototype, "count", void 0);
tslib_1.__decorate([
    db_1.Types.Number(0),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], WarehouseProduct.prototype, "soldCount", void 0);
tslib_1.__decorate([
    db_1.Types.Ref(Product_1.default),
    tslib_1.__metadata("design:type", Object)
], WarehouseProduct.prototype, "product", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    db_1.Types.Boolean(true),
    tslib_1.__metadata("design:type", Boolean)
], WarehouseProduct.prototype, "isManufacturing", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    db_1.Types.Boolean(true),
    tslib_1.__metadata("design:type", Boolean)
], WarehouseProduct.prototype, "isCarrierRequired", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    db_1.Types.Boolean(true),
    tslib_1.__metadata("design:type", Boolean)
], WarehouseProduct.prototype, "isDeliveryRequired", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Boolean }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], WarehouseProduct.prototype, "isTakeaway", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Number }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], WarehouseProduct.prototype, "deliveryTimeMin", void 0);
tslib_1.__decorate([
    db_1.Schema({ required: false, type: Number }),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], WarehouseProduct.prototype, "deliveryTimeMax", void 0);
WarehouseProduct = tslib_1.__decorate([
    db_1.ModelName('WarehouseProduct'),
    tslib_1.__metadata("design:paramtypes", [Object])
], WarehouseProduct);
exports.default = WarehouseProduct;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/CarrierStatus.ts":
/*!***********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/CarrierStatus.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CarrierStatus;
(function (CarrierStatus) {
    CarrierStatus[CarrierStatus["Online"] = 0] = "Online";
    CarrierStatus[CarrierStatus["Offline"] = 1] = "Offline";
    CarrierStatus[CarrierStatus["Blocked"] = 2] = "Blocked";
})(CarrierStatus || (CarrierStatus = {}));
exports.default = CarrierStatus;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/DeliveryType.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/DeliveryType.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryType;
(function (DeliveryType) {
    DeliveryType[DeliveryType["Delivery"] = 0] = "Delivery";
    DeliveryType[DeliveryType["Takeaway"] = 1] = "Takeaway";
})(DeliveryType || (DeliveryType = {}));
exports.default = DeliveryType;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/OrderBarcodeTypes.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/OrderBarcodeTypes.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderBarcodeTypes;
(function (OrderBarcodeTypes) {
    OrderBarcodeTypes[OrderBarcodeTypes["QR"] = 0] = "QR";
    OrderBarcodeTypes[OrderBarcodeTypes["CODE128"] = 1] = "CODE128";
    OrderBarcodeTypes[OrderBarcodeTypes["CODE39"] = 2] = "CODE39";
    OrderBarcodeTypes[OrderBarcodeTypes["pharmacode"] = 3] = "pharmacode";
    OrderBarcodeTypes[OrderBarcodeTypes["MSI"] = 4] = "MSI";
})(OrderBarcodeTypes || (OrderBarcodeTypes = {}));
function orderBarcodeTypesToString(status) {
    switch (status) {
        case OrderBarcodeTypes.QR:
            return 'QR code';
        case OrderBarcodeTypes.CODE128:
            return 'CODE128';
        case OrderBarcodeTypes.CODE39:
            return 'CODE39';
        case OrderBarcodeTypes.pharmacode:
            return 'pharmacode';
        case OrderBarcodeTypes.MSI:
            return 'MSI';
        default:
            return 'BAD_STATUS';
    }
}
exports.orderBarcodeTypesToString = orderBarcodeTypesToString;
exports.default = OrderBarcodeTypes;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderCarrierStatus;
(function (OrderCarrierStatus) {
    OrderCarrierStatus[OrderCarrierStatus["NoCarrier"] = 0] = "NoCarrier";
    OrderCarrierStatus[OrderCarrierStatus["CarrierSelectedOrder"] = 1] = "CarrierSelectedOrder";
    OrderCarrierStatus[OrderCarrierStatus["CarrierPickedUpOrder"] = 2] = "CarrierPickedUpOrder";
    OrderCarrierStatus[OrderCarrierStatus["CarrierStartDelivery"] = 3] = "CarrierStartDelivery";
    OrderCarrierStatus[OrderCarrierStatus["CarrierArrivedToCustomer"] = 4] = "CarrierArrivedToCustomer";
    OrderCarrierStatus[OrderCarrierStatus["DeliveryCompleted"] = 5] = "DeliveryCompleted";
    OrderCarrierStatus[OrderCarrierStatus["IssuesDuringDelivery"] = 204] = "IssuesDuringDelivery";
    OrderCarrierStatus[OrderCarrierStatus["ClientRefuseTakingOrder"] = 205] = "ClientRefuseTakingOrder";
})(OrderCarrierStatus || (OrderCarrierStatus = {}));
function carrierStatusToString(status) {
    switch (status) {
        case OrderCarrierStatus.NoCarrier:
            return 'No Carrier';
        case OrderCarrierStatus.CarrierSelectedOrder:
            return 'Order Selected For Delivery';
        case OrderCarrierStatus.CarrierPickedUpOrder:
            return 'Order Picked Up';
        case OrderCarrierStatus.CarrierStartDelivery:
            return 'Order In Delivery';
        case OrderCarrierStatus.CarrierArrivedToCustomer:
            return 'Arrived To Client';
        case OrderCarrierStatus.DeliveryCompleted:
            return 'Delivered';
        case OrderCarrierStatus.IssuesDuringDelivery:
            return 'Delivery Issues';
        case OrderCarrierStatus.ClientRefuseTakingOrder:
            return 'Client Refuse to Take Order';
        default:
            return 'BAD_STATUS';
    }
}
exports.carrierStatusToString = carrierStatusToString;
exports.default = OrderCarrierStatus;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/OrderStatus.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/OrderStatus.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["WarehousePreparation"] = 0] = "WarehousePreparation";
    OrderStatus[OrderStatus["InDelivery"] = 1] = "InDelivery";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["CanceledWhileWarehousePreparation"] = 200] = "CanceledWhileWarehousePreparation";
    OrderStatus[OrderStatus["CanceledWhileInDelivery"] = 201] = "CanceledWhileInDelivery";
    OrderStatus[OrderStatus["WarehouseIssue"] = 202] = "WarehouseIssue";
    OrderStatus[OrderStatus["CarrierIssue"] = 203] = "CarrierIssue";
})(OrderStatus || (OrderStatus = {}));
exports.default = OrderStatus;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderWarehouseStatus;
(function (OrderWarehouseStatus) {
    OrderWarehouseStatus[OrderWarehouseStatus["NoStatus"] = 0] = "NoStatus";
    OrderWarehouseStatus[OrderWarehouseStatus["ReadyForProcessing"] = 1] = "ReadyForProcessing";
    OrderWarehouseStatus[OrderWarehouseStatus["WarehouseStartedProcessing"] = 2] = "WarehouseStartedProcessing";
    OrderWarehouseStatus[OrderWarehouseStatus["AllocationStarted"] = 3] = "AllocationStarted";
    OrderWarehouseStatus[OrderWarehouseStatus["AllocationFinished"] = 4] = "AllocationFinished";
    OrderWarehouseStatus[OrderWarehouseStatus["PackagingStarted"] = 5] = "PackagingStarted";
    OrderWarehouseStatus[OrderWarehouseStatus["PackagingFinished"] = 6] = "PackagingFinished";
    OrderWarehouseStatus[OrderWarehouseStatus["GivenToCarrier"] = 7] = "GivenToCarrier";
    OrderWarehouseStatus[OrderWarehouseStatus["GivenToCustomer"] = 8] = "GivenToCustomer";
    OrderWarehouseStatus[OrderWarehouseStatus["AllocationFailed"] = 200] = "AllocationFailed";
    OrderWarehouseStatus[OrderWarehouseStatus["PackagingFailed"] = 201] = "PackagingFailed";
})(OrderWarehouseStatus || (OrderWarehouseStatus = {}));
function warehouseStatusToString(status) {
    switch (status) {
        case OrderWarehouseStatus.NoStatus:
            return 'Created';
        case OrderWarehouseStatus.ReadyForProcessing:
            return 'Confirmed';
        case OrderWarehouseStatus.WarehouseStartedProcessing:
            return 'Processing';
        case OrderWarehouseStatus.AllocationStarted:
            return 'Allocation Started';
        case OrderWarehouseStatus.AllocationFinished:
            return 'Allocation Finished';
        case OrderWarehouseStatus.PackagingStarted:
            return 'Packaging Started';
        case OrderWarehouseStatus.PackagingFinished:
            return 'Packaged';
        case OrderWarehouseStatus.GivenToCarrier:
            return 'Given to Carrier';
        case OrderWarehouseStatus.GivenToCustomer:
            return 'Given to Customer';
        case OrderWarehouseStatus.AllocationFailed:
            return 'Allocation Failed';
        case OrderWarehouseStatus.PackagingFailed:
            return 'Packaging Failed';
        default:
            return 'BAD_STATUS';
    }
}
exports.warehouseStatusToString = warehouseStatusToString;
exports.default = OrderWarehouseStatus;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/enums/PaymentGateways.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/enums/PaymentGateways.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PaymentGateways;
(function (PaymentGateways) {
    PaymentGateways[PaymentGateways["Stripe"] = 0] = "Stripe";
    PaymentGateways[PaymentGateways["PayPal"] = 1] = "PayPal";
})(PaymentGateways || (PaymentGateways = {}));
function paymentGatewaysToString(paymentGateway) {
    switch (paymentGateway) {
        case PaymentGateways.Stripe:
            return 'Stripe';
        case PaymentGateways.PayPal:
            return 'PayPal';
        default:
            return 'BAD_PAYMENT_GATEWAY';
    }
}
exports.paymentGatewaysToString = paymentGatewaysToString;
function paymentGatewaysLogo(paymentGateway) {
    switch (paymentGateway) {
        case PaymentGateways.Stripe:
            return 'https://stripe.com/img/v3/home/twitter.png';
        case PaymentGateways.PayPal:
            return 'https://avatars1.githubusercontent.com/u/476675?s=200&v=4';
        default:
            return 'BAD_PAYMENT_GATEWAY';
    }
}
exports.paymentGatewaysLogo = paymentGatewaysLogo;
exports.default = PaymentGateways;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/errors/NotInvitedError.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/errors/NotInvitedError.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NotInvitedError {
    constructor() {
        this.code = 'not-invited';
        this.message = 'Not invited!';
    }
}
exports.NotInvitedError = NotInvitedError;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/errors/WrongPasswordError.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/errors/WrongPasswordError.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WrongPasswordError {
    constructor() {
        this.code = 'wrong-password';
        this.message = 'Wrong password!';
    }
}
exports.WrongPasswordError = WrongPasswordError;


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/notifications.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/notifications.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.launched = 'launched_notification';


/***/ }),

/***/ "./node_modules/@ever-platform/common/src/utils.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@ever-platform/common/src/utils.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var Utils;
(function (Utils) {
    function calcCrow(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = Utils._toRad(lat2 - lat1);
        const dLon = Utils._toRad(lon2 - lon1);
        lat1 = Utils._toRad(lat1);
        lat2 = Utils._toRad(lat2);
        const a = Math.pow(Math.sin(dLat / 2), 2) +
            Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d;
    }
    Utils.calcCrow = calcCrow;
    function getDistance(geoLocation1, geoLocation2) {
        return getLocDistance(geoLocation1.loc, geoLocation2.loc);
    }
    Utils.getDistance = getDistance;
    function getLocDistance(loc1, loc2) {
        return calcCrow(loc1.coordinates[0], loc1.coordinates[1], loc2.coordinates[0], loc2.coordinates[1]);
    }
    Utils.getLocDistance = getLocDistance;
    function _toRad(v) {
        return (v * Math.PI) / 180;
    }
    Utils._toRad = _toRad;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    Utils.getRandomInt = getRandomInt;
    function toDate(date) {
        if (date instanceof Date) {
            return date;
        }
        else {
            return new Date(date);
        }
    }
    Utils.toDate = toDate;
    function generatedLogoColor() {
        return lodash_1.sample(['#269aff', '#ffaf26', '#8b72ff', '#0ecc9D']).replace('#', '');
    }
    Utils.generatedLogoColor = generatedLogoColor;
})(Utils || (Utils = {}));
exports.getDistance = Utils.getDistance;
exports.toDate = Utils.toDate;
exports.getDummyImage = (width, height, letter) => {
    return `https://dummyimage.com/${width}x${height}/${Utils.generatedLogoColor()}/ffffff.jpg&text=${letter}`;
};
exports.getPlaceholditImgix = (width, height, fontSize, name) => {
    return `https://placeholdit.imgix.net/~text?txtsize=${fontSize}&txt=${name}&w=${width}&h=${height}`;
};
exports.getFakeImg = (width, height, fontSize, name) => {
    return `https://fakeimg.pl/${width}x${height}/FFD890%2C128/000/?text=${name}&font_size=${fontSize}`;
};
exports.generateObjectIdString = (m = Math, d = Date, h = 16, s = (x) => m.floor(x).toString(h)) => {
    return (s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h)));
};
function getIdFromTheDate(order) {
    if (!order['createdAt'] || !order.orderNumber) {
        throw `Can't use getIdFromTheDate function. Property ${!order['createdAt'] ? 'createdAt' : 'orderNumber'} is missing!`;
    }
    const [day, month, year] = new Date(order['createdAt'])
        .toLocaleDateString()
        .split('/');
    let d = ('0' + day).slice(-2);
    d = d.substr(-2);
    let m = ('0' + month).slice(-2);
    m = m.substr(-2);
    return `${d}${m}${year}-${order.orderNumber}`;
}
exports.getIdFromTheDate = getIdFromTheDate;
exports.default = Utils;


/***/ }),

/***/ "./src/@pyro/db-server/db-service.ts":
/*!*******************************************!*\
  !*** ./src/@pyro/db-server/db-service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const existence_1 = __webpack_require__(/*! ./existence */ "./src/@pyro/db-server/existence.ts");
const from_1 = __webpack_require__(/*! rxjs/observable/from */ "rxjs/observable/from");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const entity_service_1 = __webpack_require__(/*! @pyro/db-server/entity-service */ "./src/@pyro/db-server/entity-service.ts");
let DBService = class DBService extends entity_service_1.EntityService {
    constructor() {
        super();
        this.existence = new rxjs_1.Subject();
    }
    get(id) {
        const callId = uuid_1.v1();
        this.log.info({ objectId: id, callId }, '.get(id) called');
        return from_1.from(this.getCurrent(id)).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((existenceEvent) => id === existenceEvent.id), operators_1.map((existenceEvent) => existenceEvent.value), operators_1.share())), operators_1.tap({
            next: (obj) => {
                this.log.info({
                    objectId: id,
                    object: obj,
                    callId,
                }, '.get(id) emitted next value');
            },
            error: (err) => {
                this.log.error({
                    objectId: id,
                    err,
                    callId,
                }, '.get(id), emitted error!');
            },
        }));
    }
    getCurrent(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ objectId: id, callId }, '.getCurrent(id) called');
            const obj = yield this.Model.findById(id).lean().exec();
            return this.parse(obj);
        });
    }
    getMultiple(ids) {
        const callId = uuid_1.v1();
        this.log.info({ objectIds: ids, callId }, '.getMultiple(ids) called');
        return of_1.of(null).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((event) => lodash_1.default.includes(ids, event.id)), operators_1.share())), operators_1.exhaustMap(() => this.getCurrentMultiple(ids)), operators_1.tap({
            next: (objects) => {
                this.log.info({ objectIds: ids, objects, callId }, '.getMultiple(ids) emitted next value');
            },
            error: (err) => {
                this.log.error({ objectIds: ids, err, callId }, '.getMultiple(ids), emitted error!');
            },
        }));
    }
    getCurrentMultiple(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ objectIds: ids, callId }, '.getCurrentMultiple(ids) called');
            const objs = yield this.Model.find({
                _id: {
                    $in: lodash_1.default.map(ids, (id) => this.getObjectId(id)),
                },
            })
                .lean()
                .exec();
            return lodash_1.default.map(objs, (obj) => this.parse(obj));
        });
    }
    create(createObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, createObject }, '.create(createObject) called');
            let object;
            try {
                const document = yield this.Model.create(createObject);
                object = this.parse(document.toObject());
            }
            catch (error) {
                this.log.error({ callId, createObject, error }, '.create(createObject) thrown error!');
                throw error;
            }
            this.existence.next({
                id: object.id,
                value: object,
                lastValue: null,
                type: existence_1.ExistenceEventType.Created,
            });
            this.log.info({ callId, createObject, object }, '.create(createObject) created object');
            return object;
        });
    }
    removeAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId }, '.removeAll() called!');
            try {
                yield this.Model.remove({}).exec();
            }
            catch (err) {
                this.log.error({ callId, err }, '.removeAll() thrown error!');
                throw err;
            }
            this.log.info({ callId }, '.removeAll() removed all!');
        });
    }
    remove(objectId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, objectId }, '.remove(objectId) called');
            let lastValue;
            try {
                const lastValueRaw = (yield this.Model.findByIdAndRemove(objectId)
                    .lean()
                    .exec());
                lastValue = this.parse(lastValueRaw);
            }
            catch (err) {
                this.log.error({ callId, objectId, err }, '.remove(objectId) thrown error!');
                throw err;
            }
            if (lastValue == null) {
                throw new Error(".remove(objectId) error - Object don't exist");
            }
            else {
                this.existence.next({
                    id: objectId,
                    value: null,
                    lastValue,
                    type: existence_1.ExistenceEventType.Removed,
                });
                this.log.info({ callId, objectId, lastValue }, '.remove(objectId) removed object');
            }
        });
    }
    removeMultiple(conditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, conditions }, '.removeMultiple(conditions) called');
            let lastValues;
            try {
                lastValues = yield this.find(conditions);
                yield this.Model.deleteMany({
                    _id: { $in: lastValues.map((o) => this.getObjectId(o.id)) },
                }).exec();
            }
            catch (err) {
                this.log.error({ callId, conditions, err }, '.removeMultiple(conditions) thrown error!');
                throw err;
            }
            lodash_1.default.each(lastValues, (lastValue) => {
                this.existence.next({
                    id: lastValue.id,
                    lastValue,
                    value: null,
                    type: existence_1.ExistenceEventType.Removed,
                });
            });
            this.log.info({
                callId,
                conditions,
                lastValues,
            }, '.removeMultiple(conditions) removed objects');
        });
    }
    removeMultipleByIds(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.Model.update({
                _id: { $in: ids.map((id) => this.getObjectId(id)) },
            }, { isDeleted: true }, { multi: true }).exec();
        });
    }
    find(conditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, conditions }, '.find(conditions) called');
            let results;
            try {
                const documents = (yield this.Model.find(conditions == null ? {} : conditions)
                    .lean()
                    .exec());
                results = lodash_1.default.map(documents, (obj) => this.parse(obj));
            }
            catch (err) {
                this.log.error({ callId, conditions, err }, '.find(conditions) thrown error!');
                throw err;
            }
            this.log.info({ callId, conditions, results }, '.find(conditions) found results');
            return results;
        });
    }
    findOne(conditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, conditions }, '.findOne(conditions) called');
            let result;
            try {
                const obj = (yield this.Model.findOne(conditions)
                    .lean()
                    .exec());
                result = this.parse(obj);
            }
            catch (err) {
                this.log.error({ callId, conditions, err }, '.findOne(conditions) thrown error!');
                throw err;
            }
            this.log.info({ callId, conditions, result }, '.findOne(conditions) found result');
            return result;
        });
    }
    update(objectId, updateObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, objectId, updateObj }, '.update(objectId, updateObj) called');
            let beforeUpdateObject;
            let updatedObject;
            try {
                beforeUpdateObject = yield this.getCurrent(objectId);
                if (beforeUpdateObject != null) {
                    const obj = (yield this.Model.findByIdAndUpdate(objectId, updateObj, { new: true })
                        .lean()
                        .exec());
                    updatedObject = this.parse(obj);
                }
                else {
                    throw new Error(`There is no such object with the id ${beforeUpdateObject}`);
                }
            }
            catch (err) {
                this.log.error({ callId, objectId, updateObj, err }, '.update(objectId, updateObj) thrown error!');
                throw err;
            }
            this.existence.next({
                id: objectId,
                value: updatedObject,
                lastValue: beforeUpdateObject,
                type: existence_1.ExistenceEventType.Updated,
            });
            this.log.info({
                callId,
                objectId,
                updateObj,
                updatedValue: updatedObject,
                lastValue: beforeUpdateObject,
            }, '.update(objectId, updateObj) updated object');
            return updatedObject;
        });
    }
    updateMultiple(findObj, updateObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, findObj, updateObj }, '.updateMultiple(findObj, updateObj) called');
            let lastValues;
            let updatedObjects;
            try {
                lastValues = yield this.find(findObj);
                yield this.Model.updateMany(findObj, updateObj, {
                    new: true,
                }).exec();
                updatedObjects = yield this.getCurrentMultiple(lodash_1.default.map(lastValues, (value) => value.id));
            }
            catch (err) {
                this.log.error({ callId, findObj, updateObj, err }, '.updateMultiple(findObj, updateObj) thrown error!');
                throw err;
            }
            lodash_1.default.each(lastValues, (lastValue) => {
                const newValue = lodash_1.default.find(updatedObjects, (obj) => obj.id === lastValue.id);
                this.existence.next({
                    id: lastValue.id,
                    lastValue,
                    value: newValue,
                    type: existence_1.ExistenceEventType.Updated,
                });
            });
            this.log.info({
                callId,
                findObj,
                updateObj,
                lastValues,
                updatedObjects,
            }, '.updateMultiple(objectId, updateObj) updated objects');
            return updatedObjects;
        });
    }
    updateMultipleByIds(ids, updateObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, ids, updateObj }, '.updateMultipleByIds(ids, updateObj) called');
            let updatedObjects;
            try {
                updatedObjects = yield this.updateMultiple({
                    _id: {
                        $in: lodash_1.default.map(ids, (id) => new mongoose_1.default.Types.ObjectId(id)),
                    },
                }, updateObj);
            }
            catch (err) {
                this.log.error({ callId, ids, updateObj, err }, '.updateMultipleByIds(ids, updateObj) thrown error!');
                throw err;
            }
            this.log.info({
                callId,
                ids,
                updateObj,
                updatedObjects,
            }, '.updateMultipleByIds(ids, updateObj) updated objects');
            return updatedObjects;
        });
    }
    count(findObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, findObj }, '.countDocuments(findObj) called');
            let count;
            try {
                count = (yield this.Model.countDocuments(findObj).exec());
            }
            catch (err) {
                this.log.error({ callId, findObj, err }, '.countDocuments(findObj) thrown error!');
                throw err;
            }
            this.log.info({ callId, findObj, count }, '.countDocuments(findObj) counted objects');
            return count;
        });
    }
    findAll(selectFields = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.Model.find({}).select(selectFields).lean().exec();
        });
    }
};
DBService = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], DBService);
exports.DBService = DBService;


/***/ }),

/***/ "./src/@pyro/db-server/entity-service.ts":
/*!***********************************************!*\
  !*** ./src/@pyro/db-server/entity-service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const model_1 = __webpack_require__(/*! @pyro/db-server/model */ "./src/@pyro/db-server/model.ts");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let EntityService = class EntityService {
    get Model() {
        return model_1.getModel(this.DBObject);
    }
    getObjectId(id) {
        return new mongoose_1.default.Types.ObjectId(id);
    }
    parse(obj) {
        if (obj == null) {
            return null;
        }
        else {
            return new this.DBObject(obj);
        }
    }
};
EntityService = tslib_1.__decorate([
    inversify_1.injectable()
], EntityService);
exports.EntityService = EntityService;


/***/ }),

/***/ "./src/@pyro/db-server/existence.ts":
/*!******************************************!*\
  !*** ./src/@pyro/db-server/existence.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ExistenceEventTypeCreated = 'created';
const ExistenceEventTypeUpdated = 'updated';
const ExistenceEventTypeRemoved = 'removed';
var ExistenceEventType;
(function (ExistenceEventType) {
    ExistenceEventType.Created = ExistenceEventTypeCreated;
    ExistenceEventType.Updated = ExistenceEventTypeUpdated;
    ExistenceEventType.Removed = ExistenceEventTypeRemoved;
})(ExistenceEventType = exports.ExistenceEventType || (exports.ExistenceEventType = {}));


/***/ }),

/***/ "./src/@pyro/db-server/index.ts":
/*!**************************************!*\
  !*** ./src/@pyro/db-server/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(/*! ./model */ "./src/@pyro/db-server/model.ts");
exports.getModel = model_1.getModel;
var existence_1 = __webpack_require__(/*! ./existence */ "./src/@pyro/db-server/existence.ts");
exports.ExistenceEventType = existence_1.ExistenceEventType;
var db_service_1 = __webpack_require__(/*! ./db-service */ "./src/@pyro/db-server/db-service.ts");
exports.DBService = db_service_1.DBService;


/***/ }),

/***/ "./src/@pyro/db-server/model.ts":
/*!**************************************!*\
  !*** ./src/@pyro/db-server/model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_1 = __webpack_require__(/*! @pyro/db */ "./node_modules/@ever-platform/common/src/@pyro/db/index.ts");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
exports.modelMetadata = 'db:model';
function getModel(DBObject) {
    let Model = Reflect.getMetadata(exports.modelMetadata, DBObject);
    if (Model == null) {
        Model = mongoose_1.default.model(DBObject.modelName, db_1.getSchema(DBObject));
        Reflect.defineMetadata(exports.modelMetadata, Model, DBObject);
    }
    return Model;
}
exports.getModel = getModel;


/***/ }),

/***/ "./src/@pyro/io/connection-handler.ts":
/*!********************************************!*\
  !*** ./src/@pyro/io/connection-handler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __webpack_require__(/*! ./router/router */ "./src/@pyro/io/router/router.ts");
const async_1 = __webpack_require__(/*! ./listener/handler/async */ "./src/@pyro/io/listener/handler/async.ts");
const observable_1 = __webpack_require__(/*! ./listener/handler/observable */ "./src/@pyro/io/listener/handler/observable.ts");
const listener_1 = __webpack_require__(/*! ./listener/listener */ "./src/@pyro/io/listener/listener.ts");
const types_1 = __webpack_require__(/*! ./listener/types */ "./src/@pyro/io/listener/types.ts");
class ConnectionHandler {
    constructor(socket, router, log) {
        this.socket = socket;
        this.router = router;
        this.log = log;
        this.listeners = router_1.getListeners(this.router);
        this.routerName = router_1.getRouterName(this.router);
    }
    handle() {
        this.log.info({
            socketId: this.socket.id,
            listeners: this.listeners.map((listener) => listener.name),
            routerName: this.routerName,
        }, `Socket connected! Starting listeners listening!`);
        try {
            this.listeners.forEach((listener) => {
                const handler = this.listenerHandlerFactory(listener);
                handler.handle();
            });
        }
        catch (err) {
            this.log.fatal("Couldn't start listeners listening!", { err });
        }
        this.socket.on('disconnect', () => {
            this.onDisconnection();
        });
    }
    listenerHandlerFactory(listener) {
        switch (listener_1.getListenerType(listener)) {
            case types_1.ListenerType.Async:
                return new async_1.AsyncListenerHandler(this.router, listener, this.socket, this.log);
            case types_1.ListenerType.Observable:
                return new observable_1.ObservableListenerHandler(this.router, listener, this.socket, this.log);
            default:
                throw new Error(`Bad listener type! ${listener_1.getListenerType(listener)}`);
        }
    }
    onDisconnection() {
        this.log.info({
            socketId: this.socket.id,
            listeners: this.listeners.map((listener) => listener.name),
            routerName: this.routerName,
        }, `Socket disconnected!`);
    }
}
exports.ConnectionHandler = ConnectionHandler;


/***/ }),

/***/ "./src/@pyro/io/index.ts":
/*!*******************************!*\
  !*** ./src/@pyro/io/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var routers_manager_1 = __webpack_require__(/*! ./routers-manager */ "./src/@pyro/io/routers-manager.ts");
exports.RoutersManager = routers_manager_1.RoutersManager;
var async_1 = __webpack_require__(/*! ./listener/async */ "./src/@pyro/io/listener/async.ts");
exports.asyncListener = async_1.asyncListener;
var observable_1 = __webpack_require__(/*! ./listener/observable */ "./src/@pyro/io/listener/observable.ts");
exports.observableListener = observable_1.observableListener;
var serialization_1 = __webpack_require__(/*! ./listener/serialization */ "./src/@pyro/io/listener/serialization.ts");
exports.serialization = serialization_1.serialization;
var router_1 = __webpack_require__(/*! ./router/router */ "./src/@pyro/io/router/router.ts");
exports.routerName = router_1.routerName;
exports.RouterSymbol = router_1.RouterSymbol;


/***/ }),

/***/ "./src/@pyro/io/listener/async.ts":
/*!****************************************!*\
  !*** ./src/@pyro/io/listener/async.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(/*! ./types */ "./src/@pyro/io/listener/types.ts");
const listener_1 = __webpack_require__(/*! ./listener */ "./src/@pyro/io/listener/listener.ts");
exports.asyncListener = listener_1.listenerOf(types_1.ListenerType.Async);


/***/ }),

/***/ "./src/@pyro/io/listener/handler/async.ts":
/*!************************************************!*\
  !*** ./src/@pyro/io/listener/handler/async.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const base_1 = __webpack_require__(/*! ./base */ "./src/@pyro/io/listener/handler/base.ts");
class AsyncListenerHandler extends base_1.BaseListenerHandler {
    constructor(router, listener, socket, log) {
        super(router, listener, socket, log);
        this.router = router;
        this.listener = listener;
        this.socket = socket;
        this.log = log;
    }
    handleRequest(_args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            const callback = lodash_1.default.last(_args);
            const args = this.serializer(lodash_1.default.initial(_args));
            this.logCall(callId, args);
            try {
                const data = yield this.listener.apply(this.router, args);
                this.log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId, result: data }), `Listener completed`);
                callback(null, data);
            }
            catch (err) {
                this.log.error(Object.assign(Object.assign({}, this.baseLogDetails), { callId,
                    err }), `Listener thrown error!`);
                callback(this.serializeError(err), null);
            }
        });
    }
}
exports.AsyncListenerHandler = AsyncListenerHandler;


/***/ }),

/***/ "./src/@pyro/io/listener/handler/base.ts":
/*!***********************************************!*\
  !*** ./src/@pyro/io/listener/handler/base.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const router_1 = __webpack_require__(/*! ../../router/router */ "./src/@pyro/io/router/router.ts");
const listener_1 = __webpack_require__(/*! ../listener */ "./src/@pyro/io/listener/listener.ts");
const serialization_1 = __webpack_require__(/*! ../serialization */ "./src/@pyro/io/listener/serialization.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const get_parameter_names_1 = tslib_1.__importDefault(__webpack_require__(/*! @captemulation/get-parameter-names */ "@captemulation/get-parameter-names"));
class BaseListenerHandler {
    constructor(_router, _listener, _socket, _log) {
        this._router = _router;
        this._listener = _listener;
        this._socket = _socket;
        this._log = _log;
        this.routerName = router_1.getRouterName(this._router);
        this.listenerType = listener_1.getListenerType(this._listener);
        this.listenerArgumentsNames = get_parameter_names_1.default(this._listener);
        this.baseLogDetails = {
            socketId: this._socket.id,
            listenerName: this._listener.name,
            listenerType: this.listenerType,
            routerName: this.routerName,
        };
        this.serializer = serialization_1.getListenerSerializer(_listener);
    }
    handle() {
        this._socket.on(this._listener.name, (...args) => {
            this.handleRequest(args);
        });
    }
    logCall(callId, args) {
        this._log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId, args: lodash_1.default.zipObject(this.listenerArgumentsNames, args) }), `Listener called`);
    }
    serializeError(_error) {
        if (_error instanceof Error) {
            const error = _error;
            return {
                __isError__: true,
                name: error.name,
                message: error.message,
            };
        }
        else {
            return _error;
        }
    }
}
exports.BaseListenerHandler = BaseListenerHandler;


/***/ }),

/***/ "./src/@pyro/io/listener/handler/observable.ts":
/*!*****************************************************!*\
  !*** ./src/@pyro/io/listener/handler/observable.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const base_1 = __webpack_require__(/*! ./base */ "./src/@pyro/io/listener/handler/base.ts");
class ObservableListenerHandler extends base_1.BaseListenerHandler {
    constructor(router, listener, socket, log) {
        super(router, listener, socket, log);
        this.router = router;
        this.listener = listener;
        this.socket = socket;
        this.log = log;
    }
    handleRequest(_args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = lodash_1.default.last(_args);
            const args = this.serializer(lodash_1.default.initial(_args));
            this.logCall(callId, args);
            const observable = Reflect.apply(this.listener, this.router, args);
            this.socket.on(`${callId}_subscribe`, (subscriptionId) => {
                const subscription = observable.subscribe({
                    next: (value) => {
                        this.log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId,
                            value }), `Listener emitted next value`);
                        this.socket.emit(`${subscriptionId}_next`, value);
                    },
                    error: (err) => {
                        this.log.error(Object.assign(Object.assign({}, this.baseLogDetails), { callId,
                            err }), `Listener thrown error!`);
                        this.socket.emit(`${subscriptionId}_error`, this.serializeError(err));
                    },
                    complete: () => {
                        this.log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId }), `Listener completed`);
                        this.socket.emit(`_${subscriptionId}_complete`);
                    },
                });
                this.socket.on(`${subscriptionId}_unsubscribe`, () => subscription.unsubscribe());
                this.socket.on('disconnect', () => subscription.unsubscribe());
            });
        });
    }
}
exports.ObservableListenerHandler = ObservableListenerHandler;


/***/ }),

/***/ "./src/@pyro/io/listener/listener.ts":
/*!*******************************************!*\
  !*** ./src/@pyro/io/listener/listener.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = __webpack_require__(/*! ../router/metadata */ "./src/@pyro/io/router/metadata.ts");
const metadata_2 = __webpack_require__(/*! ./metadata */ "./src/@pyro/io/listener/metadata.ts");
exports.listenerOf = (listenerType) => () => (router, propertyKey, descriptor) => {
    const method = router[propertyKey];
    if (!Reflect.hasMetadata(metadata_1.routerMetadata.listeners, router.constructor)) {
        Reflect.defineMetadata(metadata_1.routerMetadata.listeners, [], router.constructor);
    }
    const listeners = Reflect.getMetadata(metadata_1.routerMetadata.listeners, router.constructor);
    listeners.push(method);
    Reflect.defineMetadata(metadata_2.listenerMetadata.type, listenerType, method);
};
exports.getListenerType = (listener) => {
    return Reflect.getMetadata(metadata_2.listenerMetadata.type, listener);
};


/***/ }),

/***/ "./src/@pyro/io/listener/metadata.ts":
/*!*******************************************!*\
  !*** ./src/@pyro/io/listener/metadata.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listenerMetadata = {
    type: 'router:listener:type',
    serializers: 'router:listener:serializers',
};


/***/ }),

/***/ "./src/@pyro/io/listener/observable.ts":
/*!*********************************************!*\
  !*** ./src/@pyro/io/listener/observable.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(/*! ./types */ "./src/@pyro/io/listener/types.ts");
const listener_1 = __webpack_require__(/*! ./listener */ "./src/@pyro/io/listener/listener.ts");
exports.observableListener = listener_1.listenerOf(types_1.ListenerType.Observable);


/***/ }),

/***/ "./src/@pyro/io/listener/serialization.ts":
/*!************************************************!*\
  !*** ./src/@pyro/io/listener/serialization.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = __webpack_require__(/*! ./metadata */ "./src/@pyro/io/listener/metadata.ts");
exports.serialization = (serializeFunction) => (router, propertyKey, parameterIndex) => {
    const listener = router[propertyKey];
    if (!Reflect.hasMetadata(metadata_1.listenerMetadata.serializers, listener)) {
        Reflect.defineMetadata(metadata_1.listenerMetadata.serializers, [], listener);
    }
    Reflect.getMetadata(metadata_1.listenerMetadata.serializers, listener)[parameterIndex] = serializeFunction;
};
exports.getListenerSerializer = (listener) => {
    const serializers = Reflect.getMetadata(metadata_1.listenerMetadata.serializers, listener);
    if (serializers == null) {
        return (args) => args;
    }
    return (args) => {
        return args.map((arg, i) => serializers[i] != null ? serializers[i](arg) : arg);
    };
};


/***/ }),

/***/ "./src/@pyro/io/listener/types.ts":
/*!****************************************!*\
  !*** ./src/@pyro/io/listener/types.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ListenerType;
(function (ListenerType) {
    ListenerType["Async"] = "async";
    ListenerType["Observable"] = "observable";
})(ListenerType = exports.ListenerType || (exports.ListenerType = {}));


/***/ }),

/***/ "./src/@pyro/io/router/handler.ts":
/*!****************************************!*\
  !*** ./src/@pyro/io/router/handler.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const router_1 = __webpack_require__(/*! ./router */ "./src/@pyro/io/router/router.ts");
const connection_handler_1 = __webpack_require__(/*! ../connection-handler */ "./src/@pyro/io/connection-handler.ts");
class RouterHandler {
    constructor(io, router, log) {
        this.io = io;
        this.router = router;
        this.log = log;
        this.routerName = router_1.getRouterName(router);
        this.listeners = router_1.getListeners(router);
    }
    listen() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Starting router listening`, {
                routerName: this.routerName,
                listeners: this.listeners
                    ? this.listeners.map((listener) => listener.name)
                    : null,
            });
            const routerNamespace = this.io.of(`/${this.routerName}`);
            routerNamespace.setMaxListeners(0);
            routerNamespace.on('connection', (socket) => {
                const connectionHandler = new connection_handler_1.ConnectionHandler(socket, this.router, this.log);
                connectionHandler.handle();
            });
        });
    }
}
exports.RouterHandler = RouterHandler;


/***/ }),

/***/ "./src/@pyro/io/router/metadata.ts":
/*!*****************************************!*\
  !*** ./src/@pyro/io/router/metadata.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var routerMetadata;
(function (routerMetadata) {
    routerMetadata.name = 'router:name';
    routerMetadata.listeners = 'router:listeners';
})(routerMetadata = exports.routerMetadata || (exports.routerMetadata = {}));


/***/ }),

/***/ "./src/@pyro/io/router/router.ts":
/*!***************************************!*\
  !*** ./src/@pyro/io/router/router.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = __webpack_require__(/*! ./metadata */ "./src/@pyro/io/router/metadata.ts");
exports.RouterSymbol = Symbol('Router');
exports.routerName = (name) => Reflect.metadata(metadata_1.routerMetadata.name, name);
exports.getRouterName = (router) => {
    return Reflect.getMetadata(metadata_1.routerMetadata.name, router.constructor);
};
exports.getListeners = (router) => {
    return Reflect.getMetadata(metadata_1.routerMetadata.listeners, router.constructor);
};


/***/ }),

/***/ "./src/@pyro/io/routers-manager.ts":
/*!*****************************************!*\
  !*** ./src/@pyro/io/routers-manager.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const router_1 = __webpack_require__(/*! ./router/router */ "./src/@pyro/io/router/router.ts");
const handler_1 = __webpack_require__(/*! ./router/handler */ "./src/@pyro/io/router/handler.ts");
let RoutersManager = class RoutersManager {
    constructor(routers) {
        this.routers = routers;
        this.log = Log_1.createEverLogger({ name: 'io' });
    }
    startListening(io) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.io = io;
            this.routers.forEach((router) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.startRouterListening(router);
            }));
        });
    }
    startRouterListening(router) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const routerHandler = new handler_1.RouterHandler(this.io, router, this.log);
                yield routerHandler.listen();
            }
            catch (err) {
                this.log.fatal("Couldn't start router listening!", { err });
            }
        });
    }
};
RoutersManager = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.multiInject(router_1.RouterSymbol)),
    tslib_1.__metadata("design:paramtypes", [Array])
], RoutersManager);
exports.RoutersManager = RoutersManager;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const subscriptions_module_1 = __webpack_require__(/*! ./graphql/subscriptions/subscriptions.module */ "./src/graphql/subscriptions/subscriptions.module.ts");
const subscriptions_service_1 = __webpack_require__(/*! ./graphql/subscriptions/subscriptions.service */ "./src/graphql/subscriptions/subscriptions.service.ts");
const invites_module_1 = __webpack_require__(/*! ./graphql/invites/invites.module */ "./src/graphql/invites/invites.module.ts");
const devices_module_1 = __webpack_require__(/*! ./graphql/devices/devices.module */ "./src/graphql/devices/devices.module.ts");
const config_module_1 = __webpack_require__(/*! ./config/config.module */ "./src/config/config.module.ts");
const product_module_1 = __webpack_require__(/*! ./controllers/product/product.module */ "./src/controllers/product/product.module.ts");
const users_module_1 = __webpack_require__(/*! ./graphql/users/users.module */ "./src/graphql/users/users.module.ts");
const warehouses_module_1 = __webpack_require__(/*! ./graphql/warehouses/warehouses.module */ "./src/graphql/warehouses/warehouses.module.ts");
const orders_module_1 = __webpack_require__(/*! ./graphql/orders/orders.module */ "./src/graphql/orders/orders.module.ts");
const carriers_module_1 = __webpack_require__(/*! ./graphql/carriers/carriers.module */ "./src/graphql/carriers/carriers.module.ts");
const products_module_1 = __webpack_require__(/*! ./graphql/products/products.module */ "./src/graphql/products/products.module.ts");
const env_1 = __webpack_require__(/*! ./env */ "./src/env.ts");
const Log_1 = __webpack_require__(/*! ./helpers/Log */ "./src/helpers/Log.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const test_controller_1 = __webpack_require__(/*! ./controllers/test.controller */ "./src/controllers/test.controller.ts");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const geo_locations_module_1 = __webpack_require__(/*! ./graphql/geo-locations/geo-locations.module */ "./src/graphql/geo-locations/geo-locations.module.ts");
const scalars_1 = __webpack_require__(/*! ./graphql/scalars */ "./src/graphql/scalars/index.ts");
const warehouses_products_modules_1 = __webpack_require__(/*! ./graphql/warehouses-products/warehouses-products.modules */ "./src/graphql/warehouses-products/warehouses-products.modules.ts");
const warehouses_carriers_module_1 = __webpack_require__(/*! ./graphql/warehouses-carriers/warehouses-carriers.module */ "./src/graphql/warehouses-carriers/warehouses-carriers.module.ts");
const warehouses_orders_module_1 = __webpack_require__(/*! ./graphql/warehouses-orders/warehouses-orders.module */ "./src/graphql/warehouses-orders/warehouses-orders.module.ts");
const invites_requests_module_1 = __webpack_require__(/*! ./graphql/invites-requests/invites-requests.module */ "./src/graphql/invites-requests/invites-requests.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const admins_module_1 = __webpack_require__(/*! ./graphql/admin/admins.module */ "./src/graphql/admin/admins.module.ts");
const data_module_1 = __webpack_require__(/*! ./graphql/data/data.module */ "./src/graphql/data/data.module.ts");
const carriers_orders_module_1 = __webpack_require__(/*! ./graphql/carriers-orders/carriers-orders.module */ "./src/graphql/carriers-orders/carriers-orders.module.ts");
const geo_location_orders_module_1 = __webpack_require__(/*! ./graphql/geo-locations/orders/geo-location-orders.module */ "./src/graphql/geo-locations/orders/geo-location-orders.module.ts");
const geo_location_merchants_module_1 = __webpack_require__(/*! ./graphql/geo-locations/merchants/geo-location-merchants.module */ "./src/graphql/geo-locations/merchants/geo-location-merchants.module.ts");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const merge_graphql_schemas_1 = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");
const users_1 = __webpack_require__(/*! ./services/users */ "./src/services/users/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const services_module_1 = __webpack_require__(/*! ./services/services.module */ "./src/services/services.module.ts");
const services_app_1 = __webpack_require__(/*! ./services/services.app */ "./src/services/services.app.ts");
const currency_module_1 = __webpack_require__(/*! ./graphql/currency/currency.module */ "./src/graphql/currency/currency.module.ts");
const port = env_1.env.GQLPORT;
const log = Log_1.createEverLogger({
    name: 'ApplicationModule from NestJS',
});
exports.CommandHandlers = [users_1.GetAboutUsHandler];
exports.EventHandlers = [];
const entities = services_app_1.ServicesApp.getEntities();
let ApplicationModule = class ApplicationModule {
    constructor(subscriptionsService, moduleRef, command$, event$) {
        this.subscriptionsService = subscriptionsService;
        this.moduleRef = moduleRef;
        this.command$ = command$;
        this.event$ = event$;
    }
    onModuleInit() {
        this.event$.register(exports.EventHandlers);
        this.command$.register(exports.CommandHandlers);
    }
    configure(consumer) {
        const { ObjectId } = mongoose_1.default.Types;
        ObjectId.prototype.valueOf = function () {
            return this.toString();
        };
        log.info(`GraphQL playground available at http://localhost/graphql`);
    }
    createServer(schema) {
        return new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req, res }) => ({
                req,
            }),
            playground: {
                endpoint: `http://localhost/graphql`,
                subscriptionEndpoint: `ws://localhost/subscriptions`,
                settings: {
                    'editor.theme': 'dark',
                },
            },
        });
    }
    createSchema() {
        const graphqlPath = './**/*.graphql';
        console.log(`Searching for *.graphql files`);
        const typesArray = merge_graphql_schemas_1.fileLoader(graphqlPath);
        const typeDefs = merge_graphql_schemas_1.mergeTypes(typesArray, { all: true });
        const schema = apollo_server_express_1.makeExecutableSchema({
            typeDefs,
            resolvers: Object.assign({}, scalars_1.SCALARS),
        });
        return schema;
    }
};
ApplicationModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [test_controller_1.TestController],
        providers: [...exports.CommandHandlers, ...exports.EventHandlers],
        imports: [
            data_module_1.DataModule,
            services_module_1.ServicesModule,
            cqrs_1.CqrsModule,
            auth_module_1.AuthModule,
            admins_module_1.AdminsModule,
            config_module_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                host: 'localhost',
                database: 'test',
                entities,
                synchronize: true,
                useNewUrlParser: true,
                autoReconnect: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature(entities),
            subscriptions_module_1.SubscriptionsModule.forRoot(env_1.env.GQLPORT_SUBSCRIPTIONS),
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                installSubscriptionHandlers: true,
                debug: true,
                playground: true,
                context: ({ req, res }) => ({
                    req,
                }),
            }),
            invites_module_1.InvitesModule,
            devices_module_1.DevicesModule,
            product_module_1.ProductModule,
            warehouses_module_1.WarehousesModule,
            geo_locations_module_1.GeoLocationsModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            carriers_module_1.CarriersModule,
            carriers_orders_module_1.CarriersOrdersModule,
            products_module_1.ProductsModule,
            warehouses_products_modules_1.WarehousesProductsModule,
            warehouses_orders_module_1.WarehousesOrdersModule,
            warehouses_carriers_module_1.WarehousesCarriersModule,
            invites_requests_module_1.InvitesRequestsModule,
            geo_location_orders_module_1.GeoLocationOrdersModule,
            geo_location_merchants_module_1.GeoLocationMerchantsModule,
            currency_module_1.CurrencyModule,
        ],
    }),
    tslib_1.__metadata("design:paramtypes", [subscriptions_service_1.SubscriptionsService,
        core_1.ModuleRef,
        cqrs_1.CommandBus,
        cqrs_1.EventBus])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./src/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [],
        providers: [jwt_strategy_1.JwtStrategy],
        exports: [],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/auth/jwt.strategy.ts":
/*!**********************************!*\
  !*** ./src/auth/jwt.strategy.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth/index.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(authService) {
        super(auth_1.createJwtData);
        this.authService = authService;
    }
    validate(payload, done) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(payload);
            if (!user) {
                return done(new common_1.UnauthorizedException(), false);
            }
            done(null, user);
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_1.AuthenticationService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./src/config/config.module.ts":
/*!*************************************!*\
  !*** ./src/config/config.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_service_1 = __webpack_require__(/*! ./config.service */ "./src/config/config.service.ts");
let ConfigModule = class ConfigModule {
};
ConfigModule = tslib_1.__decorate([
    common_1.Module({
        providers: [
            {
                provide: config_service_1.ConfigService,
                useValue: new config_service_1.ConfigService(),
            },
        ],
        exports: [config_service_1.ConfigService],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;


/***/ }),

/***/ "./src/config/config.service.ts":
/*!**************************************!*\
  !*** ./src/config/config.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const env_1 = __webpack_require__(/*! ../env */ "./src/env.ts");
let ConfigService = class ConfigService {
    get(key) {
        return env_1.env[key];
    }
    get Env() {
        return env_1.env;
    }
};
ConfigService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('configService')
], ConfigService);
exports.ConfigService = ConfigService;


/***/ }),

/***/ "./src/controllers/product/ProductsDto.ts":
/*!************************************************!*\
  !*** ./src/controllers/product/ProductsDto.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class UpdateProductDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
exports.UpdateProductDto = UpdateProductDto;
class CreateProductDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "title", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "description", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
exports.CreateProductDto = CreateProductDto;


/***/ }),

/***/ "./src/controllers/product/product.controller.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/product/product.controller.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const ProductsDto_1 = __webpack_require__(/*! ./ProductsDto */ "./src/controllers/product/ProductsDto.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const products_1 = __webpack_require__(/*! ../../services/products */ "./src/services/products/index.ts");
let ProductController = class ProductController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    findAll(request) {
        return this.productsService.find({});
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const prod = yield this.productsService.getCurrent(id);
            return prod;
        });
    }
    create(createInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.productsService.create(createInfo);
        });
    }
    update(id, updateInfo) {
        return `Here updates a #${id} product`;
    }
    remove(id) {
        return `Here removes a #${id} product`;
    }
};
tslib_1.__decorate([
    common_1.Get(),
    common_1.Header('Cache-Control', 'none'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(':id'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProductsDto_1.CreateProductDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, ProductsDto_1.UpdateProductDto]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete('id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
ProductController = tslib_1.__decorate([
    swagger_1.ApiUseTags('product'),
    common_1.Controller('product'),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsService])
], ProductController);
exports.ProductController = ProductController;


/***/ }),

/***/ "./src/controllers/product/product.module.ts":
/*!***************************************************!*\
  !*** ./src/controllers/product/product.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_controller_1 = __webpack_require__(/*! ./product.controller */ "./src/controllers/product/product.controller.ts");
let ProductModule = class ProductModule {
};
ProductModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [product_controller_1.ProductController],
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/controllers/test.controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/test.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_1 = __webpack_require__(/*! ../services/users */ "./src/services/users/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let TestController = class TestController {
    constructor(_userCommandService) {
        this._userCommandService = _userCommandService;
    }
    index() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userId = '1';
            const deviceId = '2';
            yield this._userCommandService.exec(userId, deviceId);
        });
    }
};
tslib_1.__decorate([
    common_1.Get('index'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "index", null);
TestController = tslib_1.__decorate([
    swagger_1.ApiUseTags('test'),
    common_1.Controller('test'),
    tslib_1.__metadata("design:paramtypes", [users_1.UserCommandService])
], TestController);
exports.TestController = TestController;


/***/ }),

/***/ "./src/env.ts":
/*!********************!*\
  !*** ./src/env.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = __webpack_require__(/*! envalid */ "envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    NODE_ENV: envalid_1.str({
        choices: ['production', 'development', 'test'],
        default: 'development',
    }),
    WEB_CONCURRENCY: envalid_1.num({ default: 1 }),
    WEB_MEMORY: envalid_1.num({ default: 2048 }),
    HTTPSPORT: envalid_1.port({ default: 5501 }),
    HTTPPORT: envalid_1.port({ default: 5500 }),
    GQLPORT: envalid_1.port({ default: 5555 }),
    GQLPORT_SUBSCRIPTIONS: envalid_1.port({ default: 5050 }),
    HTTPS_CERT_PATH: envalid_1.str({ default: 'certificates/https/cert.pem' }),
    HTTPS_KEY_PATH: envalid_1.str({ default: 'certificates/https/key.pem' }),
    LOGS_PATH: envalid_1.str({ default: './tmp/logs' }),
    DB_URI: envalid_1.str({ default: 'mongodb://localhost/ever_development' }),
    TESTING_DB_URI: envalid_1.str({ default: 'mongodb://localhost/ever_testing' }),
    STRIPE_SECRET_KEY: envalid_1.str({ default: '' }),
    URBAN_AIRSHIP_KEY: envalid_1.str({ default: '' }),
    URBAN_AIRSHIP_SECRET: envalid_1.str({ default: '' }),
    AWS_ACCESS_KEY_ID: envalid_1.str({ default: '' }),
    AWS_SECRET_ACCESS_KEY: envalid_1.str({ default: '' }),
    KEYMETRICS_MACHINE_NAME: envalid_1.str({ default: '' }),
    KEYMETRICS_SECRET_KEY: envalid_1.str({ default: '' }),
    KEYMETRICS_PUBLIC_KEY: envalid_1.str({ default: '' }),
    GOOGLE_APP_ID: envalid_1.str({ default: '' }),
    GOOGLE_APP_SECRET: envalid_1.str({ default: '' }),
    FACEBOOK_APP_ID: envalid_1.str({ default: '' }),
    FACEBOOK_APP_SECRET: envalid_1.str({ default: '' }),
    JWT_SECRET: envalid_1.str({ default: 'default' }),
    ADMIN_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 12',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 12,
    }),
    WAREHOUSE_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 12',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 12,
    }),
    CARRIER_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 12',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 12,
    }),
    USER_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 10',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 10,
    }),
    SETTING_INVITES_ENABLED: envalid_1.bool({ default: false }),
    SETTINGS_REGISTRATIONS_REQUIRED_ON_START: envalid_1.bool({ default: false }),
    FAKE_INVITE_CODE: envalid_1.num({ default: 0 }),
    ARCGIS_CLIENT_ID: envalid_1.str({ default: '' }),
    ARCGIS_CLIENT_SECRET: envalid_1.str({ default: '' }),
    IP_STACK_API_KEY: envalid_1.str({ default: '' }),
    LOG_LEVEL: envalid_1.str({
        choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
        default: 'error',
    }),
    ENGINE_API_KEY: envalid_1.str({
        desc: 'Apollo Engine Key (optional, see https://www.apollographql.com/docs/platform/schema-registry)',
        default: '',
    }),
    MAX_SOCKETS: envalid_1.num({ default: Infinity }),
}, { strict: true, dotEnvPath: __dirname + '/../.env' });

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/graphql/admin/admin.resolver.ts":
/*!*********************************************!*\
  !*** ./src/graphql/admin/admin.resolver.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const admins_1 = __webpack_require__(/*! ../../services/admins */ "./src/services/admins/index.ts");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
let AdminResolver = class AdminResolver {
    constructor(_adminsService) {
        this._adminsService = _adminsService;
    }
    getAdmin(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getByEmail(_, { email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.getByEmail(email);
        });
    }
    registerAdmin(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.register(registerInput);
        });
    }
    updateAdmin(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._adminsService.throwIfNotExists(id);
            return this._adminsService.update(id, updateInput);
        });
    }
    adminLogin(_, { email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.login(email, password);
        });
    }
    adminAuthenticated(_, __, context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.isAuthenticated(passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(context.req));
        });
    }
    updateAdminPassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.updatePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('admin'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "getAdmin", null);
tslib_1.__decorate([
    graphql_1.Query('adminByEmail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "getByEmail", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "registerAdmin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateAdmin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "adminLogin", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "adminAuthenticated", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateAdminPassword", null);
AdminResolver = tslib_1.__decorate([
    graphql_1.Resolver('Admin'),
    tslib_1.__metadata("design:paramtypes", [admins_1.AdminsService])
], AdminResolver);
exports.AdminResolver = AdminResolver;


/***/ }),

/***/ "./src/graphql/admin/admins.module.ts":
/*!********************************************!*\
  !*** ./src/graphql/admin/admins.module.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const admin_resolver_1 = __webpack_require__(/*! ./admin.resolver */ "./src/graphql/admin/admin.resolver.ts");
let AdminsModule = class AdminsModule {
};
AdminsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [admin_resolver_1.AdminResolver],
    })
], AdminsModule);
exports.AdminsModule = AdminsModule;


/***/ }),

/***/ "./src/graphql/carriers-orders/carriers-orders.module.ts":
/*!***************************************************************!*\
  !*** ./src/graphql/carriers-orders/carriers-orders.module.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const carriers_orders_resolver_1 = __webpack_require__(/*! ./carriers-orders.resolver */ "./src/graphql/carriers-orders/carriers-orders.resolver.ts");
let CarriersOrdersModule = class CarriersOrdersModule {
};
CarriersOrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [carriers_orders_resolver_1.CarriersOrdersResolver],
    })
], CarriersOrdersModule);
exports.CarriersOrdersModule = CarriersOrdersModule;


/***/ }),

/***/ "./src/graphql/carriers-orders/carriers-orders.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/graphql/carriers-orders/carriers-orders.resolver.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const carriers_1 = __webpack_require__(/*! ../../services/carriers */ "./src/services/carriers/index.ts");
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
let CarriersOrdersResolver = class CarriersOrdersResolver {
    constructor(_carriersOrdersService) {
        this._carriersOrdersService = _carriersOrdersService;
    }
    getCarrierOrders(_, { carrierId, options, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersOrdersService.getCarrierOrders(carrierId, options);
        });
    }
    getCarrierCurrentOrder(_, { carrierId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dbOrder = yield this._carriersOrdersService.getCarrierCurrentOrder(carrierId);
            return dbOrder !== null ? new Order_1.default(dbOrder) : null;
        });
    }
    getCarrierOrdersHistory(_, { carrierId, options, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersOrdersService.getCarrierOrdersHistory(carrierId, options);
        });
    }
    getCountOfCarrierOrdersHistory(_, { carrierId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersOrdersService.getCountOfCarrierOrdersHistory(carrierId);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getCarrierOrders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCarrierOrders", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrierCurrentOrder'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCarrierCurrentOrder", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrierOrdersHistory'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCarrierOrdersHistory", null);
tslib_1.__decorate([
    graphql_1.Query('getCountOfCarrierOrdersHistory'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCountOfCarrierOrdersHistory", null);
CarriersOrdersResolver = tslib_1.__decorate([
    graphql_1.Resolver('CarriersOrders'),
    tslib_1.__metadata("design:paramtypes", [carriers_1.CarriersOrdersService])
], CarriersOrdersResolver);
exports.CarriersOrdersResolver = CarriersOrdersResolver;


/***/ }),

/***/ "./src/graphql/carriers/carrier.resolver.ts":
/*!**************************************************!*\
  !*** ./src/graphql/carriers/carrier.resolver.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const carriers_1 = __webpack_require__(/*! ../../services/carriers */ "./src/services/carriers/index.ts");
const Carrier_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Carrier */ "./node_modules/@ever-platform/common/src/entities/Carrier.ts"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const devices_1 = __webpack_require__(/*! ../../services/devices */ "./src/services/devices/index.ts");
const CarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/CarrierStatus */ "./node_modules/@ever-platform/common/src/enums/CarrierStatus.ts"));
let CarrierResolver = class CarrierResolver {
    constructor(_carriersService, _devicesService) {
        this._carriersService = _carriersService;
        this._devicesService = _devicesService;
    }
    getActiveCarriers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.getAllActive().pipe(operators_1.first()).toPromise();
        });
    }
    getCarriers(_, { carriersFindInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const carriers = yield this._carriersService.getCarriers(carriersFindInput, pagingOptions);
            return carriers.map((c) => new Carrier_1.default(c));
        });
    }
    getCarrierByUsername(_, { username }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.findOne({
                username,
                isDeleted: { $eq: false },
            });
        });
    }
    getCarrier(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getCountOfCarriers(_, { carriersFindInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.Model.find(Object.assign(Object.assign({}, carriersFindInput), { isDeleted: { $eq: false } }))
                .countDocuments()
                .exec();
        });
    }
    updateCarrierEmail(_, { carrierId, email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.updateEmail(carrierId, email);
        });
    }
    registerCarrier(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.register(registerInput);
        });
    }
    updateCarrierStatus(_, { id, status }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._carriersService.updateStatus(id, CarrierStatus_1.default[status]);
        });
    }
    updateCarrier(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._carriersService.throwIfNotExists(id);
            return this._carriersService.update(id, updateInput);
        });
    }
    removeCarrier(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._carriersService.throwIfNotExists(id);
            return this._carriersService.remove(id);
        });
    }
    removeCarriersByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carriers = yield this._carriersService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const carriersIds = carriers.map((d) => d.id);
            return this._carriersService.removeMultipleByIds(carriersIds);
        });
    }
    getDevices(_carrier) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carrier = new Carrier_1.default(_carrier);
            return this._devicesService
                .getMultiple(carrier.devicesIds)
                .pipe(operators_1.map((devices) => devices.filter((d) => !d.isDeleted)), operators_1.first())
                .toPromise();
        });
    }
    carrierLogin(_, { username, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.login(username, password);
        });
    }
    updateCarrierPassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.updatePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getActiveCarriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getActiveCarriers", null);
tslib_1.__decorate([
    graphql_1.Query('getCarriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCarriers", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrierByUsername'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCarrierByUsername", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCarrier", null);
tslib_1.__decorate([
    graphql_1.Query('getCountOfCarriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCountOfCarriers", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrierEmail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrierEmail", null);
tslib_1.__decorate([
    graphql_1.Mutation('registerCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "registerCarrier", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrierStatus'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrierStatus", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrier", null);
tslib_1.__decorate([
    graphql_1.Mutation('removeCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "removeCarrier", null);
tslib_1.__decorate([
    graphql_1.Mutation('removeCarriersByIds'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "removeCarriersByIds", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.Mutation('carrierLogin'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "carrierLogin", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrierPassword'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrierPassword", null);
CarrierResolver = tslib_1.__decorate([
    graphql_1.Resolver('Carrier'),
    tslib_1.__metadata("design:paramtypes", [carriers_1.CarriersService,
        devices_1.DevicesService])
], CarrierResolver);
exports.CarrierResolver = CarrierResolver;


/***/ }),

/***/ "./src/graphql/carriers/carriers.module.ts":
/*!*************************************************!*\
  !*** ./src/graphql/carriers/carriers.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const carrier_resolver_1 = __webpack_require__(/*! ./carrier.resolver */ "./src/graphql/carriers/carrier.resolver.ts");
let CarriersModule = class CarriersModule {
};
CarriersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [carrier_resolver_1.CarrierResolver],
    })
], CarriersModule);
exports.CarriersModule = CarriersModule;


/***/ }),

/***/ "./src/graphql/currency/currency.module.ts":
/*!*************************************************!*\
  !*** ./src/graphql/currency/currency.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const currency_resolver_1 = __webpack_require__(/*! ./currency.resolver */ "./src/graphql/currency/currency.resolver.ts");
let CurrencyModule = class CurrencyModule {
};
CurrencyModule = tslib_1.__decorate([
    common_1.Module({
        providers: [currency_resolver_1.CurrencyResolver],
    })
], CurrencyModule);
exports.CurrencyModule = CurrencyModule;


/***/ }),

/***/ "./src/graphql/currency/currency.resolver.ts":
/*!***************************************************!*\
  !*** ./src/graphql/currency/currency.resolver.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const CurrencyService_1 = __webpack_require__(/*! ../../services/currency/CurrencyService */ "./src/services/currency/CurrencyService.ts");
let CurrencyResolver = class CurrencyResolver {
    constructor(_currenciesService) {
        this._currenciesService = _currenciesService;
    }
    getCurrencies(_) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._currenciesService.getAllCurrencies();
        });
    }
    createCurrency(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._currenciesService.createCurrency(createInput);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('currencies'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "getCurrencies", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "createCurrency", null);
CurrencyResolver = tslib_1.__decorate([
    graphql_1.Resolver('Currency'),
    tslib_1.__metadata("design:paramtypes", [CurrencyService_1.CurrenciesService])
], CurrencyResolver);
exports.CurrencyResolver = CurrencyResolver;


/***/ }),

/***/ "./src/graphql/data/data.module.ts":
/*!*****************************************!*\
  !*** ./src/graphql/data/data.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const data_resolver_1 = __webpack_require__(/*! ./data.resolver */ "./src/graphql/data/data.resolver.ts");
let DataModule = class DataModule {
};
DataModule = tslib_1.__decorate([
    common_1.Module({
        providers: [data_resolver_1.DataResolver],
    })
], DataModule);
exports.DataModule = DataModule;


/***/ }),

/***/ "./src/graphql/data/data.resolver.ts":
/*!*******************************************!*\
  !*** ./src/graphql/data/data.resolver.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const InvitesService_1 = __webpack_require__(/*! ../../services/invites/InvitesService */ "./src/services/invites/InvitesService.ts");
const admins_1 = __webpack_require__(/*! ../../services/admins */ "./src/services/admins/index.ts");
const carriers_1 = __webpack_require__(/*! ../../services/carriers */ "./src/services/carriers/index.ts");
const invites_1 = __webpack_require__(/*! ../../services/invites */ "./src/services/invites/index.ts");
const orders_1 = __webpack_require__(/*! ../../services/orders */ "./src/services/orders/index.ts");
const users_1 = __webpack_require__(/*! ../../services/users */ "./src/services/users/index.ts");
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const devices_1 = __webpack_require__(/*! ../../services/devices */ "./src/services/devices/index.ts");
const products_1 = __webpack_require__(/*! ../../services/products */ "./src/services/products/index.ts");
let DataResolver = class DataResolver {
    constructor(_adminsService, _carriersService, _inviteRequestsService, _invitesService, _ordersService, _usersService, _storesService, _devicesService, _productsService, _productsCategoriesService) {
        this._adminsService = _adminsService;
        this._carriersService = _carriersService;
        this._inviteRequestsService = _inviteRequestsService;
        this._invitesService = _invitesService;
        this._ordersService = _ordersService;
        this._usersService = _usersService;
        this._storesService = _storesService;
        this._devicesService = _devicesService;
        this._productsService = _productsService;
        this._productsCategoriesService = _productsCategoriesService;
    }
    clearAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            [
                this._adminsService,
                this._carriersService,
                this._devicesService,
                this._invitesService,
                this._inviteRequestsService,
                this._ordersService,
                this._productsService,
                this._productsCategoriesService,
                this._usersService,
                this._storesService,
            ].forEach((service) => {
                service.Model.updateMany({}, { isDeleted: true }, (err, raw) => {
                    if (err !== null) {
                        const collectionName = service.constructor.name.replace('Service', '');
                        throw new Error(`Cannot update '${collectionName}' collection`);
                    }
                });
            });
            return true;
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('clearAll'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], DataResolver.prototype, "clearAll", null);
DataResolver = tslib_1.__decorate([
    graphql_1.Resolver('Data'),
    tslib_1.__metadata("design:paramtypes", [admins_1.AdminsService,
        carriers_1.CarriersService,
        invites_1.InvitesRequestsService,
        InvitesService_1.InvitesService,
        orders_1.OrdersService,
        users_1.UsersService,
        warehouses_1.WarehousesService,
        devices_1.DevicesService,
        products_1.ProductsService,
        products_1.ProductsCategoriesService])
], DataResolver);
exports.DataResolver = DataResolver;


/***/ }),

/***/ "./src/graphql/devices/device.resolver.ts":
/*!************************************************!*\
  !*** ./src/graphql/devices/device.resolver.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ "graphql-subscriptions");
const devices_1 = __webpack_require__(/*! ../../services/devices */ "./src/services/devices/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const pubSub = new graphql_subscriptions_1.PubSub();
let DeviceResolver = class DeviceResolver {
    constructor(_devicesService) {
        this._devicesService = _devicesService;
    }
    getDevice(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getDevices(_, { findInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }));
        });
    }
    updateDeviceLanguage(_, { deviceId, language, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.updateLanguage(deviceId, language);
        });
    }
    createDevice(_, { createInfo }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.create(createInfo);
        });
    }
    updateDevice(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._devicesService.throwIfNotExists(id);
            try {
                const device = yield this._devicesService.update(id, updateInput);
                pubSub.publish('deviceCreated', { deviceCreated: device });
                return device;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    removeDevice(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._devicesService.throwIfNotExists(id);
            return this._devicesService.remove(id);
        });
    }
    removeDeviceByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const devices = yield this._devicesService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const devicesIds = devices.map((d) => d.id);
            return this._devicesService.removeMultipleByIds(devicesIds);
        });
    }
    deviceCreated() {
        return {
            subscribe: () => pubSub.asyncIterator('deviceCreated'),
        };
    }
};
tslib_1.__decorate([
    graphql_1.Query('device'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "getDevice", null);
tslib_1.__decorate([
    graphql_1.Query('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "updateDeviceLanguage", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "createDevice", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "updateDevice", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "removeDevice", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "removeDeviceByIds", null);
tslib_1.__decorate([
    graphql_1.Subscription(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], DeviceResolver.prototype, "deviceCreated", null);
DeviceResolver = tslib_1.__decorate([
    graphql_1.Resolver('Device'),
    tslib_1.__metadata("design:paramtypes", [devices_1.DevicesService])
], DeviceResolver);
exports.DeviceResolver = DeviceResolver;


/***/ }),

/***/ "./src/graphql/devices/devices.module.ts":
/*!***********************************************!*\
  !*** ./src/graphql/devices/devices.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const device_resolver_1 = __webpack_require__(/*! ./device.resolver */ "./src/graphql/devices/device.resolver.ts");
let DevicesModule = class DevicesModule {
};
DevicesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [device_resolver_1.DeviceResolver],
    })
], DevicesModule);
exports.DevicesModule = DevicesModule;


/***/ }),

/***/ "./src/graphql/geo-locations/geo-location.resolver.ts":
/*!************************************************************!*\
  !*** ./src/graphql/geo-locations/geo-location.resolver.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const geo_locations_1 = __webpack_require__(/*! ../../services/geo-locations */ "./src/services/geo-locations/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let GeoLocationResolver = class GeoLocationResolver {
    constructor(geoLocationsProductsService) {
        this.geoLocationsProductsService = geoLocationsProductsService;
    }
    getGeoLocationProducts(_, { geoLocation }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsProductsService
                .get(geoLocation)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    geoLocationProductsByPaging(_, { geoLocation, options, pagingOptions = {}, searchText, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsProductsService.geoLocationProductsByPaging(geoLocation, pagingOptions, options, searchText);
        });
    }
    getCountOfGeoLocationProducts(_, { geoLocation, options, searchText, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsProductsService.getCountOfGeoLocationProducts(geoLocation, options, searchText);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('geoLocationProducts'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationResolver.prototype, "getGeoLocationProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationResolver.prototype, "geoLocationProductsByPaging", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationResolver.prototype, "getCountOfGeoLocationProducts", null);
GeoLocationResolver = tslib_1.__decorate([
    graphql_1.Resolver('GeoLocation'),
    tslib_1.__metadata("design:paramtypes", [geo_locations_1.GeoLocationsProductsService])
], GeoLocationResolver);
exports.GeoLocationResolver = GeoLocationResolver;


/***/ }),

/***/ "./src/graphql/geo-locations/geo-locations.module.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/geo-locations/geo-locations.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const geo_location_resolver_1 = __webpack_require__(/*! ./geo-location.resolver */ "./src/graphql/geo-locations/geo-location.resolver.ts");
let GeoLocationsModule = class GeoLocationsModule {
};
GeoLocationsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geo_location_resolver_1.GeoLocationResolver],
    })
], GeoLocationsModule);
exports.GeoLocationsModule = GeoLocationsModule;


/***/ }),

/***/ "./src/graphql/geo-locations/merchants/geo-location-merchants.module.ts":
/*!******************************************************************************!*\
  !*** ./src/graphql/geo-locations/merchants/geo-location-merchants.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const geo_location_merchants_resolver_1 = __webpack_require__(/*! ./geo-location-merchants.resolver */ "./src/graphql/geo-locations/merchants/geo-location-merchants.resolver.ts");
let GeoLocationMerchantsModule = class GeoLocationMerchantsModule {
};
GeoLocationMerchantsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geo_location_merchants_resolver_1.GeoLocationMerchantsResolver],
    })
], GeoLocationMerchantsModule);
exports.GeoLocationMerchantsModule = GeoLocationMerchantsModule;


/***/ }),

/***/ "./src/graphql/geo-locations/merchants/geo-location-merchants.resolver.ts":
/*!********************************************************************************!*\
  !*** ./src/graphql/geo-locations/merchants/geo-location-merchants.resolver.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const geo_locations_1 = __webpack_require__(/*! ../../../services/geo-locations */ "./src/services/geo-locations/index.ts");
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const utils_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts"));
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const IN_STORE_DISTANCE = 50;
let GeoLocationMerchantsResolver = class GeoLocationMerchantsResolver {
    constructor(geoLocationsWarehousesService) {
        this.geoLocationsWarehousesService = geoLocationsWarehousesService;
    }
    getCoseMerchants(_, { geoLocation }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, IN_STORE_DISTANCE, { fullProducts: false, activeOnly: true });
            merchants = merchants.sort((m1, m2) => utils_1.default.getDistance(new GeoLocation_1.default(m1.geoLocation), new GeoLocation_1.default(geoLocation)) -
                utils_1.default.getDistance(new GeoLocation_1.default(m2.geoLocation), new GeoLocation_1.default(geoLocation)));
            return merchants.map((m) => new Warehouse_1.default(m));
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getCoseMerchants'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationMerchantsResolver.prototype, "getCoseMerchants", null);
GeoLocationMerchantsResolver = tslib_1.__decorate([
    graphql_1.Resolver('GeoLocationMerchants'),
    tslib_1.__metadata("design:paramtypes", [geo_locations_1.GeoLocationsWarehousesService])
], GeoLocationMerchantsResolver);
exports.GeoLocationMerchantsResolver = GeoLocationMerchantsResolver;


/***/ }),

/***/ "./src/graphql/geo-locations/orders/geo-location-orders.module.ts":
/*!************************************************************************!*\
  !*** ./src/graphql/geo-locations/orders/geo-location-orders.module.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const geo_location_orders_resolver_1 = __webpack_require__(/*! ./geo-location-orders.resolver */ "./src/graphql/geo-locations/orders/geo-location-orders.resolver.ts");
let GeoLocationOrdersModule = class GeoLocationOrdersModule {
};
GeoLocationOrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geo_location_orders_resolver_1.GeoLocationOrdersResolver],
    })
], GeoLocationOrdersModule);
exports.GeoLocationOrdersModule = GeoLocationOrdersModule;


/***/ }),

/***/ "./src/graphql/geo-locations/orders/geo-location-orders.resolver.ts":
/*!**************************************************************************!*\
  !*** ./src/graphql/geo-locations/orders/geo-location-orders.resolver.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const GeoLocationsOrdersService_1 = __webpack_require__(/*! ../../../services/geo-locations/GeoLocationsOrdersService */ "./src/services/geo-locations/GeoLocationsOrdersService.ts");
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
let GeoLocationOrdersResolver = class GeoLocationOrdersResolver {
    constructor(geoLocationsOrdersService) {
        this.geoLocationsOrdersService = geoLocationsOrdersService;
    }
    getOrderForWork(_, { geoLocation, skippedOrderIds, options, searchObj, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.geoLocationsOrdersService.getOrdersForWork(geoLocation, skippedOrderIds, options, searchObj);
            return orders[0];
        });
    }
    getOrdersForWork(_, { geoLocation, skippedOrderIds, options, searchObj, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.geoLocationsOrdersService.getOrdersForWork(geoLocation, skippedOrderIds, options, searchObj);
            return orders.map((o) => new Order_1.default(o));
        });
    }
    getCountOfOrdersForWork(_, { geoLocation, skippedOrderIds, searchObj, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsOrdersService.getCountOfOrdersForWork(geoLocation, skippedOrderIds, searchObj);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getOrderForWork'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationOrdersResolver.prototype, "getOrderForWork", null);
tslib_1.__decorate([
    graphql_1.Query('getOrdersForWork'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationOrdersResolver.prototype, "getOrdersForWork", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationOrdersResolver.prototype, "getCountOfOrdersForWork", null);
GeoLocationOrdersResolver = tslib_1.__decorate([
    graphql_1.Resolver('GeoLocationOrders'),
    tslib_1.__metadata("design:paramtypes", [GeoLocationsOrdersService_1.GeoLocationsOrdersService])
], GeoLocationOrdersResolver);
exports.GeoLocationOrdersResolver = GeoLocationOrdersResolver;


/***/ }),

/***/ "./src/graphql/invites-requests/invites-requests.module.ts":
/*!*****************************************************************!*\
  !*** ./src/graphql/invites-requests/invites-requests.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const invites_requests_resolver_1 = __webpack_require__(/*! ./invites-requests.resolver */ "./src/graphql/invites-requests/invites-requests.resolver.ts");
let InvitesRequestsModule = class InvitesRequestsModule {
};
InvitesRequestsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [invites_requests_resolver_1.InviteRequestResolver],
    })
], InvitesRequestsModule);
exports.InvitesRequestsModule = InvitesRequestsModule;


/***/ }),

/***/ "./src/graphql/invites-requests/invites-requests.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/graphql/invites-requests/invites-requests.resolver.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const invites_1 = __webpack_require__(/*! ../../services/invites */ "./src/services/invites/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const InviteRequest_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/InviteRequest */ "./node_modules/@ever-platform/common/src/entities/InviteRequest.ts"));
let InviteRequestResolver = class InviteRequestResolver {
    constructor(_invitesRequestsService) {
        this._invitesRequestsService = _invitesRequestsService;
    }
    generate1000InviteRequests(_, { defaultLng, defaultLat }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesRequestsService.generate1000InviteRequests(defaultLng, defaultLat);
        });
    }
    getInviteRequest(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesRequestsService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    notifyAboutLaunch(_, { invite, devicesIds, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesRequestsService.notifyAboutLaunch(invite, devicesIds);
        });
    }
    getInvitesRequests(_, { findInput, invited, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'asc' };
            }
            const invitesRequests = yield this._invitesRequestsService.getInvitesRequests(findInput, invited, pagingOptions);
            return invitesRequests.map((i) => new InviteRequest_1.default(i));
        });
    }
    getCountOfInvitesRequests(_, { invited }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findObj = { isDeleted: { $eq: false } };
            if (!invited) {
                findObj['isInvited'] = { $eq: false };
            }
            return this._invitesRequestsService.Model.find(findObj)
                .countDocuments()
                .exec();
        });
    }
    createInviteRequest(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesRequestsService.create(createInput);
        });
    }
    updateInviteRequest(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesRequestsService.throwIfNotExists(id);
            return this._invitesRequestsService.update(id, updateInput);
        });
    }
    removeInviteRequest(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesRequestsService.throwIfNotExists(id);
            return this._invitesRequestsService.remove(id);
        });
    }
    removeInvitesRequestsByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inviteRequests = yield this._invitesRequestsService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const inviteRequestsIds = inviteRequests.map((d) => d.id);
            return this._invitesRequestsService.removeMultipleByIds(inviteRequestsIds);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "generate1000InviteRequests", null);
tslib_1.__decorate([
    graphql_1.Query('inviteRequest'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "getInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Query('notifyAboutLaunch'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "notifyAboutLaunch", null);
tslib_1.__decorate([
    graphql_1.Query('invitesRequests'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "getInvitesRequests", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "getCountOfInvitesRequests", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "createInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "updateInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "removeInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "removeInvitesRequestsByIds", null);
InviteRequestResolver = tslib_1.__decorate([
    graphql_1.Resolver('Invite-request'),
    tslib_1.__metadata("design:paramtypes", [invites_1.InvitesRequestsService])
], InviteRequestResolver);
exports.InviteRequestResolver = InviteRequestResolver;


/***/ }),

/***/ "./src/graphql/invites/invite.resolver.ts":
/*!************************************************!*\
  !*** ./src/graphql/invites/invite.resolver.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const InvitesService_1 = __webpack_require__(/*! ../../services/invites/InvitesService */ "./src/services/invites/InvitesService.ts");
const invites_1 = __webpack_require__(/*! ../../services/invites */ "./src/services/invites/index.ts");
const Invite_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Invite */ "./node_modules/@ever-platform/common/src/entities/Invite.ts"));
let InviteResolver = class InviteResolver {
    constructor(_invitesService, _inviteRequestsService) {
        this._invitesService = _invitesService;
        this._inviteRequestsService = _inviteRequestsService;
    }
    generate1000InvitesConnectedToInviteRequests(_, { defaultLng, defaultLat }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { invitesRequestsToCreate, invitesToCreate, } = this._invitesService.generate1000InvitesConnectedToInviteRequests(defaultLng, defaultLat);
            yield this._invitesService.Model.insertMany(invitesToCreate);
            yield this._inviteRequestsService.Model.insertMany(invitesRequestsToCreate);
        });
    }
    getInvite(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getInviteByCode(_, { info }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.getByCode(info).pipe(operators_1.first()).toPromise();
        });
    }
    getInviteByLocation(_, { info }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService
                .getByLocation(info)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getInvites(_, { findInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const invites = yield this._invitesService.getInvites(findInput, pagingOptions);
            return invites.map((i) => new Invite_1.default(i));
        });
    }
    getCountOfInvites() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.Model.find({ isDeleted: { $eq: false } })
                .countDocuments()
                .exec();
        });
    }
    createInvite(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.create(createInput);
        });
    }
    updateInvite(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesService.throwIfNotExists(id);
            return this._invitesService.update(id, updateInput);
        });
    }
    removeInvite(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesService.throwIfNotExists(id);
            return this._invitesService.remove(id);
        });
    }
    removeInvitesByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invites = yield this._invitesService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const invitesIds = invites.map((d) => d.id);
            return this._invitesService.removeMultipleByIds(invitesIds);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "generate1000InvitesConnectedToInviteRequests", null);
tslib_1.__decorate([
    graphql_1.Query('invite'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInvite", null);
tslib_1.__decorate([
    graphql_1.Query('getInviteByCode'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInviteByCode", null);
tslib_1.__decorate([
    graphql_1.Query('getInviteByLocation'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInviteByLocation", null);
tslib_1.__decorate([
    graphql_1.Query('invites'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInvites", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getCountOfInvites", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "createInvite", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "updateInvite", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "removeInvite", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "removeInvitesByIds", null);
InviteResolver = tslib_1.__decorate([
    graphql_1.Resolver('Invite'),
    tslib_1.__metadata("design:paramtypes", [InvitesService_1.InvitesService,
        invites_1.InvitesRequestsService])
], InviteResolver);
exports.InviteResolver = InviteResolver;


/***/ }),

/***/ "./src/graphql/invites/invites.module.ts":
/*!***********************************************!*\
  !*** ./src/graphql/invites/invites.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const invite_resolver_1 = __webpack_require__(/*! ./invite.resolver */ "./src/graphql/invites/invite.resolver.ts");
let InvitesModule = class InvitesModule {
};
InvitesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [invite_resolver_1.InviteResolver],
    })
], InvitesModule);
exports.InvitesModule = InvitesModule;


/***/ }),

/***/ "./src/graphql/orders/order.resolver.ts":
/*!**********************************************!*\
  !*** ./src/graphql/orders/order.resolver.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const CarriersService_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../services/carriers/CarriersService */ "./src/services/carriers/CarriersService.ts"));
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const OrderCarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const OrderWarehouseStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const orders_1 = __webpack_require__(/*! ../../services/orders */ "./src/services/orders/index.ts");
const users_1 = __webpack_require__(/*! ../../services/users */ "./src/services/users/index.ts");
const products_1 = __webpack_require__(/*! ../../services/products */ "./src/services/products/index.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const bson_1 = __webpack_require__(/*! bson */ "bson");
const FakeOrdersService_1 = __webpack_require__(/*! ../../services/fake-data/FakeOrdersService */ "./src/services/fake-data/FakeOrdersService.ts");
let OrderResolver = class OrderResolver {
    constructor(_ordersService, _carriersService, _warehousesService, _usersService, _productsService, _fakeOrdersService) {
        this._ordersService = _ordersService;
        this._carriersService = _carriersService;
        this._warehousesService = _warehousesService;
        this._usersService = _usersService;
        this._productsService = _productsService;
        this._fakeOrdersService = _fakeOrdersService;
        this._getRandomProduct = (orderCount, products) => {
            return products[orderCount % products.length];
        };
        this._getRandomCustomer = (orderCount, customers) => {
            if (orderCount < customers.length) {
                return customers[orderCount];
            }
            else {
                return customers[orderCount % customers.length];
            }
        };
        this._getRandomCarrierId = (orderCount, carriers) => {
            return carriers[orderCount % carriers.length].id;
        };
        this._prepareOrderFieldsValues = (orderCount) => {
            const hasCarrier = Math.random() > 0.07;
            const orderIsPaid = Math.random() > 0.15;
            const numberOfProductsToOrder = orderCount % 4 || 1;
            return { numberOfProductsToOrder, hasCarrier, orderIsPaid };
        };
        this._getRandomOrderDate = (orderCount) => {
            const orderDate = new Date();
            orderDate.setFullYear(orderDate.getFullYear() - Math.round(Math.random() * 5));
            const dateNow = new Date();
            const isCurrentYear = orderDate.getFullYear() === dateNow.getFullYear();
            const months = isCurrentYear ? Number(dateNow.getMonth()) : 11;
            orderDate.setMonth(months > 0 ? orderCount % months : 0);
            const isCurrentMonth = orderDate.getMonth() === dateNow.getMonth() && isCurrentYear;
            const days = isCurrentMonth ? Number(dateNow.getDate()) : 31;
            orderDate.setDate(orderCount % days);
            const isCurrentDay = orderDate.getDate() === dateNow.getDate() &&
                isCurrentYear &&
                isCurrentMonth;
            const hours = isCurrentDay ? Number(dateNow.getHours()) : 24;
            orderDate.setHours(orderCount % hours);
            return orderDate;
        };
        this._setupOrderProducts = (products) => {
            let productCount = 1;
            const orderProducts = [];
            for (const p of products) {
                const productPrice = Math.round(Math.random() * 15);
                orderProducts.push({
                    count: 2,
                    isManufacturing: true,
                    isCarrierRequired: true,
                    isDeliveryRequired: true,
                    price: productPrice,
                    initialPrice: productPrice,
                    product: p,
                });
                if (productCount >= 3) {
                    break;
                }
                productCount += 1;
            }
            return orderProducts;
        };
        this._setupAvailableOrdersToCreate = (stores, products, users) => {
            const orders = [];
            for (let orderNumber = 1; orderNumber <= 30; orderNumber += 1) {
                const orderStore = stores[lodash_1.default.random(stores.length - 1)];
                const orderProducts = this._setupOrderProducts(products);
                const createdAt = this.getCloseDate(new Date());
                orders.push({
                    user: users[lodash_1.default.random(users.length - 1)],
                    warehouse: orderStore._id.toString(),
                    products: orderProducts,
                    isConfirmed: true,
                    isCancelled: false,
                    isPaid: false,
                    warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished,
                    carrierStatus: OrderCarrierStatus_1.default.NoCarrier,
                    orderNumber,
                    _createdAt: createdAt,
                });
            }
            return orders;
        };
        this._setupHistoryOrdersToCreate = (stores, products, users, carrierId, orderNumber) => {
            const orders = [];
            const availableStatuses = [
                OrderCarrierStatus_1.default.DeliveryCompleted,
                OrderCarrierStatus_1.default.IssuesDuringDelivery,
                OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
            ];
            for (let i = 1; i <= 12; i += 1) {
                const orderStore = stores[lodash_1.default.random(stores.length - 1)];
                const orderProducts = this._setupOrderProducts(products);
                const carrierStatus = availableStatuses[lodash_1.default.random(availableStatuses.length - 1)];
                const createdAt = this.getCloseDate(new Date());
                const startDeliveryTime = this.getFinishedTime(createdAt);
                orders.push({
                    user: users[lodash_1.default.random(users.length - 1)],
                    warehouse: orderStore._id.toString(),
                    products: orderProducts,
                    isConfirmed: true,
                    isCancelled: false,
                    carrier: carrierId,
                    startDeliveryTime,
                    deliveryTime: carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted
                        ? this.getFinishedTime(startDeliveryTime)
                        : null,
                    finishedProcessingTime: carrierStatus !== OrderCarrierStatus_1.default.DeliveryCompleted
                        ? this.getFinishedTime(startDeliveryTime)
                        : null,
                    isPaid: true,
                    warehouseStatus: OrderWarehouseStatus_1.default.GivenToCarrier,
                    carrierStatus,
                    orderNumber,
                    _createdAt: createdAt,
                });
            }
            return orders;
        };
    }
    generateActiveAndAvailableOrdersPerCarrier() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const users = yield this._usersService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const stores = yield this._warehousesService.Model.find(commonOptionsFlag)
                .select({ _id: 1 })
                .lean()
                .exec();
            const products = yield this._productsService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const ordersRaw = this._setupAvailableOrdersToCreate(stores, products, users);
            yield this._ordersService.Model.insertMany(ordersRaw);
        });
    }
    generatePastOrdersPerCarrier() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const users = yield this._usersService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const stores = yield this._warehousesService.Model.find(commonOptionsFlag)
                .select({ _id: 1 })
                .lean()
                .exec();
            const carrierIds = yield this._carriersService.Model.find(commonOptionsFlag)
                .select({ _id: 1 })
                .lean()
                .exec();
            const products = yield this._productsService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const totalOrdersToCreate = [];
            carrierIds.forEach((objectId, index) => {
                const carrierId = objectId._id.toString();
                const orderNumber = index;
                const ordersRaw = this._setupHistoryOrdersToCreate(stores, products, users, carrierId, orderNumber);
                totalOrdersToCreate.push(ordersRaw);
            });
            yield this._ordersService.Model.insertMany(lodash_1.default.flatten(totalOrdersToCreate));
        });
    }
    addTakenOrders(_context, { carrierIds }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const stores = yield this._warehousesService.find(commonOptionsFlag);
            const customers = yield this._usersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            const ordersToCreate = [];
            carrierIds.forEach((id) => {
                for (let orderNumber = 1; orderNumber <= 20; orderNumber += 1) {
                    const orderProducts = [];
                    const productCount = Math.round(Math.random() * 4) || 1;
                    for (let i = 0; i < productCount; i += 1) {
                        const orderPrice = (orderNumber + i) % 110 || 1;
                        orderProducts.push({
                            count: (orderNumber + i) % 12 || 1,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: orderPrice,
                            initialPrice: orderPrice,
                            product: this._getRandomProduct(orderNumber + i, products),
                        });
                    }
                    const orderIsPaid = Math.random() > 0.5;
                    const createdAt = this._getRandomOrderDate(orderNumber);
                    const startDeliveryTime = this.getFinishedTime(createdAt);
                    ordersToCreate.push({
                        isCancelled: !orderIsPaid,
                        isPaid: orderIsPaid,
                        deliveryTimeEstimate: 0,
                        startDeliveryTime,
                        deliveryTime: orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null,
                        finishedProcessingTime: !orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null,
                        warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished,
                        carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted,
                        orderNumber,
                        user: this._getRandomCustomer(orderNumber, customers),
                        warehouse: stores[orderNumber % stores.length].id,
                        products: orderProducts,
                        _createdAt: createdAt,
                        carrier: id,
                    });
                }
            });
            yield this._ordersService.Model.insertMany(ordersToCreate);
        });
    }
    addOrdersToTake() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const stores = yield this._warehousesService.find(commonOptionsFlag);
            const customers = yield this._usersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            const ordersToCreate = [];
            for (let i = 0; i < 3; i += 1) {
                for (let orderNumber = 1; orderNumber <= 10; orderNumber += 1) {
                    const orderProducts = [];
                    const productCount = Math.round(Math.random() * 4) || 1;
                    for (let j = 0; j < productCount; j += 1) {
                        const orderPrice = (orderNumber + j) % 110 || 1;
                        orderProducts.push({
                            count: (orderNumber + j) % 6 || 1,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: orderPrice,
                            initialPrice: orderPrice,
                            product: this._getRandomProduct(orderNumber + j, products),
                        });
                    }
                    const createdAt = this.getCloseDate(new Date());
                    ordersToCreate.push({
                        isConfirmed: false,
                        isCancelled: false,
                        isPaid: false,
                        deliveryTimeEstimate: 0,
                        warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished,
                        carrierStatus: OrderCarrierStatus_1.default.NoCarrier,
                        orderNumber,
                        user: this._getRandomCustomer(orderNumber, customers),
                        warehouse: stores[orderNumber % stores.length].id,
                        products: orderProducts,
                        _createdAt: createdAt,
                    });
                }
            }
            yield this._ordersService.Model.insertMany(ordersToCreate);
        });
    }
    generateRandomOrdersCurrentStore(_context, { storeId, storeCreatedAt, ordersLimit, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const customers = yield this._usersService.find(commonOptionsFlag);
            const carriers = yield this._carriersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            let response = { error: false, message: null };
            try {
                const currentStoreOrders = [];
                const storeCreatedDate = new Date(storeCreatedAt);
                for (let orderNumber = 1; orderNumber <= ordersLimit; orderNumber += 1) {
                    const carrierId = this._getRandomCarrierId(orderNumber, carriers);
                    const orderRaw = this._fakeOrdersService.getOrderRaw(orderNumber, storeId, storeCreatedDate, carrierId, customers, products);
                    currentStoreOrders.push(orderRaw);
                }
                yield this._ordersService.Model.insertMany(currentStoreOrders);
            }
            catch (err) {
                response = { error: true, message: err.message };
            }
            return response;
        });
    }
    generateOrdersByCustomerId(_context, { numberOfOrders, customerId, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const stores = (yield this._warehousesService.find(commonOptionsFlag)).filter((__, index) => index <= 20);
            const carriers = yield this._carriersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            const user = yield this._usersService
                .get(customerId)
                .pipe(operators_1.first())
                .toPromise();
            if (products.length > 0) {
                const rawOrders = [];
                for (let orderNumber = 1; orderNumber <= numberOfOrders; orderNumber += 1) {
                    const { numberOfProductsToOrder, hasCarrier, orderIsPaid, } = this._prepareOrderFieldsValues(orderNumber);
                    const orderProducts = [];
                    for (let i = 0; i < numberOfProductsToOrder; i += 1) {
                        const orderPrice = (orderNumber + i) % 110 || 1;
                        orderProducts.push({
                            count: (orderNumber + i) % 6 || 1,
                            isManufacturing: true,
                            isCarrierRequired: hasCarrier,
                            isDeliveryRequired: hasCarrier,
                            price: orderPrice,
                            initialPrice: orderPrice,
                            product: this._getRandomProduct(orderNumber + i, products),
                        });
                    }
                    const orderDate = this._getRandomOrderDate(orderNumber);
                    const orderDeliveryTime = new Date(orderDate);
                    orderDeliveryTime.setMinutes(orderDeliveryTime.getMinutes() +
                        Math.round(Math.random() * 90));
                    const startDeliveryTime = this.getFinishedTime(orderDate);
                    rawOrders.push(Object.assign({ isCancelled: !orderIsPaid, isPaid: orderIsPaid, deliveryTimeEstimate: 0, startDeliveryTime, deliveryTime: orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null, finishedProcessingTime: !orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null, warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished, carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted, orderNumber,
                        user, warehouse: stores[orderNumber % stores.length].id, products: orderProducts, _createdAt: orderDate }, (hasCarrier && {
                        carrier: this._getRandomCarrierId(orderNumber, carriers),
                    })));
                }
                yield this._ordersService.Model.insertMany(rawOrders);
            }
        });
    }
    getOrdersChartTotalOrders() {
        return this._ordersService.getOrdersChartTotalOrders();
    }
    getCompletedOrdersInfo(_context, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this._ordersService.getDashboardCompletedOrders(storeId);
            return {
                totalOrders: orders.length,
                totalRevenue: orders
                    .map((order) => order.totalPrice)
                    .reduce((prevPrice, nextPrice) => prevPrice + nextPrice, 0),
            };
        });
    }
    getDashboardCompletedOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.getDashboardCompletedOrders();
        });
    }
    getDashboardCompletedOrdersToday() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.getDashboardCompletedOrdersToday();
        });
    }
    getOrder(_context, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getOrders(_context, { findInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }));
        });
    }
    getOrderedUsersInfo(_context, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.getOrderedUsersInfo(storeId);
        });
    }
    getUsersOrdersCountInfo(_context, { usersIds }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersInfo = yield this._ordersService.Model.aggregate([
                {
                    $match: {
                        $and: [
                            { 'user._id': { $ne: null } },
                            usersIds
                                ? {
                                    'user._id': {
                                        $in: usersIds.map((i) => new bson_1.ObjectId(i)),
                                    },
                                }
                                : {},
                        ],
                    },
                },
                {
                    $group: {
                        _id: '$user._id',
                        ordersCount: { $sum: 1 },
                    },
                },
            ]);
            return ordersInfo.map((o) => ({
                id: o._id,
                ordersCount: o.ordersCount,
            }));
        });
    }
    getMerchantsOrdersCountInfo(_context, { merchantsIds }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersInfo = yield this._ordersService.Model.aggregate([
                {
                    $match: {
                        $and: [
                            { warehouse: { $ne: null } },
                            merchantsIds
                                ? { warehouse: { $in: merchantsIds } }
                                : {},
                        ],
                    },
                },
                {
                    $group: {
                        _id: '$warehouse',
                        ordersCount: { $sum: 1 },
                    },
                },
            ]);
            return ordersInfo.map((o) => ({
                id: o._id,
                ordersCount: o.ordersCount,
            }));
        });
    }
    updateOrderCarrierStatus(_context, { orderId, status, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.updateCarrierStatus(orderId, OrderCarrierStatus_1.default[status]);
        });
    }
    updateOrderWarehouseStatus(_context, { orderId, status, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.updateWarehouseStatus(orderId, OrderWarehouseStatus_1.default[status]);
        });
    }
    payOrderWithStripe(_context, { orderId, cardId, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.payWithStripe(orderId, cardId);
        });
    }
    getCarrier(_order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = new Order_1.default(_order);
            return order.carrierId == null
                ? null
                : this._carriersService
                    .get(order.carrierId)
                    .pipe(operators_1.first())
                    .toPromise();
        });
    }
    getWarehouse(_order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = new Order_1.default(_order);
            return this._warehousesService
                .get(order.warehouseId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getFinishedTime(date) {
        const randomMinutes = lodash_1.default.random(1, 30);
        const randomSec = lodash_1.default.random(1, 60);
        const oldDate = new Date(date);
        oldDate.setSeconds(randomSec);
        return new Date(oldDate.setMinutes(date.getMinutes() + randomMinutes));
    }
    getCloseDate(date) {
        const randomMinutes = lodash_1.default.random(1, 10);
        const randomSec = lodash_1.default.random(1, 60);
        const oldDate = new Date(date);
        oldDate.setSeconds(randomSec);
        return new Date(oldDate.setMinutes(date.getMinutes() - randomMinutes));
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generateActiveAndAvailableOrdersPerCarrier", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generatePastOrdersPerCarrier", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "addTakenOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "addOrdersToTake", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generateRandomOrdersCurrentStore", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generateOrdersByCustomerId", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OrderResolver.prototype, "getOrdersChartTotalOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getCompletedOrdersInfo", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getDashboardCompletedOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getDashboardCompletedOrdersToday", null);
tslib_1.__decorate([
    graphql_1.Query('getOrder'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrder", null);
tslib_1.__decorate([
    graphql_1.Query('orders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrderedUsersInfo", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getUsersOrdersCountInfo", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getMerchantsOrdersCountInfo", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderCarrierStatus", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderWarehouseStatus", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "payOrderWithStripe", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('carrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getCarrier", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('warehouse'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getWarehouse", null);
OrderResolver = tslib_1.__decorate([
    graphql_1.Resolver('Order'),
    tslib_1.__metadata("design:paramtypes", [orders_1.OrdersService,
        CarriersService_1.default,
        warehouses_1.WarehousesService,
        users_1.UsersService,
        products_1.ProductsService,
        FakeOrdersService_1.FakeOrdersService])
], OrderResolver);
exports.OrderResolver = OrderResolver;


/***/ }),

/***/ "./src/graphql/orders/orders.module.ts":
/*!*********************************************!*\
  !*** ./src/graphql/orders/orders.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const order_resolver_1 = __webpack_require__(/*! ./order.resolver */ "./src/graphql/orders/order.resolver.ts");
let OrdersModule = class OrdersModule {
};
OrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [order_resolver_1.OrderResolver],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;


/***/ }),

/***/ "./src/graphql/products/categories/products-categories.module.ts":
/*!***********************************************************************!*\
  !*** ./src/graphql/products/categories/products-categories.module.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_category_resolver_1 = __webpack_require__(/*! ./products-category.resolver */ "./src/graphql/products/categories/products-category.resolver.ts");
let ProductsCategoriesModule = class ProductsCategoriesModule {
};
ProductsCategoriesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [products_category_resolver_1.ProductsCategoryResolver],
    })
], ProductsCategoriesModule);
exports.ProductsCategoriesModule = ProductsCategoriesModule;


/***/ }),

/***/ "./src/graphql/products/categories/products-category.resolver.ts":
/*!***********************************************************************!*\
  !*** ./src/graphql/products/categories/products-category.resolver.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const products_1 = __webpack_require__(/*! ../../../services/products */ "./src/services/products/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let ProductsCategoryResolver = class ProductsCategoryResolver {
    constructor(_productsCategoriesService) {
        this._productsCategoriesService = _productsCategoriesService;
    }
    getProductsCategory(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsCategoriesService
                .get(id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getProductsCategories(_, { findInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsCategoriesService.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }));
        });
    }
    createProductsCategory(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsCategoriesService.create(createInput);
        });
    }
    updateProductsCategory(_, { id, updateInput, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._productsCategoriesService.throwIfNotExists(id);
            return this._productsCategoriesService.update(id, updateInput);
        });
    }
    removeProductsCategoriesByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const categories = yield this._productsCategoriesService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const categoriesIds = categories.map((c) => c.id);
            return this._productsCategoriesService.removeMultipleByIds(categoriesIds);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('productsCategory'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "getProductsCategory", null);
tslib_1.__decorate([
    graphql_1.Query('productsCategories'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "getProductsCategories", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "createProductsCategory", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "updateProductsCategory", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "removeProductsCategoriesByIds", null);
ProductsCategoryResolver = tslib_1.__decorate([
    graphql_1.Resolver('ProductsCategory'),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsCategoriesService])
], ProductsCategoryResolver);
exports.ProductsCategoryResolver = ProductsCategoryResolver;


/***/ }),

/***/ "./src/graphql/products/product.resolver.ts":
/*!**************************************************!*\
  !*** ./src/graphql/products/product.resolver.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const products_1 = __webpack_require__(/*! ../../services/products */ "./src/services/products/index.ts");
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const Product_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Product */ "./node_modules/@ever-platform/common/src/entities/Product.ts"));
let ProductResolver = class ProductResolver {
    constructor(_productsService, _warehousesService, _warehousesProductsService) {
        this._productsService = _productsService;
        this._warehousesService = _warehousesService;
        this._warehousesProductsService = _warehousesProductsService;
    }
    getProduct(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getProducts(_, { findInput, pagingOptions = {}, existedProductsIds = [] }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const products = yield this._productsService.getProducts(findInput, pagingOptions, existedProductsIds);
            return products.map((p) => new Product_1.default(p));
        });
    }
    getCountOfProducts(_, { existedProductsIds = [] }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsService.Model.find({
                isDeleted: { $eq: false },
                _id: { $nin: existedProductsIds },
            })
                .countDocuments()
                .exec();
        });
    }
    removeProductsByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouses = yield this._warehousesService.find({
                isDeleted: { $eq: false },
            });
            const products = yield this._productsService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const productsIds = products.map((d) => d.id);
            for (const warehouse of warehouses) {
                const productsForDel = warehouse.products
                    .filter((p) => productsIds.includes(p.productId))
                    .map((p) => p.productId);
                if (productsForDel.length > 0) {
                    yield this._warehousesProductsService.remove(warehouse.id, productsForDel);
                }
            }
            yield this._productsService.removeMultipleByIds(productsIds);
        });
    }
    saveProduct(_, { product }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productId = product['_id'];
            yield this._productsService.throwIfNotExists(productId);
            product.id = productId;
            return this._productsService.save(product);
        });
    }
    createProduct(_, { product }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsService.create(product);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('product'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
tslib_1.__decorate([
    graphql_1.Query('products'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getCountOfProducts", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "removeProductsByIds", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "saveProduct", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
ProductResolver = tslib_1.__decorate([
    graphql_1.Resolver('Product'),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsService,
        warehouses_1.WarehousesService,
        warehouses_1.WarehousesProductsService])
], ProductResolver);
exports.ProductResolver = ProductResolver;


/***/ }),

/***/ "./src/graphql/products/products.module.ts":
/*!*************************************************!*\
  !*** ./src/graphql/products/products.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_resolver_1 = __webpack_require__(/*! ./product.resolver */ "./src/graphql/products/product.resolver.ts");
const products_categories_module_1 = __webpack_require__(/*! ./categories/products-categories.module */ "./src/graphql/products/categories/products-categories.module.ts");
let ProductsModule = class ProductsModule {
};
ProductsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [products_categories_module_1.ProductsCategoriesModule],
        providers: [product_resolver_1.ProductResolver],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;


/***/ }),

/***/ "./src/graphql/scalars/date.type.graphql":
/*!***********************************************!*\
  !*** ./src/graphql/scalars/date.type.graphql ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scalar Date\n"

/***/ }),

/***/ "./src/graphql/scalars/index.ts":
/*!**************************************!*\
  !*** ./src/graphql/scalars/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./date.type.graphql */ "./src/graphql/scalars/date.type.graphql"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./scalars */ "./src/graphql/scalars/scalars.ts"), exports);


/***/ }),

/***/ "./src/graphql/scalars/scalars.ts":
/*!****************************************!*\
  !*** ./src/graphql/scalars/scalars.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const date_type_graphql_1 = __webpack_require__(/*! ./date.type.graphql */ "./src/graphql/scalars/date.type.graphql");
exports.SCALARS = {
    Date: date_type_graphql_1.DateScalar,
};


/***/ }),

/***/ "./src/graphql/subscriptions/subscription.constants.ts":
/*!*************************************************************!*\
  !*** ./src/graphql/subscriptions/subscription.constants.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBSCRIPTION_SERVER = 'SUBSCRIPTION_SERVER';


/***/ }),

/***/ "./src/graphql/subscriptions/subscription.providers.ts":
/*!*************************************************************!*\
  !*** ./src/graphql/subscriptions/subscription.providers.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __webpack_require__(/*! http */ "http");
const subscription_constants_1 = __webpack_require__(/*! ./subscription.constants */ "./src/graphql/subscriptions/subscription.constants.ts");
exports.createSubscriptionProviders = (port = 5050) => [
    {
        provide: subscription_constants_1.SUBSCRIPTION_SERVER,
        useFactory: () => {
            const server = http_1.createServer();
            const closeServer = () => {
                try {
                    if (server != null) {
                        server.close(() => {
                            process.exit(0);
                        });
                    }
                }
                catch (err) {
                    process.exit(0);
                }
            };
            process
                .on('SIGINT', () => closeServer())
                .on('SIGTERM', () => closeServer());
            return new Promise((resolve) => server.listen(port, () => resolve(server)));
        },
    },
];


/***/ }),

/***/ "./src/graphql/subscriptions/subscriptions.module.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/subscriptions/subscriptions.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const subscription_providers_1 = __webpack_require__(/*! ./subscription.providers */ "./src/graphql/subscriptions/subscription.providers.ts");
const subscriptions_service_1 = __webpack_require__(/*! ./subscriptions.service */ "./src/graphql/subscriptions/subscriptions.service.ts");
let SubscriptionsModule = SubscriptionsModule_1 = class SubscriptionsModule {
    static forRoot(port) {
        const providers = subscription_providers_1.createSubscriptionProviders(port);
        return {
            module: SubscriptionsModule_1,
            providers: [...providers],
            exports: [...providers],
        };
    }
};
SubscriptionsModule = SubscriptionsModule_1 = tslib_1.__decorate([
    common_1.Module({
        providers: [subscriptions_service_1.SubscriptionsService],
        exports: [subscriptions_service_1.SubscriptionsService],
    })
], SubscriptionsModule);
exports.SubscriptionsModule = SubscriptionsModule;


/***/ }),

/***/ "./src/graphql/subscriptions/subscriptions.service.ts":
/*!************************************************************!*\
  !*** ./src/graphql/subscriptions/subscriptions.service.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const subscription_constants_1 = __webpack_require__(/*! ./subscription.constants */ "./src/graphql/subscriptions/subscription.constants.ts");
const subscriptions_transport_ws_1 = __webpack_require__(/*! subscriptions-transport-ws */ "subscriptions-transport-ws");
const graphql_1 = __webpack_require__(/*! graphql */ "graphql");
let SubscriptionsService = class SubscriptionsService {
    constructor(ws) {
        this.ws = ws;
    }
    createSubscriptionServer(schema, options = {}, socketOptions = {}) {
        this.subscriptionServer = new subscriptions_transport_ws_1.SubscriptionServer(Object.assign({ execute: graphql_1.execute,
            subscribe: graphql_1.subscribe,
            schema }, options), Object.assign({ server: this.ws, path: '/subscriptions' }, socketOptions));
    }
    onModuleDestroy() {
        this.ws.close();
    }
};
SubscriptionsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(subscription_constants_1.SUBSCRIPTION_SERVER)),
    tslib_1.__metadata("design:paramtypes", [Object])
], SubscriptionsService);
exports.SubscriptionsService = SubscriptionsService;


/***/ }),

/***/ "./src/graphql/users/user.resolver.ts":
/*!********************************************!*\
  !*** ./src/graphql/users/user.resolver.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const users_1 = __webpack_require__(/*! ../../services/users */ "./src/services/users/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const User_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/User */ "./node_modules/@ever-platform/common/src/entities/User.ts"));
const devices_1 = __webpack_require__(/*! ../../services/devices */ "./src/services/devices/index.ts");
const UsersAuthService_1 = __webpack_require__(/*! ../../services/users/UsersAuthService */ "./src/services/users/UsersAuthService.ts");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const orders_1 = __webpack_require__(/*! ../../services/orders */ "./src/services/orders/index.ts");
let UserResolver = class UserResolver {
    constructor(_usersService, _usersAuthService, _usersOrdersService, _devicesService, _ordersService) {
        this._usersService = _usersService;
        this._usersAuthService = _usersAuthService;
        this._usersOrdersService = _usersOrdersService;
        this._devicesService = _devicesService;
        this._ordersService = _ordersService;
    }
    isUserEmailExists(_, { email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.isUserEmailExists(email);
        });
    }
    generate1000Customers(_, { defaultLng, defaultLat }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = true;
            let message = null;
            try {
                yield this._ordersService.generateOrdersPerEachCustomer(yield this._usersService.generate1000Customers(defaultLng, defaultLat));
            }
            catch (err) {
                message = err.message;
                success = false;
            }
            return {
                success,
                message,
            };
        });
    }
    getSocial(_, { socialId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.getSocial(socialId);
        });
    }
    userExists(_, { conditions }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userId = conditions.exceptCustomerId;
            const memberKey = conditions.memberKey;
            const memberValue = conditions.memberValue;
            return ((yield this._usersService.count({
                _id: { $nin: [new mongodb_1.ObjectId(userId)] },
                isDeleted: { $eq: false },
                [memberKey]: memberValue,
            })) > 0);
        });
    }
    getUser(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getUsers(_, { findInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const users = yield this._usersService.getUsers(findInput, pagingOptions);
            return users.map((u) => new User_1.default(u));
        });
    }
    getOrders(_, { userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._usersService.throwIfNotExists(userId);
            const result = yield this._usersOrdersService
                .get(userId)
                .pipe(operators_1.first())
                .toPromise();
            return result;
        });
    }
    getCountOfUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.Model.find({ isDeleted: { $eq: false } })
                .countDocuments()
                .exec();
        });
    }
    getCustomerMetrics(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersOrdersService.getCustomerMetrics(id);
        });
    }
    updateUser(_, { id, updateObject }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.updateUser(id, updateObject);
        });
    }
    updateUserEmail(_, { userId, email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.updateEmail(userId, email);
        });
    }
    registerUser(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.register(registerInput);
        });
    }
    userLogin(_, { email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.login(email, password);
        });
    }
    removeUsersByIds(obj, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const users = yield this._usersService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const usersIds = users.map((u) => u.id);
            return this._usersService.removeMultipleByIds(usersIds);
        });
    }
    getDevices(_user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = new User_1.default(_user);
            return ((yield this._devicesService.getMultipleDevices(user.devicesIds))
                .pipe(operators_1.first())
                .toPromise());
        });
    }
    updateUserPassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.updatePassword(id, password);
        });
    }
    addUserRegistrationInfo(_, { id, registrationInfo, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.addRegistrationInfo(id, registrationInfo);
        });
    }
    banUser(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.banUser(id);
        });
    }
    unbanUser(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.unbanUser(id);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "isUserEmailExists", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "generate1000Customers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getSocial", null);
tslib_1.__decorate([
    graphql_1.Query('isUserExists'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "userExists", null);
tslib_1.__decorate([
    graphql_1.Query('user'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
tslib_1.__decorate([
    graphql_1.Query('users'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
tslib_1.__decorate([
    graphql_1.Query('getOrders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getCountOfUsers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getCustomerMetrics", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserEmail", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "registerUser", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "userLogin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "removeUsersByIds", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserPassword", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "addUserRegistrationInfo", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "banUser", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "unbanUser", null);
UserResolver = tslib_1.__decorate([
    graphql_1.Resolver('User'),
    tslib_1.__metadata("design:paramtypes", [users_1.UsersService,
        UsersAuthService_1.UsersAuthService,
        users_1.UsersOrdersService,
        devices_1.DevicesService,
        orders_1.OrdersService])
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),

/***/ "./src/graphql/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/graphql/users/users.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./src/graphql/users/user.resolver.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [user_resolver_1.UserResolver],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/graphql/warehouses-carriers/warehouses-carriers.module.ts":
/*!***********************************************************************!*\
  !*** ./src/graphql/warehouses-carriers/warehouses-carriers.module.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const warehouses_carriers_resolver_1 = __webpack_require__(/*! ./warehouses-carriers.resolver */ "./src/graphql/warehouses-carriers/warehouses-carriers.resolver.ts");
let WarehousesCarriersModule = class WarehousesCarriersModule {
};
WarehousesCarriersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouses_carriers_resolver_1.WarehouseCarriersResolver],
        imports: [],
    })
], WarehousesCarriersModule);
exports.WarehousesCarriersModule = WarehousesCarriersModule;


/***/ }),

/***/ "./src/graphql/warehouses-carriers/warehouses-carriers.resolver.ts":
/*!*************************************************************************!*\
  !*** ./src/graphql/warehouses-carriers/warehouses-carriers.resolver.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let WarehouseCarriersResolver = class WarehouseCarriersResolver {
    constructor(_warehousesCarriersService) {
        this._warehousesCarriersService = _warehousesCarriersService;
    }
    getStoreCarriers(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this._warehousesCarriersService
                .get(storeId)
                .pipe(operators_1.first())
                .toPromise();
            return result;
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCarriersResolver.prototype, "getStoreCarriers", null);
WarehouseCarriersResolver = tslib_1.__decorate([
    graphql_1.Resolver('WarehouseCarriers'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesCarriersService])
], WarehouseCarriersResolver);
exports.WarehouseCarriersResolver = WarehouseCarriersResolver;


/***/ }),

/***/ "./src/graphql/warehouses-orders/warehouses-orders.module.ts":
/*!*******************************************************************!*\
  !*** ./src/graphql/warehouses-orders/warehouses-orders.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const warehouses_orders_resolver_1 = __webpack_require__(/*! ./warehouses-orders.resolver */ "./src/graphql/warehouses-orders/warehouses-orders.resolver.ts");
let WarehousesOrdersModule = class WarehousesOrdersModule {
};
WarehousesOrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouses_orders_resolver_1.WarehouseOrdersResolver],
        imports: [],
    })
], WarehousesOrdersModule);
exports.WarehousesOrdersModule = WarehousesOrdersModule;


/***/ }),

/***/ "./src/graphql/warehouses-orders/warehouses-orders.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/graphql/warehouses-orders/warehouses-orders.resolver.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const orders_1 = __webpack_require__(/*! ../../services/orders */ "./src/services/orders/index.ts");
const bson_1 = __webpack_require__(/*! bson */ "bson");
let WarehouseOrdersResolver = class WarehouseOrdersResolver {
    constructor(_warehousesOrdersService, _ordersService) {
        this._warehousesOrdersService = _warehousesOrdersService;
        this._ordersService = _ordersService;
    }
    getStoreOrders(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesOrdersService
                .get(storeId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getDashboardOrdersChartOrders(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const resOrders = this._ordersService.getStoreOrdersChartTotalOrders(storeId);
            return resOrders;
        });
    }
    getNextOrderNumber(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesOrdersService.getNextOrderNumber(storeId);
        });
    }
    getMerchantsOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.Model.aggregate([
                { $match: { warehouse: { $ne: null } } },
                {
                    $group: {
                        _id: '$warehouse',
                        ordersCount: { $sum: 1 },
                    },
                },
            ]);
        });
    }
    getStoreOrdersTableData(_, { storeId, pagingOptions = {}, status }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'asc' };
            }
            const orders = yield this._warehousesOrdersService.getStoreOrders(storeId, pagingOptions, status);
            let page = 1;
            if (pagingOptions) {
                page = Math.ceil(pagingOptions['skip'] / pagingOptions['limit'] + 1);
            }
            return { orders: orders.map((o) => new Order_1.default(o)), page };
        });
    }
    getCountOfStoreOrders(_, { storeId, status }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findObj = warehouses_1.getStoreOrdersFingObj(storeId, status);
            return this._ordersService.Model.find(findObj).countDocuments().exec();
        });
    }
    removeUserOrders(_, { storeId, userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this._ordersService.Model.update({
                'user._id': new bson_1.ObjectId(userId),
                warehouse: storeId,
                isDeleted: false,
            }, { isDeleted: true }, { multi: true }).exec();
            return {
                number: res.n,
                modified: res.nModified,
            };
        });
    }
    getOrdersInDelivery(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield this._ordersService.getOrdersInDelivery(storeId);
            return order || [];
        });
    }
    createOrder(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesOrdersService.create(createInput);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getStoreOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getDashboardOrdersChartOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getNextOrderNumber", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getMerchantsOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getStoreOrdersTableData", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getCountOfStoreOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "removeUserOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getOrdersInDelivery", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "createOrder", null);
WarehouseOrdersResolver = tslib_1.__decorate([
    graphql_1.Resolver('WarehouseOrders'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesOrdersService,
        orders_1.OrdersService])
], WarehouseOrdersResolver);
exports.WarehouseOrdersResolver = WarehouseOrdersResolver;


/***/ }),

/***/ "./src/graphql/warehouses-products/warehouse-products.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/graphql/warehouses-products/warehouse-products.resolver.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const handlebars_1 = __webpack_require__(/*! handlebars */ "handlebars");
const WarehouseProduct_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let WarehouseProductsResolver = class WarehouseProductsResolver {
    constructor(_warehousesProductsService) {
        this._warehousesProductsService = _warehousesProductsService;
    }
    getProductsWithPagination(_, { id, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouseProducts = yield this._warehousesProductsService.getProductsWithPagination(id, pagingOptions);
            return warehouseProducts.map((p) => new WarehouseProduct_1.default(p));
        });
    }
    getProductsCount(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesProductsService.getProductsCount(id);
        });
    }
    getWarehouseProduct(_, { warehouseId, warehouseProductId, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._warehousesProductsService
                .getProduct(warehouseId, warehouseProductId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    addWarehouseProducts(_, { warehouseId, products, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesProductsService.add(warehouseId, products);
        });
    }
    removeWarehouseProducts(_, { warehouseId, productsIds, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesProductsService.remove(warehouseId, productsIds);
        });
    }
    updateWarehouseProduct(_, { warehouseId, productId, updateInput, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            throw new handlebars_1.Exception('not implemented');
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "getProductsWithPagination", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "getProductsCount", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "getWarehouseProduct", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "addWarehouseProducts", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "removeWarehouseProducts", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "updateWarehouseProduct", null);
WarehouseProductsResolver = tslib_1.__decorate([
    graphql_1.Resolver('Warehouse-products'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesProductsService])
], WarehouseProductsResolver);
exports.WarehouseProductsResolver = WarehouseProductsResolver;


/***/ }),

/***/ "./src/graphql/warehouses-products/warehouses-products.modules.ts":
/*!************************************************************************!*\
  !*** ./src/graphql/warehouses-products/warehouses-products.modules.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const warehouse_products_resolver_1 = __webpack_require__(/*! ./warehouse-products.resolver */ "./src/graphql/warehouses-products/warehouse-products.resolver.ts");
let WarehousesProductsModule = class WarehousesProductsModule {
};
WarehousesProductsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouse_products_resolver_1.WarehouseProductsResolver],
        imports: [],
    })
], WarehousesProductsModule);
exports.WarehousesProductsModule = WarehousesProductsModule;


/***/ }),

/***/ "./src/graphql/warehouses/warehouse.resolver.ts":
/*!******************************************************!*\
  !*** ./src/graphql/warehouses/warehouse.resolver.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const devices_1 = __webpack_require__(/*! ../../services/devices */ "./src/services/devices/index.ts");
const orders_1 = __webpack_require__(/*! ../../services/orders */ "./src/services/orders/index.ts");
const users_1 = __webpack_require__(/*! ../../services/users */ "./src/services/users/index.ts");
const geo_locations_1 = __webpack_require__(/*! ../../services/geo-locations */ "./src/services/geo-locations/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const utils_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts"));
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
let WarehouseResolver = class WarehouseResolver {
    constructor(_geoLocationWarehousesService, _warehousesService, _warehousesOrdersService, _warehousesUsersService, _warehousesCarriersService, _warehouseProductsService, _devicesService, _ordersService, _usersService) {
        this._geoLocationWarehousesService = _geoLocationWarehousesService;
        this._warehousesService = _warehousesService;
        this._warehousesOrdersService = _warehousesOrdersService;
        this._warehousesUsersService = _warehousesUsersService;
        this._warehousesCarriersService = _warehousesCarriersService;
        this._warehouseProductsService = _warehouseProductsService;
        this._devicesService = _devicesService;
        this._ordersService = _ordersService;
        this._usersService = _usersService;
    }
    hasExistingStores() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this._warehousesService.count({})) > 0;
        });
    }
    getStoreProducts(_, { storeId, fullProducts }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehouseProductsService
                .get(storeId, fullProducts)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getStoreAvailableProducts(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehouseProductsService
                .getAvailable(storeId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getAllActiveStores(_, { fullProducts }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService
                .getAllActive(fullProducts)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    countStoreCustomers(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const storeOrders = yield this._warehousesOrdersService
                .get(storeId)
                .pipe(operators_1.first())
                .toPromise();
            const storeCustomerIds = storeOrders.map((order) => order.user._id.toString());
            return new Set(storeCustomerIds).size;
        });
    }
    getCountExistingCustomers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isDeletedFlag = { isDeleted: { $eq: false } };
            const users = yield this._ordersService.Model.find(isDeletedFlag)
                .distinct('user._id')
                .lean();
            const storesIds = yield this._ordersService.Model.find(isDeletedFlag)
                .distinct('warehouse')
                .lean();
            return {
                total: users.length,
                perStore: storesIds.map((storeId) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const usersIds = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { warehouse: storeId })).distinct('user._id');
                    return {
                        storeId,
                        customersCount: usersIds.length,
                    };
                })),
            };
        });
    }
    getCountExistingCustomersToday() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isDeletedFlag = { isDeleted: { $eq: false } };
            const start = new Date();
            const end = new Date();
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            const users = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { _createdAt: { $gte: start, $lt: end } }))
                .distinct('user._id')
                .lean()
                .exec();
            const storesIds = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { _createdAt: { $gte: start, $lt: end } }))
                .distinct('warehouse')
                .lean()
                .exec();
            return {
                total: users.length,
                perStore: storesIds.map((storeId) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const usersIds = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { 'user._id': { $in: users.map((u) => u._id) }, warehouse: storeId })).distinct('user._id');
                    return {
                        storeId,
                        customersCount: usersIds.length,
                    };
                })),
            };
        });
    }
    getNearbyStores(_, { geoLocation }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._geoLocationWarehousesService
                .get(geoLocation)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getWarehouse(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getAllStores() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.find({ isDeleted: { $eq: false } });
        });
    }
    getWarehouses(_, { findInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const merchants = yield this._warehousesService.getMerchants(findInput, pagingOptions);
            return merchants.map((m) => new Warehouse_1.default(m));
        });
    }
    getStoreCustomers(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesUsersService.getPromise(storeId);
        });
    }
    getCountOfMerchants() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.Model.find({ isDeleted: { $eq: false } })
                .countDocuments()
                .exec();
        });
    }
    getMerchantsBuyName(_, { searchName, geoLocation, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const count = yield this._warehousesService.Model.find({
                name: { $regex: searchName, $options: 'i' },
            })
                .countDocuments()
                .exec();
            let merchants = yield this._warehousesService.getMerchants({ name: { $regex: searchName, $options: 'i' } }, { skip: 0, limit: count });
            if (geoLocation) {
                merchants = merchants.sort((m1, m2) => utils_1.default.getDistance(new GeoLocation_1.default(m1.geoLocation), new GeoLocation_1.default(geoLocation)) -
                    utils_1.default.getDistance(new GeoLocation_1.default(m2.geoLocation), new GeoLocation_1.default(geoLocation)));
            }
            return merchants.map((m) => new Warehouse_1.default(m));
        });
    }
    warehouseLogin(_, { username, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.login(username, password);
        });
    }
    updateStoreGeoLocation(_, { storeId, geoLocation, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.updateGeoLocation(storeId, geoLocation);
        });
    }
    registerWarehouse(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.register(registerInput);
        });
    }
    removeWarehousesByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.removeMultipleByIds(ids);
        });
    }
    getDevices(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._devicesService
                .getMultiple(warehouse.devicesIds)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getOrders(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._warehousesOrdersService
                .get(warehouse.id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getUsers(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._warehousesUsersService
                .get(warehouse.id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getCarriers(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._warehousesCarriersService
                .get(warehouse.id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    updateWarehousePassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.updatePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "hasExistingStores", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getStoreProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getStoreAvailableProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getAllActiveStores", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "countStoreCustomers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCountExistingCustomers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCountExistingCustomersToday", null);
tslib_1.__decorate([
    graphql_1.Query('nearbyStores'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getNearbyStores", null);
tslib_1.__decorate([
    graphql_1.Query('warehouse'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getWarehouse", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getAllStores", null);
tslib_1.__decorate([
    graphql_1.Query('warehouses'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getWarehouses", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getStoreCustomers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCountOfMerchants", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getMerchantsBuyName", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "warehouseLogin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "updateStoreGeoLocation", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "registerWarehouse", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "removeWarehousesByIds", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('orders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getOrders", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('users'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getUsers", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('carriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCarriers", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "updateWarehousePassword", null);
WarehouseResolver = tslib_1.__decorate([
    graphql_1.Resolver('Warehouse'),
    tslib_1.__metadata("design:paramtypes", [geo_locations_1.GeoLocationsWarehousesService,
        warehouses_1.WarehousesService,
        warehouses_1.WarehousesOrdersService,
        warehouses_1.WarehousesUsersService,
        warehouses_1.WarehousesCarriersService,
        warehouses_1.WarehousesProductsService,
        devices_1.DevicesService,
        orders_1.OrdersService,
        users_1.UsersService])
], WarehouseResolver);
exports.WarehouseResolver = WarehouseResolver;


/***/ }),

/***/ "./src/graphql/warehouses/warehouses.module.ts":
/*!*****************************************************!*\
  !*** ./src/graphql/warehouses/warehouses.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const warehouse_resolver_1 = __webpack_require__(/*! ./warehouse.resolver */ "./src/graphql/warehouses/warehouse.resolver.ts");
const auth_module_1 = __webpack_require__(/*! ../../auth/auth.module */ "./src/auth/auth.module.ts");
let WarehousesModule = class WarehousesModule {
};
WarehousesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouse_resolver_1.WarehouseResolver],
        imports: [auth_module_1.AuthModule],
    })
], WarehousesModule);
exports.WarehousesModule = WarehousesModule;


/***/ }),

/***/ "./src/helpers/Log.ts":
/*!****************************!*\
  !*** ./src/helpers/Log.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const bunyan_1 = tslib_1.__importDefault(__webpack_require__(/*! bunyan */ "bunyan"));
const fs_1 = __webpack_require__(/*! fs */ "fs");
const mkdirp_1 = tslib_1.__importDefault(__webpack_require__(/*! mkdirp */ "mkdirp"));
const env_1 = __webpack_require__(/*! ../env */ "./src/env.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
const bunyan_cloudwatch_1 = tslib_1.__importDefault(__webpack_require__(/*! bunyan-cloudwatch */ "bunyan-cloudwatch"));
const os_1 = tslib_1.__importDefault(__webpack_require__(/*! os */ "os"));
const bunyan_prettystream_1 = tslib_1.__importDefault(__webpack_require__(/*! bunyan-prettystream */ "bunyan-prettystream"));
let isLogsFolderExists = env_1.env.LOGS_PATH ? fs_1.existsSync(env_1.env.LOGS_PATH) : false;
const getAdditionalLoggerStreams = ({ name }) => {
    const hostname = os_1.default.hostname();
    if (env_1.env.isProd) {
        const logLevels = ['info', 'error', 'debug'];
        return _.map(logLevels, (type) => {
            let stream;
            try {
                stream = bunyan_cloudwatch_1.default({
                    logGroupName: 'ever/api',
                    logStreamName: `${type}_${name}_${hostname}`,
                    cloudWatchLogsOptions: {
                        region: 'us-east-1',
                    },
                });
            }
            catch (err) {
                console.log(err);
            }
            return {
                stream,
                type: 'raw',
                level: type,
            };
        });
    }
    else {
        return [];
    }
};
const prettyStdOut = new bunyan_prettystream_1.default();
prettyStdOut.pipe(process.stdout);
function createEverLogger({ name }) {
    if (!isLogsFolderExists) {
        mkdirp_1.default.sync(env_1.env.LOGS_PATH);
        isLogsFolderExists = true;
    }
    const logger = bunyan_1.default.createLogger({
        name: `everbie.${name}`,
        serializers: bunyan_1.default.stdSerializers,
        streams: [
            {
                level: 'info',
                path: `${env_1.env.LOGS_PATH}/info_${name}.log`,
            },
            {
                level: 'error',
                path: `${env_1.env.LOGS_PATH}/error_${name}.log`,
            },
            {
                level: 'debug',
                path: `${env_1.env.LOGS_PATH}/debug_${name}.log`,
            },
            {
                level: 'debug',
                type: 'raw',
                stream: prettyStdOut,
            },
            ...getAdditionalLoggerStreams({ name }),
        ],
    });
    if (env_1.env.LOG_LEVEL) {
        logger.level(bunyan_1.default[env_1.env.LOG_LEVEL.toUpperCase()]);
    }
    return logger;
}
exports.createEverLogger = createEverLogger;
function Log(logArgs) {
    return function (target) {
        target.prototype.logName = logArgs.name;
        target.prototype.log = createEverLogger(logArgs);
    };
}
exports.Log = Log;


/***/ }),

/***/ "./src/helpers/NestJSLogger.ts":
/*!*************************************!*\
  !*** ./src/helpers/NestJSLogger.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = __webpack_require__(/*! ./Log */ "./src/helpers/Log.ts");
const log = Log_1.createEverLogger({ name: 'nestjs' });
class EverbieNestJSLogger {
    log(message) {
        log.info(message);
    }
    error(message, trace) {
        log.error(`Message: ${message}. Trace: ${trace}`);
    }
    warn(message) {
        log.warn(message);
    }
}
exports.EverbieNestJSLogger = EverbieNestJSLogger;


/***/ }),

/***/ "./src/nest-bootstrap.ts":
/*!*******************************!*\
  !*** ./src/nest-bootstrap.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const env_1 = __webpack_require__(/*! ./env */ "./src/env.ts");
const Log_1 = __webpack_require__(/*! ./helpers/Log */ "./src/helpers/Log.ts");
const NestJSLogger_1 = __webpack_require__(/*! ./helpers/NestJSLogger */ "./src/helpers/NestJSLogger.ts");
const log = Log_1.createEverLogger({ name: 'bootstrapNest' });
function bootstrapNest() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const port = env_1.env.GQLPORT;
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule, {
            logger: new NestJSLogger_1.EverbieNestJSLogger(),
        });
        app.enableCors();
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Ever REST API')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api', app, document);
        yield app.listen(port + '');
        if (true) {
            module.hot.accept();
            module.hot.dispose((_) => app.close());
        }
        log.info(`Swagger UI available at http://localhost/api`);
        console.log(`Swagger UI available at http://localhost/api`);
    });
}
exports.bootstrapNest = bootstrapNest;


/***/ }),

/***/ "./src/services/IService.ts":
/*!**********************************!*\
  !*** ./src/services/IService.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSymbol = Symbol('Service');


/***/ }),

/***/ "./src/services/admins/AdminsService.ts":
/*!**********************************************!*\
  !*** ./src/services/admins/AdminsService.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const Admin_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Admin */ "./node_modules/@ever-platform/common/src/entities/Admin.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let AdminsService = class AdminsService extends db_server_1.DBService {
    constructor(authServiceFactory, _adminRepository) {
        super();
        this._adminRepository = _adminRepository;
        this.DBObject = Admin_1.default;
        this.log = Log_1.createEverLogger({ name: 'adminService' });
        _adminRepository
            .count()
            .then((c) => {
            console.log('Admins count: ' + c);
        })
            .catch((e) => {
            console.log(e);
        });
        this.authService = authServiceFactory({
            role: 'admin',
            Entity: Admin_1.default,
            saltRounds: env_1.env.ADMIN_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((admin) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return admin;
        })), operators_1.switchMap((admin) => admin));
    }
    getByEmail(email) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.findOne.call(this, { email, isDeleted: { $eq: false } });
        });
    }
    register(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const admin = yield this.create(Object.assign(Object.assign({}, input.admin), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return admin;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let res = null;
            const admin = yield this.getByEmail(email);
            if (admin) {
                res = yield this.authService.login({ email }, password);
            }
            if (!res) {
                return null;
            }
            return {
                admin: res.entity,
                token: res.token,
            };
        });
    }
    isAuthenticated(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.isAuthenticated(token);
        });
    }
    updateById(id, updateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, updateObject);
        });
    }
    throwIfNotExists(adminId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const admin = yield _super.get.call(this, adminId).pipe(operators_1.first()).toPromise();
            if (!admin || admin.isDeleted) {
                throw Error(`Admin with id '${adminId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], AdminsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "getByEmail", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "updatePassword", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "login", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "isAuthenticated", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "updateById", null);
AdminsService = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__param(1, inversify_1.inject('AdminRepository')),
    tslib_1.__metadata("design:paramtypes", [Function, typeorm_1.Repository])
], AdminsService);
exports.AdminsService = AdminsService;


/***/ }),

/***/ "./src/services/admins/index.ts":
/*!**************************************!*\
  !*** ./src/services/admins/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./AdminsService */ "./src/services/admins/AdminsService.ts"), exports);


/***/ }),

/***/ "./src/services/auth/AuthService.ts":
/*!******************************************!*\
  !*** ./src/services/auth/AuthService.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const entity_service_1 = __webpack_require__(/*! @pyro/db-server/entity-service */ "./src/@pyro/db-server/entity-service.ts");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const WrongPasswordError_1 = __webpack_require__(/*! @modules/server.common/errors/WrongPasswordError */ "./node_modules/@ever-platform/common/src/errors/WrongPasswordError.ts");
const bcrypt_1 = tslib_1.__importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const jsonwebtoken_1 = tslib_1.__importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
const jsonwebtoken_2 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
let AuthService = class AuthService extends entity_service_1.EntityService {
    setConfig(config) {
        this.role = config.role;
        this.DBObject = config.Entity;
        this.saltRounds = config.saltRounds;
    }
    getPasswordHash(password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.hash(password, this.saltRounds);
        });
    }
    addPassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = this.parse(yield this.Model.findById(id).select('+hash').lean().exec());
            if (entity.hash != null) {
                throw new Error('Password already exists, please call updatePassword instead.');
            }
            yield this._savePassword(id, password);
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = this.parse(yield this.Model.findById(id).select('+hash').lean().exec());
            if (!(yield bcrypt_1.default.compare(password.current, entity.hash))) {
                throw new WrongPasswordError_1.WrongPasswordError();
            }
            yield this._savePassword(id, password.new);
        });
    }
    _savePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hash = yield this.getPasswordHash(password);
            yield this.Model.findByIdAndUpdate(id, {
                hash,
            })
                .lean()
                .exec();
        });
    }
    login(findObj, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = this.parse(yield this.Model.findOne(findObj).select('+hash').lean().exec());
            if (!entity || !(yield bcrypt_1.default.compare(password, entity.hash))) {
                return null;
            }
            const token = jsonwebtoken_1.default.sign({ id: entity.id, role: this.role }, env_1.env.JWT_SECRET, {});
            delete entity.hash;
            return {
                entity,
                token,
            };
        });
    }
    isAuthenticated(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { id, role } = jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
                const entity = yield this.Model.findById(id).lean().exec();
                if (!entity) {
                    return false;
                }
                return role === this.role;
            }
            catch (err) {
                if (err instanceof jsonwebtoken_2.JsonWebTokenError) {
                    return false;
                }
                else {
                    throw err;
                }
            }
        });
    }
};
AuthService = tslib_1.__decorate([
    inversify_1.injectable()
], AuthService);
exports.AuthService = AuthService;
exports.authServiceFactory = (context) => {
    return (config) => {
        const authService = context.container.get(AuthService);
        authService.setConfig(config);
        return authService;
    };
};


/***/ }),

/***/ "./src/services/auth/AuthenticationService.ts":
/*!****************************************************!*\
  !*** ./src/services/auth/AuthenticationService.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const jsonwebtoken_1 = tslib_1.__importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const warehouses_1 = __webpack_require__(/*! ../warehouses */ "./src/services/warehouses/index.ts");
const carriers_1 = __webpack_require__(/*! ../carriers */ "./src/services/carriers/index.ts");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const jwtSecret = env_1.env.JWT_SECRET;
if (jwtSecret === 'default') {
    console.log('Warning: default JWT_SECRET used. Please add your own to config!');
}
exports.createJwtData = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};
function createToken(id, appName) {
    const user = { id, appName };
    return jsonwebtoken_1.default.sign(user, 'secretKey', {
        expiresIn: 3600,
    });
}
exports.createToken = createToken;
let AuthenticationService = class AuthenticationService {
    constructor(warehousesService, carriersService) {
        this.warehousesService = warehousesService;
        this.carriersService = carriersService;
    }
    validateUser(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (payload.appName === 'carrier') {
                return this.carriersService
                    .get(payload.id)
                    .pipe(operators_1.first())
                    .toPromise();
            }
            else if (payload.appName === 'warehouse') {
                return this.warehousesService
                    .get(payload.id)
                    .pipe(operators_1.first())
                    .toPromise();
            }
            else {
                return null;
            }
        });
    }
};
AuthenticationService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('auth'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => carriers_1.CarriersService))),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService,
        carriers_1.CarriersService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./src/services/auth/index.ts":
/*!************************************!*\
  !*** ./src/services/auth/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./AuthenticationService */ "./src/services/auth/AuthenticationService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./AuthService */ "./src/services/auth/AuthService.ts"), exports);


/***/ }),

/***/ "./src/services/carriers/CarriersOrdersService.ts":
/*!********************************************************!*\
  !*** ./src/services/carriers/CarriersOrdersService.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const products_1 = __webpack_require__(/*! ../products */ "./src/services/products/index.ts");
const orders_1 = __webpack_require__(/*! ../orders */ "./src/services/orders/index.ts");
const CarriersService_1 = tslib_1.__importDefault(__webpack_require__(/*! ./CarriersService */ "./src/services/carriers/CarriersService.ts"));
const OrderCarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const warehouses_1 = __webpack_require__(/*! ../warehouses */ "./src/services/warehouses/index.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const geo_locations_1 = __webpack_require__(/*! ../geo-locations */ "./src/services/geo-locations/index.ts");
const utils_1 = __webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const OrderWarehouseStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
let CarriersOrdersService = class CarriersOrdersService {
    constructor(carriersService, productsService, ordersService, geoLocationsOrdersService, warehousesOrdersService) {
        this.carriersService = carriersService;
        this.productsService = productsService;
        this.ordersService = ordersService;
        this.geoLocationsOrdersService = geoLocationsOrdersService;
        this.warehousesOrdersService = warehousesOrdersService;
        this.log = Log_1.createEverLogger({
            name: 'carriersOrdersService',
        });
    }
    selectedForDelivery(carrierId, orderIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let carrier = yield this.carriersService
                .get(carrierId)
                .pipe(operators_1.first())
                .toPromise();
            if (carrier != null) {
                if (orderIds.length > 0) {
                    yield this.ordersService.updateMultipleByIds(orderIds, {
                        carrier: carrierId,
                        carrierStatus: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                    });
                }
                carrier = yield this.carriersService
                    .get(carrierId)
                    .pipe(operators_1.first())
                    .toPromise();
                return carrier;
            }
            else {
                throw new Error('Carrier with such id is not found!');
            }
        });
    }
    getCount(carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.ordersService.count(lodash_1.default.extend({ carrier: carrierId }, orders_1.OrdersService.FindObjects.isCompleted));
        });
    }
    skipOrders(carrierId, ordersIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.carriersService.update(carrierId, {
                $push: {
                    skippedOrderIds: {
                        $each: ordersIds,
                    },
                },
            });
        });
    }
    updateStatus(carrierId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            const findObj = lodash_1.default.extend({ carrier: carrierId }, orders_1.OrdersService.FindObjects.isNotCompleted);
            const updateObj = {
                carrierStatus: status,
            };
            if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                updateObj.isPaid = true;
                updateObj.deliveryTime = Date.now();
            }
            if (status === OrderCarrierStatus_1.default.CarrierStartDelivery ||
                status === OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                updateObj.startDeliveryTime = Date.now();
            }
            const finishedProcessingStatuses = [
                OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
                OrderCarrierStatus_1.default.DeliveryCompleted,
                OrderCarrierStatus_1.default.IssuesDuringDelivery,
            ];
            if (finishedProcessingStatuses.includes(status)) {
                updateObj.finishedProcessingTime = Date.now();
            }
            if ((yield this.carriersService.getCurrent(carrierId)) != null) {
                try {
                    const orders = yield this.ordersService.updateMultiple(findObj, updateObj);
                    if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                        return yield this.carriersService.increaseNumberOfDeliveries(carrierId, orders.length);
                    }
                    else {
                        return (yield this.carriersService.getCurrent(carrierId));
                    }
                }
                catch (err) {
                    this.log.error(err);
                    throw err;
                }
            }
            else {
                throw new Error('Carrier with such id is not found!');
            }
        });
    }
    cancelDelivery(carrierId, orderIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            const _orders = yield this.ordersService.find({
                _id: { $in: orderIds },
                isDeleted: { $eq: false },
            });
            const ordersIdsFiltered = _orders.map((d) => d.id);
            const orders = yield this.ordersService.updateMultipleByIds(ordersIdsFiltered, {
                $unset: { carrier: 1 },
                carrierStatus: OrderCarrierStatus_1.default.NoCarrier,
            });
            yield this.skipOrders(carrierId, lodash_1.default.map(orders, (order) => order.id));
            return this.carriersService.updateStatus(carrierId, 0);
        });
    }
    getAvailable(carrierId, options = {
        populateWarehouse: false,
    }) {
        return this.carriersService.get(carrierId).pipe(operators_1.map((carrier) => (carrier != null ? carrier.geoLocation : null)), operators_1.distinctUntilChanged((geoLocation1, geoLocation2) => {
            if (geoLocation1 == null || geoLocation2 == null) {
                return true;
            }
            else {
                return utils_1.getDistance(geoLocation1, geoLocation2) <= 0.001;
            }
        }), operators_1.switchMap((geoLocation) => geoLocation != null
            ? this.geoLocationsOrdersService.get(geoLocation, {
                populateWarehouse: options.populateWarehouse,
            })
            : rxjs_1.throwError(new Error(`No such a carrier with the id ${carrierId} => can't getAvailable`))));
    }
    get(carrierId, options = {
        populateWarehouse: false,
        completion: 'not-completed',
    }) {
        return rxjs_1.of(null).pipe(operators_1.map((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return res;
        })), operators_1.switchMap((res) => res), operators_1.concat(this.ordersService.existence.pipe(operators_1.filter((existenceEvent) => {
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                    return existenceEvent.value != null
                        ? existenceEvent.value.carrierId ===
                            carrierId
                        : false;
                case db_server_1.ExistenceEventType.Updated:
                    return ((existenceEvent.value != null
                        ? existenceEvent.value.carrierId ===
                            carrierId
                        : false) ||
                        (existenceEvent.lastValue != null
                            ? existenceEvent.lastValue.carrierId ===
                                carrierId
                            : false));
                case db_server_1.ExistenceEventType.Removed:
                    return existenceEvent.lastValue != null
                        ? existenceEvent.lastValue.carrierId ===
                            carrierId
                        : false;
            }
        }), operators_1.share())), operators_1.exhaustMap(() => this._get(carrierId, options)));
    }
    getCarrierOrders(carrierId, options = {
        populateWarehouse: false,
        completion: 'not-completed',
    }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersRaw = (yield this.ordersService.Model.find(lodash_1.default.extend({ carrier: carrierId, isDeleted: { $eq: false } }, (() => {
                switch (options.completion) {
                    case 'completed':
                        return orders_1.OrdersService.FindObjects.isCompleted;
                    case 'not-completed':
                        return orders_1.OrdersService.FindObjects.isNotCompleted;
                    case 'all':
                        return {};
                }
            })()))
                .populate(options.populateWarehouse ? 'warehouse' : '')
                .lean()
                .exec());
            return ordersRaw.map((orderRaw) => {
                orderRaw['id'] = orderRaw._id;
                orderRaw.products = orderRaw.products.map((p) => {
                    p['id'] = p._id;
                    p.product['id'] = p.product._id;
                    return p;
                });
                return orderRaw;
            });
        });
    }
    getCarrierCurrentOrder(carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.ordersService.Model.findOne(lodash_1.default.assign(this.getOrdersForWorkFilter(carrierId), {
                carrier: carrierId,
            }))
                .lean()
                .exec();
        });
    }
    getCountOfCarrierOrdersHistory(carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.ordersService.Model.find({ carrier: carrierId })
                .countDocuments()
                .exec();
        });
    }
    getCarrierOrdersHistory(carrierId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            const dbOrders = yield this.ordersService.Model.find({
                carrier: carrierId,
            })
                .sort({
                _createdAt: options.sort && options.sort.toLowerCase().includes('desc')
                    ? 'desc'
                    : 'asc',
            })
                .skip(options.skip || 0)
                .limit(options.limit || 1)
                .lean()
                .exec();
            return dbOrders.map((o) => new Order_1.default(o));
        });
    }
    _get(carrierId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            try {
                const ordersRaw = (yield this.ordersService.Model.find(lodash_1.default.extend({ carrier: carrierId, isDeleted: { $eq: false } }, (() => {
                    switch (options.completion) {
                        case 'completed':
                            return orders_1.OrdersService.FindObjects.isCompleted;
                        case 'not-completed':
                            return orders_1.OrdersService.FindObjects.isNotCompleted;
                        case 'all':
                            return {};
                    }
                })()))
                    .populate(options.populateWarehouse ? 'warehouse' : '')
                    .lean()
                    .exec());
                return lodash_1.default.map(ordersRaw, (orderRaw) => new Order_1.default(orderRaw));
            }
            catch (err) {
                this.log.error(err);
                throw err;
            }
        });
    }
    getOrdersForWorkFilter(carrierId) {
        return {
            carrierStatus: {
                $nin: [
                    OrderCarrierStatus_1.default.IssuesDuringDelivery,
                    OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
                    OrderCarrierStatus_1.default.DeliveryCompleted,
                ],
            },
            warehouseStatus: {
                $in: [
                    OrderWarehouseStatus_1.default.PackagingFinished,
                    OrderWarehouseStatus_1.default.GivenToCarrier,
                ],
            },
            $or: [{ carrier: null }, { carrier: carrierId }],
        };
    }
};
CarriersOrdersService.CarrierTrackingDistance = 50000;
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "selectedForDelivery", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "skipOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "updateStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "cancelDelivery", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], CarriersOrdersService.prototype, "getAvailable", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], CarriersOrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCarrierOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCarrierCurrentOrder", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCountOfCarrierOrdersHistory", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCarrierOrdersHistory", null);
CarriersOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('carrier-orders'),
    tslib_1.__param(0, inversify_1.inject(CarriersService_1.default)),
    tslib_1.__param(1, inversify_1.inject(products_1.ProductsService)),
    tslib_1.__param(2, inversify_1.inject(orders_1.OrdersService)),
    tslib_1.__param(3, inversify_1.inject(geo_locations_1.GeoLocationsOrdersService)),
    tslib_1.__param(4, inversify_1.inject(warehouses_1.WarehousesOrdersService)),
    tslib_1.__metadata("design:paramtypes", [CarriersService_1.default,
        products_1.ProductsService,
        orders_1.OrdersService,
        geo_locations_1.GeoLocationsOrdersService,
        warehouses_1.WarehousesOrdersService])
], CarriersOrdersService);
exports.CarriersOrdersService = CarriersOrdersService;


/***/ }),

/***/ "./src/services/carriers/CarriersService.ts":
/*!**************************************************!*\
  !*** ./src/services/carriers/CarriersService.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const CarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/CarrierStatus */ "./node_modules/@ever-platform/common/src/enums/CarrierStatus.ts"));
const Carrier_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Carrier */ "./node_modules/@ever-platform/common/src/entities/Carrier.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
let CarriersService = class CarriersService extends db_server_1.DBService {
    constructor(authServiceFactory) {
        super();
        this.authServiceFactory = authServiceFactory;
        this.DBObject = Carrier_1.default;
        this.log = Log_1.createEverLogger({
            name: 'carriersService',
        });
        this.authService = this.authServiceFactory({
            role: 'carrier',
            Entity: Carrier_1.default,
            saltRounds: env_1.env.CARRIER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((carrier) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return carrier;
        })), operators_1.switchMap((carrier) => {
            return carrier;
        }));
    }
    getAllActive() {
        return rxjs_1.concat(rxjs_1.of(null), this.existence).pipe(operators_1.exhaustMap(() => this._getAllActive()));
    }
    _getAllActive() {
        const _super = Object.create(null, {
            find: { get: () => super.find }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.find.call(this, { isActive: true, isDeleted: { $eq: false } });
        });
    }
    getMultipleByIds(carrierIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carriers = yield this.find({
                _id: { $in: carrierIds },
                isDeleted: { $eq: false },
            });
            const carriersIdsToReturn = carriers.map((c) => c.id);
            return this.getMultiple(carriersIdsToReturn);
        });
    }
    register(input) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carrier = yield _super.create.call(this, Object.assign(Object.assign({}, input.carrier), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return carrier;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    login(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.authService.login({ username }, password);
            if (!res) {
                return null;
            }
            else if (res.entity.isDeleted) {
                return null;
            }
            return {
                carrier: res.entity,
                token: res.token,
            };
        });
    }
    updateStatus(carrierId, status) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, { status });
        });
    }
    updateActivity(carrierId, isActive) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, { isActive });
        });
    }
    updateEmail(carrierId, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return this.update(carrierId, { email });
        });
    }
    updateGeoLocation(carrierId, geoLocation) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, { geoLocation });
        });
    }
    updateById(id, updateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, updateObject);
        });
    }
    increaseNumberOfDeliveries(carrierId, n) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, {
                $inc: { numberOfDeliveries: n },
            });
        });
    }
    throwIfNotExists(carrierId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carrier = yield _super.get.call(this, carrierId).pipe(operators_1.first()).toPromise();
            if (!carrier || carrier.isDeleted) {
                throw Error(`Carrier with id '${carrierId}' does not exists!`);
            }
        });
    }
    getCarriers(findInput, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CarriersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], CarriersService.prototype, "getAllActive", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "login", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateActivity", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateEmail", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(1, io_1.serialization((gl) => new GeoLocation_1.default(gl))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GeoLocation_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateGeoLocation", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateById", null);
CarriersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('carrier'),
    tslib_1.__param(0, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], CarriersService);
exports.CarriersService = CarriersService;
exports.default = CarriersService;


/***/ }),

/***/ "./src/services/carriers/index.ts":
/*!****************************************!*\
  !*** ./src/services/carriers/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./CarriersService */ "./src/services/carriers/CarriersService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./CarriersOrdersService */ "./src/services/carriers/CarriersOrdersService.ts"), exports);


/***/ }),

/***/ "./src/services/currency/CurrencyService.ts":
/*!**************************************************!*\
  !*** ./src/services/currency/CurrencyService.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Currency_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Currency */ "./node_modules/@ever-platform/common/src/entities/Currency.ts"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
let CurrenciesService = class CurrenciesService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = Currency_1.default;
        this.log = Log_1.createEverLogger({
            name: 'currenciesService',
        });
    }
    createCurrency(currency) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success;
            let message;
            let data;
            try {
                data = yield this.create(currency);
                success = true;
                message = `Successfully create currency ${data.currencyCode}`;
            }
            catch (error) {
                success = false;
                message = error.message;
            }
            return { success, message, data };
        });
    }
    getAllCurrencies() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const currencies = yield this.find({
                isDeleted: { $eq: false },
            });
            return currencies;
        });
    }
};
CurrenciesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('currency')
], CurrenciesService);
exports.CurrenciesService = CurrenciesService;


/***/ }),

/***/ "./src/services/devices/DevicesService.ts":
/*!************************************************!*\
  !*** ./src/services/devices/DevicesService.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Device_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Device */ "./node_modules/@ever-platform/common/src/entities/Device.ts"));
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let DevicesService = class DevicesService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = Device_1.default;
        this.log = Log_1.createEverLogger({
            name: 'devicesService',
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((device) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return device;
        })), operators_1.switchMap((device) => device));
    }
    getMultipleDevices(ids) {
        const _super = Object.create(null, {
            getMultiple: { get: () => super.getMultiple }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const devices = yield this.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const devicesIds = devices.map((device) => device.id);
            return _super.getMultiple.call(this, devicesIds);
        });
    }
    create(device) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, device);
        });
    }
    updateLanguage(deviceId, language) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(deviceId);
            return this.update(deviceId, {
                language,
            });
        });
    }
    throwIfNotExists(deviceId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const device = yield _super.get.call(this, deviceId).pipe(operators_1.first()).toPromise();
            if (!device || device.isDeleted) {
                throw Error(`Device with id '${deviceId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], DevicesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DevicesService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DevicesService.prototype, "updateLanguage", null);
DevicesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('device')
], DevicesService);
exports.DevicesService = DevicesService;


/***/ }),

/***/ "./src/services/devices/index.ts":
/*!***************************************!*\
  !*** ./src/services/devices/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./DevicesService */ "./src/services/devices/DevicesService.ts"), exports);


/***/ }),

/***/ "./src/services/fake-data/FakeOrdersService.ts":
/*!*****************************************************!*\
  !*** ./src/services/fake-data/FakeOrdersService.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
let FakeOrdersService = class FakeOrdersService {
    getOrderRaw(orderNumber, storeId, storeCreatedAt, carrierId, customers, products) {
        this._orderNumber = orderNumber;
        this._storeId = storeId;
        this._carrierId = carrierId;
        this._orderCreatedAt = this.getOrderDate(storeCreatedAt);
        switch (true) {
            case orderNumber <= 25:
                return this._getOrderJustCreated(customers, products);
            case orderNumber <= 50:
                return this._getOrderReadyForProcessing(customers, products);
            case orderNumber <= 75:
                return this._getOrderStoreStartProcessing(customers, products);
            case orderNumber <= 100:
                return this._getOrderConfirmed(customers, products);
            case orderNumber <= 125:
                return this._getOrderStartAllocation(customers, products);
            case orderNumber <= 150:
                return this._getOrderPackagingStarted(customers, products);
            case orderNumber <= 200:
                return this._getOrderAllocationFails(customers, products);
            case orderNumber <= 250:
                return this._getOrderPackagingFails(customers, products);
            case orderNumber <= 300:
                return this._getOrderIssuesDuringDelivery(customers, products);
            case orderNumber <= 350:
                return this._getOrderClientRefuseOrder(customers, products);
            case orderNumber <= 400:
                return this._getOrderAllocationFinished(customers, products);
            case orderNumber <= 450:
                return this._getOrderPackagingFinished(customers, products);
            case orderNumber <= 475:
                return this._getOrderCarrierSelected(customers, products);
            case orderNumber <= 500:
                return this._getOrderCarrierPickup(customers, products);
            case orderNumber <= 525:
                return this._getOrderCarrierArriveToCustomer(customers, products);
            case orderNumber <= 650:
                return this._getOrderCancelled(customers, products);
            case orderNumber <= 1000:
                return this._getOrderDeliveryCompleted(customers, products);
        }
    }
    getOrderDate(startDate) {
        const now = new Date();
        const orderYear = lodash_1.default.random(startDate.getFullYear(), now.getFullYear());
        const orderMonth = lodash_1.default.random(11);
        const orderDate = lodash_1.default.random(31);
        const orderHours = lodash_1.default.random(23);
        const orderMinutes = lodash_1.default.random(59);
        const orderCreatedAt = new Date(orderYear, orderMonth, orderDate, orderHours, orderMinutes);
        if (orderCreatedAt < startDate || orderCreatedAt > now) {
            const diff = now.getTime() - startDate.getTime();
            orderCreatedAt.setTime(startDate.getTime() + lodash_1.default.random(diff));
        }
        return orderCreatedAt;
    }
    getOrderNextTime(date) {
        const randomMinutes = lodash_1.default.random(1, 30);
        const randomSec = lodash_1.default.random(1, 60);
        const oldDate = new Date(date);
        oldDate.setSeconds(randomSec);
        return new Date(oldDate.setMinutes(date.getMinutes() + randomMinutes));
    }
    getRandomNumberOfProducts() {
        return this._orderNumber % 7 || 1;
    }
    getRandomOrderProductCount() {
        return this._orderNumber % 3 || 1;
    }
    getRandomOrderProductPrice() {
        return this._orderNumber % 110 || 1;
    }
    getRandomProduct(orderNumber, products) {
        return products[orderNumber % products.length];
    }
    generateRandomOrderProducts(products) {
        const numberOfProducts = this.getRandomNumberOfProducts();
        const orderProducts = [];
        for (let productNumber = 1; productNumber <= numberOfProducts; productNumber += 1) {
            const orderPrice = this.getRandomOrderProductPrice();
            orderProducts.push({
                count: this.getRandomOrderProductCount(),
                product: this.getRandomProduct(productNumber, products),
                isManufacturing: true,
                price: orderPrice,
                initialPrice: orderPrice,
            });
        }
        return orderProducts;
    }
    getRandomOrderCustomer(customers) {
        return customers[this._orderNumber % customers.length];
    }
    _getOrderDeliveryCompleted(customers, products) {
        const startDeliveryTime = this.getOrderNextTime(this._orderCreatedAt);
        const deliveryTime = this.getOrderNextTime(startDeliveryTime);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: true,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 5,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            startDeliveryTime,
            deliveryTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCarrierArriveToCustomer(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 4,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            startDeliveryTime: this.getOrderNextTime(this._orderCreatedAt),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCarrierPickup(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 2,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            startDeliveryTime: this.getOrderNextTime(this._orderCreatedAt),
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCarrierSelected(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 1,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderPackagingFinished(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderAllocationFinished(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 4,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderClientRefuseOrder(customers, products) {
        const startDeliveryTime = this.getOrderNextTime(this._orderCreatedAt);
        const finishedProcessingTime = this.getOrderNextTime(startDeliveryTime);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 205,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            startDeliveryTime,
            finishedProcessingTime,
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderIssuesDuringDelivery(customers, products) {
        const startDeliveryTime = this.getOrderNextTime(this._orderCreatedAt);
        const finishedProcessingTime = this.getOrderNextTime(startDeliveryTime);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 204,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            startDeliveryTime,
            finishedProcessingTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderPackagingFails(customers, products) {
        const finishedProcessingTime = this.getOrderNextTime(this._orderCreatedAt);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 201,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            finishedProcessingTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderAllocationFails(customers, products) {
        const finishedProcessingTime = this.getOrderNextTime(this._orderCreatedAt);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 200,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            finishedProcessingTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderPackagingStarted(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 5,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderStartAllocation(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 3,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderStoreStartProcessing(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 2,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderReadyForProcessing(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 1,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCancelled(customers, products) {
        const finishedProcessingTime = this.getOrderNextTime(this._orderCreatedAt);
        return {
            isConfirmed: true,
            isCancelled: true,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 0,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: 1,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            finishedProcessingTime,
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderConfirmed(customers, products) {
        return {
            isConfirmed: true,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 0,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: 1,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderJustCreated(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 0,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
};
FakeOrdersService = tslib_1.__decorate([
    inversify_1.injectable()
], FakeOrdersService);
exports.FakeOrdersService = FakeOrdersService;


/***/ }),

/***/ "./src/services/geo-locations/GeoLocationsOrdersService.ts":
/*!*****************************************************************!*\
  !*** ./src/services/geo-locations/GeoLocationsOrdersService.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const orders_1 = __webpack_require__(/*! ../orders */ "./src/services/orders/index.ts");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const GeoLocationsWarehousesService_1 = __webpack_require__(/*! ./GeoLocationsWarehousesService */ "./src/services/geo-locations/GeoLocationsWarehousesService.ts");
const bluebird_1 = tslib_1.__importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const warehouses_1 = __webpack_require__(/*! ../warehouses */ "./src/services/warehouses/index.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const from_1 = __webpack_require__(/*! rxjs/observable/from */ "rxjs/observable/from");
const OrderWarehouseStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
const OrderCarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const bson_1 = __webpack_require__(/*! bson */ "bson");
let GeoLocationsOrdersService = class GeoLocationsOrdersService {
    constructor(ordersService, warehousesService, geoLocationsWarehousesService, warehousesProductsService, warehousesOrdersService) {
        this.ordersService = ordersService;
        this.warehousesService = warehousesService;
        this.geoLocationsWarehousesService = geoLocationsWarehousesService;
        this.warehousesProductsService = warehousesProductsService;
        this.warehousesOrdersService = warehousesOrdersService;
        this.log = Log_1.createEverLogger({
            name: 'geoLocationsOrdersService',
        });
    }
    get(geoLocation, options = {}) {
        return of_1.of(null).pipe(operators_1.concat(this.ordersService.existence.pipe(operators_1.exhaustMap((existenceEvent) => {
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                case db_server_1.ExistenceEventType.Updated:
                    if (existenceEvent.value != null) {
                        return this.warehousesService
                            .get(existenceEvent.value.warehouseId)
                            .pipe(operators_1.first());
                    }
                    else {
                        return this.warehousesService
                            .get('wrong')
                            .pipe(operators_1.first());
                    }
                case db_server_1.ExistenceEventType.Removed:
                    if (existenceEvent.lastValue != null) {
                        return this.warehousesService
                            .get(existenceEvent.lastValue.warehouseId)
                            .pipe(operators_1.first());
                    }
                    else {
                        return this.warehousesService
                            .get('wrong')
                            .pipe(operators_1.first());
                    }
            }
        }), operators_1.filter((warehouse) => warehouse != null
            ? GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.isNearly(warehouse, geoLocation)
            : true), operators_1.share())), operators_1.exhaustMap(() => from_1.from(this._get(geoLocation, options))));
    }
    getCountOfOrdersForWork(geoLocation, skippedOrderIds = [], searchObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, { fullProducts: false, activeOnly: true });
            const merchantsIds = merchants.map((m) => m._id);
            let searchByRegex = [];
            if (searchObj && searchObj.byRegex.length > 0) {
                searchByRegex = searchObj.byRegex.map((s) => {
                    return { [s.key]: { $regex: s.value, $options: 'i' } };
                });
            }
            return this.ordersService.Model.find(lodash_1.default.assign({
                warehouse: { $in: merchantsIds },
                warehouseStatus: {
                    $eq: OrderWarehouseStatus_1.default.PackagingFinished,
                },
                carrierStatus: {
                    $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                },
                _id: { $nin: skippedOrderIds },
            }, ...searchByRegex))
                .countDocuments()
                .exec();
        });
    }
    getOrdersForWork(geoLocation, skippedOrderIds = [], options, searchObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, { fullProducts: false, activeOnly: true });
            const merchantsIds = merchants.map((m) => m._id.toString());
            let searchByRegex = [];
            if (searchObj) {
                const byRegex = searchObj.byRegex;
                if (byRegex && byRegex.length > 0) {
                    searchByRegex = byRegex.map((s) => {
                        return { [s.key]: { $regex: s.value, $options: 'i' } };
                    });
                }
                const isCancelled = searchObj.isCancelled;
                if (isCancelled != null) {
                    searchByRegex.push({ isCancelled });
                }
            }
            const orders = yield this.ordersService.Model.aggregate([
                {
                    $match: lodash_1.default.assign({
                        warehouse: { $in: merchantsIds },
                        warehouseStatus: {
                            $eq: OrderWarehouseStatus_1.default.PackagingFinished,
                        },
                        carrierStatus: {
                            $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                        },
                        _id: {
                            $nin: skippedOrderIds.map((id) => new bson_1.ObjectId(id)),
                        },
                    }, ...searchByRegex),
                },
                {
                    $sort: {
                        _createdAt: options.sort &&
                            options.sort.toLowerCase().includes('desc')
                            ? -1
                            : 1,
                    },
                },
            ])
                .allowDiskUse(true)
                .skip(options.skip || 0)
                .limit(options.limit || 1)
                .exec();
            return orders.filter((o) => o !== null).map((o) => new Order_1.default(o));
        });
    }
    _get(geoLocation, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouses = yield this.geoLocationsWarehousesService
                .get(geoLocation, { activeOnly: true })
                .pipe(operators_1.first())
                .toPromise();
            this.log.info({
                geoLocation,
                warehouses,
            }, 'warehouses by location');
            const orders = lodash_1.default.flatten(yield bluebird_1.default.map(warehouses, (warehouse) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const warehouseOrders = yield this.warehousesOrdersService
                    .get(warehouse.id, {
                    populateCarrier: !!options.populateCarrier,
                })
                    .pipe(operators_1.first())
                    .toPromise();
                if (options.populateWarehouse) {
                    lodash_1.default.each(warehouseOrders, (order) => (order.warehouse = warehouse));
                }
                this.log.info({
                    geoLocation,
                    warehouseOrders,
                    warehouse,
                }, 'orders by warehouse');
                return warehouseOrders;
            })));
            this.log.info({
                geoLocation,
                orders,
            }, 'orders by warehouses');
            return orders;
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__param(0, io_1.serialization((geoLocationParam) => new GeoLocation_1.default(geoLocationParam))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GeoLocationsOrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Array, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsOrdersService.prototype, "getCountOfOrdersForWork", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Array, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsOrdersService.prototype, "getOrdersForWork", null);
GeoLocationsOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location-orders'),
    tslib_1.__param(0, inversify_1.inject(orders_1.OrdersService)),
    tslib_1.__param(1, inversify_1.inject(warehouses_1.WarehousesService)),
    tslib_1.__param(2, inversify_1.inject(GeoLocationsWarehousesService_1.GeoLocationsWarehousesService)),
    tslib_1.__param(3, inversify_1.inject(warehouses_1.WarehousesProductsService)),
    tslib_1.__param(4, inversify_1.inject(warehouses_1.WarehousesOrdersService)),
    tslib_1.__metadata("design:paramtypes", [orders_1.OrdersService,
        warehouses_1.WarehousesService,
        GeoLocationsWarehousesService_1.GeoLocationsWarehousesService,
        warehouses_1.WarehousesProductsService,
        warehouses_1.WarehousesOrdersService])
], GeoLocationsOrdersService);
exports.GeoLocationsOrdersService = GeoLocationsOrdersService;


/***/ }),

/***/ "./src/services/geo-locations/GeoLocationsProductsService.ts":
/*!*******************************************************************!*\
  !*** ./src/services/geo-locations/GeoLocationsProductsService.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const warehouses_1 = __webpack_require__(/*! ../warehouses */ "./src/services/warehouses/index.ts");
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const ProductInfo_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/ProductInfo */ "./node_modules/@ever-platform/common/src/entities/ProductInfo.ts"));
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const utils_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const GeoLocationsWarehousesService_1 = __webpack_require__(/*! ./GeoLocationsWarehousesService */ "./src/services/geo-locations/GeoLocationsWarehousesService.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const WarehouseProduct_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts"));
let GeoLocationsProductsService = class GeoLocationsProductsService {
    constructor(warehousesService, geoLocationsWarehousesService) {
        this.warehousesService = warehousesService;
        this.geoLocationsWarehousesService = geoLocationsWarehousesService;
        this.log = Log_1.createEverLogger({
            name: 'geoLocationsProductsService',
        });
    }
    get(geoLocation, options) {
        return this.geoLocationsWarehousesService
            .get(geoLocation, { fullProducts: true, activeOnly: true })
            .pipe(operators_1.map((warehouses) => this._getProductsFromWarehouses(geoLocation, warehouses, options)));
    }
    getCountOfGeoLocationProducts(geoLocation, options, searchText) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, {
                    fullProducts: true,
                    activeOnly: true,
                    merchantsIds: options ? options.merchantIds : null,
                });
                const productsIds = merchants.map((m) => {
                    let products = m.products
                        .filter((wProduct) => this.productsFilter(wProduct, options))
                        .filter((wProduct) => this.filterBySearchText(wProduct, searchText));
                    if (!options || !options.withoutCount) {
                        products = products.filter((wProduct) => wProduct.count > 0);
                    }
                    return products.map((p) => new WarehouseProduct_1.default(p).productId);
                });
                return (productsIds.flat().filter((x, i, a) => a.indexOf(x) == i)
                    .length || 0);
            }
            catch (error) {
                return 0;
            }
        });
    }
    geoLocationProductsByPaging(geoLocation, pagingOptions, options, searchText) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, {
                fullProducts: true,
                activeOnly: true,
                merchantsIds: options ? options.merchantIds : null,
            });
            const products = this._getProductsFromWarehouses(geoLocation, merchants.map((m) => new Warehouse_1.default(m)), options, searchText);
            return products.slice(pagingOptions.skip).slice(0, pagingOptions.limit);
        });
    }
    _getProductsFromWarehouses(geoLocation, warehouses, options, searchText) {
        const underscore_ = lodash_1.default;
        return underscore_(warehouses)
            .map((_warehouse) => {
            const warehouse = lodash_1.default.clone(_warehouse);
            if (!options || !options.withoutCount) {
                warehouse.products = warehouse.products.filter((wProduct) => wProduct.count > 0);
            }
            if (options) {
                warehouse.products = warehouse.products.filter((wProduct) => this.productsFilter(wProduct, options));
            }
            warehouse.products = warehouse.products.filter((wProduct) => this.filterBySearchText(wProduct, searchText));
            return warehouse;
        })
            .map((warehouse) => lodash_1.default.map(warehouse.products, (warehouseProduct) => {
            return new ProductInfo_1.default({
                warehouseId: warehouse.id,
                warehouseLogo: warehouse.logo,
                warehouseProduct,
                distance: utils_1.default.getDistance(geoLocation, warehouse.geoLocation),
            });
        }))
            .flatten()
            .groupBy((productInfo) => productInfo.warehouseProduct.productId)
            .map((productInfos, productId) => {
            return lodash_1.default.minBy(productInfos, (productInfo) => productInfo.distance);
        })
            .filter((productInfo) => !lodash_1.default.isUndefined(productInfo))
            .map((productInfo) => productInfo)
            .value();
    }
    productsFilter(wProduct, options) {
        if (!options) {
            return true;
        }
        wProduct.product.images = wProduct.product.images.filter((i) => {
            return ((options.imageOrientation !== undefined
                ? options.imageOrientation === 1
                    ? i.orientation === 1
                    : i.orientation === 0 || i.orientation === 2
                : true) &&
                (options.locale !== undefined
                    ? i.locale === options.locale
                    : true));
        });
        if (!wProduct.product.images || wProduct.product.images.length === 0) {
            return false;
        }
        return options.isDeliveryRequired
            ? wProduct.isDeliveryRequired === options.isDeliveryRequired
            :  true && options.isTakeaway
                ? wProduct.isTakeaway === options.isTakeaway
                : true;
    }
    filterBySearchText(wProduct, searchText) {
        if (!searchText) {
            return true;
        }
        let titles = wProduct.product['title'];
        titles = titles ? titles.map((t) => t.value) : [];
        let descriptions = wProduct.product['description'];
        descriptions = descriptions
            ? descriptions.map((d) => d.value)
            : [];
        let details = wProduct.product['details'];
        details = details ? details.map((d) => d.value) : [];
        return ((titles &&
            titles
                .join()
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())) ||
            (descriptions &&
                descriptions
                    .join()
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())) ||
            (details &&
                details
                    .join()
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())));
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__param(0, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GeoLocationsProductsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsProductsService.prototype, "getCountOfGeoLocationProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(0, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsProductsService.prototype, "geoLocationProductsByPaging", null);
GeoLocationsProductsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location-products'),
    tslib_1.__param(0, inversify_1.inject(warehouses_1.WarehousesService)),
    tslib_1.__param(1, inversify_1.inject(GeoLocationsWarehousesService_1.GeoLocationsWarehousesService)),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService,
        GeoLocationsWarehousesService_1.GeoLocationsWarehousesService])
], GeoLocationsProductsService);
exports.GeoLocationsProductsService = GeoLocationsProductsService;


/***/ }),

/***/ "./src/services/geo-locations/GeoLocationsService.ts":
/*!***********************************************************!*\
  !*** ./src/services/geo-locations/GeoLocationsService.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "axios"));
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const util_1 = __webpack_require__(/*! util */ "util");
let GeoLocationsService = class GeoLocationsService {
    constructor() {
        this.log = Log_1.createEverLogger({
            name: 'GeoLocationsService',
        });
        this.arcgisClientID = env_1.env.ARCGIS_CLIENT_ID;
        this.arcgisClientSecret = env_1.env.ARCGIS_CLIENT_SECRET;
    }
    getAddressByCoordinatesUsingArcGIS(lat, lng) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.arcgisClientID || !this.arcgisClientSecret) {
                this.log.info(`Cannot use getAddressByCoordinatesUsingArcGIS without${this.arcgisClientID ? '' : ' arcgisClientID'}${this.arcgisClientSecret ? '' : ' arcgisClientSecret'}`);
                return null;
            }
            try {
                this.log.info(`Attempt to reverse Geocode coordinates: ${lat},${lng}`);
                const tokenRequestUrl = `https://www.arcgis.com/sharing/oauth2/token?client_id=${this.arcgisClientID}&client_secret=${this.arcgisClientSecret}&grant_type=client_credentials&f=json`;
                const tokenResult = yield axios_1.default.get(tokenRequestUrl);
                if (!tokenResult ||
                    !tokenResult.data ||
                    !tokenResult.data['access_token']) {
                    this.log.info(`Cannot get arcgis token with client_id=${this.arcgisClientID}, client_secret=${this.arcgisClientSecret}`);
                    return null;
                }
                else {
                    const token = tokenResult.data['access_token'];
                    const requestBaseUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?location=${lng}%2C${lat}&distance=200&f=json`;
                    const requestUrl = `${requestBaseUrl}&forStorage=true&token=${token}`;
                    const resp = yield axios_1.default.get(requestUrl);
                    if (resp &&
                        resp.data &&
                        resp.data['address'] &&
                        (resp.data['address'].City ||
                            resp.data['address'].Region ||
                            resp.data['address'].Subregion)) {
                        let locality;
                        if (resp.data['address'].City) {
                            locality = resp.data['address'].City;
                        }
                        else if (resp.data['address'].Subregion) {
                            locality = resp.data['address'].Subregion;
                        }
                        else if (resp.data['address'].Region) {
                            locality = resp.data['address'].Region;
                        }
                        const result = {
                            locality,
                            thoroughfare: resp.data['address'].Address
                                ? resp.data['address'].Address.replace(/\d+|^\s+|\s+$/g, '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                : null,
                        };
                        this.log.info(`Attempted to reverse Geocode coordinates: ${lat}, ${lng}. Got results: ` +
                            `${JSON.stringify(result)}`);
                        return result;
                    }
                    else {
                        this.log.info(`Attempted to reverse Geocode coordinates: ${lat}, ${lng}. ` +
                            `Got empty response: ${resp ? util_1.inspect(resp) : ''}`);
                        return null;
                    }
                }
            }
            catch (err) {
                this.log.info(err);
                return null;
            }
        });
    }
};
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsService.prototype, "getAddressByCoordinatesUsingArcGIS", null);
GeoLocationsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location'),
    tslib_1.__metadata("design:paramtypes", [])
], GeoLocationsService);
exports.GeoLocationsService = GeoLocationsService;


/***/ }),

/***/ "./src/services/geo-locations/GeoLocationsWarehousesService.ts":
/*!*********************************************************************!*\
  !*** ./src/services/geo-locations/GeoLocationsWarehousesService.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GeoLocationsWarehousesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const utils_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const warehouses_1 = __webpack_require__(/*! ../warehouses */ "./src/services/warehouses/index.ts");
const GeoLocation_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let GeoLocationsWarehousesService = GeoLocationsWarehousesService_1 = class GeoLocationsWarehousesService {
    constructor(warehousesService) {
        this.warehousesService = warehousesService;
        this.log = Log_1.createEverLogger({
            name: 'geoLocationsWarehousesService',
        });
    }
    static isNearly(warehouse, geoLocation) {
        return (utils_1.default.getDistance(warehouse.geoLocation, geoLocation) <=
            GeoLocationsWarehousesService_1.TrackingDistance);
    }
    get(geoLocation, _options) {
        const options = {
            fullProducts: _options != null && _options.fullProducts != null,
            activeOnly: _options != null && _options.activeOnly != null
                ? _options.activeOnly
                : false,
        };
        return of_1.of(null).pipe(operators_1.concat(this.warehousesService.existence.pipe(operators_1.filter((existenceEvent) => {
            let warehouse;
            let oldWarehouse;
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                    warehouse = existenceEvent.value;
                    if (warehouse == null) {
                        return false;
                    }
                    return (GeoLocationsWarehousesService_1.isNearly(warehouse, geoLocation) &&
                        (options.activeOnly
                            ? warehouse.isActive
                            : true));
                case db_server_1.ExistenceEventType.Updated:
                    warehouse = existenceEvent.value;
                    oldWarehouse = existenceEvent.lastValue;
                    if (warehouse == null || oldWarehouse == null) {
                        return false;
                    }
                    return (GeoLocationsWarehousesService_1.isNearly(warehouse, geoLocation) !==
                        GeoLocationsWarehousesService_1.isNearly(oldWarehouse, geoLocation) &&
                        (options.activeOnly
                            ? warehouse.isActive !==
                                oldWarehouse.isActive
                            : true));
                case db_server_1.ExistenceEventType.Removed:
                    oldWarehouse = existenceEvent.lastValue;
                    if (oldWarehouse == null) {
                        return false;
                    }
                    return (GeoLocationsWarehousesService_1.isNearly(oldWarehouse, geoLocation) &&
                        (options.activeOnly
                            ? oldWarehouse.isActive
                            : true));
            }
        }), operators_1.share())), operators_1.exhaustMap(() => this._get(geoLocation, GeoLocationsWarehousesService_1.TrackingDistance, options)), operators_1.share());
    }
    getMerchants(geoLocation, maxDistance, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchantsIds = options.merchantsIds;
            const merchants = (yield this.warehousesService.Model.find(lodash_1.default.assign({
                'geoLocation.loc': {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: geoLocation.loc.coordinates,
                        },
                        $maxDistance: maxDistance,
                    },
                },
            }, options.activeOnly ? { isActive: true } : {}, merchantsIds && merchantsIds.length > 0
                ? {
                    _id: { $in: merchantsIds },
                }
                : {}))
                .populate(options.fullProducts ? 'products.product' : '')
                .lean()
                .exec());
            return merchants;
        });
    }
    _get(geoLocation, maxDistance, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouses = (yield this.warehousesService.Model.find(lodash_1.default.assign({
                'geoLocation.loc': {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: geoLocation.loc.coordinates,
                        },
                        $maxDistance: maxDistance,
                    },
                },
            }, options.activeOnly ? { isActive: true } : {}))
                .populate(options.fullProducts ? 'products.product' : '')
                .lean()
                .exec());
            return warehouses.map((warehouse) => new Warehouse_1.default(warehouse));
        });
    }
};
GeoLocationsWarehousesService.TrackingDistance = 50000;
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__param(0, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__param(1, io_1.serialization((o) => lodash_1.default.omit(o, ['fullProducts', 'activeOnly']))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], GeoLocationsWarehousesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsWarehousesService.prototype, "getMerchants", null);
GeoLocationsWarehousesService = GeoLocationsWarehousesService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location-warehouses'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService])
], GeoLocationsWarehousesService);
exports.GeoLocationsWarehousesService = GeoLocationsWarehousesService;


/***/ }),

/***/ "./src/services/geo-locations/index.ts":
/*!*********************************************!*\
  !*** ./src/services/geo-locations/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./GeoLocationsOrdersService */ "./src/services/geo-locations/GeoLocationsOrdersService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./GeoLocationsProductsService */ "./src/services/geo-locations/GeoLocationsProductsService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./GeoLocationsWarehousesService */ "./src/services/geo-locations/GeoLocationsWarehousesService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./GeoLocationsService */ "./src/services/geo-locations/GeoLocationsService.ts"), exports);


/***/ }),

/***/ "./src/services/inversify.config.ts":
/*!******************************************!*\
  !*** ./src/services/inversify.config.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const carriers_1 = __webpack_require__(/*! ./carriers */ "./src/services/carriers/index.ts");
const users_1 = __webpack_require__(/*! ./users */ "./src/services/users/index.ts");
const products_1 = __webpack_require__(/*! ./products */ "./src/services/products/index.ts");
const warehouses_1 = __webpack_require__(/*! ./warehouses */ "./src/services/warehouses/index.ts");
const orders_1 = __webpack_require__(/*! ./orders */ "./src/services/orders/index.ts");
const invites_1 = __webpack_require__(/*! ./invites */ "./src/services/invites/index.ts");
const geo_locations_1 = __webpack_require__(/*! ./geo-locations */ "./src/services/geo-locations/index.ts");
const devices_1 = __webpack_require__(/*! ./devices */ "./src/services/devices/index.ts");
const IService_1 = __webpack_require__(/*! ./IService */ "./src/services/IService.ts");
const config_service_1 = __webpack_require__(/*! ../config/config.service */ "./src/config/config.service.ts");
const services_app_1 = __webpack_require__(/*! ./services.app */ "./src/services/services.app.ts");
const auth_1 = __webpack_require__(/*! ./auth */ "./src/services/auth/index.ts");
const UsersAuthService_1 = __webpack_require__(/*! ./users/UsersAuthService */ "./src/services/users/UsersAuthService.ts");
const admins_1 = __webpack_require__(/*! ./admins */ "./src/services/admins/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Admin_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Admin */ "./node_modules/@ever-platform/common/src/entities/Admin.ts"));
const Device_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Device */ "./node_modules/@ever-platform/common/src/entities/Device.ts"));
const FakeOrdersService_1 = __webpack_require__(/*! ./fake-data/FakeOrdersService */ "./src/services/fake-data/FakeOrdersService.ts");
const CurrencyService_1 = __webpack_require__(/*! ./currency/CurrencyService */ "./src/services/currency/CurrencyService.ts");
function getRepository(t) {
    const conn = typeorm_1.getConnection('typeorm');
    return conn.getRepository(t);
}
const bindings = new inversify_1.ContainerModule((bind) => {
    bind('AdminRepository')
        .toDynamicValue(() => {
        return getRepository(Admin_1.default);
    })
        .inRequestScope();
    bind('DeviceRepository')
        .toDynamicValue(() => {
        return getRepository(Device_1.default);
    })
        .inRequestScope();
    lodash_1.default.each([
        config_service_1.ConfigService,
        users_1.UserCommandService,
        admins_1.AdminsService,
        carriers_1.CarriersOrdersService,
        carriers_1.CarriersService,
        devices_1.DevicesService,
        geo_locations_1.GeoLocationsOrdersService,
        geo_locations_1.GeoLocationsProductsService,
        geo_locations_1.GeoLocationsWarehousesService,
        geo_locations_1.GeoLocationsService,
        invites_1.InvitesRequestsService,
        invites_1.InvitesService,
        orders_1.OrdersService,
        products_1.ProductsService,
        products_1.ProductsCategoriesService,
        users_1.UsersOrdersService,
        users_1.UsersService,
        UsersAuthService_1.UsersAuthService,
        users_1.SocialStrategiesService,
        users_1.SocialRegisterService,
        warehouses_1.WarehousesOrdersService,
        warehouses_1.WarehousesProductsService,
        warehouses_1.WarehousesUsersService,
        warehouses_1.WarehousesCarriersService,
        warehouses_1.WarehousesService,
        users_1.UsersProductsService,
        auth_1.AuthenticationService,
        FakeOrdersService_1.FakeOrdersService,
        CurrencyService_1.CurrenciesService,
    ], (Service) => {
        bind(Service).to(Service).inSingletonScope();
        bind(IService_1.ServiceSymbol).toFactory((context) => {
            return context.container.get(Service);
        });
        bind(io_1.RouterSymbol).toFactory((context) => {
            return context.container.get(Service);
        });
    });
    bind(auth_1.AuthService).toSelf();
    bind('Factory<AuthService>').toFactory(auth_1.authServiceFactory);
    bind('RoutersManager')
        .to(io_1.RoutersManager)
        .inSingletonScope();
    bind(services_app_1.ServicesApp).toSelf().inSingletonScope();
});
const container = new inversify_1.Container();
container.load(bindings);
exports.servicesContainer = container;


/***/ }),

/***/ "./src/services/invites/InvitesRequestsService.ts":
/*!********************************************************!*\
  !*** ./src/services/invites/InvitesRequestsService.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const InviteRequest_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/InviteRequest */ "./node_modules/@ever-platform/common/src/entities/InviteRequest.ts"));
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const InvitesService_1 = __webpack_require__(/*! ./InvitesService */ "./src/services/invites/InvitesService.ts");
const Subscription_1 = __webpack_require__(/*! rxjs/Subscription */ "rxjs/Subscription");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const Invite_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Invite */ "./node_modules/@ever-platform/common/src/entities/Invite.ts"));
const request_promise_1 = tslib_1.__importDefault(__webpack_require__(/*! request-promise */ "request-promise"));
const bluebird_1 = tslib_1.__importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const devices_1 = __webpack_require__(/*! ../devices */ "./src/services/devices/index.ts");
const notifications_1 = __webpack_require__(/*! @modules/server.common/notifications */ "./node_modules/@ever-platform/common/src/notifications.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const GeoLocation_1 = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts");
const faker_1 = tslib_1.__importDefault(__webpack_require__(/*! faker */ "faker"));
let InvitesRequestsService = class InvitesRequestsService extends db_server_1.DBService {
    constructor(invitesService, devicesService) {
        super();
        this.invitesService = invitesService;
        this.devicesService = devicesService;
        this.DBObject = InviteRequest_1.default;
        this.log = Log_1.createEverLogger({
            name: 'invitesRequestsService',
        });
        this.pushSendingInvitesSubscription = Subscription_1.Subscription.EMPTY;
        this.pushSendingInvitesSubscription = this.invitesService.existence
            .pipe(operators_1.filter((existenceEvent) => existenceEvent.type === db_server_1.ExistenceEventType.Created), operators_1.map((existenceEvent) => existenceEvent.value))
            .subscribe((invite) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.Model.aggregate()
                .sort({ channelId: 1, _createdAt: 1 })
                .group({
                _id: '$deviceId',
                createdAt: { $last: '$_createdAt' },
            })
                .exec();
            if (results.length > 0) {
                yield this.notifyAboutLaunch(invite, lodash_1.default.map(results, (result) => result._id));
            }
        }));
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((inviteReq) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return inviteReq;
        })), operators_1.switchMap((inviteReq) => inviteReq));
    }
    create(inviteRequest) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, inviteRequest);
        });
    }
    notifyAboutLaunch(invite, devicesIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const devices = yield (yield this.devicesService.getMultipleDevices(devicesIds))
                .pipe(operators_1.first())
                .toPromise();
            const devicesByLanguages = lodash_1.default.groupBy(devices, (device) => device.language);
            const languages = lodash_1.default.keys(devicesByLanguages);
            yield bluebird_1.default.map(languages, (language) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const devicesByLanguage = devicesByLanguages[language];
                const request = {
                    audience: this._getLaunchAudience(devicesByLanguage),
                    device_types: 'all',
                    notification: this._getLaunchNotification(language, invite),
                };
                try {
                    const rp = request_promise_1.default;
                    yield rp({
                        method: 'POST',
                        uri: 'https://go.urbanairship.com/api/push',
                        body: request,
                        headers: {
                            Accept: 'application/vnd.urbanairship+json; version=3;',
                        },
                        auth: {
                            user: env_1.env.URBAN_AIRSHIP_KEY,
                            pass: env_1.env.URBAN_AIRSHIP_SECRET,
                        },
                        json: true,
                    });
                }
                catch (e) {
                    console.error(`.notifyAboutLaunch(...) error: ${e.message}`);
                    throw e;
                }
            }));
        });
    }
    getInvitesRequests(findInput, invited, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            const findNotInvited = Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false }, isInvited: { $eq: false } });
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            const inviteRequests = yield this.Model.find(findNotInvited)
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
            const allNotInvitedCount = yield this.Model.find(findNotInvited)
                .countDocuments()
                .exec();
            const skipInvited = pagingOptions.skip + inviteRequests.length - allNotInvitedCount;
            if (invited && skipInvited >= 0) {
                const invitedFromDB = yield this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false }, isInvited: { $eq: true } }))
                    .sort({ invitedDate: 'desc' })
                    .skip(skipInvited)
                    .limit(pagingOptions.limit - inviteRequests.length)
                    .lean()
                    .exec();
                return [...inviteRequests, ...invitedFromDB];
            }
            return inviteRequests;
        });
    }
    throwIfNotExists(inviteRequestId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inviteRequest = yield _super.get.call(this, inviteRequestId)
                .pipe(operators_1.first())
                .toPromise();
            if (!inviteRequest || inviteRequest.isDeleted) {
                throw Error(`Invite request with id '${inviteRequestId}' does not exists!`);
            }
        });
    }
    generate1000InviteRequests(defaultLng, defaultLat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invitesRequestsToCreate = [];
            let inviteRequestsCount = 1;
            while (inviteRequestsCount <= 1000) {
                const houseNumber = `${inviteRequestsCount}`;
                const requestLocation = this._getInviteRequestGeoLocationCreateObj(houseNumber, defaultLng, defaultLat);
                invitesRequestsToCreate.push({
                    isInvited: false,
                    apartment: `${inviteRequestsCount}`,
                    geoLocation: requestLocation,
                });
                inviteRequestsCount += 1;
            }
            yield this.Model.insertMany(invitesRequestsToCreate);
        });
    }
    _getLaunchAudience(devices) {
        const audience = {
            or: [],
        };
        const ios_devices = lodash_1.default.filter(devices, (device) => device.type === 'ios');
        if (ios_devices.length > 0) {
            audience.or.push({
                ios_channel: ios_devices
                    .map((device) => device.channelId)
                    .filter((channelId) => channelId != null)
                    .map((channelId) => channelId),
            });
        }
        const android_devices = lodash_1.default.filter(devices, (device) => device.type === 'android');
        if (android_devices.length > 0) {
            audience.or.push({
                android_channel: android_devices
                    .map((device) => device.channelId)
                    .filter((channelId) => channelId != null)
                    .map((channelId) => channelId),
            });
        }
        return audience;
    }
    _getLaunchNotification(language, invite) {
        switch (language) {
            case 'en-US':
                return {
                    android: {
                        title: 'Ever just launched!',
                        alert: 'Click to see some available products.',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever just launched at your address. Have fun!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
            case 'ru-RU':
                return {
                    android: {
                        title: 'Ever только что запустился!',
                        alert: 'Кликните чтобы увидить доступные продукты.',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever тольуо что запустился по Вашему адресу. Удачи!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
            case 'bg-BG':
                return {
                    android: {
                        title: 'Ever стартира!',
                        alert: 'Кликнете, за да видите някои налични продукти.',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever стартира на вашия адрес. Забавлявай се!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
            case 'he-IL':
            default:
                return {
                    android: {
                        title: 'הושקנו בכתובת שלך!',
                        alert: 'תלחץ כדי לצפות במוצרים!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever הושק בכתובת שלך! תלחץ כדי לצפות במוצרים!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
        }
    }
    _getInviteRequestGeoLocationCreateObj(houseNumber, defaultLng, defaultLat) {
        const GeoLocation = {
            countryId: faker_1.default.random.number(GeoLocation_1.Country.ZW),
            city: faker_1.default.address.city(),
            house: houseNumber,
            loc: {
                type: 'Point',
                coordinates: [defaultLng, defaultLat],
            },
            streetAddress: faker_1.default.address.streetAddress(),
        };
        return GeoLocation;
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], InvitesRequestsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesRequestsService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Invite_1.default, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesRequestsService.prototype, "notifyAboutLaunch", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesRequestsService.prototype, "getInvitesRequests", null);
InvitesRequestsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('invite-request'),
    tslib_1.__param(0, inversify_1.inject(InvitesService_1.InvitesService)),
    tslib_1.__param(1, inversify_1.inject(devices_1.DevicesService)),
    tslib_1.__metadata("design:paramtypes", [InvitesService_1.InvitesService,
        devices_1.DevicesService])
], InvitesRequestsService);
exports.InvitesRequestsService = InvitesRequestsService;


/***/ }),

/***/ "./src/services/invites/InvitesService.ts":
/*!************************************************!*\
  !*** ./src/services/invites/InvitesService.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var InvitesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const utils_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const Invite_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Invite */ "./node_modules/@ever-platform/common/src/entities/Invite.ts"));
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const from_1 = __webpack_require__(/*! rxjs/observable/from */ "rxjs/observable/from");
const _ = __webpack_require__(/*! lodash */ "lodash");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const faker_1 = tslib_1.__importDefault(__webpack_require__(/*! faker */ "faker"));
const GeoLocation_1 = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts");
let InvitesService = InvitesService_1 = class InvitesService extends db_server_1.DBService {
    constructor() {
        super();
        this.log = Log_1.createEverLogger({
            name: 'invitesService',
        });
        this.DBObject = Invite_1.default;
        this._invitedStreetLocations = of_1.of(null).pipe(operators_1.concat(this.existence), operators_1.exhaustMap(() => this._getInvitedStreetLocations()));
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((invite) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return invite;
        })), operators_1.switchMap((invite) => {
            return invite;
        }));
    }
    getInvitedStreetLocations() {
        return this._invitedStreetLocations;
    }
    create(invite) {
        if (!invite.code) {
            invite.code = utils_1.default.getRandomInt(1001, 9999) + '';
        }
        return super.create(invite);
    }
    getInvitesSettings() {
        return new Promise((resolve, reject) => {
            resolve({ isEnabled: env_1.env.SETTING_INVITES_ENABLED });
        });
    }
    getByCode(info) {
        const findObject = {
            code: info.inviteCode,
        };
        if (info.inviteCode !== env_1.env.FAKE_INVITE_CODE.toString()) {
            findObject['geoLocation.loc'] = {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: info.location.coordinates,
                    },
                    $maxDistance: InvitesService_1.InviteWorkingDistance,
                },
            };
        }
        return from_1.from(this.findOne(Object.assign(Object.assign({}, findObject), { isDeleted: { $eq: false } }))).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((event) => event.type !== db_server_1.ExistenceEventType.Removed), operators_1.map((event) => event.value), operators_1.filter((invite) => {
            return (utils_1.default.getLocDistance(invite.geoLocation.loc, info.location) <= InvitesService_1.InviteWorkingDistance &&
                invite.code === info.inviteCode);
        }))));
    }
    getByLocation(info) {
        const findObject = {
            'geoLocation.city': info.city,
            'geoLocation.streetAddress': info.streetAddress,
            'geoLocation.house': info.house,
            'geoLocation.countryId': info.countryId,
            apartment: info.apartment,
        };
        if (info.postcode != null) {
            findObject['geoLocation.postcode'] = info.postcode;
        }
        return from_1.from(this.findOne(Object.assign(Object.assign({}, findObject), { isDeleted: { $eq: false } }))).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((event) => event.type !== db_server_1.ExistenceEventType.Removed), operators_1.map((event) => event.value), operators_1.filter((invite) => {
            return (invite.geoLocation.city === info.city &&
                invite.geoLocation.streetAddress ===
                    info.streetAddress &&
                invite.geoLocation.house === info.house &&
                invite.geoLocation.countryId === info.countryId &&
                invite.apartment === info.apartment);
        }))));
    }
    getInvites(findInput, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    throwIfNotExists(inviteId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invite = yield _super.get.call(this, inviteId).pipe(operators_1.first()).toPromise();
            if (!invite || invite.isDeleted) {
                throw Error(`Invite with id '${inviteId}' does not exists!`);
            }
        });
    }
    generate1000InvitesConnectedToInviteRequests(defaultLng, defaultLat) {
        const invitesToCreate = [];
        const invitesRequestsToCreate = [];
        let inviteCount = 1;
        while (inviteCount <= 1000) {
            const apartment = `${inviteCount}`;
            const houseNumber = `${inviteCount}`;
            const geoLocation = this._getInviteGeoLocationCreateObj(houseNumber, defaultLng, defaultLat);
            invitesRequestsToCreate.push({
                apartment,
                geoLocation,
                isInvited: true,
                invitedDate: new Date(),
            });
            invitesToCreate.push({
                code: `${999 + inviteCount}`,
                apartment,
                geoLocation,
            });
            inviteCount += 1;
        }
        return {
            invitesRequestsToCreate,
            invitesToCreate,
        };
    }
    _getInviteGeoLocationCreateObj(houseNumber, defaultLng, defaultLat) {
        return {
            countryId: faker_1.default.random.number(GeoLocation_1.Country.ZW),
            city: faker_1.default.address.city(),
            house: houseNumber,
            loc: {
                type: 'Point',
                coordinates: [defaultLng, defaultLat],
            },
            streetAddress: faker_1.default.address.streetAddress(),
        };
    }
    _getInvitedStreetLocations() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.Model.aggregate()
                .group({
                _id: {
                    streetAddress: '$geoLocation.streetAddress',
                    city: '$geoLocation.city',
                    country: '$geoLocation.countryId',
                },
            })
                .exec();
            return _.map(results, (result) => result._id);
        });
    }
};
InvitesService.InviteWorkingDistance = 50000;
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], InvitesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InvitesService.prototype, "getInvitedStreetLocations", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesService.prototype, "getInvitesSettings", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], InvitesService.prototype, "getByCode", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], InvitesService.prototype, "getByLocation", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesService.prototype, "getInvites", null);
InvitesService = InvitesService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('invite'),
    tslib_1.__metadata("design:paramtypes", [])
], InvitesService);
exports.InvitesService = InvitesService;


/***/ }),

/***/ "./src/services/invites/index.ts":
/*!***************************************!*\
  !*** ./src/services/invites/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./InvitesService */ "./src/services/invites/InvitesService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./InvitesRequestsService */ "./src/services/invites/InvitesRequestsService.ts"), exports);


/***/ }),

/***/ "./src/services/orders/OrdersService.ts":
/*!**********************************************!*\
  !*** ./src/services/orders/OrdersService.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const bluebird_1 = tslib_1.__importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const warehouses_1 = __webpack_require__(/*! ../warehouses */ "./src/services/warehouses/index.ts");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const OrderCarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const OrderWarehouseStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
const users_1 = __webpack_require__(/*! ../users */ "./src/services/users/index.ts");
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const CarriersService_1 = tslib_1.__importDefault(__webpack_require__(/*! ../carriers/CarriersService */ "./src/services/carriers/CarriersService.ts"));
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const _ = __webpack_require__(/*! lodash */ "lodash");
const OrderStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderStatus */ "./node_modules/@ever-platform/common/src/enums/OrderStatus.ts"));
const User_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/User */ "./node_modules/@ever-platform/common/src/entities/User.ts"));
const products_1 = __webpack_require__(/*! ../../services/products */ "./src/services/products/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Stripe = __webpack_require__(/*! stripe */ "stripe");
let OrdersService = class OrdersService extends db_server_1.DBService {
    constructor(warehousesService, usersService, carriersService, warehousesProductsService, _storesService, _productsService) {
        super();
        this.warehousesService = warehousesService;
        this.usersService = usersService;
        this.carriersService = carriersService;
        this.warehousesProductsService = warehousesProductsService;
        this._storesService = _storesService;
        this._productsService = _productsService;
        this.DBObject = Order_1.default;
        this.stripe = new Stripe(env_1.env.STRIPE_SECRET_KEY);
        this.log = Log_1.createEverLogger({
            name: 'ordersService',
        });
    }
    generateOrdersPerEachCustomer(customers) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stores = yield this._storesService.findAll({
                _id: 1,
                products: 1,
            });
            const products = yield this._productsService.findAll();
            const orders = [];
            customers.forEach((customer, index) => {
                const storeId = stores[index % stores.length]._id;
                const product1Price = Math.round(Math.random() * 99);
                const product2Price = Math.round(Math.random() * 99);
                orders.push({
                    products: [
                        {
                            count: 2,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: product1Price,
                            initialPrice: product1Price,
                            product: products[index % products.length],
                        },
                        {
                            count: 2,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: product2Price,
                            initialPrice: product2Price,
                            product: products[(index + 1) % products.length],
                        },
                    ],
                    user: customer,
                    warehouse: storeId,
                    orderNumber: index,
                });
            });
            yield this.Model.insertMany(orders);
        });
    }
    get(id, options = {}) {
        if (options.populateCarrier || options.populateWarehouse) {
            return super.get(id).pipe(operators_1.map((order) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._throwIfNotExists(id);
                return order;
            })), operators_1.switchMap((order) => order), operators_1.exhaustMap(() => this._get(id, options)));
        }
        else {
            return super.get(id).pipe(operators_1.map((order) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._throwIfNotExists(id);
                return order;
            })), operators_1.switchMap((order) => order));
        }
    }
    updateCarrierStatus(orderId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            try {
                const updateObj = { carrierStatus: status };
                if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                    updateObj.isPaid = true;
                    updateObj.deliveryTime = Date.now();
                }
                if (status === OrderCarrierStatus_1.default.CarrierStartDelivery ||
                    status === OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                    updateObj.startDeliveryTime = Date.now();
                }
                const finishedProcessingStatuses = [
                    OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
                    OrderCarrierStatus_1.default.DeliveryCompleted,
                    OrderCarrierStatus_1.default.IssuesDuringDelivery,
                ];
                if (finishedProcessingStatuses.includes(status)) {
                    updateObj.finishedProcessingTime = Date.now();
                }
                const order = yield this.update(orderId, updateObj);
                if (order.carrierId != null) {
                    if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                        yield this.carriersService.increaseNumberOfDeliveries(order.carrierId, 1);
                    }
                    return order;
                }
                else {
                    throw new Error("Can't updateCarrierStatus(orderId, status) - Order has no carrier!");
                }
            }
            catch (err) {
                this.log.error(err);
                throw err;
            }
        });
    }
    updateWarehouseStatus(orderId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const updateObj = { warehouseStatus: status };
            const finishedProcessingStatuses = [
                OrderWarehouseStatus_1.default.PackagingFailed,
                OrderWarehouseStatus_1.default.AllocationFailed,
            ];
            if (finishedProcessingStatuses.includes(status)) {
                updateObj.finishedProcessingTime = Date.now();
            }
            if (status === OrderWarehouseStatus_1.default.GivenToCustomer) {
                updateObj.isPaid = true;
                updateObj.finishedProcessingTime = Date.now();
            }
            return this.update(orderId, updateObj);
        });
    }
    payWithStripe(orderId, cardId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const callId = uuid_1.v1();
            this.log.info({ callId, orderId, cardId }, '.payWithStripe(orderId, cardId) called');
            let order;
            try {
                const _order = yield this.get(orderId).pipe(operators_1.first()).toPromise();
                if (_order != null) {
                    order = _order;
                    const user = yield this.usersService
                        .get(order.user.id)
                        .pipe(operators_1.first())
                        .toPromise();
                    if (user != null) {
                        const charge = yield this.stripe.charges.create({
                            amount: order.totalPrice * 100,
                            customer: user.stripeCustomerId,
                            source: cardId,
                            currency: 'ils',
                            description: 'Order id: ' + orderId,
                            metadata: {
                                orderId,
                            },
                        });
                        order = yield this.update(orderId, {
                            stripeChargeId: charge.id,
                            isPaid: true,
                        });
                    }
                    else {
                        throw new Error('User specified in order is not found!');
                    }
                }
                else {
                    throw new Error("couldn't find order with such id");
                }
            }
            catch (err) {
                this.log.error({ callId, orderId, cardId, err }, '.payWithStripe(orderId, cardId) thrown error!');
                throw err;
            }
            this.log.info({ callId, orderId, cardId, order }, '.payWithStripe(orderId, cardId) accepted payment');
            return order;
        });
    }
    refundWithStripe(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const callId = uuid_1.v1();
            this.log.info({ callId, orderId }, '.refundWithStripe(orderId) called');
            let refund;
            let order;
            try {
                order = yield this.get(orderId).pipe(operators_1.first()).toPromise();
                if (order != null) {
                    if (order.stripeChargeId != null) {
                        refund = yield this.stripe.refunds.create({
                            charge: order.stripeChargeId,
                        });
                        this.log.info({ callId, orderId, refund }, '.refundWithStripe(orderId) made refund');
                        return order;
                    }
                    else {
                        throw new Error(`There is no order with stripeChargeId field and id of ${orderId} to refundWithStripe on!`);
                    }
                }
                else {
                    throw new Error(`There is no order with id of ${orderId} to refundWithStripe on!`);
                }
            }
            catch (err) {
                this.log.error({ callId, orderId, err }, '.refundWithStripe(orderId) thrown error!');
                throw err;
            }
        });
    }
    confirm(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            return this.update(orderId, {
                isConfirmed: true,
                warehouseStatus: OrderWarehouseStatus_1.default.ReadyForProcessing,
            });
        });
    }
    addProducts(orderId, products, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const order = yield this._get(orderId);
            const oldProductsIds = order.products.map((p) => p.product.id);
            const newProductsIds = products.map((p) => p.productId);
            for (const product of order.products) {
                if (newProductsIds.includes(product.product.id)) {
                    const newProduct = products.find((p) => p.productId === product.product.id);
                    if (newProduct) {
                        product.count += newProduct.count;
                        yield this.warehousesProductsService.decreaseCount(warehouseId, newProduct.productId, newProduct.count);
                        yield this.warehousesProductsService.increaseSoldCount(warehouseId, newProduct.productId, newProduct.count);
                    }
                }
            }
            products = products.filter((p) => !oldProductsIds.includes(p['productId']));
            const warehouse = (yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise());
            const warehouseProducts = _.keyBy(warehouse.products, 'productId');
            const newOrderProducts = yield _.map(products, (args) => {
                const wProduct = warehouseProducts[args.productId];
                if (!wProduct) {
                    throw new Error(`WarehouseOrdersService got call to create(userId, orderProducts) - But there is no product with the id ${args.productId}!`);
                }
                return {
                    count: args.count,
                    price: wProduct.price,
                    initialPrice: wProduct.initialPrice,
                    deliveryTimeMin: wProduct.deliveryTimeMin,
                    deliveryTimeMax: wProduct.deliveryTimeMax,
                    product: wProduct.product,
                    isManufacturing: wProduct.isManufacturing,
                    isCarrierRequired: wProduct.isCarrierRequired,
                    isDeliveryRequired: wProduct.isDeliveryRequired,
                    isTakeaway: wProduct.isTakeaway,
                };
            });
            for (const product of products) {
                yield this.warehousesProductsService.decreaseCount(warehouseId, product.productId, product.count);
                yield this.warehousesProductsService.increaseSoldCount(warehouseId, product.productId, product.count);
            }
            return this.update(orderId, {
                products: [...order.products, ...newOrderProducts],
            });
        });
    }
    decreaseOrderProducts(orderId, products, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const order = yield this._get(orderId);
            const oldProductsIds = order.products.map((p) => p.product.id);
            const newProductsIds = products.map((p) => p.productId);
            for (const product of order.products) {
                if (newProductsIds.includes(product.product.id)) {
                    const newProduct = products.find((p) => p.productId === product.product.id);
                    if (newProduct) {
                        product.count -= newProduct.count;
                        if (product.count >= 1) {
                            yield this.warehousesProductsService.decreaseSoldCount(warehouseId, newProduct.productId, newProduct.count);
                            yield this.warehousesProductsService.increaseCount(warehouseId, newProduct.productId, newProduct.count);
                        }
                        else {
                            throw new Error(`You can not decrease product to be === 0 !`);
                        }
                    }
                }
            }
            products = products.filter((p) => !oldProductsIds.includes(p['productId']));
            const warehouse = (yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise());
            const warehouseProducts = _.keyBy(warehouse.products, 'productId');
            const newOrderProducts = yield _.map(products, (args) => {
                const wProduct = warehouseProducts[args.productId];
                if (!wProduct) {
                    throw new Error(`WarehouseOrdersService got call to create(userId, orderProducts) - But there is no product with the id ${args.productId}!`);
                }
                return {
                    count: args.count,
                    price: wProduct.price,
                    initialPrice: wProduct.initialPrice,
                    deliveryTimeMin: wProduct.deliveryTimeMin,
                    deliveryTimeMax: wProduct.deliveryTimeMax,
                    product: wProduct.product,
                    isManufacturing: wProduct.isManufacturing,
                    isCarrierRequired: wProduct.isCarrierRequired,
                    isDeliveryRequired: wProduct.isDeliveryRequired,
                    isTakeaway: wProduct.isTakeaway,
                };
            });
            for (const product of products) {
                yield this.warehousesProductsService.decreaseCount(warehouseId, product.productId, product.count);
                yield this.warehousesProductsService.increaseSoldCount(warehouseId, product.productId, product.count);
            }
            return this.update(orderId, {
                products: [...order.products, ...newOrderProducts],
            });
        });
    }
    removeProducts(orderId, productsIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const order = yield this._get(orderId);
            const newProducts = order.products.filter((p) => !productsIds.includes(p.product.id));
            const removedProducts = order.products.filter((p) => productsIds.includes(p.product.id));
            yield bluebird_1.default.map(removedProducts, (orderProduct) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productId = orderProduct.product.id;
                yield this.warehousesProductsService.decreaseSoldCount(order.warehouseId, productId, orderProduct.count);
                yield this.warehousesProductsService.increaseCount(order.warehouseId, productId, orderProduct.count);
            }));
            return this.update(orderId, {
                products: newProducts,
            });
        });
    }
    cancel(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            return this.update(orderId, {
                isCancelled: true,
                finishedProcessingTime: Date.now(),
            });
        });
    }
    paid(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            return this.update(orderId, { isPaid: true });
        });
    }
    getStoreOrdersChartTotalOrders(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersRaw = yield this.Model.find({
                warehouse: storeId,
                isDeleted: { $eq: false },
            })
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                _createdAt: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    isCompleted: this._isOrderCompleted(o),
                    isCancelled: o.isCancelled,
                    _createdAt: o._createdAt,
                };
            });
            return orders.filter((o) => o.isCompleted);
        });
    }
    getOrdersChartTotalOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersRaw = yield this.Model.find({
                isDeleted: { $eq: false },
            })
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                _createdAt: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    isCompleted: this._isOrderCompleted(o),
                    isCancelled: o.isCancelled,
                    _createdAt: o._createdAt,
                };
            });
            const ordersRes = orders.filter((o) => o.isCompleted);
            return ordersRes;
        });
    }
    getDashboardCompletedOrdersToday() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const start = new Date();
            const end = new Date();
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            const ordersRaw = yield this.Model.find({
                isDeleted: { $eq: false },
                isCancelled: { $eq: false },
                _createdAt: { $gte: start, $lt: end },
            })
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                _createdAt: 1,
                warehouse: 1,
                user: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    isCompleted: this._isOrderCompleted(o),
                    isCancelled: o.isCancelled,
                    user: o.user,
                    warehouseId: o.warehouse,
                    _createdAt: o._createdAt,
                };
            });
            return orders.filter((o) => o.isCompleted);
        });
    }
    getOrderedUsersInfo(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.Model.find({
                isDeleted: { $eq: false },
                warehouse: { $eq: storeId },
            })
                .select({
                user: 1,
                isPaid: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const unique = (value, index, self) => {
                return (self
                    .map((s) => s.user._id.toString())
                    .indexOf(value.user._id.toString()) === index);
            };
            const oUsers = orders.filter(unique).map((o) => {
                const user = new User_1.default(o.user);
                return user;
            });
            const oUserIds = oUsers.map((u) => u.id);
            const realUsers = yield this.usersService.find({
                isDeleted: false,
                _id: { $in: oUserIds },
            });
            return oUsers.map((u) => {
                const userOrders = orders.filter((o) => o.user._id.toString() === u._id.toString());
                let totalPrice = 0;
                const paidOrders = userOrders.filter((o) => o.isPaid);
                if (paidOrders.length > 0) {
                    totalPrice = paidOrders
                        .map((o) => this._getOrderTotalPrice(o))
                        .reduce((a, b) => a + b);
                }
                return {
                    user: realUsers.find((ru) => ru.id === u.id),
                    ordersCount: userOrders.length,
                    totalPrice,
                };
            });
        });
    }
    getDashboardCompletedOrders(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const quaryObj = {
                isDeleted: { $eq: false },
                isCancelled: { $eq: false },
            };
            if (storeId) {
                quaryObj['warehouse'] = { $eq: storeId };
            }
            const ordersRaw = yield this.Model.find(quaryObj)
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                warehouse: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    warehouseId: o.warehouse,
                    isCompleted: this._isOrderCompleted(o),
                };
            });
            return orders.filter((o) => o.isCompleted);
        });
    }
    getOrdersInDelivery(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield this.Model.find({
                isDeleted: false,
                isCancelled: false,
                warehouse: storeId,
                carrierStatus: {
                    $in: [
                        OrderCarrierStatus_1.default.CarrierPickedUpOrder,
                        OrderCarrierStatus_1.default.CarrierStartDelivery,
                        OrderCarrierStatus_1.default.CarrierArrivedToCustomer,
                    ],
                },
            })
                .populate('carrier user')
                .lean()
                .exec();
            return order;
        });
    }
    _getOrderTotalPrice(order) {
        return _.sum(_.map(order.products, (p) => p.count * p.price));
    }
    _isOrderCompleted(order) {
        function getStatus(o) {
            if (o.carrier == null ||
                o.carrierStatus <= OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                if (o.warehouseStatus >= 200) {
                    return OrderStatus_1.default.WarehouseIssue;
                }
                else if (o.isCancelled) {
                    return OrderStatus_1.default.CanceledWhileWarehousePreparation;
                }
                else {
                    return OrderStatus_1.default.WarehousePreparation;
                }
            }
            else {
                if (o.carrierStatus >= 200) {
                    return OrderStatus_1.default.CarrierIssue;
                }
                else if (o.isCancelled) {
                    return OrderStatus_1.default.CanceledWhileInDelivery;
                }
                else if (o.isPaid &&
                    o.carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted) {
                    return OrderStatus_1.default.Delivered;
                }
                else {
                    return OrderStatus_1.default.InDelivery;
                }
            }
        }
        return ((order.isPaid && getStatus(order) === OrderStatus_1.default.Delivered) ||
            order.isCancelled);
    }
    _get(id, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toPopulate = '';
            if (options.populateCarrier) {
                toPopulate += 'carrier ';
            }
            if (options.populateWarehouse) {
                toPopulate += 'warehouse ';
            }
            return new Order_1.default((yield this.Model.findById(id)
                .populate(toPopulate)
                .sort({ _createdAt: -1, orderNumber: -1 })
                .lean()
                .exec()));
        });
    }
    _throwIfNotExists(orderId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield _super.get.call(this, orderId).pipe(operators_1.first()).toPromise();
            if (!order || order.isDeleted) {
                throw Error(`Order with id '${orderId}' does not exists!`);
            }
        });
    }
};
OrdersService.FindObjects = {
    isCompleted: {
        $or: [
            {
                isPaid: true,
                carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted,
            },
            {
                isCancelled: true,
            },
        ],
    },
    isNotCompleted: {
        $and: [
            {
                isPaid: false,
                carrierStatus: {
                    $ne: OrderCarrierStatus_1.default.DeliveryCompleted,
                },
            },
            {
                isCancelled: false,
            },
        ],
    },
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], OrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "updateCarrierStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "updateWarehouseStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "payWithStripe", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "refundWithStripe", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "confirm", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "addProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "decreaseOrderProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "removeProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "cancel", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "paid", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getStoreOrdersChartTotalOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrdersChartTotalOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getDashboardCompletedOrdersToday", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrderedUsersInfo", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getDashboardCompletedOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrdersInDelivery", null);
OrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('order'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => users_1.UsersService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => CarriersService_1.default))),
    tslib_1.__param(3, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesProductsService))),
    tslib_1.__param(4, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__param(5, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => products_1.ProductsService))),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService,
        users_1.UsersService,
        CarriersService_1.default,
        warehouses_1.WarehousesProductsService,
        warehouses_1.WarehousesService,
        products_1.ProductsService])
], OrdersService);
exports.OrdersService = OrdersService;


/***/ }),

/***/ "./src/services/orders/index.ts":
/*!**************************************!*\
  !*** ./src/services/orders/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./OrdersService */ "./src/services/orders/OrdersService.ts"), exports);


/***/ }),

/***/ "./src/services/products/ProductsCategoriesService.ts":
/*!************************************************************!*\
  !*** ./src/services/products/ProductsCategoriesService.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const ProductsCategory_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/ProductsCategory */ "./node_modules/@ever-platform/common/src/entities/ProductsCategory.ts"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let ProductsCategoriesService = class ProductsCategoriesService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = ProductsCategory_1.default;
        this.log = Log_1.createEverLogger({
            name: 'productsCategoriesService',
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((category) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return category;
        })), operators_1.switchMap((category) => category));
    }
    create(category) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, category);
        });
    }
    update(id, updateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, updateObject);
        });
    }
    remove(id) {
        const _super = Object.create(null, {
            remove: { get: () => super.remove }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.remove.call(this, id);
        });
    }
    throwIfNotExists(categoryId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const category = yield _super.get.call(this, categoryId).pipe(operators_1.first()).toPromise();
            if (!category || category.isDeleted) {
                throw Error(`Category with id '${categoryId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], ProductsCategoriesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [void 0]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoriesService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoriesService.prototype, "update", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoriesService.prototype, "remove", null);
ProductsCategoriesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('products-category')
], ProductsCategoriesService);
exports.ProductsCategoriesService = ProductsCategoriesService;


/***/ }),

/***/ "./src/services/products/ProductsService.ts":
/*!**************************************************!*\
  !*** ./src/services/products/ProductsService.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const Product_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Product */ "./node_modules/@ever-platform/common/src/entities/Product.ts"));
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let ProductsService = class ProductsService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = Product_1.default;
        this.log = Log_1.createEverLogger({
            name: 'productsService',
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((product) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return product;
        })), operators_1.switchMap((product) => product));
    }
    getProducts(findInput, pagingOptions, existedProductsIds = []) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false }, _id: { $nin: existedProductsIds } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    create(product) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, product);
        });
    }
    update(id, updateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, updateObject);
        });
    }
    save(updatedProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(updatedProduct.id);
            return this.update(updatedProduct.id, updatedProduct);
        });
    }
    throwIfNotExists(productId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product = yield _super.get.call(this, productId).pipe(operators_1.first()).toPromise();
            if (!product || product.isDeleted) {
                throw Error(`Product with id '${productId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], ProductsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "getProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [void 0]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "update", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(0, io_1.serialization((product) => new Product_1.default(product))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "save", null);
ProductsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('product')
], ProductsService);
exports.ProductsService = ProductsService;


/***/ }),

/***/ "./src/services/products/index.ts":
/*!****************************************!*\
  !*** ./src/services/products/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./ProductsCategoriesService */ "./src/services/products/ProductsCategoriesService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ProductsService */ "./src/services/products/ProductsService.ts"), exports);


/***/ }),

/***/ "./src/services/services.app.ts":
/*!**************************************!*\
  !*** ./src/services/services.app.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ServicesApp_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const https_1 = tslib_1.__importDefault(__webpack_require__(/*! https */ "https"));
const http_1 = tslib_1.__importDefault(__webpack_require__(/*! http */ "http"));
const path_1 = tslib_1.__importDefault(__webpack_require__(/*! path */ "path"));
const pem_1 = tslib_1.__importDefault(__webpack_require__(/*! pem */ "pem"));
const fs_1 = tslib_1.__importDefault(__webpack_require__(/*! fs */ "fs"));
const body_parser_1 = tslib_1.__importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const cors_1 = tslib_1.__importDefault(__webpack_require__(/*! cors */ "cors"));
const passport_1 = tslib_1.__importDefault(__webpack_require__(/*! passport */ "passport"));
const method_override_1 = tslib_1.__importDefault(__webpack_require__(/*! method-override */ "method-override"));
const errorhandler_1 = tslib_1.__importDefault(__webpack_require__(/*! errorhandler */ "errorhandler"));
const socket_io_1 = tslib_1.__importDefault(__webpack_require__(/*! socket.io */ "socket.io"));
const express_1 = tslib_1.__importDefault(__webpack_require__(/*! express */ "express"));
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const morgan_1 = tslib_1.__importDefault(__webpack_require__(/*! morgan */ "morgan"));
const express_handlebars_1 = tslib_1.__importDefault(__webpack_require__(/*! express-handlebars */ "express-handlebars"));
const Log_1 = __webpack_require__(/*! ../helpers/Log */ "./src/helpers/Log.ts");
const IService_1 = __webpack_require__(/*! ./IService */ "./src/services/IService.ts");
const warehouses_1 = __webpack_require__(/*! ./warehouses */ "./src/services/warehouses/index.ts");
const users_1 = __webpack_require__(/*! ./users */ "./src/services/users/index.ts");
const env_1 = __webpack_require__(/*! ../env */ "./src/env.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const bluebird_1 = tslib_1.__importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const admins_1 = __webpack_require__(/*! ./admins */ "./src/services/admins/index.ts");
const ipstack = __webpack_require__(/*! ipstack */ "ipstack");
const requestIp = __webpack_require__(/*! request-ip */ "request-ip");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const utils_1 = __webpack_require__(/*! @modules/server.common/utils */ "./node_modules/@ever-platform/common/src/utils.ts");
const Admin_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Admin */ "./node_modules/@ever-platform/common/src/entities/Admin.ts"));
const Device_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Device */ "./node_modules/@ever-platform/common/src/entities/Device.ts"));
const Carrier_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Carrier */ "./node_modules/@ever-platform/common/src/entities/Carrier.ts"));
const Invite_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Invite */ "./node_modules/@ever-platform/common/src/entities/Invite.ts"));
const InviteRequest_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/InviteRequest */ "./node_modules/@ever-platform/common/src/entities/InviteRequest.ts"));
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const Product_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Product */ "./node_modules/@ever-platform/common/src/entities/Product.ts"));
const ProductsCategory_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/ProductsCategory */ "./node_modules/@ever-platform/common/src/entities/ProductsCategory.ts"));
const User_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/User */ "./node_modules/@ever-platform/common/src/entities/User.ts"));
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const config_service_1 = __webpack_require__(/*! ../config/config.service */ "./src/config/config.service.ts");
const INTERNAL_IPS = ['127.0.0.1', '::1'];
let ServicesApp = ServicesApp_1 = class ServicesApp {
    constructor(services, routersManager, warehousesService, socialStrategiesService, _adminsService, _configService) {
        this.services = services;
        this.routersManager = routersManager;
        this.warehousesService = warehousesService;
        this.socialStrategiesService = socialStrategiesService;
        this._adminsService = _adminsService;
        this.db_server = process.env.DB_ENV || 'primary';
        this.log = Log_1.createEverLogger({ name: 'main' });
        const maxSockets = _configService.Env.MAX_SOCKETS;
        http_1.default.globalAgent.maxSockets = maxSockets;
        https_1.default.globalAgent.maxSockets = maxSockets;
        process
            .on('SIGINT', this._gracefulExit)
            .on('SIGTERM', this._gracefulExit);
    }
    start(callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.callback = callback;
            yield this._connectDB();
        });
    }
    static getEntities() {
        const entities = [
            Admin_1.default,
            Carrier_1.default,
            Device_1.default,
            Invite_1.default,
            InviteRequest_1.default,
            Order_1.default,
            Product_1.default,
            ProductsCategory_1.default,
            User_1.default,
            Warehouse_1.default,
        ];
        return entities;
    }
    static CreateTypeORMConnection() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const typeORMLog = Log_1.createEverLogger({ name: 'TypeORM' });
            const entities = ServicesApp_1.getEntities();
            const conn = yield typeorm_1.createConnection({
                name: 'typeorm',
                type: 'mongodb',
                url: env_1.env.DB_URI,
                entities,
                synchronize: true,
                useNewUrlParser: true,
                autoReconnect: true,
                reconnectTries: Number.MAX_VALUE,
                poolSize: ServicesApp_1._poolSize,
                connectTimeoutMS: ServicesApp_1._connectTimeoutMS,
                logging: true,
                useUnifiedTopology: true,
            });
            console.log(`TypeORM DB connection created. DB connected: ${conn.isConnected}`);
            typeORMLog.info(`TypeORM DB connection created. DB connected: ${conn.isConnected}`);
            return conn;
        });
    }
    _gracefulExit() {
        try {
            if (this.db != null) {
                this.db.close(() => {
                    this.log.info('Mongoose default connection with DB :' +
                        this.db_server +
                        ' is disconnected through app termination');
                    process.exit(0);
                });
            }
        }
        catch (err) {
            process.exit(0);
        }
    }
    _connectDB() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const connectionOptions = {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    autoReconnect: true,
                    useFindAndModify: false,
                    reconnectTries: Number.MAX_VALUE,
                    poolSize: ServicesApp_1._poolSize,
                    connectTimeoutMS: ServicesApp_1._connectTimeoutMS,
                    useUnifiedTopology: true,
                };
                const mongoConnect = yield mongoose_1.default.connect(env_1.env.DB_URI, connectionOptions);
                this.db = mongoConnect.connection;
                this._configDBEvents();
                this._onDBConnect();
            }
            catch (err) {
                this.log.error(err, 'Sever initialization failed! Cannot connect to DB');
            }
        });
    }
    _configDBEvents() {
        this.db.on('error', (err) => this.log.error(err));
        this.db.on('disconnected', () => {
            this.log.warn('Mongoose default connection to DB :' +
                this.db_server +
                ' disconnected');
        });
        this.db.on('connected', () => {
            this.log.info('Mongoose default connection to DB :' +
                this.db_server +
                ' connected');
        });
    }
    _onDBConnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Connected to DB');
            this.log.info({ db: this.db_server }, 'Connected to DB');
            yield this._registerModels();
            yield this._registerEntityAdministrator();
            this._passportSetup();
            yield this._startExpress();
            yield this._startSocketIO();
            yield this.callback();
            yield this.reportMemoryUsage();
        });
    }
    reportMemoryUsage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Memory usage: ');
            console.log(process.memoryUsage());
        });
    }
    _registerEntityAdministrator() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const adminEmail = 'admin@ever.co';
            const adminPassword = 'admin';
            const adminCollectionCount = yield this._adminsService.count({
                email: adminEmail,
            });
            if (adminCollectionCount === 0) {
                this._adminsService.register({
                    admin: {
                        email: adminEmail,
                        name: 'Admin',
                        hash: null,
                        pictureUrl: utils_1.getDummyImage(300, 300, 'A'),
                    },
                    password: adminPassword,
                });
            }
        });
    }
    _getBaseUrl(url) {
        if (url) {
            return url.slice(0, url.lastIndexOf('/') + 1).toString();
        }
    }
    _passportSetup() {
        passport_1.default.serializeUser((user, done) => {
            done(null, user);
        });
        passport_1.default.deserializeUser((id, done) => {
        });
        const googleStrategy = this.socialStrategiesService.getGoogleStrategy();
        if (googleStrategy != null) {
            passport_1.default.use(googleStrategy);
        }
        const facebookStrategy = this.socialStrategiesService.getFacebookStrategy();
        if (facebookStrategy != null) {
            passport_1.default.use(facebookStrategy);
        }
    }
    _registerModels() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield bluebird_1.default.map(this.services, (service) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (service.DBObject != null) {
                    yield db_server_1.getModel(service.DBObject).createIndexes();
                }
            }));
        });
    }
    _startExpress() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.expressApp = express_1.default();
            const hbs = express_handlebars_1.default.create({
                extname: '.hbs',
                defaultLayout: 'main',
                layoutsDir: path_1.default.join('res', 'views', 'layouts'),
                partialsDir: path_1.default.join('res', 'templates'),
            });
            this.expressApp.engine('.hbs', hbs.engine);
            this.expressApp.set('views', path_1.default.join('res', 'views'));
            this.expressApp.set('view engine', '.hbs');
            this.expressApp.set('view cache', false);
            const httpsCertPath = env_1.env.HTTPS_CERT_PATH;
            const httpsKeyPath = env_1.env.HTTPS_KEY_PATH;
            const hasHttpsCert = fs_1.default.existsSync(httpsCertPath);
            const hasHttpsKey = fs_1.default.existsSync(httpsKeyPath);
            let hasDefaultHttpsCert = false;
            if (!hasHttpsCert || !hasHttpsKey) {
                hasDefaultHttpsCert = yield this._getCertificates(httpsCertPath, httpsKeyPath);
            }
            if ((hasHttpsCert && hasHttpsKey) || hasDefaultHttpsCert) {
                this.httpsServer = https_1.default.createServer({
                    cert: fs_1.default.readFileSync(httpsCertPath),
                    key: fs_1.default.readFileSync(httpsKeyPath),
                }, this.expressApp);
            }
            this.httpServer = http_1.default.createServer(this.expressApp);
            const timeout = 30 * 60 * 1000;
            if (this.httpsServer) {
                this.httpsServer.setTimeout(timeout);
            }
            this.httpServer.setTimeout(timeout);
            this.expressApp.set('httpsPort', env_1.env.HTTPSPORT);
            this.expressApp.set('httpPort', env_1.env.HTTPPORT);
            this.expressApp.set('environment', env_1.env.NODE_ENV);
            this.expressApp.use(cors_1.default({
                origin: true,
                credentials: true,
            }));
            this.expressApp.use(body_parser_1.default.urlencoded({ extended: false }));
            this.expressApp.use(body_parser_1.default.json());
            this.expressApp.use(body_parser_1.default.json({ type: 'application/vnd.api+json' }));
            const mo = method_override_1.default;
            this.expressApp.use(mo('X-HTTP-Method'));
            this.expressApp.use(mo('X-HTTP-Method-Override'));
            this.expressApp.use(mo('X-Method-Override'));
            this.expressApp.use(morgan_1.default('dev'));
            this.expressApp.use(passport_1.default.initialize());
            this.expressApp.use(requestIp.mw());
            if (this.expressApp.get('environment') === 'development') {
                const eh = errorhandler_1.default;
                this.expressApp.use(eh());
            }
            this.expressApp.get('/', function (req, res) {
                res.render('index');
            });
            this.expressApp.get('/getLocationByIP', (req, res) => {
                const ipStackKey = env_1.env.IP_STACK_API_KEY;
                if (ipStackKey) {
                    const clientIp = req['clientIp'];
                    if (!INTERNAL_IPS.includes(clientIp)) {
                        ipstack(clientIp, ipStackKey, (err, response) => {
                            res.json({
                                latitude: response.latitude,
                                longitude: response.longitude,
                            });
                        });
                    }
                    else {
                        this.log.info(`Can't use ipstack with internal ip address ${clientIp}`);
                        res.status(204).end();
                    }
                }
                else {
                    this.log.error('Not provided Key for IpStack');
                    res.status(500).end();
                }
            });
            this.expressApp.post('/warehouse/create', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const warehouseCreateObject = JSON.parse(req.body.warehouse);
                const warehouse = yield this.warehousesService.create(warehouseCreateObject);
                res.json(warehouse);
            }));
            this._setupAuthRoutes();
            this._setupStaticRoutes();
            const httpsPort = this.expressApp.get('httpsPort');
            const httpPort = this.expressApp.get('httpPort');
            const conf = __webpack_require__(/*! dotenv */ "dotenv").config();
            const environment = this.expressApp.get('environment');
            this.log.info({
                httpsPort,
                httpPort,
                environment,
                'process.env': process.env,
                dotenv: conf,
            }, 'Express server prepare to listen');
            if (httpsPort && httpsPort > 0 && this.httpsServer) {
                this.httpsServer.listen(httpsPort, () => {
                    this.log.info({ port: httpsPort }, 'Express https server listening');
                    console.log(`Express https server listening on port ${httpsPort}`);
                });
            }
            else {
                this.log.warn(`No SSL Certificate exists, HTTPS endpoint will be disabled`);
            }
            if (httpPort && httpPort > 0) {
                this.httpServer.listen(httpPort, () => {
                    this.log.info({ port: httpPort }, 'Express http server listening');
                    console.log(`Express http server listening on port ${httpPort}`);
                });
            }
        });
    }
    _getCertificates(httpsCertPath, httpsKeyPath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.log.info('Generating SSL Certificates for HTTPS');
                const { success } = yield this._createCertificateAsync(httpsCertPath, httpsKeyPath);
                this.log.info('Certificates were generated');
                return success;
            }
            catch (error) {
                this.log.warn(`Certificates were not generated due to error: ${error.message}`);
                return false;
            }
        });
    }
    _createCertificateAsync(httpsCertPath, httpsKeyPath) {
        return new Promise((resolve, reject) => {
            try {
                pem_1.default.createCertificate({
                    days: 365,
                    selfSigned: true,
                }, (err, keys) => {
                    if (err) {
                        reject({ success: false, message: err.message });
                        return;
                    }
                    const httpsCertDirPath = path_1.default.dirname(httpsCertPath);
                    const httpsKeyDirPath = path_1.default.dirname(httpsKeyPath);
                    if (!fs_1.default.existsSync(httpsCertDirPath)) {
                        fs_1.default.mkdirSync(httpsCertDirPath, {
                            recursive: true,
                        });
                    }
                    if (!fs_1.default.existsSync(httpsKeyDirPath)) {
                        fs_1.default.mkdirSync(httpsKeyDirPath, {
                            recursive: true,
                        });
                    }
                    fs_1.default.writeFileSync(httpsCertPath, keys.certificate);
                    fs_1.default.writeFileSync(httpsKeyPath, keys.serviceKey);
                    resolve({ success: true });
                });
            }
            catch (err) {
                reject({ success: false, message: err.message });
            }
        });
    }
    _startSocketIO() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const so = socket_io_1.default;
            const ioHttps = so(this.httpsServer);
            const ioHttp = so(this.httpServer);
            yield this.routersManager.startListening(ioHttps);
            yield this.routersManager.startListening(ioHttp);
        });
    }
    _setupStaticRoutes() {
        this.expressApp.get('/en/about', function (req, res) {
            res.render('about_us_en');
        });
        this.expressApp.get('/he/about', function (req, res) {
            res.render('about_us_he');
        });
        this.expressApp.get('/ru/about', function (req, res) {
            res.render('about_us_ru');
        });
        this.expressApp.get('/en/privacy', function (req, res) {
            res.render('privacy_en');
        });
        this.expressApp.get('/he/privacy', function (req, res) {
            res.render('privacy_he');
        });
        this.expressApp.get('/ru/privacy', function (req, res) {
            res.render('privacy_ru');
        });
        this.expressApp.get('/en/terms', function (req, res) {
            res.render('terms_of_use_en');
        });
        this.expressApp.get('/he/terms', function (req, res) {
            res.render('terms_of_use_he');
        });
        this.expressApp.get('/ru/terms', function (req, res) {
            res.render('terms_of_use_ru');
        });
        this.expressApp.get('/bg/terms', function (req, res) {
            res.render('terms_of_use_bg');
        });
    }
    _setupAuthRoutes() {
        this.expressApp.get('/auth/facebook', (req, res, next) => {
            passport_1.default['_strategies'].session.base_redirect_url = this._getBaseUrl(req.headers.referer);
            next();
        }, passport_1.default.authenticate('facebook', {
            scope: ['email', 'public_profile'],
        }));
        this.expressApp.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const baseRedirectUr = passport_1.default['_strategies'].session.base_redirect_url;
            if (req.user) {
                res.redirect(baseRedirectUr + req.user.redirectUrl);
            }
            else {
                res.redirect(baseRedirectUr || '');
            }
            passport_1.default['_strategies'].session.base_redirect_url = '';
        }));
        this.expressApp.get('/auth/google', (req, res, next) => {
            passport_1.default['_strategies'].session.base_redirect_url = this._getBaseUrl(req.headers.referer);
            next();
        }, passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
        this.expressApp.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const baseRedirectUr = passport_1.default['_strategies'].session.base_redirect_url;
            if (req.user) {
                res.redirect(baseRedirectUr + req.user.redirectUrl);
            }
            else {
                res.redirect(baseRedirectUr || '');
            }
            passport_1.default['_strategies'].session.base_redirect_url = '';
        }));
    }
};
ServicesApp._poolSize = 50;
ServicesApp._connectTimeoutMS = 40000;
ServicesApp = ServicesApp_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.multiInject(IService_1.ServiceSymbol)),
    tslib_1.__param(1, inversify_1.inject('RoutersManager')),
    tslib_1.__param(2, inversify_1.inject(warehouses_1.WarehousesService)),
    tslib_1.__param(3, inversify_1.inject(users_1.SocialStrategiesService)),
    tslib_1.__param(4, inversify_1.inject(admins_1.AdminsService)),
    tslib_1.__param(5, inversify_1.inject(config_service_1.ConfigService)),
    tslib_1.__metadata("design:paramtypes", [Array, Object, warehouses_1.WarehousesService,
        users_1.SocialStrategiesService,
        admins_1.AdminsService,
        config_service_1.ConfigService])
], ServicesApp);
exports.ServicesApp = ServicesApp;


/***/ }),

/***/ "./src/services/services.module.ts":
/*!*****************************************!*\
  !*** ./src/services/services.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const IService_1 = __webpack_require__(/*! ./IService */ "./src/services/IService.ts");
const inversify_config_1 = __webpack_require__(/*! ./inversify.config */ "./src/services/inversify.config.ts");
function getServices() {
    return inversify_config_1.servicesContainer.getAll(IService_1.ServiceSymbol).map((service) => {
        return {
            provide: service.constructor,
            useValue: service,
        };
    });
}
const services = getServices();
let ServicesModule = class ServicesModule {
    constructor() { }
};
ServicesModule = tslib_1.__decorate([
    common_1.Global(),
    common_1.Module({
        providers: services,
        exports: services,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./src/services/users/SocialRegisterService.ts":
/*!*****************************************************!*\
  !*** ./src/services/users/SocialRegisterService.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const UsersService_1 = __webpack_require__(/*! ./UsersService */ "./src/services/users/UsersService.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
let SocialRegisterService = class SocialRegisterService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    register(profileInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const socialId = profileInfo['id'];
            const currentUser = yield this.usersService.getSocial(socialId);
            let redirectUrl = '';
            if (currentUser) {
                currentUser.isRegistrationCompleted
                    ? (redirectUrl = 'login/socie/' + currentUser['_id'])
                    : (redirectUrl = 'login/byLocation/' + currentUser['_id']);
            }
            else {
                const [firstname, lastname] = profileInfo['displayName'].split(' ');
                const email = profileInfo['emails'][0]['value'];
                const socialIdOnProfile = profileInfo['id'];
                const newUser = yield this.usersService.initUser({
                    firstName: firstname,
                    lastName: lastname,
                    email,
                    socialIds: [socialIdOnProfile],
                    isRegistrationCompleted: false,
                });
                redirectUrl = 'login/byLocation/' + newUser['_id'];
            }
            return { redirectUrl };
        });
    }
};
SocialRegisterService = tslib_1.__decorate([
    io_1.routerName('social-register-service'),
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject(UsersService_1.UsersService)),
    tslib_1.__metadata("design:paramtypes", [UsersService_1.UsersService])
], SocialRegisterService);
exports.SocialRegisterService = SocialRegisterService;


/***/ }),

/***/ "./src/services/users/SocialStrategiesService.ts":
/*!*******************************************************!*\
  !*** ./src/services/users/SocialStrategiesService.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const passport_google_oauth20_1 = tslib_1.__importDefault(__webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20"));
const passport_facebook_1 = tslib_1.__importDefault(__webpack_require__(/*! passport-facebook */ "passport-facebook"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const SocialRegisterService_1 = __webpack_require__(/*! ./SocialRegisterService */ "./src/services/users/SocialRegisterService.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
let SocialStrategiesService = class SocialStrategiesService {
    constructor(socialRegister) {
        this.socialRegister = socialRegister;
    }
    getGoogleStrategy() {
        if (env_1.env.GOOGLE_APP_ID !== '' && env_1.env.GOOGLE_APP_SECRET !== '') {
            return new passport_google_oauth20_1.default({
                clientID: env_1.env.GOOGLE_APP_ID,
                clientSecret: env_1.env.GOOGLE_APP_SECRET,
                callbackURL: '/auth/google/callback',
            }, (accessToken, refreshToken, profile, done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const { redirectUrl } = yield this.socialRegister.register(profile);
                done(null, { redirectUrl });
            }));
        }
        console.log(`Warning: Google OAuth disabled because no details provided in the settings/environment`);
        return null;
    }
    getFacebookStrategy() {
        if (env_1.env.FACEBOOK_APP_ID !== '' && env_1.env.FACEBOOK_APP_SECRET !== '') {
            return new passport_facebook_1.default({
                clientID: env_1.env.FACEBOOK_APP_ID,
                clientSecret: env_1.env.FACEBOOK_APP_SECRET,
                callbackURL: '/auth/facebook/callback',
                profileFields: [
                    'id',
                    'displayName',
                    'picture',
                    'email',
                    'gender',
                ],
            }, (accessToken, refreshToken, profile, done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const { redirectUrl } = yield this.socialRegister.register(profile);
                done(null, { redirectUrl });
            }));
        }
        console.log(`Warning: Facebook OAuth disabled because no details provided in the settings/environment`);
        return null;
    }
};
SocialStrategiesService = tslib_1.__decorate([
    io_1.routerName('social-strategies-service'),
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject(SocialRegisterService_1.SocialRegisterService)),
    tslib_1.__metadata("design:paramtypes", [SocialRegisterService_1.SocialRegisterService])
], SocialStrategiesService);
exports.SocialStrategiesService = SocialStrategiesService;


/***/ }),

/***/ "./src/services/users/UserCommandService.ts":
/*!**************************************************!*\
  !*** ./src/services/users/UserCommandService.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const UsersService_1 = __webpack_require__(/*! ./UsersService */ "./src/services/users/UsersService.ts");
class GetAboutUsCommand {
    constructor(userId, deviceId) {
        this.userId = userId;
        this.deviceId = deviceId;
    }
}
exports.GetAboutUsCommand = GetAboutUsCommand;
let UserCommandService = class UserCommandService {
    constructor(_commandBus) {
        this._commandBus = _commandBus;
    }
    exec(userId, deviceId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._commandBus.execute(new GetAboutUsCommand(userId, deviceId));
        });
    }
};
UserCommandService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('userCommandService'),
    tslib_1.__param(0, inversify_1.optional()),
    tslib_1.__metadata("design:paramtypes", [cqrs_1.CommandBus])
], UserCommandService);
exports.UserCommandService = UserCommandService;
let GetAboutUsHandler = class GetAboutUsHandler {
    constructor(_userService) {
        this._userService = _userService;
    }
    execute(command) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { userId, deviceId } = command;
            console.log('COMMAND PARAM 1:', userId);
            console.log('COMMAND PARAM 2:', deviceId);
            const result = this._userService.getAboutUs(userId, deviceId);
            return result;
        });
    }
};
GetAboutUsHandler = tslib_1.__decorate([
    cqrs_1.CommandHandler(GetAboutUsCommand),
    tslib_1.__metadata("design:paramtypes", [UsersService_1.UsersService])
], GetAboutUsHandler);
exports.GetAboutUsHandler = GetAboutUsHandler;


/***/ }),

/***/ "./src/services/users/UsersAuthService.ts":
/*!************************************************!*\
  !*** ./src/services/users/UsersAuthService.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UsersAuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const User_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/User */ "./node_modules/@ever-platform/common/src/entities/User.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const entity_service_1 = __webpack_require__(/*! @pyro/db-server/entity-service */ "./src/@pyro/db-server/entity-service.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const UsersService_1 = __webpack_require__(/*! ./UsersService */ "./src/services/users/UsersService.ts");
const NotInvitedError_1 = __webpack_require__(/*! @modules/server.common/errors/NotInvitedError */ "./node_modules/@ever-platform/common/src/errors/NotInvitedError.ts");
const invites_1 = __webpack_require__(/*! ../invites */ "./src/services/invites/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
let UsersAuthService = UsersAuthService_1 = class UsersAuthService extends entity_service_1.EntityService {
    constructor(usersService, invitesService, authServiceFactory) {
        super();
        this.usersService = usersService;
        this.invitesService = invitesService;
        this.authServiceFactory = authServiceFactory;
        this.DBObject = User_1.default;
        this.log = Log_1.createEverLogger({
            name: 'userAuthService',
        });
        this.authService = this.authServiceFactory({
            role: 'user',
            Entity: User_1.default,
            saltRounds: env_1.env.USER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    register(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (UsersAuthService_1.IS_INVITES_SYSTEM_ON &&
                !(yield this._isInvited(input.user))) {
                throw new NotInvitedError_1.NotInvitedError();
            }
            if (input.user.firstName === '') {
                delete input.user.firstName;
            }
            if (input.user.lastName === '') {
                delete input.user.lastName;
            }
            if (input.user.email === '') {
                delete input.user.email;
            }
            const user = yield this.usersService.create(Object.assign(Object.assign({}, input.user), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return user;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.usersService.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    addRegistrationInfo(id, { email, password, firstName, lastName, phone }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.usersService.throwIfNotExists(id);
            const user = yield this.usersService.getCurrent(id);
            if (user.email == null && email) {
                throw new Error('To add password user must have email');
            }
            yield this.authService.addPassword(id, password);
            yield this.usersService.update(id, Object.assign(Object.assign(Object.assign(Object.assign({}, (email ? { email } : {})), (firstName ? { firstName } : {})), (lastName ? { lastName } : {})), (phone ? { phone } : {})));
        });
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.authService.login({ email }, password);
            if (!res || res.entity.isDeleted) {
                return null;
            }
            return {
                user: res.entity,
                token: res.token,
            };
        });
    }
    getRegistrationsSettings() {
        return new Promise((resolve, reject) => {
            resolve({
                registrationRequiredOnStart: env_1.env.SETTINGS_REGISTRATIONS_REQUIRED_ON_START,
            });
        });
    }
    _isInvited(userCreateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inviteFindObject = {
                'geoLocation.countryId': userCreateObject.geoLocation.countryId,
                'geoLocation.city': userCreateObject.geoLocation.city,
                'geoLocation.streetAddress': userCreateObject.geoLocation.streetAddress,
                'geoLocation.house': userCreateObject.geoLocation.house,
                apartment: userCreateObject.apartment,
            };
            if (userCreateObject.geoLocation.postcode) {
                inviteFindObject['geoLocation.postcode'] =
                    userCreateObject.geoLocation.postcode;
            }
            const invite = yield this.invitesService.findOne(inviteFindObject);
            return invite != null;
        });
    }
};
UsersAuthService.IS_INVITES_SYSTEM_ON = false;
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "updatePassword", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "addRegistrationInfo", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "login", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "getRegistrationsSettings", null);
UsersAuthService = UsersAuthService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user-auth'),
    tslib_1.__param(2, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [UsersService_1.UsersService,
        invites_1.InvitesService, Function])
], UsersAuthService);
exports.UsersAuthService = UsersAuthService;


/***/ }),

/***/ "./src/services/users/UsersOrdersService.ts":
/*!**************************************************!*\
  !*** ./src/services/users/UsersOrdersService.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const orders_1 = __webpack_require__(/*! ../orders */ "./src/services/orders/index.ts");
const UsersService_1 = __webpack_require__(/*! ./UsersService */ "./src/services/users/UsersService.ts");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const OrderCarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const OrderWarehouseStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
let UsersOrdersService = class UsersOrdersService {
    constructor(ordersService, usersService) {
        this.ordersService = ordersService;
        this.usersService = usersService;
        this.log = Log_1.createEverLogger({
            name: 'usersOrdersService',
        });
    }
    get(userId) {
        return rxjs_1.concat(rxjs_1.of(null), this.ordersService.existence.pipe(operators_1.filter((e) => this._shouldPull(userId, e)), operators_1.share())).pipe(operators_1.exhaustMap(() => this.getCurrent(userId)));
    }
    getCurrent(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.ordersService.find({
                'user._id': new mongoose.Types.ObjectId(userId),
                isDeleted: { $eq: false },
            });
            return lodash_1.default.orderBy(orders, [(order) => order.createdAt, (order) => order.orderNumber], ['desc', 'desc']);
        });
    }
    getCustomerMetrics(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const completedUserOrders = yield this.ordersService.Model.find({
                $and: [
                    { 'user._id': id },
                    {
                        $or: [
                            { carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted },
                            {
                                warehouseStatus: OrderWarehouseStatus_1.default.GivenToCustomer,
                            },
                        ],
                    },
                    { isCancelled: false },
                ],
            }).select({ products: 1 });
            const completedOrdersTotalSum = completedUserOrders
                .map((o) => {
                return o.products
                    .map((p) => {
                    return p.price * p.count;
                })
                    .reduce((a, b) => a + b, 0);
            })
                .reduce((a, b) => a + b, 0);
            const totalOrders = yield this.ordersService.Model.find({
                'user._id': id,
            })
                .countDocuments()
                .exec();
            const canceledOrders = yield this.ordersService.Model.find({
                $and: [{ 'user._id': id }, { isCancelled: true }],
            })
                .countDocuments()
                .exec();
            return {
                totalOrders,
                canceledOrders,
                completedOrdersTotalSum,
            };
        });
    }
    _shouldPull(userId, event) {
        switch (event.type) {
            case db_server_1.ExistenceEventType.Created:
                return event.value != null && event.value.user.id === userId;
            case db_server_1.ExistenceEventType.Updated:
                return ((event.value != null && event.value.user.id === userId) ||
                    (event.lastValue != null &&
                        event.lastValue.user.id === userId));
            case db_server_1.ExistenceEventType.Removed:
                return (event.lastValue != null &&
                    event.lastValue.user.id === userId);
        }
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersOrdersService.prototype, "get", null);
UsersOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user-orders'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => orders_1.OrdersService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => UsersService_1.UsersService))),
    tslib_1.__metadata("design:paramtypes", [orders_1.OrdersService,
        UsersService_1.UsersService])
], UsersOrdersService);
exports.UsersOrdersService = UsersOrdersService;


/***/ }),

/***/ "./src/services/users/UsersProductsService.ts":
/*!****************************************************!*\
  !*** ./src/services/users/UsersProductsService.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
var UsersProductsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const handlebars_1 = tslib_1.__importDefault(__webpack_require__(/*! handlebars */ "handlebars"));
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const DevicesService_1 = __webpack_require__(/*! ../devices/DevicesService */ "./src/services/devices/DevicesService.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let UsersProductsService = UsersProductsService_1 = class UsersProductsService {
    constructor(devicesService) {
        this.devicesService = devicesService;
        this._placeholderTemplateFileName = UsersProductsService_1.templatesDirPath + `user_products_placeholder.hbs`;
        this._placeholderTranslationsFileName = UsersProductsService_1.templatesDirPath +
            `user_products_placeholder.json`;
        this._placeholderTemplateString = utils_1.observeFile(this._placeholderTemplateFileName).pipe(operators_1.distinctUntilChanged(), operators_1.publishReplay(1), operators_1.refCount());
        this._placeholderTranslationsJSON = utils_1.observeFile(this._placeholderTranslationsFileName).pipe(operators_1.distinctUntilChanged(), operators_1.publishReplay(1), operators_1.refCount());
    }
    getPlaceholder(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return rxjs_1.throwError(new Error(`User with the id ${userId} doesn't exist`));
            }
            else {
                return rxjs_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => rxjs_1.combineLatest(this._placeholderTemplateString, this._placeholderTranslationsJSON, (templateString, translationsJSON) => {
            const translations = JSON.parse(translationsJSON);
            const template = handlebars_1.default.compile(templateString);
            const language = Object.keys(JSON.parse(translationsJSON)).filter((k) => k
                .toLowerCase()
                .includes(device.language.toLowerCase()))[0];
            return template(translations[language]);
        })), operators_1.share());
    }
};
UsersProductsService.templatesDirPath = `${__dirname}/../../../res/templates/`;
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersProductsService.prototype, "getPlaceholder", null);
UsersProductsService = UsersProductsService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user-products'),
    tslib_1.__metadata("design:paramtypes", [DevicesService_1.DevicesService])
], UsersProductsService);
exports.UsersProductsService = UsersProductsService;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/services/users/UsersService.ts":
/*!********************************************!*\
  !*** ./src/services/users/UsersService.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const User_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/User */ "./node_modules/@ever-platform/common/src/entities/User.ts"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const invites_1 = __webpack_require__(/*! ../invites */ "./src/services/invites/index.ts");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const GeoLocation_1 = tslib_1.__importStar(__webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "./node_modules/@ever-platform/common/src/entities/GeoLocation.ts"));
const devices_1 = __webpack_require__(/*! ../devices */ "./src/services/devices/index.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const throw_1 = __webpack_require__(/*! rxjs/observable/throw */ "rxjs/observable/throw");
const _ = __webpack_require__(/*! lodash */ "lodash");
const faker_1 = tslib_1.__importDefault(__webpack_require__(/*! faker */ "faker"));
const warehouses_1 = __webpack_require__(/*! ../../services/warehouses */ "./src/services/warehouses/index.ts");
const Stripe = __webpack_require__(/*! stripe */ "stripe");
let UsersService = class UsersService extends db_server_1.DBService {
    constructor(invitesService, devicesService, _storesService) {
        super();
        this.invitesService = invitesService;
        this.devicesService = devicesService;
        this._storesService = _storesService;
        this.DBObject = User_1.default;
        this.stripe = new Stripe(env_1.env.STRIPE_SECRET_KEY);
        this.log = Log_1.createEverLogger({
            name: 'usersService',
        });
        this.watchedFiles = _.zipObject(['aboutUs', 'privacy', 'termsOfUse'], _.map(['about_us', 'privacy', 'terms_of_use'], (folder) => _.zipObject(['en-US', 'he-IL', 'ru-RU', 'bg-BG'], _.map(['en-US', 'he-IL', 'ru-RU', 'bg-BG'], (language) => utils_1.observeFile(`${__dirname}/../../../res/templates/${folder}/${language}.hbs`).pipe(operators_1.tap({ error: (err) => this.log.error(err) }), operators_1.publishReplay(1), operators_1.refCount())))));
    }
    isUserEmailExists(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.count({ email })) > 0;
        });
    }
    getSocial(socialId) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.findOne.call(this, {
                socialIds: { $in: [socialId] },
                isDeleted: { $eq: false },
            });
        });
    }
    initUser(userInitializeObject) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, userInitializeObject);
        });
    }
    getUsers(findInput, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    updateUser(id, userCreateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, userCreateObject);
        });
    }
    get(customerId) {
        return super.get(customerId).pipe(operators_1.map((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(customerId);
            return user;
        })), operators_1.switchMap((user) => user));
    }
    getCards(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            const user = yield this.get(userId).pipe(operators_1.first()).toPromise();
            if (user != null) {
                if (user.stripeCustomerId != null) {
                    return (yield this.stripe.customers.listSources(user.stripeCustomerId, {
                        object: 'card',
                    })).data;
                }
                else {
                    return [];
                }
            }
            else {
                throw new Error(`User with the id ${userId} doesn't exist`);
            }
        });
    }
    addPaymentMethod(userId, tokenId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            const callId = uuid_1.v1();
            this.log.info({ callId, userId, tokenId }, '.addPaymentMethod(userId, tokenId) called');
            let card;
            try {
                let user = yield this.get(userId).pipe(operators_1.first()).toPromise();
                if (user != null) {
                    if (user.stripeCustomerId == null) {
                        const customer = yield this.stripe.customers.create({
                            email: user.email,
                            description: 'User id: ' + user.id,
                            metadata: {
                                userId: user.id,
                            },
                        });
                        user = yield this.update(userId, {
                            stripeCustomerId: customer.id,
                        });
                    }
                    card = (yield this.stripe.customers.createSource(user.stripeCustomerId, {
                        source: tokenId,
                    }));
                }
                else {
                    throw new Error(`User with the id ${userId} doesn't exist`);
                }
            }
            catch (err) {
                this.log.error({ callId, userId, tokenId, err }, '.addPaymentMethod(userId, tokenId) thrown error!');
                throw err;
            }
            this.log.info({ callId, userId, tokenId, card }, '.addPaymentMethod(userId, tokenId) added payment method');
            return card.id;
        });
    }
    updateEmail(userId, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            return this.update(userId, { email });
        });
    }
    updateGeoLocation(userId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            return this.update(userId, { geoLocation });
        });
    }
    getAboutUs(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return throw_1._throw(new Error(`User with the id ${userId} doesn't exist`));
            }
            else {
                return of_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => this.watchedFiles.aboutUs[device.language]));
    }
    getTermsOfUse(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return throw_1._throw(new Error(`Device with the id ${deviceId} doesn't exist`));
            }
            else {
                return of_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => this.watchedFiles.termsOfUse[device.language]));
    }
    getPrivacy(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return throw_1._throw(new Error(`User with the id ${userId} doesn't exist`));
            }
            else {
                return of_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => this.watchedFiles.privacy[device.language]));
    }
    generate1000Customers(defaultLng, defaultLat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const existingEmails = _.map(yield this.Model.find({}).select({ email: 1 }).lean().exec(), (u) => u.email);
            const customersToCreate = [];
            const customerCreatedFrom = new Date(2015, 1);
            const customerCreatedTo = new Date();
            let customerCount = 1;
            while (customerCount <= 1000) {
                const firstName = faker_1.default.name.firstName();
                const lastName = faker_1.default.name.lastName();
                const email = faker_1.default.internet.email(firstName, lastName);
                const isBanned = Math.random() < 0.02;
                const geoLocation = {
                    countryId: faker_1.default.random.number(GeoLocation_1.Country.ZW),
                    city: faker_1.default.address.city(),
                    house: `${customerCount}`,
                    loc: {
                        type: 'Point',
                        coordinates: [defaultLng, defaultLat],
                    },
                    streetAddress: faker_1.default.address.streetAddress(),
                };
                if (!existingEmails.includes(email)) {
                    existingEmails.push(email);
                    customersToCreate.push({
                        firstName: faker_1.default.name.firstName(),
                        lastName: faker_1.default.name.lastName(),
                        geoLocation,
                        apartment: `${customerCount}`,
                        email,
                        isBanned,
                        image: faker_1.default.image.avatar(),
                        phone: faker_1.default.phone.phoneNumber(),
                        _createdAt: faker_1.default.date.between(customerCreatedFrom, customerCreatedTo),
                    });
                    customerCount += 1;
                }
            }
            return this.Model.insertMany(customersToCreate);
        });
    }
    banUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return this.update(id, { isBanned: true });
        });
    }
    unbanUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return this.update(id, { isBanned: false });
        });
    }
    throwIfNotExists(userId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield _super.get.call(this, userId).pipe(operators_1.first()).toPromise();
            if (!user || user.isDeleted) {
                throw Error(`Customer with id '${userId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "updateUser", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "getCards", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "addPaymentMethod", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "updateEmail", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(1, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, GeoLocation_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "updateGeoLocation", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "getAboutUs", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "getTermsOfUse", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "getPrivacy", null);
UsersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => invites_1.InvitesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => devices_1.DevicesService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__metadata("design:paramtypes", [invites_1.InvitesService,
        devices_1.DevicesService,
        warehouses_1.WarehousesService])
], UsersService);
exports.UsersService = UsersService;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/services/users/index.ts":
/*!*************************************!*\
  !*** ./src/services/users/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./UsersService */ "./src/services/users/UsersService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./SocialStrategiesService */ "./src/services/users/SocialStrategiesService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./SocialRegisterService */ "./src/services/users/SocialRegisterService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./UsersOrdersService */ "./src/services/users/UsersOrdersService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./UsersProductsService */ "./src/services/users/UsersProductsService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./UserCommandService */ "./src/services/users/UserCommandService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./UsersAuthService */ "./src/services/users/UsersAuthService.ts"), exports);


/***/ }),

/***/ "./src/services/warehouses/WarehousesCarriersService.ts":
/*!**************************************************************!*\
  !*** ./src/services/warehouses/WarehousesCarriersService.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Carrier_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Carrier */ "./node_modules/@ever-platform/common/src/entities/Carrier.ts"));
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const carriers_1 = __webpack_require__(/*! ../carriers */ "./src/services/carriers/index.ts");
const WarehousesService_1 = __webpack_require__(/*! ./WarehousesService */ "./src/services/warehouses/WarehousesService.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
class NoWarehouseRestrictedCarriersError extends Error {
    constructor() {
        super("Warehouse doesn't have carriers restricted to himself");
    }
}
let WarehousesCarriersService = class WarehousesCarriersService {
    constructor(carriersService, warehousesService, authServiceFactory) {
        this.carriersService = carriersService;
        this.warehousesService = warehousesService;
        this.authServiceFactory = authServiceFactory;
        this.authService = this.authServiceFactory({
            role: 'carrier',
            Entity: Carrier_1.default,
            saltRounds: env_1.env.CARRIER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    get(warehouseId) {
        return this.warehousesService.get(warehouseId).pipe(operators_1.map((warehouse) => {
            if (!warehouse.hasRestrictedCarriers) {
                throw new NoWarehouseRestrictedCarriersError();
            }
            return warehouse.usedCarriersIds;
        }), operators_1.distinctUntilChanged((carrierIds1, carrierIds2) => {
            return lodash_1.default.isEqual(carrierIds1.sort(), carrierIds2.sort());
        }), operators_1.exhaustMap((carrierIds) => {
            return this.carriersService.getMultipleByIds(carrierIds);
        }), operators_1.switchMap((carriers) => carriers), operators_1.catchError((err) => {
            if (!(err instanceof NoWarehouseRestrictedCarriersError)) {
                throw err;
            }
            return rxjs_1.of(null);
        }));
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(id);
            yield this.authService._savePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesCarriersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesCarriersService.prototype, "updatePassword", null);
WarehousesCarriersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-carriers'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => carriers_1.CarriersService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesService_1.WarehousesService))),
    tslib_1.__param(2, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [carriers_1.CarriersService,
        WarehousesService_1.WarehousesService, Function])
], WarehousesCarriersService);
exports.WarehousesCarriersService = WarehousesCarriersService;


/***/ }),

/***/ "./src/services/warehouses/WarehousesOrdersService.ts":
/*!************************************************************!*\
  !*** ./src/services/warehouses/WarehousesOrdersService.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const moment_1 = tslib_1.__importDefault(__webpack_require__(/*! moment */ "moment"));
const bluebird_1 = tslib_1.__importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const Order_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Order */ "./node_modules/@ever-platform/common/src/entities/Order.ts"));
const WarehousesService_1 = __webpack_require__(/*! ./WarehousesService */ "./src/services/warehouses/WarehousesService.ts");
const products_1 = __webpack_require__(/*! ../products */ "./src/services/products/index.ts");
const orders_1 = __webpack_require__(/*! ../orders */ "./src/services/orders/index.ts");
const WarehousesProductsService_1 = __webpack_require__(/*! ./WarehousesProductsService */ "./src/services/warehouses/WarehousesProductsService.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const users_1 = __webpack_require__(/*! ../users */ "./src/services/users/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const _ = __webpack_require__(/*! lodash */ "lodash");
const OrderWarehouseStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "./node_modules/@ever-platform/common/src/enums/OrderWarehouseStatus.ts"));
const OrderCarrierStatus_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "./node_modules/@ever-platform/common/src/enums/OrderCarrierStatus.ts"));
const DeliveryType_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "./node_modules/@ever-platform/common/src/enums/DeliveryType.ts"));
let WarehousesOrdersService = class WarehousesOrdersService {
    constructor(warehousesService, productsService, warehousesProductsService, ordersService, usersService) {
        this.warehousesService = warehousesService;
        this.productsService = productsService;
        this.warehousesProductsService = warehousesProductsService;
        this.ordersService = ordersService;
        this.usersService = usersService;
        this.log = Log_1.createEverLogger({
            name: 'warehousesOrdersService',
        });
    }
    getExistence(warehouseId) {
        return this.ordersService.existence.pipe(operators_1.filter((existenceEvent) => {
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                    return (existenceEvent.value != null &&
                        existenceEvent.value.warehouseId === warehouseId);
                case db_server_1.ExistenceEventType.Updated:
                    return ((existenceEvent.value != null &&
                        existenceEvent.value.warehouseId ===
                            warehouseId) ||
                        (existenceEvent.lastValue != null &&
                            existenceEvent.lastValue.warehouseId ===
                                warehouseId));
                case db_server_1.ExistenceEventType.Removed:
                    return (existenceEvent.lastValue != null &&
                        existenceEvent.lastValue.warehouseId === warehouseId);
            }
        }), operators_1.share());
    }
    get(warehouseId, options = {}) {
        return rxjs_1.concat(rxjs_1.of(null), this.getExistence(warehouseId)).pipe(operators_1.map((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            return res;
        })), operators_1.switchMap((res) => res), operators_1.exhaustMap(() => this._get(warehouseId, {
            populateWarehouse: !!options.populateWarehouse,
            populateCarrier: !!options.populateCarrier,
            onlyAvailableToCarrier: false,
        })));
    }
    getNextOrderNumber(warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            const orderDocument = (yield this.ordersService.Model.findOne({
                warehouse: warehouseId,
                isDeleted: { $eq: false },
                _createdAt: {
                    $gte: moment_1.default().startOf('day').toDate(),
                },
            })
                .select('orderNumber')
                .sort({ orderNumber: -1 })
                .exec());
            if (orderDocument == null) {
                return 1;
            }
            else {
                return orderDocument.orderNumber + 1;
            }
        });
    }
    create({ warehouseId, userId, products, orderType, options, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!options) {
                options = {};
            }
            options = {
                autoConfirm: !!options.autoConfirm,
            };
            const user = yield this.usersService
                .get(userId)
                .pipe(operators_1.first())
                .toPromise();
            const warehouse = (yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise());
            const warehouseProducts = _.keyBy(warehouse.products, 'productId');
            if (user == null) {
                throw new Error(`There is no user with the id ${userId}`);
            }
            this.log.info({
                user,
                warehouseId,
                products,
            }, 'Order create call');
            const orderProducts = yield _.map(products, (args) => {
                const wProduct = warehouseProducts[args.productId];
                if (!wProduct) {
                    throw new Error(`WarehouseOrdersService got call to create(userId, orderProducts) - But there is no product with the id ${args.productId}!`);
                }
                return {
                    count: args.count,
                    price: wProduct.price,
                    initialPrice: wProduct.initialPrice,
                    deliveryTimeMin: wProduct.deliveryTimeMin,
                    deliveryTimeMax: wProduct.deliveryTimeMax,
                    product: wProduct.product,
                    isManufacturing: wProduct.isManufacturing,
                    isCarrierRequired: wProduct.isCarrierRequired,
                    isDeliveryRequired: wProduct.isDeliveryRequired,
                    isTakeaway: wProduct.isTakeaway,
                };
            });
            const order = yield this.ordersService.create(Object.assign({ user, products: orderProducts, warehouse: warehouseId, orderNumber: yield this.getNextOrderNumber(warehouseId), orderType }, (options.autoConfirm ? { isConfirmed: true } : {})));
            yield bluebird_1.default.map(order.products, (orderProduct) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productId = orderProduct.product.id;
                this.log.info({
                    warehouseId,
                    productId,
                    count: orderProduct.count,
                }, 'Order create remove products call');
                yield this.warehousesProductsService.decreaseCount(warehouseId, productId, orderProduct.count);
                yield this.warehousesProductsService.increaseSoldCount(warehouseId, productId, orderProduct.count);
                this.log.info({
                    warehouseId,
                    productId,
                    count: orderProduct.count,
                }, 'Order create remove products call succeed');
            }));
            return order;
        });
    }
    createByProductType(userId, warehouseId, productId, orderType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.usersService.throwIfNotExists(userId);
            yield this.warehousesService.throwIfNotExists(warehouseId);
            yield this.productsService.throwIfNotExists(productId);
            return this.create({
                userId,
                warehouseId,
                orderType,
                products: [
                    {
                        productId,
                        count: 1,
                    },
                ],
            });
        });
    }
    cancel(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let order = yield this.ordersService
                .get(orderId)
                .pipe(operators_1.first())
                .toPromise();
            if (order == null) {
                throw new Error(`There is no order with the id ${orderId} to cancel`);
            }
            if (order.isCancelled) {
                this.log.warn(`Order with id ${orderId} is already cancelled!`);
                return;
            }
            order = yield this.ordersService.cancel(orderId);
            if (order.isConfirmed) {
            }
            this.log.info({
                warehouseId: order.warehouseId,
                products: order.products,
            }, 'Order cancel add products back call');
            yield this.warehousesProductsService.add(order.warehouseId, _.map(order.products, (orderProduct) => {
                return {
                    product: orderProduct.product.id,
                    count: orderProduct.count,
                    price: orderProduct.price,
                    initialPrice: orderProduct.initialPrice,
                    deliveryTimeMin: orderProduct.deliveryTimeMin,
                    deliveryTimeMax: orderProduct.deliveryTimeMax,
                };
            }));
            yield bluebird_1.default.map(order.products, (orderProduct) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productId = orderProduct.product.id;
                yield this.warehousesProductsService.decreaseSoldCount(order.warehouseId, productId, orderProduct.count);
            }));
            this.log.info({
                warehouseId: order.warehouseId,
                products: order.products,
            }, 'Order cancel add products back call succeed');
            return order;
        });
    }
    getStoreOrders(storeId, pagingOptions, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            const findObj = getStoreOrdersFingObj(storeId, status);
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.ordersService.Model.find(findObj)
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    _get(warehouseId, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            const findObj = { warehouse: warehouseId };
            if (options.onlyAvailableToCarrier) {
                _.extend(findObj, {
                    carrierStatus: 0,
                    $or: [
                        {
                            carrier: { $exists: false },
                        },
                        {
                            carrier: null,
                        },
                    ],
                    warehouseStatus: { $gte: 2, $lt: 200 },
                }, orders_1.OrdersService.FindObjects.isCompleted);
            }
            let toPopulate = '';
            if (options.populateCarrier) {
                toPopulate += 'carrier ';
            }
            if (options.populateWarehouse) {
                toPopulate += 'warehouse ';
            }
            const orders = _.map((yield this.ordersService.Model.find(Object.assign(Object.assign({}, findObj), { isDeleted: { $eq: false } }))
                .populate(toPopulate)
                .sort({
                _createdAt: -1,
            })
                .lean()
                .exec()), (order) => new Order_1.default(order));
            this.log.info({
                warehouseId,
                orders,
            }, 'orders by warehouse (in getByWarehouse)');
            return orders;
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesOrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesOrdersService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesOrdersService.prototype, "createByProductType", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesOrdersService.prototype, "cancel", null);
WarehousesOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-orders'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesService_1.WarehousesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => products_1.ProductsService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesProductsService_1.WarehousesProductsService))),
    tslib_1.__param(3, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => orders_1.OrdersService))),
    tslib_1.__param(4, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => users_1.UsersService))),
    tslib_1.__metadata("design:paramtypes", [WarehousesService_1.WarehousesService,
        products_1.ProductsService,
        WarehousesProductsService_1.WarehousesProductsService,
        orders_1.OrdersService,
        users_1.UsersService])
], WarehousesOrdersService);
exports.WarehousesOrdersService = WarehousesOrdersService;
function getStoreOrdersFingObj(storeId, status) {
    const findObj = {
        isDeleted: { $eq: false },
        warehouse: storeId,
    };
    switch (status) {
        case 'confirmed':
            findObj['$and'] = [
                {
                    warehouseStatus: {
                        $gt: OrderWarehouseStatus_1.default.NoStatus,
                    },
                },
                {
                    warehouseStatus: {
                        $lt: OrderWarehouseStatus_1.default.GivenToCustomer,
                    },
                },
                {
                    carrierStatus: {
                        $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                    },
                },
            ];
            findObj['isCancelled'] = false;
            break;
        case 'in_delivery':
            findObj['$and'] = [
                {
                    carrierStatus: {
                        $gte: OrderCarrierStatus_1.default.CarrierPickedUpOrder,
                    },
                },
                {
                    warehouseStatus: {
                        $lt: OrderWarehouseStatus_1.default.AllocationFailed,
                    },
                },
                {
                    carrierStatus: {
                        $lt: OrderCarrierStatus_1.default.DeliveryCompleted,
                    },
                },
            ];
            findObj['isCancelled'] = false;
            break;
        case 'not_confirmed':
            findObj['warehouseStatus'] = OrderWarehouseStatus_1.default.NoStatus;
            findObj['isCancelled'] = false;
            break;
        case 'not_paid':
            findObj['isPaid'] = false;
            break;
        case 'cancelled':
            findObj['isCancelled'] = true;
            break;
        case 'relevant':
            findObj['$and'] = [
                {
                    warehouseStatus: {
                        $gte: OrderWarehouseStatus_1.default.NoStatus,
                    },
                },
                {
                    warehouseStatus: {
                        $lt: OrderWarehouseStatus_1.default.GivenToCustomer,
                    },
                },
                {
                    carrierStatus: {
                        $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                    },
                },
            ];
            findObj['isCancelled'] = false;
            break;
        default:
            break;
    }
    return findObj;
}
exports.getStoreOrdersFingObj = getStoreOrdersFingObj;


/***/ }),

/***/ "./src/services/warehouses/WarehousesProductsService.ts":
/*!**************************************************************!*\
  !*** ./src/services/warehouses/WarehousesProductsService.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const WarehouseProduct_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "./node_modules/@ever-platform/common/src/entities/WarehouseProduct.ts"));
const WarehousesService_1 = __webpack_require__(/*! ./WarehousesService */ "./src/services/warehouses/WarehousesService.ts");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const throw_1 = __webpack_require__(/*! rxjs/observable/throw */ "rxjs/observable/throw");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const noGetProductTypeMessage = `There should be true at least one of the two - "isCarrierRequired" or "isTakeaway"!`;
let WarehousesProductsService = class WarehousesProductsService {
    constructor(warehousesService) {
        this.warehousesService = warehousesService;
        this.log = Log_1.createEverLogger({
            name: 'warehouseProductsService',
        });
    }
    get(warehouseId, fullProducts = true) {
        return this.warehousesService.get(warehouseId, fullProducts).pipe(operators_1.exhaustMap((warehouse) => {
            if (warehouse === null) {
                return throw_1._throw(new Error(`Warehouse with the id ${warehouseId} doesn't exist`));
            }
            else {
                return of_1.of(warehouse);
            }
        }), operators_1.map((warehouse) => warehouse.products));
    }
    getProductsWithPagination(id, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allProducts = yield this.get(id).pipe(operators_1.first()).toPromise();
            const products = [...allProducts];
            if (pagingOptions.limit && pagingOptions.skip) {
                return products
                    .slice(pagingOptions.skip)
                    .slice(0, pagingOptions.limit)
                    .sort((a, b) => b.soldCount - a.soldCount);
            }
            else if (pagingOptions.limit) {
                return products
                    .slice(0, pagingOptions.limit)
                    .sort((a, b) => b.soldCount - a.soldCount);
            }
            else if (pagingOptions.skip) {
                return products
                    .slice(pagingOptions.skip)
                    .sort((a, b) => b.soldCount - a.soldCount);
            }
            return products.sort((a, b) => b.soldCount - a.soldCount);
        });
    }
    getProductsCount(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allProducts = yield this.get(id).pipe(operators_1.first()).toPromise();
            return allProducts.length;
        });
    }
    getAvailable(warehouseId) {
        return this.get(warehouseId).pipe(operators_1.map((warehouseProducts) => lodash_1.default.filter(warehouseProducts, (warehouseProduct) => warehouseProduct.count > 0)));
    }
    remove(warehouseId, productsIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Removing products ' + productsIds);
            const warehouse = yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`There is no warehouse with the id ${warehouse}!`);
            }
            warehouse.products = warehouse.products.filter((p) => {
                if (!p.product['_id']) {
                    return false;
                }
                const productId = p.product['id'];
                return !productsIds.includes(productId);
            });
            yield this.warehousesService.save(warehouse);
            return warehouse.products;
        });
    }
    add(warehouseId, products, triggerChange = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Adding products ' + JSON.stringify(products));
            let warehouse = yield this.warehousesService
                .get(warehouseId, false)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`There is no warehouse with the id ${warehouse}!`);
            }
            const notUpdatedWarehouse = lodash_1.default.clone(warehouse);
            let newProds;
            if (warehouse.products && warehouse.products.length > 0) {
                newProds = lodash_1.default.clone(warehouse.products);
                lodash_1.default.each(products, (product) => {
                    if (!product.isDeliveryRequired && !product.isTakeaway) {
                        product.isDeliveryRequired = true;
                    }
                    const existed = lodash_1.default.find(newProds, (newProd) => newProd.product ===
                        product.product);
                    if (typeof existed === 'undefined' ||
                        existed === undefined ||
                        existed == null) {
                        newProds.push(product);
                    }
                    else {
                        if (existed.count && product.count) {
                            existed.count += product.count;
                        }
                        else {
                            existed.count = product.count;
                        }
                    }
                });
            }
            else {
                newProds = products;
            }
            try {
                warehouse = new Warehouse_1.default((yield this.warehousesService.Model.findByIdAndUpdate(warehouseId, {
                    $set: { products: newProds },
                }, { new: true })
                    .populate('products.product')
                    .lean()
                    .exec()));
            }
            catch (error) {
                this.log.error(error);
                throw error;
            }
            if (triggerChange) {
                this.warehousesService.existence.next({
                    id: warehouse.id,
                    value: warehouse,
                    lastValue: notUpdatedWarehouse,
                    type: db_server_1.ExistenceEventType.Updated,
                });
            }
            const newProdsIds = lodash_1.default.map(newProds, (warehouseProduct) => {
                if (typeof warehouseProduct.product === 'string') {
                    return warehouseProduct.product;
                }
                else {
                    return warehouseProduct.product._id.toString();
                }
            });
            return lodash_1.default.filter(warehouse.products, (warehouseProduct) => {
                return lodash_1.default.includes(newProdsIds, warehouseProduct.productId);
            });
        });
    }
    increaseCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse) {
                const existedProduct = lodash_1.default.find(warehouse.products, (warehouseProduct) => warehouseProduct.productId === productId);
                if (existedProduct) {
                    existedProduct.count += count;
                    return this.saveUpdated(warehouseId, existedProduct);
                }
                else {
                    const errMsg = 'Cannot find product';
                    this.log.error(new Error(errMsg));
                    throw new Error(errMsg);
                }
            }
            else {
                const errMsg = 'Cannot find warehouse';
                this.log.error(new Error(errMsg));
                throw new Error(errMsg);
            }
        });
    }
    increaseSoldCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse) {
                const existedProduct = lodash_1.default.find(warehouse.products, (warehouseProduct) => warehouseProduct.productId === productId);
                if (existedProduct) {
                    existedProduct.soldCount += count;
                    return this.saveUpdated(warehouseId, existedProduct);
                }
                else {
                    const errMsg = 'Cannot find product';
                    this.log.error(new Error(errMsg));
                    throw new Error(errMsg);
                }
            }
            else {
                const errMsg = 'Cannot find warehouse';
                this.log.error(new Error(errMsg));
                throw new Error(errMsg);
            }
        });
    }
    saveUpdated(warehouseId, _updatedWarehouseProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            if (!_updatedWarehouseProduct.isDeliveryRequired &&
                !_updatedWarehouseProduct.isTakeaway) {
                throw new Error(noGetProductTypeMessage);
            }
            const updatedWarehouseProduct = lodash_1.default.clone(_updatedWarehouseProduct);
            updatedWarehouseProduct.product = updatedWarehouseProduct.productId;
            const updatedWarehouse = (yield this.warehousesService.updateMultiple({
                _id: new mongoose.Types.ObjectId(warehouseId),
                'products._id': updatedWarehouseProduct._id,
            }, {
                'products.$': updatedWarehouseProduct,
            }))[0];
            return lodash_1.default.find(updatedWarehouse.products, (warehouseProduct) => warehouseProduct.productId === updatedWarehouseProduct.productId);
        });
    }
    changePrice(warehouseId, productId, price) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId, false)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`There is no such an warehouse with the id ${warehouseId}`);
            }
            this.log.info('Change product price requested in warehouse: ' +
                JSON.stringify(warehouse) +
                ' for product id: ' +
                productId);
            const product = lodash_1.default.find(warehouse.products, (p) => p.productId === productId);
            if (product != null) {
                this.log.info(`Product price before: ${product.price} and we want to change it to: ${price}`);
                product.price = price;
                return this.saveUpdated(warehouseId, product);
            }
            else {
                throw new Error(`There is no such an product with the id ${productId} in the warehouse with the id ${warehouseId}`);
            }
        });
    }
    decreaseCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`Cannot find warehouse: ${warehouseId}`);
            }
            this.log.info(`Remove requested in warehouse: ${JSON.stringify(warehouse)} for product id: ${productId}`);
            const product = lodash_1.default.find(warehouse.products, (p) => p.productId === productId);
            if (product != null) {
                this.log.info(`Product count before remove: ${product.count} and we want to remove ${count} products`);
                if (product.count >= count) {
                    product.count -= count;
                    return this.saveUpdated(warehouseId, product);
                }
                else {
                    const errorMsg = 'Request to remove more products than available';
                    this.log.error({
                        err: new Error(errorMsg),
                        product,
                        count,
                    });
                    throw new Error(errorMsg);
                }
            }
            else {
                throw new Error(`There is no such an product with the id ${productId} in the warehouse with the id ${warehouseId}`);
            }
        });
    }
    decreaseSoldCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`Cannot find warehouse: ${warehouseId}`);
            }
            this.log.info(`Remove requested in warehouse: ${JSON.stringify(warehouse)} for product id: ${productId}`);
            const product = lodash_1.default.find(warehouse.products, (p) => p.productId === productId);
            if (product != null) {
                this.log.info(`Product sold count before decrease: ${product.soldCount} and we want to decrease ${count} products`);
                if (product.soldCount >= count) {
                    product.soldCount -= count;
                    return this.saveUpdated(warehouseId, product);
                }
                else {
                    const errorMsg = 'Request to decrease count of more products than available';
                    this.log.error({
                        err: new Error(errorMsg),
                        product,
                        count,
                    });
                    throw new Error(errorMsg);
                }
            }
            else {
                throw new Error(`There is no such an product with the id ${productId} in the warehouse with the id ${warehouseId}`);
            }
        });
    }
    getTopProducts(warehouseId, quantity) {
        return this.get(warehouseId).pipe(operators_1.map((warehouseProducts) => {
            let topProducts = lodash_1.default.filter(warehouseProducts, (warehouseProduct) => warehouseProduct.soldCount > 0);
            topProducts = lodash_1.default.orderBy(topProducts, ['soldCount'], ['desc']);
            return lodash_1.default.take(topProducts, quantity);
        }));
    }
    getProduct(warehouseId, warehouseProductId) {
        return this.warehousesService.get(warehouseId, true).pipe(operators_1.exhaustMap((warehouse) => {
            if (warehouse === null) {
                return throw_1._throw(new Error(`Warehouse with the id ${warehouseId} doesn't exist`));
            }
            else {
                return of_1.of(warehouse);
            }
        }), operators_1.map((warehouse) => warehouse.products.find((p) => p.id === warehouseProductId)));
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Boolean]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "getProductsWithPagination", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "getProductsCount", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "getAvailable", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "remove", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "add", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "increaseCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "increaseSoldCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(1, io_1.serialization((u) => new WarehouseProduct_1.default(u))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, WarehouseProduct_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "saveUpdated", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "changePrice", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "decreaseCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "decreaseSoldCount", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "getTopProducts", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "getProduct", null);
WarehousesProductsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-products'),
    tslib_1.__metadata("design:paramtypes", [WarehousesService_1.WarehousesService])
], WarehousesProductsService);
exports.WarehousesProductsService = WarehousesProductsService;


/***/ }),

/***/ "./src/services/warehouses/WarehousesService.ts":
/*!******************************************************!*\
  !*** ./src/services/warehouses/WarehousesService.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "lodash"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const products_1 = __webpack_require__(/*! ../products */ "./src/services/products/index.ts");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const Warehouse_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/Warehouse */ "./node_modules/@ever-platform/common/src/entities/Warehouse.ts"));
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const of_1 = __webpack_require__(/*! rxjs/observable/of */ "rxjs/observable/of");
const db_server_1 = __webpack_require__(/*! @pyro/db-server */ "./src/@pyro/db-server/index.ts");
const env_1 = __webpack_require__(/*! ../../env */ "./src/env.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
let WarehousesService = class WarehousesService extends db_server_1.DBService {
    constructor(productsService, authServiceFactory) {
        super();
        this.productsService = productsService;
        this.authServiceFactory = authServiceFactory;
        this.DBObject = Warehouse_1.default;
        this.log = Log_1.createEverLogger({ name: 'warehousesService' });
        this.authService = this.authServiceFactory({
            role: 'warehouse',
            Entity: Warehouse_1.default,
            saltRounds: env_1.env.USER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    getMerchants(findInput, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    getAllActive(fullProducts = false) {
        const callId = uuid_1.v1();
        this.log.info({ callId, fullProducts }, '.getAllActive(fullProducts) called');
        return of_1.of(null).pipe(operators_1.concat(this.existence), operators_1.exhaustMap(() => this._getAllCurrentActive(fullProducts)), operators_1.tap({
            next: (warehouses) => {
                this.log.info({ callId, fullProducts, warehouses }, '.getAllActive(fullProducts) emitted next value');
            },
            error: (err) => {
                this.log.error({ callId, fullProducts, err }, '.getAllActive(fullProducts) thrown error!');
            },
        }));
    }
    register(input) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield _super.create.call(this, Object.assign(Object.assign({}, input.warehouse), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return warehouse;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    login(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.authService.login({ username }, password);
            if (!res || res.entity.isDeleted) {
                return null;
            }
            return {
                warehouse: res.entity,
                token: res.token,
            };
        });
    }
    get(id, fullProducts = true) {
        if (!fullProducts) {
            return super.get(id).pipe(operators_1.map((warehouse) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.throwIfNotExists(id);
                return warehouse;
            })), operators_1.switchMap((warehouse) => warehouse));
        }
        else {
            return super
                .get(id)
                .pipe(operators_1.map((warehouse) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.throwIfNotExists(id);
                return warehouse;
            })), operators_1.switchMap((warehouse) => warehouse))
                .pipe(operators_1.exhaustMap(() => this._get(id, true)));
        }
    }
    updateGeoLocation(warehouseId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(warehouseId);
            return this.update(warehouseId, { geoLocation });
        });
    }
    updateAvailability(warehouseId, isAvailable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(warehouseId);
            return this.update(warehouseId, { isActive: isAvailable });
        });
    }
    save(warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(warehouse.id);
            warehouse = lodash_1.default.clone(warehouse);
            lodash_1.default.each(warehouse.products, (warehouseProduct) => {
                warehouseProduct.product = warehouseProduct.productId;
            });
            return this.update(warehouse.id, warehouse);
        });
    }
    throwIfNotExists(storeId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const store = yield _super.get.call(this, storeId).pipe(operators_1.first()).toPromise();
            if (!store || store.isDeleted) {
                throw Error(`Store with id '${storeId}' does not exists!`);
            }
        });
    }
    _get(id, fullProducts = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _warehouse = (yield this.Model.findById(id)
                .populate(fullProducts ? 'products.product' : '')
                .lean()
                .exec());
            return new Warehouse_1.default(_warehouse);
        });
    }
    _getAllCurrentActive(fullProducts = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return lodash_1.default.map((yield this.Model.find({
                isActive: true,
                isDeleted: { $eq: false },
            })
                .populate(fullProducts ? 'products.product' : '')
                .lean()
                .exec()), (warehouse) => new Warehouse_1.default(warehouse));
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesService.prototype, "getAllActive", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "updatePassword", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "login", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "updateGeoLocation", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "updateAvailability", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(0, io_1.serialization((w) => new Warehouse_1.default(w))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Warehouse_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "save", null);
WarehousesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse'),
    tslib_1.__param(0, inversify_1.inject(products_1.ProductsService)),
    tslib_1.__param(1, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsService, Function])
], WarehousesService);
exports.WarehousesService = WarehousesService;


/***/ }),

/***/ "./src/services/warehouses/WarehousesUsersService.ts":
/*!***********************************************************!*\
  !*** ./src/services/warehouses/WarehousesUsersService.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const Log_1 = __webpack_require__(/*! ../../helpers/Log */ "./src/helpers/Log.ts");
const io_1 = __webpack_require__(/*! @pyro/io */ "./src/@pyro/io/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const User_1 = tslib_1.__importDefault(__webpack_require__(/*! @modules/server.common/entities/User */ "./node_modules/@ever-platform/common/src/entities/User.ts"));
const orders_1 = __webpack_require__(/*! ../orders */ "./src/services/orders/index.ts");
const WarehousesOrdersService_1 = __webpack_require__(/*! ./WarehousesOrdersService */ "./src/services/warehouses/WarehousesOrdersService.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const WarehousesService_1 = __webpack_require__(/*! ./WarehousesService */ "./src/services/warehouses/WarehousesService.ts");
let WarehousesUsersService = class WarehousesUsersService {
    constructor(warehousesOrdersService, ordersService, _warehousesService) {
        this.warehousesOrdersService = warehousesOrdersService;
        this.ordersService = ordersService;
        this._warehousesService = _warehousesService;
        this.log = Log_1.createEverLogger({
            name: 'warehousesUsersService',
        });
    }
    get(warehouseId) {
        return rxjs_1.concat(null, this.warehousesOrdersService.getExistence(warehouseId)).pipe(operators_1.exhaustMap(() => {
            return this.ordersService.Model.distinct('user._id', {
                warehouse: warehouseId,
                isDeleted: { $eq: false },
            })
                .lean()
                .exec();
        }), operators_1.map((users) => {
            return users.map((u) => new User_1.default(u));
        }));
    }
    getPromise(warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._warehousesService.throwIfNotExists(warehouseId);
            return this.get(warehouseId).pipe(operators_1.first()).toPromise();
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesUsersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesUsersService.prototype, "getPromise", null);
WarehousesUsersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-users'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesOrdersService_1.WarehousesOrdersService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => orders_1.OrdersService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesService_1.WarehousesService))),
    tslib_1.__metadata("design:paramtypes", [WarehousesOrdersService_1.WarehousesOrdersService,
        orders_1.OrdersService,
        WarehousesService_1.WarehousesService])
], WarehousesUsersService);
exports.WarehousesUsersService = WarehousesUsersService;


/***/ }),

/***/ "./src/services/warehouses/index.ts":
/*!******************************************!*\
  !*** ./src/services/warehouses/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./WarehousesService */ "./src/services/warehouses/WarehousesService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./WarehousesOrdersService */ "./src/services/warehouses/WarehousesOrdersService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./WarehousesProductsService */ "./src/services/warehouses/WarehousesProductsService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./WarehousesUsersService */ "./src/services/warehouses/WarehousesUsersService.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./WarehousesCarriersService */ "./src/services/warehouses/WarehousesCarriersService.ts"), exports);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const fs_1 = tslib_1.__importDefault(__webpack_require__(/*! fs */ "fs"));
function observeFile(fileName) {
    return rxjs_1.Observable.create((observer) => {
        const fetchTranslations = () => {
            fs_1.default.readFile(fileName, 'utf-8', (err, content) => {
                observer.next(content);
                if (err) {
                    observer.error(err);
                }
            });
        };
        fetchTranslations();
        fs_1.default.watchFile(fileName, fetchTranslations);
        return () => {
            fs_1.default.unwatchFile(fileName, fetchTranslations);
        };
    });
}
exports.observeFile = observeFile;
function randomCoordinatesNear([longitude, latitude], radius) {
    const r = 100 / 111300;
    const y0 = longitude;
    const x0 = latitude;
    const u = Math.random();
    const v = Math.random();
    const w = r * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y1 = w * Math.sin(t);
    const x1 = x / Math.cos(y0);
    return [y0 + y1, x0 + x1];
}
exports.randomCoordinatesNear = randomCoordinatesNear;


/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi webpack/hot/poll?100 ./src/nest-bootstrap.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack/hot/poll?100 */"webpack/hot/poll?100");
module.exports = __webpack_require__(/*! ./src/nest-bootstrap.ts */"./src/nest-bootstrap.ts");


/***/ }),

/***/ "@captemulation/get-parameter-names":
/*!*****************************************************!*\
  !*** external "@captemulation/get-parameter-names" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@captemulation/get-parameter-names");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bson");

/***/ }),

/***/ "bunyan":
/*!*************************!*\
  !*** external "bunyan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bunyan");

/***/ }),

/***/ "bunyan-cloudwatch":
/*!************************************!*\
  !*** external "bunyan-cloudwatch" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bunyan-cloudwatch");

/***/ }),

/***/ "bunyan-prettystream":
/*!**************************************!*\
  !*** external "bunyan-prettystream" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bunyan-prettystream");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "envalid":
/*!**************************!*\
  !*** external "envalid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("envalid");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-subscriptions");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "ipstack":
/*!**************************!*\
  !*** external "ipstack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ipstack");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-facebook":
/*!************************************!*\
  !*** external "passport-facebook" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pem":
/*!**********************!*\
  !*** external "pem" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pem");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "request-ip":
/*!*****************************!*\
  !*** external "request-ip" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/Subscription":
/*!************************************!*\
  !*** external "rxjs/Subscription" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Subscription");

/***/ }),

/***/ "rxjs/observable/from":
/*!***************************************!*\
  !*** external "rxjs/observable/from" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/from");

/***/ }),

/***/ "rxjs/observable/of":
/*!*************************************!*\
  !*** external "rxjs/observable/of" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/of");

/***/ }),

/***/ "rxjs/observable/throw":
/*!****************************************!*\
  !*** external "rxjs/observable/throw" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/throw");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),

/***/ "subscriptions-transport-ws":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "webpack/hot/poll?100":
/*!***************************************!*\
  !*** external "webpack/hot/poll?100" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack/hot/poll?100");

/***/ })

/******/ });