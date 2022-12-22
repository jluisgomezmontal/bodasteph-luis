export const Project = ({project}) => {
    const {name, img, description, github, hosted}= project;
  return (
    <div className="project">
        <div>
            <h3>{name}</h3>
            <p>
            Cuando vi a Stephanie sabía que era para mi, una mujer inteligente, divertida y hermosa. De esas mujeres que intimidan y no sabía si acercarme o no. Pero me atreví y desde ese día hicimos click. Quiero seguir a su lado todos los días de mi vida... y que ni la muerte nos separe mi hermosa Stephanie porque nos queda mucho por recorrer juntos. A nuestros familiares y amigos los invito a que nos acompañen y celebren con nosotros este día tan especial.
 </p>
 <br />
 <br />
                <a target="_blank" rel="noreferrer" href={github}>
                    Inicio 3:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Ceremonia Religiosa 4:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Ceremonia Civil 4:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Comida 5:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Fiesta 6:00 P.M.
                </a>

        </div>
    </div>
  )
}
