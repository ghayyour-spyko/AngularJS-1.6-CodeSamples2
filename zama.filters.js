angular.module('zamaModule')
.filter('zamaNumberEx', ['zamaNumberFilter', '$locale',
  function(zamaNumber, $locale) {

    var formats = $locale.NUMBER_FORMATS;
    return function(input, fractionSize) {
      var formattedValue = zamaNumber(input, fractionSize);

      var decimalIdx = formattedValue.indexOf(formats.DECIMAL_SEP);

      if (decimalIdx == -1) return formattedValue;

      var whole = formattedValue.substring(0, decimalIdx);
      var decimal = (zamaNumber(formattedValue.substring(decimalIdx)) || "").toString();

      return whole +  decimal.substring(1);
    };
  }
])
.filter('scoring', function(){
    return function(zamaNumber){
      if(zamaNumber==0) return 'btn btn-danger fa fa-thumbs-o-down';
      if(zamaNumber>0 && zamaNumber<=25) return 'btn fa fa-thumbs-o-down';
      if(zamaNumber>25 && zamaNumber <=50) return 'btn fa fa-thumbs-o-up';
      else return 'btn btn-success fa fa-thumbs-o-up';
    }
});
