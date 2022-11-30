
function cardCreateFrontEnd(frontEnd) {
    const sectionFrontEnd = document.querySelector("#frontEnd")

    const ulCard = document.createElement("ul")
    ulCard.classList.add("card__list")

    for (let i = 0; i < frontEnd.length; i++) {
        let frontEndInfo = frontEnd[i]

        const liCard = document.createElement("li")
        const divTitleCard = document.createElement("div")
        const spanTitleCard = document.createElement("span")
        const h4TitleCard = document.createElement("h4")
        const pDescriptionCard = document.createElement("p")
        const divTagCard = document.createElement("div")
        const spanTagCard1 = document.createElement("span")
        const spanTagCard2 = document.createElement("span")

        liCard.classList.add("card__list--item")
        divTitleCard.classList.add("card__title--container")
        pDescriptionCard.classList.add("card__description")
        divTagCard.classList.add("card__tag--container")

        spanTitleCard.innerText = "G"

        h4TitleCard.innerHTML = `${frontEndInfo.title}`
        pDescriptionCard.innerHTML = `${frontEndInfo.description}`
        spanTagCard1.innerHTML = `${frontEndInfo.modality[0]}`
        spanTagCard2.innerHTML = `${frontEndInfo.modality[1]}`

        divTitleCard.append(spanTitleCard, h4TitleCard)
        divTagCard.append(spanTagCard1, spanTagCard2)
        liCard.append(divTitleCard, pDescriptionCard, divTagCard)
        ulCard.appendChild(liCard)
        sectionFrontEnd.appendChild(ulCard)

    }
}

function cardCreateBackEnd(backEnd) {
    const sectionBackEnd = document.querySelector("#backEnd")

    const ulCard = document.createElement("ul")
    ulCard.classList.add("card__list")

    for (let i = 0; i < backEnd.length; i++) {
        let backEndInfo = backEnd[i]

        const liCard = document.createElement("li")
        const divTitleCard = document.createElement("div")
        const spanTitleCard = document.createElement("span")
        const h4TitleCard = document.createElement("h4")
        const pDescriptionCard = document.createElement("p")
        const divTagCard = document.createElement("div")
        const spanTagCard1 = document.createElement("span")
        const spanTagCard2 = document.createElement("span")

        liCard.classList.add("card__list--item")
        divTitleCard.classList.add("card__title--container")
        pDescriptionCard.classList.add("card__description")
        divTagCard.classList.add("card__tag--container")

        spanTitleCard.innerText = "G"

        h4TitleCard.innerHTML = `${backEndInfo.title}`
        pDescriptionCard.innerHTML = `${backEndInfo.description}`
        spanTagCard1.innerHTML = `${backEndInfo.modality[0]}`
        spanTagCard2.innerHTML = `${backEndInfo.modality[1]}`

        divTitleCard.append(spanTitleCard, h4TitleCard)
        divTagCard.append(spanTagCard1, spanTagCard2)
        liCard.append(divTitleCard, pDescriptionCard, divTagCard)
        ulCard.appendChild(liCard)
        sectionBackEnd.appendChild(ulCard)
    }
}
cardCreateFrontEnd(frontEndJobs)
cardCreateBackEnd(backEndJobs)

