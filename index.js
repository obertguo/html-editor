const keyup = () =>{

    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;

    //Using Bootstrap CDN
    //const bootstrap = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>';
    
    //Using locally installed bootstrap
    const bootstrap = '<link rel="stylesheet" href="bootstrap.css"/>';

    document.getElementById('output').contentDocument.body.innerHTML=`<head>${bootstrap}<style>${css}</style></head> ${html}`;
}