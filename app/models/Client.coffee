###
 * Created by Erzunov on 11.03.2015.
###
define(
    ['backbone', 'jquery', 'cppFunctions'],
	(Backbone, $, cppFunctions)  ->
		class Client extends Backbone.Model
            defaults:
                a: 1
                installPercents: 0

            utils:
                isAppFunction: ( func ) ->
                    return (typeof(func) == 'function');

            options: {
                debug: false,
                moduleName: 'Client'
            },

            pageIdsHashes: {
                'installPage': '#!/pages/1'
                'scanPage': '#!/pages/3'
                'fixPage': '#!/pages/4'
            },


            initialize: () ->
                @makeAllClientFunctions(cppFunctions);
                @makeGlobalFunctionsForCpp();


            makeClientFunction: ( func, clientFuncName, returnFakeValue ) ->
                self = @
                if ( !returnFakeValue and returnFakeValue != 0  )
                    returnValue = 'fake123'

                if (func && clientFuncName && clientFuncName.split() != '')
                    if (typeof(func) == 'string')
                        functionFromApi = window[func];
                     else
                        functionFromApi = func;

                    this[clientFuncName] = () ->
                        if ( this.utils.isAppFunction(functionFromApi) )

                            return functionFromApi.apply(window, arguments);
                         else
                            if (this.options.debug)
                                console.error(this.options.moduleName + ': Incorrect function for Client.' + clientFuncName);

                            if ( this.MockApp && this.MockApp[func] && ( typeof(this.MockApp[func]) == 'function' ) )
                                return this.MockApp[func].apply(this.MockApp, arguments);

                            return returnFakeValue;


            makeAllClientFunctions: ( functionsFromApiConfig ) ->
                self = this;
                functionsFromApiConfig.forEach(( funcConfig ) ->
                    self.makeClientFunction( funcConfig.apiName, funcConfig.clientName, funcConfig.returnFakeValue );
                );

            goToHash: ( hash ) ->
                window.location.hash = hash

            goToPage: (pageId) ->
                if @pageIdsHashes[pageId]
                    @goToHash(@pageIdsHashes[pageId])



            #Учим плюсы управлять нашим приложением
            makeGlobalFunctionsForCpp: () ->
                window.setInstallPercents = (percents) =>
                    @set('installPercents', percents)
                window.openPage = (pageId) =>
                    @goToPage( pageId )

)