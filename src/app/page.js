import Image from "next/image";
import {Button} from "@/components/ui/button";
import AppHeading from "@/components/application/AppHeading";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import CardLevel from "@/components/application/home/CardLevel";

export default function Home() {

  const cardsDisplay = [{
    cardHrefLink: "/a1-listening",
    cardTitle: "A1 Listening",
    cardDescription: "Level: A1",
    cardContent: "Listening" +
      " practice to help you understand familiar words and basic phrases when people speak slowly" +
      " and clearly. Situations include meeting people, shopping and conversations at work!"
  }, {
    cardHrefLink: "/a2-listening",
    cardTitle: "A2 Listening",
    cardDescription: "Level: A2",
    cardContent: "Listening" +
      " practice to help you understand common vocabulary and expressions in short, clear" +
      "dialogues. Situations include simple explanations, introductions, messages and announcements."
  }, {
    cardHrefLink: "/b1-listening",
    cardTitle: "B1 Listening",
    cardDescription: "Level: B1",
    cardContent: "Listening" +
      " practice to help you understand the main points of clear, standard speech about everyday or" +
      " job-related topics. Situations include phone calls, meetings and interviews."
  }, {
    cardHrefLink: "/b2-listening",
    cardTitle: "B2 Listening",
    cardDescription: "Level: B2",
    cardContent: "Listening" +
      " practice to help you understand extended, standard speech about familiar topics that may contain" +
      " complex ideas. Situations include broadcasts, reviews, presentations and lectures."
  }, {
    cardHrefLink: "/c1-listening",
    cardTitle: "C1 Listening",
    cardDescription: "Level: C1",
    cardContent: "Listening" +
      " practice to help you understand extended speech about abstract, complex or unfamiliar topics." +
      " Situations include job interviews, lectures, talks and meetings."
  },]


  return (
    <>
      <AppHeading pageFocus="0"/>

      <div className="text-justify">
        <div className="py-10">
          <div className="text-center text-4xl font-bold">Listen Together</div>
          <div className="text-lg my-4">Here you can find activities to practise your listening skills. Listening will
            help you to improve your
            understanding of the language and your pronunciation.
          </div>
          <div className="text-lg my-4">The self-study lessons in this section are written and organised by English
            level based on the Common European Framework of Reference for languages (CEFR). There are recordings of
            different situations and interactive exercises that practise the listening skills you need to do well in
            your studies, to get ahead at work and to communicate in English in your free time. The speakers you will
            hear are of different nationalities and the recordings are designed to show how English is being used in the
            world today.
          </div>
          <div className="text-lg my-4">Take our free online English test to find out which level to choose. Select your
            level, from A1 English level (elementary) to C1 English level (advanced), and improve your listening skills
            at
            your own speed, whenever it&apos;s convenient for you.
          </div>
        </div>

        <div className="py-5">
          <div className="text-center text-4xl">Why?</div>
        </div>

        <div className="py-10">
          <div className="text-center text-4xl">How?</div>
        </div>


        <div className="py-10">
          <div className="text-center text-4xl">Choose your level to practise your listening</div>

          {cardsDisplay.map(x => {
            return <>
              <CardLevel hrefLink={x.cardHrefLink} cardTitle={x.cardTitle} cardDescription={x.cardDescription}
                         cardContent={x.cardContent}/>
            </>
          })}
        </div>

        <div className="mb-52">
          <div className="text-center text-4xl font-bold">Practice to listen with confidence</div>
          <div className="text-lg my-4">Our online English classes feature lots of useful learning materials and
            activities to help you listen and respond with confidence in a safe and inclusive learning environment.
          </div>
          <div className="text-lg my-4">Practise listening to your classmates in live group classes, get listening
            support
            from a personal tutor in one-to-one lessons or practise by yourself at your own speed with a self-study
            course.
          </div>
        </div>
      </div>


    </>
  );
}
