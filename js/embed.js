(function(){function i(){t=new WebSocket("ws://{{.Host}}/ws");t.onclose=function(e){};t.onmessage=function(t){var n=t.data.split("\t");var r=n[0];var i=n[1].replace(/</g,"&lt;").replace(/>/g,"&gt;");if(r==="timeleft"){if(i==0){i="intermission"}else{var s=Math.floor(i/60);var o=i%60;i=(s<10?"0":"")+s+":"+(o<10?"0":"")+o+" minutes"}}e("extinfo-{{.Id}}-"+r).innerHTML=i.replace(/</g,"&lt;").replace(/>/g,"&gt;")};t.onopen=function(e){t.send(n+":"+r)}}var e=function(e){return document.getElementById(e)};var t;var n="{{.Addr}}";var r="{{.Port}}";if(!("WebSocket"in window)){e("extinfo-{{.Id}}").innerHTML="<div class='error'><p>sorry, but your browser does not support websockets</p><small>try updating your browser</small></div>";return}e("extinfo-{{.Id}}").innerHTML="<table><tbody><tr><td id='extinfo-{{.Id}}-description' colspan='2'>&nbsp;</td></tr><tr><td>Game Mode</td><td id='extinfo-{{.Id}}-gamemode'></td></tr><tr><td>Map</td><td id='extinfo-{{.Id}}-map'></td></tr><tr><td>Clients</td><td><span id='extinfo-{{.Id}}-numberofclients'></span>/<span id='extinfo-{{.Id}}-maxnumberofclients'></span></td></tr><tr><td>Master Mode</td><td id='extinfo-{{.Id}}-mastermode'></td></tr><tr><td>Time Left</td><td id='extinfo-{{.Id}}-timeleft'></td></tr></tbody></table>";i()})()