import React from 'react'

const TipsCategory = () => {
    return (
        <div className="container bg-white rounded mt-3">
            <div className="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Categoria</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>Todos...</option>
                    <option value="1">Tips Tecnologicos</option>
                    <option value="2">Tramites</option>
                    <option value="3">Dispositivos Moviles</option>
                </select>
            </div>
        </div>

    )
}

export default TipsCategory
