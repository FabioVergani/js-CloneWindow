<html style="background:#eee">
	<head>
		<script type="text/javascript">
			(function(win){
				var $w=win, $d=$w.document, f=function(){
				 var e, h, i, d=$d, w=$w, o=w.open('data:text/html;charset=utf-8,');
				 w.removeEventListener('load',f);
				 if(o!==e){
					e=d.doctype;
					h=d.documentElement;
					d=o.document;
					d.write(e===null?'<!DOCTYPE html>':new XMLSerializer().serializeToString(e));
					d.close();

					e=d.createDocumentFragment().appendChild(h.cloneNode(true));
					i=d.createNodeIterator(e,128);//SHOW_COMMENT
					while(h=i.nextNode()){h.remove();};
					e.normalize();



					d.replaceChild(e,d.documentElement);//no text nodes in the sub-tree are empty and there are no adjacent text nodes
				 };
				};
				if($d.readyState==='complete'){f();}else{$w.addEventListener('load',f);};
			})(window);
		</script>
	</head>
	<body>
