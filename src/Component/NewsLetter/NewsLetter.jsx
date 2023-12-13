import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Navbar from '../Navbar/Navbar'
import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser';
import Modal from '../SubsAlert/Modal';

export default function Newsletter(props) {
    const [Email, setEmail] = useState('')
    const [SubscriptionStatus, setSubscriptionStatus] = useState(false)
    const form = useRef();
    // {console.log(process.env.REACT_APP_SERVICE_ID)}
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_47jg62c', 'template_mdmn31d', form.current, '0uhHBPCCSs-027rfv')
            .then((result) => {
                console.log(result.text);
                result.text === 'OK' ? setSubscriptionStatus(true) : setSubscriptionStatus(false);
                setEmail('')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            {props.noNavbar ? null : <Navbar />}
            <div className="relative isolate mt-6 overflow-hidden bg-gray-900 pt-32 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Don't miss out on our latest articles, tutorials, and updates. Subscribe to our newsletter and follow us on social media to stay connected with The Coding Scribe.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <form ref={form} onSubmit={sendEmail}>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        placeholder="Enter your email" value={Email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    At The Coding Scribe, we are committed to providing you with fresh and insightful content every week. Our "Weekly Articles" section is your gateway to staying informed about the latest trends, news, and in-depth analysis in the tech world.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    At The Coding Scribe, we value your inbox space as much as you do. We're committed to delivering high-quality, informative, and relevant content directly to your email without flooding your inbox.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            {SubscriptionStatus?<Modal/>:null}
        </>

    )
}
