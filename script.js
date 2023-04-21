function run(){
    const html_code=document.getElementById("html-code").value 
    const css_code=document.getElementById("css-code").value
    const js_code=document.getElementById("javascript-code").value
    const output=document.getElementById("output")

    output.contentDocument.body.innerHTML=html_code + "<style>"+css_code+"</style";
    output.contentWindow.eval(js_code)
}