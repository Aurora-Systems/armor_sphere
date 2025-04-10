import { Button } from "@/components/ui/button";

export default function Contact(){
    return(
        <div>
            <div className=" bg-black text-white p-10">
                <div>
                <div className="text-center pt-5">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-tight">Contact Us</h1>

                </div>
                <div className="flex flex-wrap gap-10 -mx-2">
                        <div className="w-full px-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3124891263137!2d30.972765148432288!3d-17.87718512574054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a6ad51d8722b%3A0x56560381d7718065!2sGleneagles!5e1!3m2!1sen!2szw!4v1744293348727!5m2!1sen!2szw " className="w-full h-100 rounded"  loading="lazy" ></iframe>
                        </div>
                        <div className=" w-full px-2">
                            <form action="">
                                <div>
                                    <h4>Leave Us A Message</h4>
                                    <br/>
                                </div>
                                <div className="mb-3">
                                    <span>Full Name</span>
                                    <input className="form-control" type="" name="" required/>
                                </div>
                                <div className="mb-3">
                                    <span>Email</span>
                                    <input className="form-control" type="" name="" required/>
                                </div>
                                <div className="mb-3">
                                    <span>Contact Number</span>
                                    <input className="form-control" type="" name="" required/>
                                </div>
                                <div className="mb-3">
                                    <span>Message</span>
                                    <textarea className="form-control" name="" id="" required></textarea>
                                </div>
                                <div className="mb-3">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Send
            </Button>
                                </div>
                            </form>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}