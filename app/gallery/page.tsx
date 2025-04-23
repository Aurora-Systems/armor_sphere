"use client"
import ReactImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery(){
    const images=[
        {
            original: "https://ngratesc.sirv.com/armor_sphere/36l.png",
        },
        {
            original: "https://ngratesc.sirv.com/armor_sphere/36l%20dpi.png"
        },
        {
            original:"https://ngratesc.sirv.com/armor_sphere/60l.png"
        },
        {
            original:"https://ngratesc.sirv.com/armor_sphere/80l.png"
        },
        {
            original:"https://ngratesc.sirv.com/armor_sphere/200l.png"
        },
        {
            original:"https://ngratesc.sirv.com/armor_sphere/Screenshot_20241002_182414_Gallery.jpg"
        },
        {
            original:"https://ngratesc.sirv.com/armor_sphere/20241221_161803.jpg"
        },
        {
            original:"https://ngratesc.sirv.com/armor_sphere/IMG-20250410-WA0006%5B1%5D.jpg"
        },
       
    ]
    return(
        <div>
            <div >
            <h1 className="text-center pt-3 mt-5 text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-tight">Gallery</h1>
            <p className="text-center mt-4">Explore our range of products and their features.</p>
            </div>
            <div className="container mx-auto mt-10 mb-10">
                <ReactImageGallery items={images}/>
            </div>
          
        </div>
    )
}