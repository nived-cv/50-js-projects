
const form = document.getElementById('form')
const search = document.getElementById('search')
const APIURL= 'https://api.github.com/users/'
const main = document.getElementById('main')

async function getUser (username){

    try{
        const {data} = await axios(APIURL+username)
        //console.log(data)
        createUserCard(data);

    }catch(err){
        console.log("404 - handled UI")

        createErrorCard('No profile with this username')
    }
    
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos');
    repos.slice(0,10).forEach((repo)=>{
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')

    repoEl.href=repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
})
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = search.value;
    
    if(user)
    {
    getUser(user)
    getRepos(user)
    }


    search.value=""
})


function createUserCard(user){

    const cardHTML =   `

    <div class="card">
            <div class="avatar">
                <img src="${user.avatar_url}">
            </div>
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers}<strong> Followers </strong></li>
                    <li>${user.following}<strong> Following </strong></li>
                    <li>${user.public_repos}<strong> Repos </strong></li>
                </ul>

                <div id="repos">
                  
                </div>
            </div>
        </div>
    `


    main.innerHTML = cardHTML; 
}

function createErrorCard(message){

    const cardHTML = `

        <div class="card">
            <h1> ${message} </h1>
        </div>
    `
    main.innerHTML = cardHTML;
}

async function getRepos(username){

    try{

        const {data} = await axios(APIURL+username+'/repos?sort=created')
        addReposToCard(data)
    }
    catch(err)
    {
        createErrorCard('problem fetching repo')
        
    }

}