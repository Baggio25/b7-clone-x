import HomeFeed from "@/app/components/home/home-feed";
import HomeHeader from "@/app/components/home/home-header";
import TweetPost from "@/app/components/tweet/tweet-post";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <TweetPost />
      <HomeFeed />
    </div>
  );
};

export default HomePage;
