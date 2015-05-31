###
* Класс для плагина, навешивающиего колбэк-функцию на элемент
* при попадании его в поле видимости экрана
* а также при покидании им поля видимости
* @author Dmitriy Erzunov
###

(($, window) ->
    class InViewport
        constructor: ( $node, options ) ->
            self = @
            @$node = $( $node )

            # Наследуем пришедшие опции, задаём значения по умолчанию
            @options = $.extend true,

                callbackIn: () ->
                    #console.log( 'callbackIn не передан в опции плагинна' )
                callbackOut: () ->
                    #console.log( 'calbackOut не передан в опции плагинна' )
                # Повторять ли коллбэк при каждом событии вхождения/выхождения из области видимости
                repeatIn: false
                repeatOut: false
                debug: false
                options

            # Вызывался ли уже колбэк
            @inCallbackWasCalled = false
            @outCallbackWasCalled = false

            ###
            * Первоначальная проверка при инициализации
            * И выполнение колбэка, если это требуется
            * Ведь при инициализации элемент может быть в пределах экрана (или за ними),
            * тогда потребуется выполнить соответствующий колбэк
            ###
            @inViewPort = @isInViewport()
            @callbacksStarter()

            # Методы отрабатывающие при инициализации
            @bindEvents()

            if @options.debug
                console.log 'конструктор InViewport отработал для элемента ', $node

        # Методы класса
        bindEvents: () ->
            self = @
            $( window ). on 'scroll', ()=> @onScrollWindow()

        # Обработчик скролла окна
        onScrollWindow: () ->
            @callbacksStarter()

        # Находится ли элемент ($node) в области видимости экрана
        # Вернёт true, если да, и else, если нет
        isInViewport: ()->
            self = @
            # Подсчёт координат элемента
            offset = @$node.offset()
            nodeTop = offset.top
            nodeLeft = offset.left
            nodeWidth = @$node.width()
            nodeRight = nodeWidth + nodeLeft # от левого края документа до правой границы элемента
            nodeHeight = @$node.height()
            nodeBottom = nodeTop + nodeHeight # от верха документа до нижней границы элемента

            # Подсчёт координат окна
            windowHeight = $( window ).height()
            windowTop = $( window ).scrollTop()
            windowLeft = $( window ).scrollLeft()
            windowBottom = windowTop + windowHeight # от верха документа до нижней границы окна
            windowWidth = $( window ).width()
            windowRight = windowWidth + windowLeft # от левого края документа до правой границы окна

            # Если в области видимости и колбэк нужно выполнить
            # Подправил под себя (Верхняя половина элемента показалась)
            # А горизонтальные координаты мне не важны
            if nodeTop > windowTop and nodeTop+nodeHeight/2 < windowBottom

                if @options.debug
                    console.log( 'Элемент ', @$node.get(0), ' в области видимости' )

                return true
            else

                if @options.debug
                    console.log( 'Элемент ', @$node.get(0), ' вне области видимости' )

                return false

        # Запускает коллбэки в зависимости от положения элемента
        callbacksStarter: () ->
            self = @

            # Нужно ли на этой итерации выполнять колбэк попадания в экран
            # или колбэк выхода за пределы видимости
            isCallbackInNeed = @options.repeatIn or ( !@options.repeatIn and @inCallbackWasCalled == false)
            isCallbackOutNeed = @options.repeatOut or ( !@options.repeatOut and @outCallbackWasCalled == false)

            if isCallbackInNeed or isCallbackOutNeed

                # Являются ли переданные колбэки функциями
                inIsFunction = $.isFunction @options.callbackIn
                outIsFunction = $.isFunction @options.callbackOut

                if inIsFunction or outIsFunction

                    # В области ли видимости
                    if @isInViewport()

                        if !@inViewPort
                            @inViewPort = true
                            #Выполняем только при условии,
                            # что элемент на предыдущей итерации был за пределами экрана
                            # То есть он только что появился на экране

                            # Колбэк - функция, и надо ли его выполнять на этой итерации?
                            if inIsFunction and isCallbackInNeed
                                @options.callbackIn( @$node )

                                if( @inCallbackWasCalled == false )
                                    # Указываем, что колбэк уже вызывался
                                    @inCallbackWasCalled = true

                    # Если вне области видимости
                    else
                        if @inViewPort
                            @inViewPort = false
                            # Выполняем только при условии,
                            # что элемент на предыдущей итерации был в пределах экрана
                            # То есть он только что скрылся с экрана

                            # Колбэк - функция, и надо ли его выполнять на этой итерации?
                            if outIsFunction and isCallbackOutNeed
                                @options.callbackOut( @$node )

                                if ( @outCallbackWasCalled == false )
                                    # Указываем, что колбэк уже вызывался
                                    @outCallbackWasCalled = true

    createJQPlugin InViewport, 'inViewport'

    ###
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

    ###
)( jQuery, window )