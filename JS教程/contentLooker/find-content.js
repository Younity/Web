var contentButton = document.createElement("div");
contentButton.className = 'content-button';

var floatContent = document.createElement('div');
floatContent.className = 'float-content';

var contentsrc = document.getElementById("contents");

floatContent.innerHTML = contentsrc.innerHTML;

// 给content 链接到文档的目录
floatContent.firstElementChild.innerHTML = '<h1><a href="#contents">Contents</a></h1>';

// toplevel 是顶级目录项的数组
var toplevel = floatContent.children[1].children;

// 遍历toplevel，只保留顶层标题，删除内部小节
for (let i = 1; i <= 31; i++) {
	let innerSection = toplevel[i].childNodes;
	toplevel[i].innerHTML = innerSection[0].outerHTML + innerSection[1].data;
}


document.body.insertBefore(contentButton, document.body.firstChild);
contentButton.after(floatContent);

var contentIsDispalyed = false;
contentButton.onclick = function (e) {
	if (!contentIsDispalyed) {
		floatContent.style.display = "block";
		contentIsDispalyed = !contentIsDispalyed;
	} else {
		floatContent.style.display = "none";
		contentIsDispalyed = !contentIsDispalyed;
	}
	e.stopPropagation();
};
document.body.onclick = function () {
	if (contentIsDispalyed) {
		floatContent.style.display = "none";
		contentIsDispalyed = !contentIsDispalyed;
	}
}

