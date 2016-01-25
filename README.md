# js-CloneWindow

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">


			(function($w){
			 var w=$w, d=w.document, t, h, e, o=w.open('data:text/html;charset=utf-8,');
			 if(o!==e){
				t=d.location.href,
				e=d.doctype,
				h=d.documentElement,
				d=o.document;
				d.write(e===null?'<!DOCTYPE html>':new XMLSerializer().serializeToString(e));
				d.close();
				d.replaceChild(h.cloneNode(true),d.documentElement);
				d.title=t;
			 };
			})(window);
