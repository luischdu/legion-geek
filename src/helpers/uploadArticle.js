import { db } from "../firebase/firebase-config"


export const uploadArticle = (article) => {
    db.collection('articles')
        .add(article)
        .then(res => {
            console.log(res);
        })
        .catch( e => {
            console.log(e);
        })
}

