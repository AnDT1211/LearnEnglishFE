import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";


/*
props.hrefLink
props.cardTitle
props.cardDescription
props.cardContent
 */
export default function CardLevel(props) {
  return <>
    <div className="my-5">
      <Link href={props.hrefLink}>
        <Card>
          <CardHeader>
            <CardTitle>{props.cardTitle}</CardTitle>
            <CardDescription>{props.cardDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{props.cardContent}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  </>
}