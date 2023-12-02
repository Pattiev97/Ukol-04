/*Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.*/


const min = 0
const max = 100

const skillHTML_ID = document.querySelector("#skill1")
const skillCSS_ID = document.querySelector("#skill2")
const skillJS_ID = document.querySelector("#skill3")

const updateSkill = (ID, value) => {
    ID.getElementsByClassName('skill__value')[0].textContent = `${value} / 100`;
    ID.getElementsByClassName("skill__progress")[0].style.width = `${value}%`;
}

const setSkills = () => {
    let skillHTML, skillCSS, skillJS

    do {
        skillHTML = prompt("Zadejte úroveň dovednosti v HTML (0-100)")
    } while (!checkNumber(skillHTML, "HTML"))

    do {
        skillCSS = prompt("Zadejte úroveň dovednosti v CSS (0-100)")
    } while (!checkNumber(skillCSS, "CSS"))

    do {
        skillJS = prompt("Zadejte úroveň dovednosti v JavaScriptu (0-100)")
    } while (!checkNumber(skillJS, "JavaScript"))

    updateSkill(skillHTML_ID, skillHTML)
    updateSkill(skillCSS_ID, skillCSS)
    updateSkill(skillJS_ID, skillJS)
}

const checkNumber = (skillNumber, skill) => {
    const isValid = !isNaN(skillNumber) && (skillNumber >= min && skillNumber <= max);
    if (!isValid) {
        alert(`Pro dovednost ${skill} zadejte platnou číselnou hodnotu.`)
    } return isValid
}

setSkills()

document.title = "Vyhlídalová - Úkol 4"