var verity;

var validate = function() {
    if (!verity) {
        alert('請勾選核取方塊');
        return false;
    }
};

var notRobot = function() {
    verity = true;
};
