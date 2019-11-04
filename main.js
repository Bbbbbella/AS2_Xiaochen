

$(function () {
    
    $("#addRec").click(function () {
        var startYearDoc = $("#startYear");
        var startYear = startYearDoc.val();
        if (!Number(startYear) || Number(startYear) < 2000) {
            alert("Incorrect year:" + startYear);
            return false;
        }
        var fullName = $("#fullName").val();
        var Major = $("#Major").val();
        var myDate = new Date();
        var nowDate = myDate.getHours() + ":" + myDate.getMinutes();
        var printStr = nowDate + " - " + fullName + ", " + Major + ", " + startYear;
        $("#records").append("<p class='title'>" + printStr+"</p>");
    });
});