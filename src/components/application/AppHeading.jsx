import {Button} from "@/components/ui/button";
import Link from 'next/link'
import {RiHeadphoneFill} from "react-icons/ri";

export default function AppHeading(props) {
  return <>
    <div className="flex flex-row">
      <div className="grow-0">
        <div className="text-2xl">
          <Link href="/">
            <span>ListenTogether</span>
            <span><RiHeadphoneFill/></span>
          </Link>
        </div>
      </div>
      <div className="grow">
        <div className="flex flex-row-reverse gap-2">
          <Link href="/c1-listening"><Button variant={props.pageFocus === "6" ? "default" : "outline"}>C1
            Listening</Button></Link>
          <Link href="/b2-listening"><Button variant={props.pageFocus === "5" ? "default" : "outline"}>B2
            Listening</Button></Link>
          <Link href="/b1-listening"><Button variant={props.pageFocus === "4" ? "default" : "outline"}>B1
            Listening</Button></Link>
          <Link href="/a2-listening"><Button variant={props.pageFocus === "2" ? "default" : "outline"}>A2
            Listening</Button></Link>
          <Link href="/a1-listening"><Button variant={props.pageFocus === "1" ? "default" : "outline"}>A1
            Listening</Button></Link>
          <Link href="/"> <Button variant={props.pageFocus === "0" ? "default" : "outline"}>Home</Button></Link>
        </div>

      </div>
    </div>
  </>
}

