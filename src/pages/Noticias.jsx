import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { db } from '../firebase/firebase-config'
import { setAllArticle } from '../Redux/actions/articles'

const Img = styled.img`

    width: 150px;
    height: 185px;
    border-radius: 15px;
    position: relative;
    margin-right: 15px;
    margin-top: 15px;

`

const CardHeader = styled.div`
	margin-top:-40px;
    height: 120px;
	background: linear-gradient(-90deg, #BF019F, #F28A57); 
	box-shadow:1px 5px 15px #a2a2a2;
    border-radius: 15px;
`

const Bg = styled.div`
    width: 100%;
    height: 400px;
	background-image: url(https://free4kwallpapers.com/uploads/originals/2019/04/15/city-vector-panorama-wallpaper.jpg);
    background-image: url(https://tec.mx/sites/default/files/styles/header_full/public/2020-07/uso-de-blockchain.jpg?itok=MBboaP1F);

    
    background-size: cover;
`
const ManiCardStyle = styled.div`
    padding: 15px;
    background: rgba(0,0,0, 0.8);
    border-radius: 15px;
`
const HeightCard = styled.div`
    height: 220px;

`


const Noticias = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.allArticles)


    const getArticles = () => {
        db.collection('articles').limit(8).get()
            .then( docs => {
                if (!docs.empty) {
                    let articles = [];
                    docs.forEach( hijo => {
                        articles.push({
                            id: hijo.id,
                            ...hijo.data()
                        })
                        console.log(articles); 
                    })
                    console.log(articles);
                    dispatch(setAllArticle(articles))
                }
            })
    }

    useEffect( async () => {
        if(articles){
            await getArticles()
            setIsLoading(false)
            articles.map(el => {
                console.log(el);
            })
        }
        
    }, [])

    return (
        isLoading ? <h1>Cargando...</h1>:
        (<div className="container">
            <Bg className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <ManiCardStyle className="col-md-6">
                    <h1 className="display-4 fst-italic">¡Tutoriales, Artículos, Notícias y Más!</h1>
                    <p className="lead mb-0"><p className="text-white fw-bold">Esta seccion esta dedicada a satisfacer tus deseos de ampliar tu conocimiento sobre la tecnologia</p></p>
                </ManiCardStyle>
            </Bg>
            
            <div className="row mb-2">
                
{/*                 <div className="col-md-6">
                <Link to={`/article/asfasd251`} >
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <Img src="https://static.vecteezy.com/system/resources/previews/000/537/403/non_2x/vector-colorful-modern-template-with-colorful-design.jpg" alt="" />
                        </div>
                    </div>
                    </Link>
                </div> */}
                {
                    articles.map( hijo => (
                        <div key={hijo.title} className="col-md-6 h-md-250">
                        <HeightCard className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">{hijo.categoryLabel}</strong>
                                <h3 className="mb-0">{hijo.title}</h3>
                                <div className="mb-1 text-muted">14 Junio 2021</div>
                                <p className="mb-auto">{hijo.description}</p>
                                <Link to={`/article/${hijo.id}`} className="stretched-link">Continuar Leyendo</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <Img className="img-thumpnail" src={hijo.poster} alt="" />
                            </div>
                        </HeightCard>
                    </div>
                    ))
                }

{/*                 <div class="col-md-4 pt-3">
                    <div class="card-section border rounded p-3">
                        <CardHeader class="card-header-first rounded pb-5  ">
                            <h2 class="card-header-title text-white pt-4 text-center">Redes Sociales</h2>
                        </CardHeader>
                        <div class="card-body text-start">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Post title</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat malesuada, volutpat fermentum eu ac faucibus pellentesque torquent nullam gravida et, ut nam massa purus congue class mi nunc.</p>
                            <button className="btn btn-warning">Read More</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>)
    )
}

export default Noticias
