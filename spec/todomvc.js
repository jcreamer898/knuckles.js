// APP DECLARATION
// --------------------------------------------------------

var container = Knuckles.container;
container.define({
    name: 'test1',
    deps: [],
    factory: function(){

        return {
            identity: "test1"
        };
    }
});

container.define({
    name: 'test2',
    deps: ['test1'],
    factory: function(test1){

        return {
            identity: "test 2 with dependencies on " + test1.identity
        };
    }
});

container.define({
    name: 'test3',
    deps: ['test2'],
    factory: function(test2){

        return {
            identity: "test 3 with dependencies on " + test2.identity
        };
    }
});

container.define({
    name: 'test4',
    deps: ['test2','test1'],
    factory: function(test2,test1){

        return {
            identity: "test 3 with dependencies on " + test2.identity + " and " + test1.identity
        };
    }
});

container.use(['test4'],function(test4){
    alert(test4.identity);
});


