
function iterateRecords(data) {
    console.log(data);
    var recordTemplate = $(".health-temp");
    $.each(data.result.records, function(recordKey, recordValue) {
        var recordTitle = recordValue["Page"];
        var cloneRecordTemplate = recordTemplate.clone();
        cloneRecordTemplate.attr('id','record-'+recordKey);
        cloneRecordTemplate.appendTo("#records");
        $("#record-"+recordKey +".health-temp a").attr('href', "https://qld.gov.au"+recordTitle);
        
});

var choose1 = document.getElementById("record-0");
choose1.onclick = function(){
    $("#record-0 a").text('Smoking');
    choose1.style.background="white";
};

var choose2 = document.getElementById("record-1");
choose2.onclick = function(){
    $("#record-1 a").text('Season flu');
    choose2.style.background="white";
};

var choose3 = document.getElementById("record-2");
choose3.onclick = function(){
    $("#record-2 a").text('Health');
    choose3.style.background="white";
};

var choose4 = document.getElementById("record-3");
choose4.onclick = function(){
    $("#record-3 a").text('Equipment');
    choose4.style.background="white";
};
}

$(document).ready(function() {
    var data = {
        resource_id: 'ae26c508-00f6-4836-ab1b-96dc7c141180', // the resource id
        limit: 4, // get 4 results
      };
      $.ajax({
        url: 'https://www.data.qld.gov.au/api/3/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        cache:true,
        success: function(data) {
            iterateRecords(data)
        }
      });
});



function goHome(event){
    document.location.href="index.html";
}

