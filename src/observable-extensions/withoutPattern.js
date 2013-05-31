ko.observable.fn.withoutPattern = function(pattern){
    var original = this,
        interceptor = ko.computed({
            read: original,
            write: function(newValue){
                newValue = newValue.replace(pattern,'');
                original(newValue);
                original.notifySubscribers();
            }
        });

    interceptor(original());

    return interceptor;
};