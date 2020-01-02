
$(document).ready(() => {
    $("#lookup").on('submit', (e) => {
        e.preventDefault();
        if(!$("#username").val() ){
            alert("please enter name!")
            return
        }
        let username = $("#username").val()
        let repos = `https://api.github.com/users/${username}/repos`
        axios.get(repos).then(r => {
            r.data.forEach((e, i) => {
                let repoName = e.name
                let repoDscrp = e.description
                let repoUrl = e.html_url
                let repoLang = e.language
                
                
                let container = $(`<div id=repo-${i+1}>`)

                let pName =  $(`<p id=r-name-${i+1} >`)
                let pDscrp =  $(`<p id=r-dscrp-${i+1} >`)
                let pUrl =  $(`<p id=r-url-${i+1} >`)
                let pLang =  $(`<p id=r-lang-${i+1} >`)

                let classContainer = $(".repos")
                

                pName.text(repoName)
                pDscrp.text(repoDscrp)
                pUrl.text(repoUrl)
                pLang.text(repoLang)

                pName.appendTo(container)
                pLang.appendTo(container)
                pDscrp.appendTo(container)
                pUrl.appendTo(container)
                

                container.appendTo(classContainer)

            })
            
        }).catch( e =>{
            alert(e);
        })
    })


})
