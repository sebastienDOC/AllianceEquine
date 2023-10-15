import './more.css'
import Lu from '../../assets/Photos/Lu_6.jpg'
import Lu2 from '../../assets/Photos/Lu_2.jpg'
import P1 from '../../assets/Photos/patient-1.jpg'
import P2 from '../../assets/Photos/patient-2.jpg'
import P3 from '../../assets/Photos/patient-3.jpg'
import P4 from '../../assets/Photos/patient-4.jpg'

export default function More() {
    return (
        <div className='flex-more'>
            <div className='title'>
                <h1>thérapie avec le cheval</h1>
                <span className='flex-img-more'>
                    <img 
                        src={Lu} 
                        alt='Lucie souriant avec son cheval blanc'
                        className='more-img-title'
                    />
                </span>
            </div>
            <div className='col-more'>
                <h2>COMMENT TRAVAILLE L'ÉQUITHÉRAPEUTE ?</h2>
                <p className='more-txt'>
                    Les moyens utilisés par l'équithérapeute sont d'ordre : <br />
                    <br />
                    <span className='decal'>• <strong>psychiques</strong> : la parole, le discours, le sens, le partage émotionnel, l’expérience vécue, le désir... </span>
                    <span className='decal'>• <strong>corporels</strong> : la sensation, le mouvement, la communication non-verbale, l’expression gestuelle ...</span>
                    <br/>
                    L'équithérapeute utilise des <strong>outils</strong> provenant de spécialités telles que la psychologie, de la neurologie, l'orthophonie, 
                    la psychomotricité ou la kinésithérapie en les <strong>adaptant à une situation incluant le cheval et le patient.</strong><br />
                    <br />
                    Les activités proposées passent par <strong>la rencontre avec le cheval</strong> sous toutes ses formes.Pas forcement à cheval mais 
                    <strong> toujours avec lui</strong>.<br />
                    <br />
                    <span className='decal'>• <strong>A pieds</strong> : soin, travail en liberté, parcours en main …</span>
                    <span className='decal'>• <strong>Ou monté</strong> : Maniabilité, jeux thérapeutiques, monte sensorielle, relaxation , travail sur la motricité ...</span>
                    <br />
                    Le travail est proposé en <strong>fonction de la personne et des objectifs thérapeutiques établis</strong>. Cet accompagnement fait l'objet de bilans réguliers.
                </p>
                <div className='row-more'>
                    <img 
                        src={P1} 
                        alt="Lucie et son patient pendant une séance d'équithérapie avec un cheval brun"
                        className='more-img'
                    />
                    <img 
                        src={P2} 
                        alt="Lucie et son patient pendant une séance d'équithérapie avec un cheval brun"
                        className='more-img'
                    />
                    <img 
                        src={P3} 
                        alt='Un patient de Lucie avec une casquette fait un câlin à un cheval brun'
                        className='more-img'
                    />
                </div>
            </div>

            <div className='col-more'>
                <h2>A QUI S'ADRESSE L'ÉQUITHÉRAPIE ?</h2>
                <p className='more-txt'>
                    L'équithérapie s'adresse <strong>aux enfants comme aux adultes</strong> présentant des 
                    <strong> difficultés psychologiques, physiques ou comportementales</strong>.<br />
                    <br />
                    <span className='decal'>• en recherche de mieux-être dans un moment de vie difficile</span>
                    <span className='decal'>• souffrance psychologique (dépression, anxiété ...)</span>
                    <span className='decal'>• porteur d'un handicap : mental ou physique (autisme, trisomie, polyhandicap ...)</span>
                    <span className='decal'>• en difficulté émotionnelle ou comportementale (difficultés scolaires, dyspraxie, dysphasie, hyperactivité, ….)</span>
                    Pour bénéficier d'un projet en équithérapie, il n'est pas indispensable de savoir monter à cheval ni d'avoir déjà été en relation avec les équidés.
                </p>
            </div>

            <div className='col-more rel'>
                <h2>POURQUOI LE CHEVAL ?</h2>
                <p className='more-txt more-txt-left rel'>
                    Le cheval est un <strong>être vivant avec sa propre personnalité</strong>, il est doux, chaud, capable de nous porter et de nous mobiliser.<br />
                    Il permet des contacts corporels étroit : câlins, peau à peau, massage, soins, portage et il manifeste son plaisir à les recevoir.<br />
                    <strong>Il réveille ainsi la sensorialité, les émotions et l'attachement</strong>.<br />
                    <br />
                    Il est digne d’intérêt et <strong>il est valorisant</strong> de lui apporter des soins et de le monter.<br />
                    <br />
                    C'est <strong></strong>un animal authentique qui ne triche pas, il est non intrusif et non jugeant.<br />
                    <br />
                    De part sa morphologie et sa taille, <strong>il instaure des règles</strong> et des interdits, il a des besoins<br/>
                    spécifiques qui imposent <strong>un cadre à respecter</strong>.<br />
                    <br />
                    <strong>Le cheval est sensible au dialogue tonique</strong> (communication corporelle corps à corps, non verbale) avec qui le touche et l'accompagne. <br />
                    Il va aider à travailler la motricité, l'équilibre, le tonus, la coordination, le lâcher prise, l'affirmation et la confiance en soi.<br />
                    <br />
                    <strong>C'est un animal sociable qui invite à s'ouvrir à l'autre</strong>. Il aide à conscientiser son positionnement relationnel.<br />
                    En tant qu'animal « proie » dans son milieu naturel, il est en effet <strong>très réceptif à son environnement</strong> et capte les moindre détails 
                    (odeurs, attitude corporelle, tonicité) de son entourage et réagit en fonction.<br />
                    <br />
                    C'est un animal qui <strong>ne laisse pas indifférent par sa symbolique et l'imaginaire qui lui est rattaché</strong>.<br />
                    <br />
                    Toutes ses qualités ne font cependant pas du cheval un thérapeute mais un partenaire en mesure d'ouvrir des opportunités lors de 
                    séances accompagnées par un professionnel formé.<br />
                </p>
                <img 
                    src={Lu2} 
                    alt='Lucie monte son cheval brun'
                    className='more-img abs'
                />
            </div>
                

            <div className='col-more'>
                <h2>QUELS SONT LES OBJECTIFS DE PRISE EN CHARGE ?</h2>
                <p className='more-txt'>
                    L’équithérapie donne à chacun l’opportunité de trouver sa place dans une dynamique de changement en partenariat avec le cheval.<br/>
                    <strong>Des objectifs adaptés sont établis de manière individuelle</strong>.<br/>
                    <br/>
                    Voici quelques exemples d'objectifs :<br/>
                    <br/>
                    <span className='decal'>• travail de réassurance, de confiance en soi et d'estime de soi.<br/></span>
                    <span className='decal'>• autonomisation, favoriser l'affirmation de soi.<br/></span>
                    <span className='decal'>• ouverture à la communication, socialisation, à la découverte et au respect de l'autre.<br/></span>
                    <span className='decal'>• aide à la verbalisation, à l'expression et à la gestion des émotions.<br/></span>
                    <span className='decal'>• prise de conscience de son corps et de son être dans sa globalité, de l'image qu'on a de soi, se détendre, lâcher-prise.<br/></span>
                    <span className='decal'>• travailler la motricité : équilibre, tonicité, repères spacio-temporels, coordination ...</span>
                </p>
                <span className='flex-img-more'>
                    <img 
                        src={P4} 
                        alt="Lucie et son patient prennent soin d'un cheval brun pendant une séance d'équithérapie"
                        className='more-img-title'
                    />
                </span>
            </div>
        </div>
    )
}