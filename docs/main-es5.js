function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game");
        }
      },
      directives: [_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]],
      styles: ["\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.styl']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _game_board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./game/board/board.component */
    "./src/app/game/board/board.component.ts");
    /* harmony import */


    var _game_board_cell_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./game/board/cell/cell.component */
    "./src/app/game/board/cell/cell.component.ts");
    /* harmony import */


    var _game_nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./game/nav-drawer/nav-drawer.component */
    "./src/app/game/nav-drawer/nav-drawer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], _game_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _game_board_cell_cell_component__WEBPACK_IMPORTED_MODULE_8__["CellComponent"], _game_nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_9__["NavDrawerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], _game_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _game_board_cell_cell_component__WEBPACK_IMPORTED_MODULE_8__["CellComponent"], _game_nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_9__["NavDrawerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/board/board.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/game/board/board.component.ts ***!
    \***********************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppGameBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cell_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cell/cell.component */
    "./src/app/game/board/cell/cell.component.ts");

    function BoardComponent_app_board_cell_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-board-cell", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_app_board_cell_1_Template_app_board_cell_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.makeAMove(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cell_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cellContent", cell_r1);
      }
    }

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);

        this.makePlayerMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BoardComponent, [{
        key: "makeAMove",
        value: function makeAMove(index) {
          if (this.boardCells[index] === '') {
            this.makePlayerMove.emit(index);
          }
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)();
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["app-board"]],
      inputs: {
        currentPlayer: "currentPlayer",
        boardCells: "boardCells"
      },
      outputs: {
        makePlayerMove: "makePlayerMove"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "game-board"], [3, "cellContent", "click", 4, "ngFor", "ngForOf"], [3, "cellContent", "click"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_app_board_cell_1_Template, 1, 1, "app-board-cell", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardCells);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_2__["CellComponent"]],
      styles: [".game-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(3, 100px);\n  grid-template-columns: repeat(3, 100px);\n  grid-row-gap: 8px;\n  grid-column-gap: 8px;\n  background-color: #000;\n  margin-top: -50px;\n}\n/*# sourceMappingURL=src/app/game/board/board.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ib2FyZC9zcmMvYXBwL2dhbWUvYm9hcmQvYm9hcmQuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2dhbWUvYm9hcmQvYm9hcmQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFTO0VBQ1Qsb0NBQW9CO0VBQ3BCLHVDQUF1QjtFQUN2QixpQkFBYztFQUNkLG9CQUFpQjtFQUNqQixzQkFBa0I7RUFDbEIsaUJBQVk7QUNEZDtBQUNBLGlFQUFpRSIsImZpbGUiOiJzcmMvYXBwL2dhbWUvYm9hcmQvYm9hcmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIkbGluZUl0ZW1zQ291bnQgPSAzO1xuXG4uZ2FtZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCRsaW5lSXRlbXNDb3VudCwgMTAwcHgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZUl0ZW1zQ291bnQsIDEwMHB4KTtcbiAgZ3JpZC1yb3ctZ2FwOiA4cHg7XG4gIGdyaWQtY29sdW1uLWdhcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG4iLCIuZ2FtZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEwMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xuICBncmlkLXJvdy1nYXA6IDhweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9nYW1lL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.styl']
        }]
      }], null, {
        makePlayerMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        currentPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boardCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game/board/cell/cell.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/game/board/cell/cell.component.ts ***!
    \***************************************************/

  /*! exports provided: CellComponent */

  /***/
  function srcAppGameBoardCellCellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellComponent", function () {
      return CellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CellComponent__svg_svg_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CellComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
      }
    }

    var CellComponent = function CellComponent() {
      _classCallCheck(this, CellComponent);
    };

    CellComponent.ɵfac = function CellComponent_Factory(t) {
      return new (t || CellComponent)();
    };

    CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CellComponent,
      selectors: [["app-board-cell"]],
      inputs: {
        cellContent: "cellContent"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "board-cell"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.001 512.001", "style", "enable-background:new 0 0 512.001 512.001; width: 50%;", 0, "xml", "space", "preserve", 4, "ngIf"], ["class", "cell-empty-circle", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.001 512.001", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512.001 512.001", "width", "50%"], ["d", "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\n        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\n        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\n        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\n        L284.286,256.002z"], [1, "cell-empty-circle"]],
      template: function CellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellComponent__svg_svg_1_Template, 3, 0, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CellComponent_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cellContent === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cellContent === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".board-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n}\n.board-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n.cell-empty-circle[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 5px solid #000;\n}\n/*# sourceMappingURL=src/app/game/board/cell/cell.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ib2FyZC9jZWxsL3NyYy9hcHAvZ2FtZS9ib2FyZC9jZWxsL2NlbGwuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2dhbWUvYm9hcmQvY2VsbC9jZWxsLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBUztFQUNULHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLHNCQUFrQjtFQUNsQixXQUFPO0VBQ1AsWUFBUTtBQ0NWO0FEQUU7RUFDRSxVQUFPO0VBQ1AsWUFBUTtBQ0VaO0FERUE7RUFDRSxVQUFPO0VBQ1AsV0FBUTtFQUNSLGtCQUFlO0VBQ2Ysc0JBQWtCO0VBQ2xCLHNCQUFRO0FDQVY7QUFDQSxxRUFBcUUiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2JvYXJkL2NlbGwvY2VsbC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZC1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi5jZWxsLWVtcHR5LWNpcmNsZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xufVxuIiwiLmJvYXJkLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ib2FyZC1jZWxsIGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jZWxsLWVtcHR5LWNpcmNsZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2dhbWUvYm9hcmQvY2VsbC9jZWxsLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board-cell',
          templateUrl: './cell.component.html',
          styleUrls: ['./cell.component.styl']
        }]
      }], null, {
        cellContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-drawer/nav-drawer.component */
    "./src/app/game/nav-drawer/nav-drawer.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/game/board/board.component.ts");

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent() {
        _classCallCheck(this, GameComponent);

        this.boardCells = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 1;
        this.user = {
          name: 'Mark Yarchak',
          password: 'secret'
        };
      }

      _createClass(GameComponent, [{
        key: "makePlayerMove",
        value: function makePlayerMove(index) {
          var w = this.winner;

          if (w !== 1 && w !== 0) {
            this.boardCells[index] = this.currentPlayer;
            this.currentPlayer = !this.currentPlayer ? 1 : 0;
          }
        }
      }, {
        key: "startNewGame",
        value: function startNewGame() {
          this.clearBoard();
          this.setDefaultPlayer();
        }
      }, {
        key: "setDefaultPlayer",
        value: function setDefaultPlayer() {
          this.currentPlayer = 1;
        }
      }, {
        key: "clearBoard",
        value: function clearBoard() {
          this.boardCells = this.boardCells.map(function () {
            return '';
          });
        }
      }, {
        key: "winningCombinations",
        get: function get() {
          return [// horizontal lines
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // vertical lines
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // diagonal lines
          [0, 4, 8], [6, 4, 2]];
        }
      }, {
        key: "noWinner",
        get: function get() {
          return this.winner === undefined && this.boardCells.every(function (cell) {
            return cell !== '';
          });
        }
      }, {
        key: "winner",
        get: function get() {
          var _this = this;

          var canWin = [0, 1];
          return canWin.find(function (player) {
            return _this.winningCombinations.find(function (combination) {
              return combination.every(function (num) {
                return _this.boardCells[num] === player;
              });
            });
          });
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)();
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 8,
      vars: 4,
      consts: [[1, "game-page"], [3, "winner", "noWinner", "currentPlayer"], [1, "game-page__content"], [1, "start-new-game-wrapper"], [3, "click"], [1, "board-wrapper"], [3, "boardCells", "makePlayerMove"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-drawer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_4_listener() {
            return ctx.startNewGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start new game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-board", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("makePlayerMove", function GameComponent_Template_app_board_makePlayerMove_7_listener($event) {
            return ctx.makePlayerMove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("winner", ctx.winner)("noWinner", ctx.noWinner)("currentPlayer", ctx.currentPlayer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardCells", ctx.boardCells);
        }
      },
      directives: [_nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_1__["NavDrawerComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]],
      styles: [".game-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100vw;\n}\n.game-page__content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 80px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\n.start-new-game-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 120px;\n}\n.start-new-game-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n}\n.board-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n@media (max-width: 600px) {\n  .start-new-game-wrapper[_ngcontent-%COMP%] {\n    bottom: 60px;\n    top: unset;\n  }\n}\n@media (max-height: 600px) {\n  .start-new-game-wrapper[_ngcontent-%COMP%] {\n    bottom: 60px;\n    top: unset;\n  }\n}\n/*# sourceMappingURL=src/app/game/game.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQVk7RUFDWixZQUFPO0FDRFQ7QURFRTtFQUNFLDhCQUFpQztFQUNqQyxhQUFTO0VBQ1QsdUJBQWlCO0VBQ2pCLG1CQUFhO0VBQ2Isc0JBQWtCO0FDQXRCO0FESUE7RUFDRSxrQkFBVTtFQUNWLFVBQUs7QUNGUDtBREdFO0VBQ0UsaUJBQVM7QUNEYjtBREtBO0VBQ0UsZUFBVztFQUNYLGFBQVM7RUFDVCx1QkFBaUI7RUFDakIsYUFBUztBQ0hYO0FET3dCO0VBQ3RCO0lBQ0UsWUFBUTtJQUNSLFVBQUs7RUNMUDtBQUNGO0FEUXlCO0VBQ3ZCO0lBQ0UsWUFBUTtJQUNSLFVBQUs7RUNOUDtBQUNGO0FBQ0EsMERBQTBEIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiJGdhbWUtdG9vbGJhci1oZWlnaHQgPSA4MHB4XG5cbi5nYW1lLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICAmX19jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiBcImNhbGMoMTAwdmggLSAlcylcIiAlICRnYW1lLXRvb2xiYXItaGVpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5zdGFydC1uZXctZ2FtZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyMHB4O1xuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICB9XG59XG5cbi5ib2FyZC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN0YXJ0LW5ldy1nYW1lLXdyYXBwZXIge1xuICAgIGJvdHRvbTogNjBweDtcbiAgICB0b3A6IHVuc2V0O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcbiAgLnN0YXJ0LW5ldy1nYW1lLXdyYXBwZXIge1xuICAgIGJvdHRvbTogNjBweDtcbiAgICB0b3A6IHVuc2V0O1xuICB9XG59XG4iLCIuZ2FtZS1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5nYW1lLXBhZ2VfX2NvbnRlbnQge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnN0YXJ0LW5ldy1nYW1lLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIwcHg7XG59XG4uc3RhcnQtbmV3LWdhbWUtd3JhcHBlciBidXR0b24ge1xuICBwYWRkaW5nOiA3cHggMTBweDtcbn1cbi5ib2FyZC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3RhcnQtbmV3LWdhbWUtd3JhcHBlciB7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIHRvcDogdW5zZXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcbiAgLnN0YXJ0LW5ldy1nYW1lLXdyYXBwZXIge1xuICAgIGJvdHRvbTogNjBweDtcbiAgICB0b3A6IHVuc2V0O1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.styl']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/nav-drawer/nav-drawer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/game/nav-drawer/nav-drawer.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavDrawerComponent */

  /***/
  function srcAppGameNavDrawerNavDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavDrawerComponent", function () {
      return NavDrawerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavDrawerComponent_div_3__svg_svg_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavDrawerComponent_div_3__svg_svg_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavDrawerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavDrawerComponent_div_3__svg_svg_1_Template, 2, 0, "svg", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavDrawerComponent_div_3__svg_svg_2_Template, 2, 0, "svg", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.currentPlayer === 1 || ctx_r0.winner === 1) && ctx_r0.winner !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.currentPlayer === 0 || ctx_r0.winner === 0) && ctx_r0.winner !== 1);
      }
    }

    var NavDrawerComponent = function NavDrawerComponent() {
      _classCallCheck(this, NavDrawerComponent);
    };

    NavDrawerComponent.ɵfac = function NavDrawerComponent_Factory(t) {
      return new (t || NavDrawerComponent)();
    };

    NavDrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavDrawerComponent,
      selectors: [["app-nav-drawer"]],
      inputs: {
        noWinner: "noWinner",
        winner: "winner",
        currentPlayer: "currentPlayer"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "nav-drawer"], ["style", "display: flex; align-items: center; padding-top: 1px;", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "padding-top", "1px"], ["style", "width:24px;height:24px", "viewBox", "0 0 24 24", 4, "ngIf"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"], ["fill", "currentColor", "d", "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"]],
      template: function NavDrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavDrawerComponent_div_3_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.noWinner ? "No winner" : ctx.winner === 0 || ctx.winner === 1 ? "Winner:" : "Current player:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noWinner);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".nav-drawer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1e90ff;\n  height: calc(80px - 1px);\n  border-bottom: 1px solid #000;\n}\n.nav-drawer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  padding: 0 3px;\n}\n/*# sourceMappingURL=src/app/game/nav-drawer/nav-drawer.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9uYXYtZHJhd2VyL3NyYy9hcHAvZ2FtZS9uYXYtZHJhd2VyL25hdi1kcmF3ZXIuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2dhbWUvbmF2LWRyYXdlci9uYXYtZHJhd2VyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBUztFQUNULHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLHlCQUFrQjtFQUNsQix3QkFBNEI7RUFDNUIsNkJBQWU7QUNEakI7QURFRTtFQUNFLFdBQU87RUFDUCxTQUFRO0VBQ1IsY0FBUztBQ0FiO0FBQ0EsMkVBQTJFIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9uYXYtZHJhd2VyL25hdi1kcmF3ZXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIkYm90dG9tLWJvcmRlciA9IDFweDtcblxuLm5hdi1kcmF3ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgaGVpZ2h0OiBcImNhbGMoODBweCAtICVzKVwiICUgJGJvdHRvbS1ib3JkZXI7XG4gIGJvcmRlci1ib3R0b206ICRib3R0b20tYm9yZGVyIHNvbGlkIGJsYWNrO1xuICAqIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgM3B4O1xuICB9XG59XG4iLCIubmF2LWRyYXdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xuICBoZWlnaHQ6IGNhbGMoODBweCAtIDFweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuLm5hdi1kcmF3ZXIgKiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgM3B4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9nYW1lL25hdi1kcmF3ZXIvbmF2LWRyYXdlci5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavDrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-drawer',
          templateUrl: './nav-drawer.component.html',
          styleUrls: ['./nav-drawer.component.styl']
        }]
      }], function () {
        return [];
      }, {
        noWinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        winner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /var/www/TicTacToe-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map