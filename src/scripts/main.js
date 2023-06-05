AOS.init();

const dataDoEvento = new Date("Aug 7, 2023 05:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contador = document.getElementById('contador')

const contadorHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampAtual;

    const minutosEmMS = 1000 * 60;
    const horasEmMs = 1000 * 60 * 60;
    const diaEmMs = 1000 * 60 * 60 * 24;

    const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horasEmMs) / minutosEmMS);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutosEmMS) / 1000)


    if (tempoAteOEvento < 0) {
        clearInterval(contadorHoras);
        contador.innerHTML = "Evento expirado"
    } else {
        contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    }
}, 1000);
