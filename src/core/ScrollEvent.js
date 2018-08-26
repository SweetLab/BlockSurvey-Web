let onChangeMain = () => {
    let MainClass = document.getElementById(`MainBody`).className
    
    if(MainClass === `fp-viewing-0`) {
        document.getElementById(`Navi_id_1`).className = `content-nav-1-on`
        document.getElementById(`Navi_Text_1`).className = `content-nav-text-1-on` 
        document.getElementById(`Navi_circle_1`).className = `content-circle-1-on` 
    }
    else if(MainClass === `fp-viewing-1`) {
        document.getElementById(`Navi_id_2`).className = `content-nav-2-on`
        document.getElementById(`Navi_Text_2`).className = `content-nav-text-2-on` 
        document.getElementById(`Navi_circle_2`).className = `content-circle-2-on`
    }
    else if(MainClass === `fp-viewing-2`) {
        document.getElementById(`Navi_id_3`).className = `content-nav-3-on`
        document.getElementById(`Navi_Text_3`).className = `content-nav-text-3-on` 
        document.getElementById(`Navi_circle_3`).className = `content-circle-3-on`
    }
    else if(MainClass === `fp-viewing-3`) {
        document.getElementById(`Navi_id_4`).className = `content-nav-4-on`
        document.getElementById(`Navi_Text_4`).className = `content-nav-text-4-on` 
        document.getElementById(`Navi_circle_4`).className = `content-circle-4-on`
    }
    else if(MainClass === `fp-viewing-4`) {
        document.getElementById(`Navi_id_5`).className = `content-nav-5-on`
        document.getElementById(`Navi_Text_5`).className = `content-nav-text-5-on` 
        document.getElementById(`Navi_circle_5`).className = `content-circle-5-on`
    }
}

export { onChangeMain };