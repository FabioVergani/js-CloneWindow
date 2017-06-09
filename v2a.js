(function($) {
 
  const $d=$.document,
	$dt=$d.doctype,
	$dl=$d.location,
	$frag=$d.createDocumentFragment(),
	$dE=$frag.appendChild($d.documentElement.cloneNode(true)),
	$head=$dE.querySelector('head'),
	$a=$frag.appendChild($d.createElement('a'));

	for(let i=0,m=['href','src'];i<2;++i){
		for(let e,j=0,s=m[i],n=$frag.querySelectorAll('['+s+']'),l=n.length,a=$a,p=/^((https?|data):|www\.)/i;j<l;++j){
			const e=n[j],x=e.getAttribute(s);
			if(p.test(x)!==true){console.dir(e);a.href=x;e.setAttribute(s,a.href)}
		}
	};

  $head.insertBefore($d.createElement('base'),$head.firstChild).href=[$dl.protocol,$dl.host].join('//');
	let opened=$.open(URL.createObjectURL(new Blob([(new TextEncoder).encode('<!DOCTYPE\u0020'+$dt.name+((x=$dt.publicId)?'\u0020PUBLIC\u0020"'+x+'"':"")+((x=$dt.systemId)?'\u0020"' +x+'"':"")+'>'+(new XMLSerializer).serializeToString($dE))],{type:'text/html'})));
})(window);
