function runCode() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    let jsCode = "<script>" + document.getElementById("js-code").value + "<\/script>";

    let outputFrame = document.getElementById("output");
    outputFrame.contentDocument.body.innerHTML = htmlCode + cssCode;
    outputFrame.contentWindow.eval(document.getElementById("js-code").value);
}
