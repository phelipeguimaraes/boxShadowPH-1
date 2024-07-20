// Classe
class generateBoxShadow {
    constructor(
        horizontal, 
        horizontalRef,
        vertical,
        verticalRef, 
        blur,
        blurRef,
        spread, 
        spreadRef,
        color,
        colorRef,
        previewBox,
        boxShadow,
        webkitBoxShadow,
        mozBoxShadow
    ) {
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef
        this.blur = blur
        this.blurRef = blurRef
        this.spread = spread
        this.spreadRef = spreadRef
        this.color = color
        this.colorRef = colorRef
        this.previewBox = previewBox
        this.boxShadow = boxShadow
        this.webkitBoxShadow = webkitBoxShadow
        this.mozBoxShadow = mozBoxShadow
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value
        this.verticalRef.value = this.vertical.value
        this.blurRef.value = this.blur.value
        this.spreadRef.value = this.spread.value
        this.applyRule()
        this.showBox()
    }

    applyRule() {
        this.previewBox.style.boxShadow = `
        ${this.horizontalRef.value}px
        ${this.verticalRef.value}px
        ${this.blurRef.value}px
        ${this.spreadRef.value}px
        ${this.colorRef.value}
        `
    }

    showBox() {
        this.boxShadow.innerHTML = `${this.previewBox.style.boxShadow}`
        this.webkitBoxShadow.innerHTML = `${this.previewBox.style.boxShadow}`
        this.mozBoxShadow.innerHTML = `${this.previewBox.style.boxShadow}`
    }

    updateValue(type, value) {
        switch(type) {
            case 'horizontal':
                this.horizontalRef.value = value
                break
            case 'vertical':
                this.verticalRef.value = value
                break
            case 'blur':
                this.blurRef.value = value
                break
            case 'spread':
                this.spreadRef.value = value
                break
            case 'color':
                this.colorRef.value = value
                break
        }
        this.applyRule()
        this.showBox()
    }

}

// Seleção de elementos
const horizontal = document.querySelector('#horizontal')
const horizontalRef = document.querySelector('#horizontal-ref')
const vertical = document.querySelector('#vertical')
const verticalRef = document.querySelector('#vertical-ref')
const blur = document.querySelector('#blur')
const blurRef = document.querySelector('#blur-ref')
const spread = document.querySelector('#spread')
const spreadRef = document.querySelector('#spread-ref')

const color = document.querySelector("#color")
const colorRef = document.querySelector("#color-ref")

const copy = document.querySelector("#copy")

const previewBox = document.querySelector('#box')
const boxShadow = document.querySelector('#box-shadow span')
const webkitBoxShadow = document.querySelector('#webkit-box-shadow span')
const mozBoxShadow = document.querySelector('#moz-box-shadow span')

const generarBoxShadow = new generateBoxShadow(
    horizontal, 
    horizontalRef,
    vertical,
    verticalRef, 
    blur,
    blurRef,
    spread, 
    spreadRef,
    color,
    colorRef,
    previewBox,
    boxShadow,
    webkitBoxShadow,
    mozBoxShadow
)


generarBoxShadow.initialize()

// Funções


// Eventos
horizontal.addEventListener('input', (e) => {
    const value = e.target.value

    generarBoxShadow.updateValue('horizontal', value)
})

vertical.addEventListener('input', (e) => {
    const value = e.target.value

    generarBoxShadow.updateValue('vertical', value)
})

blur.addEventListener('input', (e) => {
    const value = e.target.value

    generarBoxShadow.updateValue('blur', value)
})

spread.addEventListener('input', (e) => {
    const value = e.target.value

    generarBoxShadow.updateValue('spread', value)
})

color.addEventListener('input', (e) => {
    const value = e.target.value

    generarBoxShadow.updateValue('color', value)
})

// Copiar CTRL C
copy.addEventListener('click', () => {
    const estilo = copy.innerText
    
    navigator.clipboard.writeText(estilo).then(() => {
        const frase = document.querySelector('#copy-p')
        frase.innerText = 'Copiado com sucesso!'

        setTimeout(() => {
            frase.innerText = 'Clique no quadro acima para copiar as regras'
        }, 1500)
    })
})