
/*
* Класс для плагина, навешивающиего колбэк-функцию на элемент
* при попадании его в поле видимости экрана
* а также при покидании им поля видимости
* @author Dmitriy Erzunov
 */

(function() {
  (function($, window) {
    var InViewport;
    InViewport = (function() {
      function InViewport($node, options) {
        var self;
        self = this;
        this.$node = $($node);
        this.options = $.extend(true, {
          callbackIn: function() {},
          callbackOut: function() {},
          repeatIn: false,
          repeatOut: false,
          debug: false
        }, options);
        this.inCallbackWasCalled = false;
        this.outCallbackWasCalled = false;

        /*
        * Первоначальная проверка при инициализации
        * И выполнение колбэка, если это требуется
        * Ведь при инициализации элемент может быть в пределах экрана (или за ними),
        * тогда потребуется выполнить соответствующий колбэк
         */
        this.inViewPort = this.isInViewport();
        this.callbacksStarter();
        this.bindEvents();
        if (this.options.debug) {
          console.log('конструктор InViewport отработал для элемента ', $node);
        }
      }

      InViewport.prototype.bindEvents = function() {
        var self;
        self = this;
        return $(window).on('scroll', (function(_this) {
          return function() {
            return _this.onScrollWindow();
          };
        })(this));
      };

      InViewport.prototype.onScrollWindow = function() {
        return this.callbacksStarter();
      };

      InViewport.prototype.isInViewport = function() {
        var nodeBottom, nodeHeight, nodeLeft, nodeRight, nodeTop, nodeWidth, offset, self, windowBottom, windowHeight, windowLeft, windowRight, windowTop, windowWidth;
        self = this;
        offset = this.$node.offset();
        nodeTop = offset.top;
        nodeLeft = offset.left;
        nodeWidth = this.$node.width();
        nodeRight = nodeWidth + nodeLeft;
        nodeHeight = this.$node.height();
        nodeBottom = nodeTop + nodeHeight;
        windowHeight = $(window).height();
        windowTop = $(window).scrollTop();
        windowLeft = $(window).scrollLeft();
        windowBottom = windowTop + windowHeight;
        windowWidth = $(window).width();
        windowRight = windowWidth + windowLeft;
        if (nodeTop > windowTop && nodeTop + nodeHeight / 2 < windowBottom) {
          if (this.options.debug) {
            console.log('Элемент ', this.$node.get(0), ' в области видимости');
          }
          return true;
        } else {
          if (this.options.debug) {
            console.log('Элемент ', this.$node.get(0), ' вне области видимости');
          }
          return false;
        }
      };

      InViewport.prototype.callbacksStarter = function() {
        var inIsFunction, isCallbackInNeed, isCallbackOutNeed, outIsFunction, self;
        self = this;
        isCallbackInNeed = this.options.repeatIn || (!this.options.repeatIn && this.inCallbackWasCalled === false);
        isCallbackOutNeed = this.options.repeatOut || (!this.options.repeatOut && this.outCallbackWasCalled === false);
        if (isCallbackInNeed || isCallbackOutNeed) {
          inIsFunction = $.isFunction(this.options.callbackIn);
          outIsFunction = $.isFunction(this.options.callbackOut);
          if (inIsFunction || outIsFunction) {
            if (this.isInViewport()) {
              if (!this.inViewPort) {
                this.inViewPort = true;
                if (inIsFunction && isCallbackInNeed) {
                  this.options.callbackIn(this.$node);
                  if (this.inCallbackWasCalled === false) {
                    return this.inCallbackWasCalled = true;
                  }
                }
              }
            } else {
              if (this.inViewPort) {
                this.inViewPort = false;
                if (outIsFunction && isCallbackOutNeed) {
                  this.options.callbackOut(this.$node);
                  if (this.outCallbackWasCalled === false) {
                    return this.outCallbackWasCalled = true;
                  }
                }
              }
            }
          }
        }
      };

      return InViewport;

    })();
    return createJQPlugin(InViewport, 'inViewport');

    /*
    *  Пример
    
    $( '.element-class-name' ).inViewport( {
        debug: true
        repeatIn: true
        repeatOut: true
        callbackIn: ( $element ) ->
            console.log('calbackIn, переданный в опции плагинна')
        callbackOut: ( $element ) ->
            console.log('calbackOut, переданный в опции плагинна')
    })
     */
  })(jQuery, window);

}).call(this);
