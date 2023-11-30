/*Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.*/


const min = 0
const max = 100

const skillValue = document.querySelector(".skill__value")
const skillBar = document.querySelector(".skill__progress")
const skillHTML_ID = document.querySelector("#skill1")
const skillCSS_ID = document.querySelector("#skill2")
const skillJS_ID = document.querySelector("#skill3")

const updateSkill = (ID, value) => {
    if(value < min && value > max) {
        alert("Zadejte hodnotu od 0 do 100")
    } else {
        skillValue.textContent = `${value} / 100`
        skillBar.style.width = `${value}%`
    }
}

const setSkills = () => {
    const skillHTML = prompt("Zadejte úroveň dovednosti v HTML (0-100)")
    const skillCSS = prompt("Zadejte úroveň dovednosti v CSS (0-100)")
    const skillJS = prompt("Zadejte úroveň dovednosti v JavaScriptu (0-100)")

    updateSkill(skillHTML_ID, skillHTML)
    updateSkill(skillCSS_ID, skillCSS)
    updateSkill(skillJS_ID, skillJS)
}

setSkills()




/* pro posunutí lišty musím změnit .skill__progress.width v rámci css = CLASS pomocí . */
/* pro jednotlivé oblasti (HTML, CSS a JS) musím změnit hodnoty skill__value v rámci html = ID pomocí # */


/*Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.*/


// const skillHTML_ID = document.querySelector("#skill1")
// const skillCSS_ID = document.querySelector("#skill2")
// const skillJS_ID = document.querySelector("#skill3")