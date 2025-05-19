import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-purple-blue text-2xl">About Me</h2>
        <Card className="p-6 bg-card border-card-border">
          <p className="mb-4">$ cat about.txt</p>
          <div className="text-green">
            <ul className="flex flex-col gap-2">
              <li>🚂 Senior in  <span className="text-blue">Computer Engineering</span> at Purdue University</li>
              <li>⚡️ Focused on <span className="text-blue">Embedded Systems</span> & <span className="text-blue">Software Engineering</span></li>
              <li>👩‍💻 Interst & experience is in <span className="text-blue">low-level programming</span></li>
            </ul>
          </div>
          <p className="mt-4 text-blue">Experience:</p>
          <ul className="list-disc list-inside mt-2 text-purple">
            <li>Embedded Software Engineering Intern @ Garmin</li>
            <li>Founding President, <Link className="text-blue underline" href="https://embedded-purdue.github.io">Embedded Systems @ Purdue</Link></li>
            <li>Previously Firmware Engineering @ Milwaukee Tool</li>
          </ul>
        </Card>
      </div>
    </>
  )
}
