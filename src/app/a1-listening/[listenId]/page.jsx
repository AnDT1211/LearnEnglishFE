"use client"
import AppHeading from "@/components/application/AppHeading";
import AudioPlayer from "@/components/custom/AudioPlayer";
import {Textarea} from "@/components/ui/textarea";
import SubmitWriting from "@/components/application/listListening/SubmitWriting";
import {Button} from "@/components/ui/button";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {FaPause, FaPlay} from "react-icons/fa";
import {useRouter} from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import ControlAudio from "@/components/custom/ControlAudio";
import {useEffect, useRef, useState} from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import {redirect} from "next/navigation";


let cardsDisplay = [
  {
    hrefLink: "a1-listening/1",
    cardTitle: "A request from your boss",
    cardContent: "Listen to requests from a manager to practise and improve your listening skills.",
    audioUrl: "https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_A1_A_request_from_your_boss.mp3"
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


export default function A1ListeningById({params}) {

  // if(params.listenId === "1") {
  //   return <>
  //     <AppHeading pageFocus="1"/>
  //     {params.listenId}
  //   </>
  // }



  // -------------------------------------------------------------------

  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backSecond = () => {
    progressBar.current.value = Number(progressBar.current.value - 1);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 10);
    changeRange();
  }

  // ------------------------------------------------------------------------




  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     e.preventDefault();
  //     if ((e.metaKey || e.ctrlKey) && e.code === 'KeyC') {
  //       console.log('fire!')
  //     }
  //   })
  // }, )

  useEffect(() => {
    const callback = (event) => {
      // event.metaKey - pressed Command key on Macs
      // event.ctrlKey - pressed Control key on Linux or Windows
      if ((event.metaKey || event.ctrlKey) && event.code === 'Digit0') {
        togglePlayPause();
      } else if ((event.metaKey || event.ctrlKey) && event.code === 'Digit8') {
        backSecond();
      }
    };
    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [isPlaying]);










  let [writing, setWriting] = useState("");

  const router = useRouter();
  let listening = cardsDisplay[params.listenId - 1];
  return <>

    <div>
      <AppHeading pageFocus="1"/>
      <div className="py-10">
        <div className="text-4xl text-center font-bold">
          {listening.cardTitle}
        </div>
      </div>
      <div className="pb-4">
        {/*<AudioPlayer audioUrl={listening.audioUrl}/>*/}


        {/*-------------------------------------------------------------------*/}


        <div>
          <audio ref={audioPlayer} src={listening.audioUrl} preload="metadata"></audio>
          <div className="grid grid-cols-3 justify-items-center">
            <div className="flex gap-1">
              <Button onClick={backSecond}> <MdKeyboardArrowLeft/></Button>
              <Button onClick={togglePlayPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</Button>
            </div>
            <div>
              <div>
                <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
              </div>
              {/* current time */}
              <span>{calculateTime(currentTime)}</span>
              <span> - </span>
              {/* duration */}
              <span>{(duration && !isNaN(duration)) && calculateTime(duration)}</span>
            </div>
            <div>
              <ControlAudio/>
              {/*Control button*/}
            </div>
          </div>
        </div>


        {/*-------------------------------------------------------------------*/}


      </div>

      {/*Input writing*/}
      <div className="w-full">
        <Textarea placeholder="Type what you are listening here." value={writing} onChange={(e) => {
          setWriting(e.target.value);
        }}/>
      </div>









      <div className="grid justify-center">
        <div className="pb-3"></div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Submit</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Please do not cry
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => {
                // fetch data to server           // --------------------------------------- Look at here //
                router.push('/solution')     // re-direct to solution page
              }}> Submit
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  </>
}



