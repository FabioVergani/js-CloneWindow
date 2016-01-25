# js-CloneWindow

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">


			(function(win){
				var $w=win, $d=$w.document, f=function(){
				 var e, h, d=$d, w=$w, o=w.open('data:text/html;charset=utf-8,');
				 w.removeEventListener('load',f);
				 if(o!==e){
					e=d.doctype;
					h=d.documentElement;
					d=o.document;

					d.write(e===null?'<!DOCTYPE html>':new XMLSerializer().serializeToString(e));
					d.close();

					(e=d.createDocumentFragment().appendChild(h.cloneNode(true))).normalize();
					d.replaceChild(e,d.documentElement);//no text nodes in the sub-tree are empty and there are no adjacent text nodes
				 };
				};
				if($d.readyState==='complete'){f();}else{$w.addEventListener('load',f);};
			})(window);
