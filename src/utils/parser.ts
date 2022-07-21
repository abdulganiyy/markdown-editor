export default  function parser(text:string):string {
    const toHTML = text
    .replace(/^###### (.*$)/gim, `<h6 className='preview-h6' >$1</h6>`) 
    .replace(/^##### (.*$)/gim, `<h5 className='preview-h5' >$1</h5>`) 
    .replace(/^#### (.*$)/gim, `<h4 className='preview-h4'>$1</h4>`) 
    .replace(/^### (.*$)/gim, `<h3 className='preview-h3'>$1</h3>`) 
    .replace(/^## (.*$)/gim, `<h2 className='preview-h2'>$1</h2>`) 
    .replace(/^# (.*$)/gim, `<h1 className='preview-h1'>$1</h1>`) 
    .replace(/\> (.*$)/gim, `<blockquote className='blockquote'>$1</blockquote>`) 
    .replace(/\-(.*$)/gim, `<li>$1</li>`) 
    .replace(/\*\*(.*)\*\*/gim, `<b>$1</b>`) 
    .replace(/\*(.*)\*/gim, `<i>$1</i>`)
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
	.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
	.replace(/\n$/gim, '<br />')
return toHTML.trim(); 
}