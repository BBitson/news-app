import { useEffect, useState, useMemo, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const idOne = uuidv4();
const idTwo = uuidv4();
const idThree = uuidv4();
const idFour = uuidv4();
const idFive = uuidv4();
const idSix = uuidv4();

const data = {
    [idOne]: {
        NewsName: "Aerald News",
        TickerRef: "QQE",
        BullishTake: 10,
        BearishTake: 1,
    },
    [idTwo]: {
        NewsName: "Berald News",
        TickerRef: "APE",
        BullishTake: 8,
        BearishTake: 11,
    },
    [idThree]: {
        NewsName: "Cerald News",
        TickerRef: "GME",
        BullishTake: 8,
        BearishTake: 5,
    },
    [idFour]: {
        NewsName: "Derald News",
        TickerRef: "APE",
        BullishTake: 9,
        BearishTake: 2,
    },
    [idFive]: {
        NewsName: "herald News",
        TickerRef: "APE",
        BullishTake: 7,
        BearishTake: 2,
    },
    [idSix]: {
        NewsName: "Berald News",
        TickerRef: "APE",
        BullishTake: 9,
        BearishTake: 11,
    },
};

const useArticles = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        return new Promise((resolve, reject) => {
            if (!data) {
                reject(new Error("Articles not found"));
            }
            resolve(Object.values(data));
        });
    };

    useEffect(() => {
        getArticles().then((result) => {
            setArticles(result);
        });
    }, []);

    const mostBullish = useMemo(() => {
        return articles.reduce(
            (prev, current) => {
                if (prev.BullishTake > current.BullishTake) {
                    return prev;
                }
                return current;
            },
            { BullishTake: 0 }
        );
    }, [articles]);

    const mostBearish = useMemo(() => {
        return articles.reduce(
            (prev, current) => {
                if (prev.BearishTake > current.BearishTake) {
                    return prev;
                }
                return current;
            },
            { BearishTake: 0 }
        );
    }, [articles]);

    const mostMentioned = useMemo(() => {
        const counts = {};
        articles.forEach((article) => {
            const ticker = article.TickerRef;
            if (typeof counts[ticker] == "undefined") {
                counts[ticker] = 1;
            } else {
                counts[ticker]++;
            }
        });
        let result;
        let previous = 0;
        for (const [key, value] of Object.entries(counts)) {
            if (value > previous) {
                result = key;
            }
            previous = value;
        }
        return result;
    }, [articles]);

    const topMentionBullish = useMemo(() => {
        let topM = mostMentioned;
        let bTake = 0;
        articles.forEach((article) => {
            if (article.TickerRef === topM) {
                bTake = article.BullishTake + bTake;
                bTake = bTake / 2;
            }
        });
        return bTake;
    }, [articles, mostMentioned]);

    const topMentionBearish = useMemo(() => {
        let topM = mostMentioned;
        let brTake = 0;
        articles.forEach((article) => {
            if (article.TickerRef === topM) {
                brTake = article.BearishTake + brTake;
                brTake = brTake / 2;
            }
        });
        return brTake;
    }, [articles, mostMentioned]);

    const getArticlesByTicker = useCallback(
        (ticker) => {
            return articles.filter((article) => article.TickerRef === ticker);
        },
        [articles]
    );
    return {
        articles,
        mostBullish,
        mostBearish,
        mostMentioned,
        topMentionBullish,
        topMentionBearish,
        getArticlesByTicker,
    };
};

export default useArticles;
