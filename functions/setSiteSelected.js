const setSiteSelected = (site) => {
    localStorage.setItem('site',JSON.stringify(site))
    window.location.reload()
}
export default setSiteSelected