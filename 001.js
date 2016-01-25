<html style="background:#eee">
	<head>
		<script type="text/javascript">
			(function(win){
				var $w=win, $d=$w.document, f=function(){
				 var e, h, d=$d, w=$w, o=w.open('data:text/html;charset=utf-8,');
				 w.removeEventListener('load',f);
				 if(o!==e){
					d.normalize();
					e=d.doctype;
					h=d.documentElement;
					d=o.document;
					d.write(e===null?'<!DOCTYPE html>':new XMLSerializer().serializeToString(e));
					d.close();
					d.replaceChild(h.cloneNode(true),d.documentElement);
				 };
				};
				if($d.readyState==='complete'){f();}else{$w.addEventListener('load',f);};
			})(window);
		</script>
	</head>
	<body>
	</body>
</html>
