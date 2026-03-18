import React from "react";

const Jumbotron = () => {
    return (
        <div className="container mt-4">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5 text-start">
                    <h1 className="display-5 fw-bold">¡Domina React desde Cero!</h1>
                    <p className="col-md-8 fs-4">
                        Esta página fue construida pieza por pieza usando componentes funcionales. Aquí aprendemos que programar no es magia, es orden y lógica.
                    </p>
                    <button className="btn btn-dark btn-lg">¡Empezar a Codear!</button>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;