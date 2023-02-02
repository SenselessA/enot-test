import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useQuery} from "react-query";
import {Box, Typography} from "@mui/material";
import styles from './news-line.module.css'
import {newsLineContext} from "../../store/NewsLineProvider";


// https://newsapi.org/docs/get-started
const url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-01-29&' +
    'sortBy=popularity&' +
    'apiKey=871c399c168b49c883daae36ba6aaa50';

const req = new Request(url);

interface INewsContent {
    articles: {
        content: string
    }[]
}

const NewsLine = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLParagraphElement>(null);
    const lineDuplicateRef = useRef<HTMLParagraphElement>(null);
    const [isHide] = useContext(newsLineContext);

    useEffect(() => {
        if (lineRef.current && containerRef.current && lineDuplicateRef.current) {
            lineRef.current.style.animationDuration = containerRef.current.offsetWidth * 4 + 's';
            lineDuplicateRef.current.style.animationDuration = containerRef.current.offsetWidth * 4 + 's';
        }
    })

    const hoverHandler = useCallback((isStop: boolean) => {
        if (lineRef.current && lineDuplicateRef.current) {
            lineRef.current.style.animationPlayState = isStop ? 'paused' : 'running';
            lineDuplicateRef.current.style.animationPlayState = isStop ? 'paused' : 'running';
        }
    }, [lineRef.current, lineDuplicateRef.current])

    const { isLoading, error, data } = useQuery<INewsContent, Error>('repoData', () =>
        fetch(req).then(res =>
            res.json()
        )
    )

    if (isHide) {
        return null;
    }


    return (
        <Box
            className={styles.marquee}
            ref={containerRef}
            onMouseEnter={() => hoverHandler(true)}
            onMouseLeave={() => hoverHandler(false)}
        >
            {isLoading && <p>Loading...</p>}
            {error && <p>An error has occurred: {error.message}</p>}

            <Typography ref={lineRef} className={styles.marquee__content} variant={'subtitle1'} color={'#10C200'}>
                {data?.articles.map((article: { content: string; }) => article.content + ' | Next news: ')}
            </Typography>

            <Typography ref={lineDuplicateRef} className={styles.marquee__content} variant={'subtitle1'} color={'#10C200'} aria-hidden="true">
                {data?.articles.map((article: { content: string; }) => article.content + ' | Next news: ')}
            </Typography>
        </Box>
    )
};

export default NewsLine;