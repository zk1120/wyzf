// 获取广告框
var freeDownload = document.getElementsByClassName("freeDownload")[0];
// 获取X号
var close_ = document.getElementsByClassName("close")[0];
close_.onclick = function () {
	freeDownload.parentNode.removeChild(freeDownload);
}
