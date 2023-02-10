console.log('Message Carrier is working')

// const main = document.getElementById('banner')
// const div = document.createElement('div')
// const ul = document.createElement('ul')
// div.innerHTML = `
// <li></li>
// `

const loadNews = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data.news_category))
}

loadNews()

const displayNews = (allNews) =>{
    const ul = document.getElementById('NewsLists')
    for(let news of allNews){
        const li = document.createElement('li');
        li.innerHTML = `
        <a onclick="NewsDetails('${news.category_id}')" href="#"
        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
        aria-current="page">${news.category_name}</a>
        `
        ul.appendChild(li)
    }
    
}

const NewsDetails = id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsDetails(data.data[0]))
}

const displayNewsDetails = allDetails =>{
    console.log(allDetails)
}