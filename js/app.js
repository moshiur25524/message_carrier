
// ---------------Load all news in the header----------------
const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data.news_category))
}

loadNews()

const displayNews = (allNews) => {
    const ul = document.getElementById('NewsLists')
    for (let news of allNews) {
        const li = document.createElement('li');
        document.getElementById('category').innerText = `
        ${allNews.length} Items found for category ${news.category_name}
        `
        li.innerHTML = `
        <a onclick="NewsDetails('${news.category_id}')"
        class="block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
        aria-current="page">${news.category_name}</a>
        `
        ul.appendChild(li)
    }

}

// ------------News Details----------------
const cards = document.getElementById('cards')
const NewsDetails = id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    cards.innerHTML = ''

    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetails(data.data))
}

const displayNewsDetails = allDetails => {

    for (let card of allDetails) {
        console.log(card)
        const div = document.createElement('div')
        div.classList.add('w-100')
        div.classList.add('lg:flex')
        div.classList.add('m-8')
        div.innerHTML = `
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('${card.thumbnail_url}')"
        title="Woman holding a mug">
    </div>
    <div
        class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          
            <div class="text-black font-bold text-xl mb-2">${card.title} </div>
            <p class="text-grey-darker text-base">${card.details.slice(0, 300)}</p>
        </div>
        <div class="flex justify-between container">
            <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4"
                    src="${card.author.img}"
                    alt="Avatar of Jonathan Reinink">
                <div class="text-sm">
                     <p class="text-black leading-none">${card.author.name === ('null' || 'system') ? `<span class='text-red-700'>Missing Data</span>` : card.author.name}</p>
                    <p class="text-grey-dark">Aug 18</p>
                </div>
            </div>
            <div>
                <i class="fa-sharp fa-solid fa-eye"></i> ${card.total_view} M
            </div>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div>
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
        `

        cards.appendChild(div)
    }

}