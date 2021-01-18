document.addEventListener('DOMContentLoaded', () => loadPortafolio())

const loadPortafolio = async () => {
    const { portafolio } = await (await fetch('datos.json')).json();

    let html = ''

    portafolio.forEach(v =>
        html += `
            <div class="elemento">
                <img src="img/${v.id}.jpg" />
                <div class="contenido">
                    <h3>${v.nombre}</h3>
                    <p>${v.desc}</p>
                </div>
            </div>
        `
    );

    document.querySelector('#list').innerHTML = html
}
