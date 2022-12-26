import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Server } from '../types/Server';
import { MouseEventHandler, useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ServerSettings } from '../types/ServerSettings';


type FavoriteStarProps = {
    server: Server
}




export default function FavoriteStar(props: FavoriteStarProps) {

    const { server } = props;

    let serverSettings: ServerSettings = JSON.parse(localStorage.getItem('server-' + server.id) ?? '{}');

    const [favorite, SetFavorite] = useState<boolean>(serverSettings.favorite ?? false)





    const toggleFavorite = (event: MouseEvent) => {
        event.preventDefault()
        serverSettings.favorite = !favorite
        SetFavorite(!favorite)
        localStorage.setItem('server-' + server.id, JSON.stringify(serverSettings))
    }


    const getStar = (): JSX.Element => {
        let serverSettings: ServerSettings = JSON.parse(localStorage.getItem('server-' + server.id) ?? '{}');

        if (favorite) {
            return <AiFillStar color='gold' className={styles.star} onClick={toggleFavorite} />
        }
        return <AiOutlineStar className={styles.star} onClick={toggleFavorite} />
    };

    return getStar()
}
