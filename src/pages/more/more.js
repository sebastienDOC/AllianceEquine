import './more.css'
import P1 from '../../assets/Photos Lu/Patients/low/patient-1.webp'
import P2 from '../../assets/Photos Lu/Patients/low/patient-2.webp'
import P3 from '../../assets/Photos Lu/Patients/low/patient-3.webp'
import Lu_14 from '../../assets/Photos Lu/A pied/low/Lu_14.webp'
import equi from '../../assets/Photos Lu/equi.png'

export default function More() {
    return (
        <div className='flex-more'>  
            <h1>L’EQUITHERAPIE</h1>      
            <div className='col-more'>
                <h2>Un accompagnement psychique, corporel et sensoriel guidé par le cheval</h2>
                <p className='more-txt'>
                    Les diverses activités proposées en équithérapie passent par <strong>la rencontre avec le cheval</strong> : prendre soin de lui, l’observer, l’approcher, 
                    lui proposer d’évoluer en liberté autour de nous, effectuer des parcours moteurs avec lui, 
                    des balades en extérieur et du portage en fonction des besoins de chacun. <br/>
                    <br/>
                    <br/>
                    Les séances d’équithérapie permettent de vivres des expériences qui favorisent les domaines de développements suivants :
                    <br/>
                </p>
                <img 
                    src={equi} 
                    alt="Schéma expliquant les domaines de développement de l'équithérapie"
                    className="more-img-equi"
                />
                <br/>
                <p className='more-txt'>
                    Le cheval vit dans un monde sensoriel, s’exprime à travers son corps et est perpétuellement en mouvement. 
                    Il stimule nos sens et nous amène à prendre conscience de notre corps et à agir sur notre schéma corporel, notre équilibre, notre tonicité, 
                    nos coordinations motrices, nos gestes praxiques, notre latéralité, nos repères spatio-temporels.<br/>
                    <br/>
                    <br/>
                    Grâce à son statut d’être vivant, ses comportements et son environnement, <strong>le cheval est source de stimulations pour le développement global 
                    de l’être humain.</strong> Ainsi, nous pouvons travailler autour des émotions, des relations, de la prise en compte de soi et de l’autre, de la communication, 
                    du langage, de la confiance en soi et de l’affirmation de soi, mais aussi, de la relaxation et du lâcher prise. 
                    Être au contact du cheval augmente l’autonomie et la prise d’initiative. Nous pouvons également travailler autour des fonctions exécutives 
                    telles que l’attention, la mémorisation, la planification, la résolution de problème et l’organisation.<br/>
                    <br/>
                    <br/>
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
                <p className='more-txt'>
                <br/>
                    Je propose des <strong>séances individuelles de 1 h</strong> ainsi que des <strong>séances collectives de 1 h 30</strong>, variant de deux à quatre personnes maximum 
                    en fonction des besoins de chacun. Nous pouvons être deux praticiennes pour les séances collectives. <br/>	
                    <br/>	
                    <br/>								    
                    Dans un premier temps, je propose un temps de rencontre au sein de la structure afin de vous présenter les lieux et de faire connaissance 
                    avec vos partenaires équins. Cet échange me permet de faire plus ample connaissance avec vous et de prendre en compte vos attentes d’accompagnement.	<br/>
                    <br/>
                    <br/>
                    Lors des premières séances, nous élaborons ensemble des <strong>objectifs d’accompagnement en fonction de vos envies et de vos besoins</strong>. 
                    Ainsi, les séances sont rythmées par des exercices et des activités avec les chevaux adaptés à votre projet. 
                    Les objectifs d’accompagnement peuvent être dans les <strong>dimensions physiques, corporelles, psychologiques, émotionnelles, sociales, 
                    cognitives et comportementales</strong>.
                </p>
            </div>

            <div className='col-more'>
                <h2>Pourquoi le cheval ?</h2>
                <br/>
                <div className='row-more col-reverse'>
                    <p className='more-txt'>
                        A son contact, il nous invite à suivre son rythme dans <strong>l’instant présent</strong>. Il <strong>éveille et stimule</strong> notre sensorialité 
                        et nous connecte à nos 
                        quatre besoins primaires : chauffer, porter, bercer et toucher. Lui et son environnement regorgent de stimulations sensorielles qui <strong>éveillent 
                        nos émotions, nos sentiments et nos souvenirs</strong>.<br/>
                        <br/>
                        <br/>
                        Dans son milieu naturel, le cheval est une proie et un animal de fuite. Il est donc <strong>extrêmement attentif à ce qui l’entoure, 
                        y compris à l’être humain</strong>. C’est un partenaire doté d’une grande sensibilité face à notre langage corporel. 
                        Ainsi, il est capable de décrypter et refléter nos propres émotions, étant guidé par ce qu’il perçoit pour sa survie.
                        Le cheval agit comme le <strong>miroir de notre état interne</strong>, nous rendant attentifs à notre état émotionnel, même celui refoulé. 
                        Il nous conduit vers une meilleure <strong>compréhension de nous-mêmes</strong> et nous invite à prendre conscience de la manière dont notre corps 
                        communique et de l’énergie que nous émettons. <br/>
                        <br/>
                        <br/>
                        C’est un partenaire sociable et curieux de son environnement, il apporte un <strong>élan à l’interaction et nous invite à s’ouvrir à lui</strong>. 
                        Il est <strong>dépourvu de jugement</strong>, c’est un être doux et chaud que l’on peut <strong>câliner</strong> et auprès duquel on peut se <strong>confier.</strong> <br/>
                        <br/>
                        <br/>
                        Il nous apporte un cadre contenant, apaisant et sécurisant par sa capacité de nous porter, mais aussi, par sa morphologie. 
                        En effet, il instaure des <strong>règles et un cadre à respecter</strong> pour entrer en interaction avec lui de manière confortable. <br/>
                        <br/>
                        <br/>
                        Être auprès de ce partenaire est valorisant par les soins et l’affection qu’on lui apporte. 
                        Il nous apprend quelque fois à <strong>lâcher prise</strong>, mais aussi, à <strong>s’affirmer et à augmenter sa confiance en soi</strong>.<br/>
                        <br/>
                        <br/>
                        Poney et chevaux deviennent des partenaires favorisant les découvertes et les expériences par leur particularité d’<strong>être vivant</strong>.<br/>
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
                    <br/>
                    J’accueille également les établissements relevant de l’aide sociale, médico-sociale et de santé.<br/>
                    <br/>
                    <br/>
                    Il n’est pas nécessaire d’avoir des connaissances et d’avoir été en relation avec les chevaux pour bénéficier
                    de l’équithérapie.
                </p>
            </div>
        </div>
    )
}