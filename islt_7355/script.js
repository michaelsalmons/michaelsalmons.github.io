    expiration = new Date;
    expiration.setMonth(expiration.getMonth()+6)
    counter = eval(cookieVal("total_visited"))
    counter++
    document.cookie = "total_visited="+counter+";expires=" + expiration.toGMTString()
     
     
    function cookieVal(cookieName) {
    	thisCookie = document.cookie.split("; ")
    	for (i=0; i<thisCookie.length; i++){
    		if (cookieName == thisCookie[i].split("=")[0]){
    			return thisCookie[i].split("=")[1]
    		}
    	}
    	return 0;
    }
     
    document.getElementById('result').innerHTML = "<center><h5>You have visited this page <label style='font-size:16px;' class='text-info'>"+counter+"</label> times.</h5></center>";