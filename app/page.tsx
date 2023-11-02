"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import adastra from "@/public/adastra.png";
import dbk from "@/public/dbk.png";
import one from "@/public/1.png";
import two from "@/public/2.jpeg";
import three from "@/public/3.jpeg";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";


export default function Home() {

  function scrollToSection(sectionId: any) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

	return (
		<div>
			<nav className="text-gray-200 font-light flex flex-row justify-between">
				<div className="">
					<p>alston chan</p>
				</div>
				<ul className="flex justify-start space-x-8">
          <li className="hover:text-gray-300 hover:underline hover:underline-offset-2">
            <button onClick={() => scrollToSection('projects')}>projects</button>
          </li>
          <li className="hover:text-gray-300 hover:underline hover:underline-offset-2">
            <button onClick={() => scrollToSection('gallery')}>gallery</button>
          </li>
          <li className="hover:text-gray-300 hover:underline hover:underline-offset-2">
            <button onClick={() => scrollToSection('blog')}>blog</button>
          </li>
        </ul>
			</nav>

			<div className="flex items-center gap-4 my-8">
				<img
					alt="Alston Chan"
					src="https://media.licdn.com/dms/image/D4E03AQGnHO-dce23vw/profile-displayphoto-shrink_800_800/0/1695926044209?e=1704326400&v=beta&t=-DQkBt5vxFEODQ8fO4ikp1w30-tUDoVT3MJDwlgHWbU"
					className="h-32 w-32 rounded-full object-cover"
				/>

				<div>
					<h3 className="text-2xl font-medium text-white">
						hey, i&apos;m alston!
					</h3>
					<p className="font-light text-white my-2">
						i&apos;m an undergradute studying cs @ the univ. of maryland,
						and an aspiring full stack developer. currently working
						for the diamondback newspaper.
					</p>

					<div className="flow-root">
						<ul className="flex flex-wrap space-x-2">
							<li className=" ">
								<a
									href="#"
									className="text-2xl font-medium text-gray-300"
								>
									<i className="devicon-linkedin-plain"></i>
								</a>
							</li>

							<li className=" ">
								<a
									href="#"
									className="text-2xl font-medium text-gray-300"
								>
									<i className="devicon-github-original"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<section className="text-white" id="projects">
				<div className="">
					<h2 className="text-2xl font-bold sm:text-4xl">projects</h2>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="relative h-96 overflow-hidden sm:h-80 lg:h-full">
						<Image
							alt="dbk"
							src={dbk}
							className="absolute inset-0 h-full w-full object-top object-cover"
						/>
					</div>

					<div className="lg:py-16">
						<h3 className="text-white text-3xl font-semibold mb-4">
							DBK Stylebook
						</h3>
						<article className="space-y-4">
							<div className="flow-root">
								<ul className="flex flex-wrap space-x-2">
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											Next.js
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											TypeScript
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											Supabase
										</Badge>
									</li>
								</ul>
							</div>

							<p className="text-gray-500">
								built an interactive web app for the diamondback
								newspaper&apos;s stylebook, which was previously a 50
								page pdf file. integrated a supabase backend to
								allow edits to be made to the stylebook.
							</p>
						</article>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="relative h-96 overflow-hidden sm:h-80 lg:h-full">
						<Image
							alt="ad astra"
							src={adastra}
							className="absolute inset-0 h-full w-full object-top object-cover"
						/>
					</div>

					<div className="lg:py-16">
						<h3 className="text-white text-3xl font-semibold mb-4">
							Ad Astra AI
						</h3>
						<article className="space-y-4">
							<div className="flow-root">
								<ul className="flex flex-wrap gap-2">
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											Next.js
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											TypeScript
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											Supabase
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											OpenAI
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											Langchain
										</Badge>
									</li>
									<li className=" ">
										<Badge className="bg-white text-slate-800">
											Pinecone
										</Badge>
									</li>
								</ul>
							</div>

							<p className="text-gray-500">
								used openai&apos;s gpt-3.5 to create a teacher&apos;s
								assistant for my computer science classes,
								particularly cmsc216 introduction to computer
								systems. trained on 100+ pages of cmsc216 notes.
							</p>
						</article>
					</div>
				</div>
			</section>

      <section className="text-white mt-8" id="gallery">
				<div className="max-w-3xl">
					<h2 className="text-2xl font-bold sm:text-4xl mb-8">gallery</h2>
				</div>
        <div className="flex flex-row justify-between">
          <Image
							alt="one"
							src={one}
							className="w-1/4 object-top object-cover"
					/>
          <Image
							alt="one"
							src={three}
							className="w-1/4 object-top object-cover"
					/>
          <Image
							alt="one"
							src={two}
							className="w-1/4 object-top object-cover"
					/>
        </div>
      </section>

			<section className="text-white mt-8" id="blog">
				<div className="max-w-3xl">
					<h2 className="text-2xl font-bold sm:text-4xl">blog</h2>
				</div>
				<div className="mt-8">
					<Card className="bg-zinc-800 text-white">
						<CardHeader>
							<CardTitle>rage against the dying of the light</CardTitle>
							<CardDescription className="text-zinc-200">oct. 30, 2023</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Do not go gentle into that good night,
Old age should burn and rave at close of day;
Rage, rage against the dying of the light.

Though wise men at their end know dark is right,
Because their words had forked no lightning they
Do not go gentle into that good night.

Good men, the last wave by, crying how bright
Their frail deeds might have danced in a green bay,
Rage, rage against the dying of the light.

Wild men who caught and sang the sun in flight,
And learn, too late, they grieved it on its way,
Do not go gentle into that good night.

Grave men, near death, who see with blinding sight
Blind eyes could blaze like meteors and be gay,
Rage, rage against the dying of the light.

And you, my father, there on the sad height,
Curse, bless, me now with your fierce tears, I pray.
Do not go gentle into that good night.
Rage, rage against the dying of the light.</p>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
