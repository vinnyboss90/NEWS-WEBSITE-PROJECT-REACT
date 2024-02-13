import { data } from "jquery";
import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = () => {

    const [articles,seArticles] = useState([]);

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> seArticles(data.articles));

    },[])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} drc={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
