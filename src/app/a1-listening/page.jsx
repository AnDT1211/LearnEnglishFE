import AppHeading from "@/components/application/AppHeading";
import CardLevel from "@/components/application/home/CardLevel";


export default function A1ListeningPage() {
  let cardsDisplay = [
    {
    hrefLink: "a1-listening/1",
    cardTitle: "A request from your boss",
    cardContent: "Listen to requests from a manager to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/2",
      cardTitle: "A voicemail message",
      cardContent: "Listen to a voicemail message and answer the questions to practise your listening skills."
    }, {
      hrefLink: "a1-listening/3",
      cardTitle: "Booking a table",
      cardContent: "Listen to someone booking a table in a restaurant to practise and improve your listening skills!"
    }, {
      hrefLink: "a1-listening/4",
      cardTitle: "Business cards",
      cardContent: "Listen to four people talk about their jobs to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/5",
      cardTitle: "Finding the library",
      cardContent: "Listen to a conversation about the university library to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/6",
      cardTitle: "Meeting a new team member",
      cardContent: "Listen to a conversation between two new colleagues to practise your listening skills."
    }, {
      hrefLink: "a1-listening/7",
      cardTitle: "Meeting other students",
      cardContent: "Listen to a group of new students meeting for the first time to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/8",
      cardTitle: "Meeting people at a dinner",
      cardContent: "Listen to introductions at a dinner party to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/9",
      cardTitle: "Ordering in a café",
      cardContent: "Listen to people ordering food and drinks in a café to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/10",
      cardTitle: "Organising a group project",
      cardContent: "Listen to people organising a group project and answer the questions to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/11",
      cardTitle: "Shopping for clothes",
      cardContent: "Listen to a conversation in a shop to practise and improve your listening skills."
    }, {
      hrefLink: "a1-listening/12",
      cardTitle: "The first English class",
      cardContent: "Listen to a teacher give students information about a new course to practise and improve your listening skills."
    }
  ];




  return <>
    <AppHeading pageFocus="1"/>

    <div className="py-10 text-justify">
      <div className="text-center text-4xl font-bold">A1 Listening</div>
      <div className="text-lg my-4">Are you a learner at A1 English level (elementary)? This section offers listening
        practice to help you understand familiar words and basic phrases when people speak slowly and clearly.
        Situations include meeting people, shopping and conversations at work.
      </div>
      <div className="text-lg my-4">Each lesson has a preparation task, an audio recording and two tasks to check your
        understanding and to practise a variety of listening skills. Make a start today!
      </div>
    </div>



    <div className="pb-52">
      <div className="text-4xl font-bold">Choose a listening lesson</div>
      {cardsDisplay.map(x => {
        return <><CardLevel hrefLink={x.hrefLink} cardTitle={x.cardTitle} cardDescription=""
                          cardContent={x.cardContent}/></>
      })}
    </div>







  </>
}