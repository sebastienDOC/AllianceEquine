import './more.css'
import P1 from '../../assets/Photos Lu/Patients/low/patient-1.webp'
import P2 from '../../assets/Photos Lu/Patients/low/patient-2.webp'
import P3 from '../../assets/Photos Lu/Patients/low/patient-3.webp'
import Lu_14 from '../../assets/Photos Lu/A pied/low/Lu_14.webp'

export default function More() {
    return (
        <div className='flex-more'>  
            <h1>L’EQUITHERAPIE</h1>      
            <div className='col-more'>
                <h2>Un accompagnement psychique, corporel et sensoriel guidé par le cheval</h2>
                <p className='more-txt'>
                    Je vous propose dans un premier temps de nous rencontrer et de faire connaissance avec les chevaux et
                    moi-même, puis nous élaborons ensemble vos <strong>objectifs d’accompagnement en fonction de vos envies et
                    vos attentes</strong> repérées lors des premières séances. <br />
                    <br />
                    Les diverses activités proposées en équithérapie passent par <strong>la rencontre avec le cheval</strong>. Je propose
                    principalement de travailler à pied au côté du cheval : prendre soin de lui, l’observer et l’approcher, lui
                    proposer d’évoluer en liberté autour de nous, effectuer des parcours moteurs avec lui, des balades en
                    extérieur et du portage en fonction des besoins de chacun.<br />
                    <br />
                    Les séances sont rythmées par des <strong>exercices et des activités ludiques avec le cheval</strong> en lien avec vos
                    objectifs mis en place lors de notre rencontre. Les objectifs d’accompagnement peuvent être dans <strong>les
                    dimensions physiques, corporelles, psychologiques, émotionnelles, sociales, cognitives et
                    comportementales</strong>.<br />
                    <br />
                    Le cheval vit dans un monde sensoriel, s’exprime à travers son corps et est perpétuellement en mouvement.
                    Il stimule nos sens et nous amène à prendre conscience de notre corps et à travailler sur notre schéma
                    corporel, notre équilibre, notre tonicité, nos coordinations motrices, nos gestes praxiques, notre latéralité, nos
                    repères spatio-temporels.<br />
                    <br/>
                    Grâce à son statut d’être vivant, ses comportements et son environnement, le cheval est source de
                    stimulations pour le développement global de l’être humain. Ainsi, nous pouvons travailler autour des
                    émotions, des relations et de la prise en compte de soi et de l’autre, de la communication, du langage, de la
                    confiance en soi et de l’affirmation de soi, mais aussi, de la relaxation et du lâcher prise. Être au contact du
                    cheval augmente l’autonomie et la prise d’initiative. Nous pouvons également travailler autour des fonctions
                    exécutives telles que l’attention, la mémorisation, la planification, la résolution de problème et l’organisation.
                </p>
                <div className='row-more'>
                    <img 
                        src={P1} 
                        alt="Lucie et son patient pendant une séance d'équithérapie avec un cheval brun"
                        className='more-img'
                    />
                    <img 
                        src={P2} 
                        alt="Un patient de Lucie pendant une séance d'équithérapie fait un câlin à un cheval brun"
                        className='more-img mid'
                    />
                    <img 
                        src={P3} 
                        alt='Un patient de Lucie avec une casquette fait un câlin à un cheval brun'
                        className='more-img'
                    />
                </div>
            </div>

            <div className='col-more'>
                <h2>Pourquoi le cheval ?</h2>
                <div className='row-more col-reverse'>
                    <p className='more-txt'>
                        Le cheval est un être vivant <strong>authentique</strong>. A son contact, il nous invite à suivre son rythme de vie qui se situe
                        dans <strong>l’instant présent</strong>. Il <strong>éveille et stimule notre sensorialité</strong> et nous connecte à nos quatre besoins
                        primaires : chauffer, porter, bercer et toucher. Lui et son environnement regorgent de multiples stimulations
                        sensorielles qui <strong>réveillent nos émotions</strong>, nos sentiments et quelques fois <strong>nos souvenirs</strong>.<br/>
                        <br/>
                        Dans son milieu naturel le cheval est une proie et un animal de fuite. Il est donc <strong>extrêmement attentif à ce
                        qui l’entoure et à l’être humain</strong>. C’est un partenaire doté d’une grande sensibilité face à notre langage
                        corporel, il est capable de décrypter et refléter nos propres émotions. On parle du cheval comme étant le
                        <strong>miroir de notre état interne</strong>, rendant la personne attentive à son état émotionnel, même celui refoulé.<br/>
                        <br/>
                        C’est un partenaire sociable et curieux de son environnement, il apporte un <strong></strong>élan à l’interaction et nous
                        invite à s’ouvrir à lui. Il est <strong>dépourvu de jugement</strong>, c’est un être doux et chaud que l’on peut <strong>câliner</strong> et
                        auprès duquel on peut se <strong>confier</strong>.<br/>
                        <br/>
                        Il nous apporte un cadre <strong>contenant, apaisant et sécurisant</strong> par sa capacité de nous porter, mais aussi, par
                        sa morphologie. En effet, il instaure des <strong>règles et un cadre à respecter</strong> pour entrer en interaction avec lui de
                        manière confortable.<br/>
                        <br/>
                        Être auprès de ce partenaire est <strong>valorisant</strong> par les soins et l’affection qu’on lui apporte. Il nous apprend
                        quelque fois à <strong>lâcher prise</strong>, mais aussi, à <strong>s’affirmer et à augmenter sa confiance en soi</strong>.<br/>
                        <br/>
                        Poney et chevaux deviennent des partenaires favorisant les découvertes et les expériences par leur
                        particularité <strong>d’être vivant</strong>.
                    </p>
                    <img 
                        src={Lu_14} 
                        alt="Lucie et son cheval brun"
                        className='more-img-why'
                    />
                </div>
            </div>

            <div className='col-more'>
                <h2>A qui s’adresse l’équithérapie ?</h2>
                <p className='more-txt left'>
                    Enfants, adolescents, adultes, et séniors ressentant un besoin d’accompagnement sont les bienvenus.<br/>
                    <br/>
                    J’accueille également les établissements relevant de l’aide sociale, médico-sociale et de santé.<br/>
                    <br/>
                    Il n’est pas nécessaire d’avoir des connaissances et d’avoir été en relation avec les chevaux pour bénéficier
                    de l’équithérapie.
                </p>
            </div>
        </div>
    )
}