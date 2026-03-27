import { useEffect } from "react";

const useInfiniteScroll = (loadMore) => {

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 200) {
        loadMore();
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [loadMore]);

};

export default useInfiniteScroll;