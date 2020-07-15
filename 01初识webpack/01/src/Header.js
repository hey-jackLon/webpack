function Header(){
    var el = document.getElementById('root');
    var div = document.createElement('div')
    div.innerHTML = 'divtest'
    el.append(div)
}

export default Header