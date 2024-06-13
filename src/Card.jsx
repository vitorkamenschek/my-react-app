function Card () {
    return (
        <div className="card">
            <img className="card-image" src="https://media.licdn.com/dms/image/D4D03AQHADyICE2UEUw/profile-displayphoto-shrink_200_200/0/1709776354471?e=1723680000&v=beta&t=2DLhZnwoLmeFpeGiALWMWn4MM8V6r2FnmBn3BXGH4HA" alt="profile picture" />
            <h2 className="card-title">Vitor Kamenschek</h2>
            <p className="card-description">Estudante de ADS e Desenvolvedor Web</p>
            <a href="https://www.linkedin.com/in/v%C3%ADtor-kamenschek/" target="_blank" rel="noopener noreferrer" className="card-button">Veja meu LinkedIn</a>
        </div>
    )
}

export default Card