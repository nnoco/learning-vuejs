chrome.app.runtime.onLaunched.addListener(function() {
	// 화면의 중심에 윈도우를 위치시킨다.
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 500;
	var height = 300;

	chrom.app.window.create("index.html", {
		id: "learingVueID",
		outerBounds: {
			width: width,
			height: height,
			left: Math.round((screenWidth - width) / 2),
			top: Math.round((screenHeight - height) / 2)
		}
	});
});