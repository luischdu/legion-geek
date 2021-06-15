import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill'
import styled from 'styled-components';
import '../../node_modules/react-quill/dist/quill.snow.css';
import { uploadArticle } from '../helpers/uploadArticle';


const TextEditor = styled.div`
    padding: 25px;
    .ql-editor {
        min-height: 600px;
    }    
`

const Editor = () => {

    const [article, setArticle] = useState({
        title: "",
        content: "",
        createDate: new Date(),
        isPublish: true,
        lastModified: new Date(),
        createUserID: "",
        description: "",
        categoryLabel: "",
    })

    const handleTitle = (e) => {
        setArticle({
            ...article,
            title: e.target.value,
        });
        console.log(article.title);
    }

    const handleDescription = (e) => {
        setArticle({
            ...article,
            description: e.target.value,
        });
        console.log(e.target.value);
    }

    const handleCategory = (e) => {
        console.log(e.target.id);
        setArticle({
            ...article,
            categoryLabel: e.target.id
        })
    }

    const handleBody = (e) => {
        console.log(e);
        setArticle({
            ...article,
            content: e,
        });
    }

    const handleClick = () => {
        uploadArticle(article)
    }

    return (
        <TextEditor className="Editor container-md">
            <h1 className="mb-4" >¡Crear tu articulo!</h1>
            <div class="mb-3 row">
                <label for="titulo" class="col-sm-2 col-form-label">Título del Articulo:</label>
                <div class="col-sm-10">
                    <input onChange={handleTitle} className="form-control" type="text" placeholder="Titulo..." id="titulo" />
                </div>
            </div>
            <div class="mb-3 row">
                <label  for="description" class="col-sm-2 col-form-label">Descripción:</label>
                <div class="col-sm-10">
                    <input onChange={handleDescription} className="form-control" type="text" placeholder="Descripción..." id="description" />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-10">
                <h6>Contenido del Artículo:</h6>
                </div>
                <div class="dropdown col ms-5">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria ...
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li ><button id="Noticias" onClick={handleCategory} class="dropdown-item " href="#">Noticia</button></li>
                        <li ><button id="Recurso"  onClick={handleCategory} class="dropdown-item " href="#">Recurso</button></li>
                        <li ><button id="Articulo" onClick={handleCategory} class="dropdown-item" href="#">Tutorial</button></li>
                        <li><hr class="dropdown-divider" /></li>
                    </ul>
                </div>
            </div>
            <ReactQuill
                placeholder="Redacta Aqui tu Articulo"
                modules={Editor.modules}
                formats={Editor.formats}
                onChange={handleBody}
                value={article.content}
            />

            <button onClick={handleClick} className="btn btn-primary" type="button"> Subir Articulo</button>
        </TextEditor>
    )
}

Editor.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
    ],
};

Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block",
];

export default Editor
