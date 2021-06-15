import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config"


export const uploadArticle = (article) => {
    db.collection('articles')
        .add(article)
        .then(
            console.log('ok')
        )
        .catch( e => {
            Swal.fire({
                title: 'Error!',
                text: e,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
}

