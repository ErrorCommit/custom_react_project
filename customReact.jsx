function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(key in reactElement.props){
        if (key==='children') continue;
        domElement.setAttribute(key, reactElement.props[key])
    }
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const baseContainer = document.querySelector("#base")

customRender(reactElement, baseContainer) 