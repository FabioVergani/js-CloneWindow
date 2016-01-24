# js-CloneWindow

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
<head>
<script>
//
(function($w){

 var $=$w,
 $d=$.document,
 $dt=$d.doctype,
 o=$.open('about:blank', 'print_preview'),
 d=o.document;

d.open();
d.write(($dt===null?'<!DOCTYPE html>':new XMLSerializer().serializeToString($dt))+"<html>aaaa</html>");
d.close();


})(window);
</script>
