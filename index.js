let newsAccordian=document.getElementById('newsAccordian');

const xhr=new XMLHttpRequest();
let apiKey='85591bd5a6fd4b0e8b8f53d6417fa65f'
let source='in'
xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`,true);
xhr.onload=function(){
    if(this.status==200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles
        // console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index){
            let news=`
                        <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordian">
                                <div class="card-body">
                                    ${element["description"]}. To Read more <a target="_blank" href=${element["url"]}>Click Here</a>
                                </div>
                            </div>
                        </div>`;
            newsHtml+=news;
        });
        newsAccordian.innerHTML=newsHtml
    }
    else{
        console.log("net nhi chl rha")
    }
}
xhr.send();
   
