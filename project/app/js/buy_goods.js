require(["config"],function(){
	require(["header","footer","buy_choose","fangda"],function(header,footer,buy_choose,fangda){
		header.init();
		footer.init();
		buy_choose.init();
		fangda.init();
	});
})