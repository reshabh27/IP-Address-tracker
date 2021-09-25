
const regexp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

function findplace(){
	var inpip=document.getElementById('srchip').value;
	if(!(regexp.test(inpip)))
	{
		alert(inpip + " IS NOT VALID IP ADDRESS");
		return 0;
	}

	var request = new XMLHttpRequest();
	var url="https://geo.ipify.org/api/v1?apiKey=at_lYRjIEcPNYKrjKtR21wKLhBjz8QVm&ipAddress=" + inpip;

	request.open('GET', url);
	
	var la = 1.0;
	var ln = 2.0;
	request.onload = function () {
		var data=JSON.parse(this.response);
		document.getElementById('ipvalue').innerHTML = data.ip;
		document.getElementById('locvalue').innerHTML = data.location.region + ", " +  data.location.country;
		document.getElementById('timvalue').innerHTML = data.location.timezone ;
		document.getElementById('ispvalue').innerHTML = data.isp;
		la = data.location.lat;
		ln = data.location.lng;
		mymap.setView([la, ln], 10);
		marker.setLatLng([la, ln]);
	}
	
	// Send request
	request.send();


}
	
	
