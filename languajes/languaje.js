const languajes = async () => {
    const lang = localStorage.getItem("lang") ?? "es"
    const languaje = (await import(`./${lang}.json`)).default
    return languaje;
}
export default languajes