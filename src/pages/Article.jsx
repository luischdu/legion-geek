import React from 'react'
import styled from 'styled-components'

const Fixed = styled.div`
    top: 2rem;
`

const CardStyle = styled.div`
    width: 400px;
    border: none;
    border-radius: 10px;
    background-image:
    radial-gradient(
      circle at top right,
      yellow,
      #f06d06 50%
    );
`
const Stats = styled.div`
    background: #f2f5f8 !important;
    color: #000 !important;
`
const Span = styled.span`
    ${props => props.article && `
        font-size: 10px;
        color: #a1aab9;
    `
    }
    ${props => props.followers && `
        font-size: 10px;
        color: #a1aab9;
    `}
    ${props => props.rating && `
        font-size: 10px;
        color: #a1aab9;
    `}    
    ${props => props.numbers && `
        font-weight: 500
    `
    }

`

const Article = () => {
    return (
        <div className="container mb-5">

            <div className="row g-5">
                <div className="col-md-8">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        From the Firehose
                    </h3>

                    <article className="blog-post">
                        <h2 className="blog-post-title">Sample blog post</h2>
                        <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                        <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                        <hr />
                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>

                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                    </article>

                    <article className="blog-post">
                        <h2 className="blog-post-title">Another blog post</h2>
                        <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <blockquote>
                            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
                        </blockquote>
                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <h3>Example table</h3>
                        <p>And don't forget about tables in these posts:</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Upvotes</th>
                                    <th>Downvotes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alice</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>Bob</td>
                                    <td>4</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Charlie</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Totals</td>
                                    <td>21</td>
                                    <td>23</td>
                                </tr>
                            </tfoot>
                        </table>

                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                    </article>

                    <article className="blog-post">
                        <h2 className="blog-post-title">New feature</h2>
                        <p className="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <ul>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ul>
                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                    </article>

                    <nav className="blog-pagination" aria-label="Pagination">
                        <a className="btn btn-outline-primary" href="#">Older</a>
                        <a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>
                    </nav>

                </div>

                <div className="col-md-4">
                    <Fixed className="position-sticky" >
                        {/* Card Profile */}
                        <div className="p-2 mb-3 rounded">
                                <CardStyle className="card p-3 bg-primary">
                                    <div className="d-flex align-items-center ">
                                        <div className="image"> <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155"/> </div>
                                            <div className="ms-3 w-100 ">
                                                <h4 className="mb-0 mt-0">Alex Morrision</h4> <Span>Senior Journalist</Span>
                                                <Stats className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"> <Span article>Articles</Span> <Span number>38</Span> </div>
                                                    <div className="d-flex flex-column"> <Span followers>Followers</Span> <Span number>980</Span> </div>
                                                    <div className="d-flex flex-column"> <Span rating>Rating</Span> <Span number>8.9</Span> </div>
                                                </Stats>
                                                <div className="button mt-2 d-flex flex-row align-items-center">
                                                    <button className="btn btn-sm btn-outline-primary w-100">Chat</button> 
                                                    <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> 
                                                </div>
                                            </div>
                                        </div>
                                    </CardStyle>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Archives</h4>
                                <ol className="list-unstyled mb-0">
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
                                    <li><a href="#">December 2020</a></li>
                                    <li><a href="#">November 2020</a></li>
                                    <li><a href="#">October 2020</a></li>
                                    <li><a href="#">September 2020</a></li>
                                    <li><a href="#">August 2020</a></li>
                                    <li><a href="#">July 2020</a></li>
                                    <li><a href="#">June 2020</a></li>
                                    <li><a href="#">May 2020</a></li>
                                    <li><a href="#">April 2020</a></li>
                                </ol>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ol>
                            </div>
                        </Fixed>
                    </div>
                </div>
            </div>


    )
}

export default Article
