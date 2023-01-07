import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { useGlobalContext } from '../context'
const Home = () => {
  const {
    topTrending,
    upComing,
    popularityRank,
    GetTopTrending,
    GetUpcoming,
    GetPopularityRank,
  } = useGlobalContext()
  GetTopTrending()
  GetUpcoming()
  GetPopularityRank()
  return (
    <>
      <Banner data={topTrending} />
      <Card data={topTrending} title='Top 8 Trending' />
      <Card
        data={upComing}
        title='Top 8 Upcoming Anime'
        viewMore='/up-coming-anime'
      />
      <Card
        data={popularityRank}
        title='Most Popular Anime'
        viewMore='/most-popular-anime'
      />
    </>
  )
}

export default Home
