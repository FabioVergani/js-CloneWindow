(function($){

 function absolutize(t){
		const a=$a,p=r,v=t,n=$frag.querySelectorAll('['+v+']');
		for(const x of n){
			const s=x.getAttribute(v);
			if(p.test(s)!==true){x.setAttribute(v,(a.href=s,a.href))}
		}
 }

 const r=/^((https?|data):|www\.)/i;
 $d=$.document,
 $dt=$d.doctype,
 $dl=$d.location,
 $frag=$d.createDocumentFragment(),
 $a=$frag.appendChild($d.createElement('a')),
 $dE=$frag.appendChild($d.documentElement.cloneNode(true)),
 $head=$dE.querySelector('head');
 //
 absolutize('href');
 absolutize('src');
 //
 $head.insertBefore($d.createElement('base'),$head.firstChild).href=[$dl.protocol,$dl.host].join('//');
 //
 $.open(URL.createObjectURL(new Blob([(new TextEncoder()).encode(['<!DOCTYPE\u0020',$dt.name,(x=$dt.publicId)?'\u0020PUBLIC\u0020"'+x+'"':'',(x=$dt.systemId)?'\u0020"'+x+'"':'','>',new XMLSerializer().serializeToString($dE)].join(''))],{type:'text/html'})));
})(window);
