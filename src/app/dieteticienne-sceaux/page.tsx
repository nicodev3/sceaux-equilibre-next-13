import Image from 'next/image'
import Link from 'next/link'
import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/dieteticienne-sceaux',
    },
    openGraph: {
      title:
        'Diététicienne Professionnelle | Conseils Alimentaires & Plans de Repas',
      url: '/dieteticienne-sceaux',
      images: 'https://sceaux-equilibre.fr/sceaux-equilibre-nutrition.jpg',
    },
    title:
      'Diététicienne Professionnelle | Conseils Alimentaires & Plans de Repas',
    description:
      'Diététicienne expérimentée propose conseils nutritionnels personnalisés, plans alimentaires sur mesure pour une santé optimale via une alimentation équilibrée.',
  }
}

const DieteticienneSceauxPage = () => {
  return (
    <div className="md:grid md:grid-cols-12">
      <div className="flex flex-col gap-5 md:col-start-1 md:col-end-9">
        <header>
          <h1 className={`mb-5 text-3xl xl:text-4xl ${openSans.className}`}>
            Diététicienne Diplômée : Pour une alimentation saine et équilibrée
          </h1>
          <p className="mb-5">
            Chaque individu est unique, et il en va de même pour ses besoins
            alimentaires. Notre diététicienne professionnelle est là pour vous
            aider à comprendre votre corps et à adopter une alimentation saine
            qui vous convient.
          </p>

          <Image
            src="/sceaux-equilibre-nutrition.jpg"
            width="1000"
            height="767"
            alt="Thérapie par la Pleine Conscience à Sceaux"
          />
        </header>
        <h2 className={`text-xl ${openSans.className}`}>Notre Approche</h2>
        <p>
          Nous croyons en une approche <strong>personnalisée</strong> de la
          nutrition. Chaque plan de repas est conçu en fonction de vos besoins,
          de vos objectifs et de vos préférences.
        </p>

        <h2 className={`text-xl ${openSans.className}`}>Services Proposés</h2>
        <ul className="flex list-disc flex-col gap-4 pl-8">
          <li>
            <strong>Consultation initiale</strong> : Évaluation de vos habitudes
            alimentaires, antécédents médicaux et objectifs.
          </li>
          <li>
            <strong>Plans de repas personnalisés</strong> : Élaborés en fonction
            de vos besoins énergétiques et nutritionnels.
          </li>
          <li>
            <strong>Coaching nutritionnel</strong> : Suivi régulier pour
            s&apos;assurer que vous restez sur la bonne voie.
          </li>
          <li>
            <strong>Ateliers et séminaires</strong> : Pour approfondir vos
            connaissances sur des sujets spécifiques liés à l&apos;alimentation.
          </li>
        </ul>

        <h2 className={`text-xl ${openSans.className}`}>
          Pourquoi choisir notre diététicienne ?
        </h2>
        <p>
          Avec une formation solide et des années d&apos;expérience, notre
          diététicienne est dévouée à aider chaque client à atteindre ses
          objectifs de santé grâce à une alimentation équilibrée. Elle utilise
          des méthodes basées sur des preuves scientifiques, tout en tenant
          compte de la personnalité et du mode de vie de chaque individu.
        </p>
      </div>
      <aside className="border-green c-wysiwyg rounded border p-5 shadow-md md:col-start-10 md:col-end-13">
        <h2 className={`mb-3 text-2xl ${openSans.className}`}>
          Lucille Anglard, diététicienne à Sceaux
        </h2>
        <p className="mb-3">
          En tant que diététicienne, Lucille Anglard joue le rôle de guide pour
          réhabiliter vos pratiques alimentaires. Son approche vise à établir
          des routines nutritionnelles alignées sur votre santé, vos besoins
          spécifiques, votre quotidien, et vos préférences gustatives. Le
          principal objectif étant de vous accompagner vers vos aspirations en
          matière de santé et d&apos;épanouissement personnel.
        </p>
        <p>
          Lucille Anglard consulte au cabinet de Sceaux tous les lundis matins
          de 8h00 à 14h00.
        </p>
        <p className="text-center text-2xl font-semibold">06 38 01 10 32</p>
        <Link
          href="https://www.doctolib.fr/dieteticien/paris/lucille-anglard"
          target="_blank"
          className="c-btn-cta"
        >
          Prendre RDV sur Doctolib
        </Link>
      </aside>
    </div>
  )
}

export default DieteticienneSceauxPage
