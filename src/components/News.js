import React, { useEffect, useState, useCallback } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import sampleData from '../sample.json';

const News = (props) => {
  const { country, category, pageSize, setProgress } = props;
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    // Reset state when category changes
    setArticles([]);
    setLoading(true);
    setPage(1);
    setTotalResults(0);

    document.title = `${capitalizeFirstLetter(category)} - UpdateZone`;
    const fetchInitialNews = async () => {
        setProgress(10);
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d97806055c434a10ac199cf93f4e672b&page=1&pageSize=${pageSize}`;
        console.log(`Fetching news for category: ${category}`);
        try {
            let parsedData;
            if (process.env.NODE_ENV === 'production') {
                // Use a different CORS proxy for production
                const proxyUrl = `https://cors-anywhere.herokuapp.com/${apiUrl}`;
                let data = await fetch(proxyUrl);
                parsedData = await data.json();
            } else {
                let data = await fetch(apiUrl);
                parsedData = await data.json();
            }
            console.log(`API Response for ${category}:`, parsedData);
            if (parsedData.status === 'ok' && parsedData.articles && parsedData.articles.length > 0) {
                setArticles(parsedData.articles);
                setTotalResults(parsedData.totalResults || 0);
            } else {
                console.log(`API returned no articles for ${category}, using sample data`);
                // Use sample data but modify titles to indicate category
                const modifiedSampleData = sampleData.articles.map(article => ({
                    ...article,
                    title: `[${capitalizeFirstLetter(category)}] ${article.title}`
                }));
                setArticles(modifiedSampleData);
                setTotalResults(sampleData.totalResults || 0);
            }
        } catch (error) {
            console.error(`Failed to fetch news for ${category}:`, error);
            // Use sample data but modify titles to indicate category
            const modifiedSampleData = sampleData.articles.map(article => ({
                ...article,
                title: `[${capitalizeFirstLetter(category)}] ${article.title}`
            }));
            setArticles(modifiedSampleData);
            setTotalResults(sampleData.totalResults || 0);
        }
        setLoading(false);
        setProgress(100);
    };
    fetchInitialNews();
  }, [category, country, pageSize, setProgress]);

  const fetchMoreData = useCallback(async () => {
    const nextPage = page + 1;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d97806055c434a10ac199cf93f4e672b&page=${nextPage}&pageSize=${pageSize}`;

    try {
        let data = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let parsedData = await data.json();
        if (parsedData.articles && parsedData.articles.length > 0) {
            setArticles(prevArticles => prevArticles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults || 0);
        } else {
            console.log("No more articles from API");
        }
    } catch (error) {
        console.error("Failed to fetch more news:", error);
    }
    setPage(nextPage);
  }, [page, country, category, pageSize]);

  return (
    <div className="container my-3">
      <h2 align="center" style={{margin: '35px 0px', marginTop: '70px'}} >Update Zone - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines..</h2>
      {loading && <Spinner/>}
      {!loading && articles.length === 0 && <p align="center">No news available for this category.</p>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner/>}>

        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  Tittle={element.title ? element.title.slice(0, 45) : ""}
                  Description={element.description ? element.description.slice(0, 70) : ""}
                  ImageUrl={element.urlToImage}
                  Url={element.url}
                  Date={element.publishedAt}
                  Source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  pageSize: 5,
  country: 'us',
  category: 'sports',
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News;
