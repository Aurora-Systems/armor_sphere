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
            {original: "https://amorsphere.sirv.com/20240417_140708.jpg"},
            {original: "https://amorsphere.sirv.com/20240417_152031.jpg"},
            {original: "https://amorsphere.sirv.com/20240417_151508.jpg"},
            {original: "https://amorsphere.sirv.com/20240712_102117.jpg"},
            {original: "https://amorsphere.sirv.com/20230829_155729(0).jpg"},
            {original: "https://amorsphere.sirv.com/20231030_160328.jpg"},
            {original: "https://amorsphere.sirv.com/20240417_150356.jpg"},
            {original: "https://amorsphere.sirv.com/20240510_094110.jpg"},
            {original: "https://amorsphere.sirv.com/20240417_151817.jpg"},
            {original: "https://amorsphere.sirv.com/20240710_121050.jpg"},
            {original: "https://amorsphere.sirv.com/20250330_114855.jpg"},
            {original: "https://amorsphere.sirv.com/Screenshot_20240914_215121_WhatsApp.jpg"},
            {original: "https://amorsphere.sirv.com/20250318_085039.jpg"},
            {original: "https://amorsphere.sirv.com/20250318_085057.jpg"},
            {original: "https://amorsphere.sirv.com/20250318_085022.jpg"},
            {original: "https://amorsphere.sirv.com/20250318_085001.jpg"},
            {original: "https://amorsphere.sirv.com/20250128_145216.jpg"},
            {original: "https://amorsphere.sirv.com/20250311_171729.jpg"},
            {original: "https://amorsphere.sirv.com/20250318_084815.jpg"},
            {original: "https://amorsphere.sirv.com/20250109_180717.jpg"},
            {original: "https://amorsphere.sirv.com/20241221_162536.jpg"},
            {original: "https://amorsphere.sirv.com/20250109_180653.jpg"},
            {original: "https://amorsphere.sirv.com/20241221_162450.jpg"},
            {original: "https://amorsphere.sirv.com/20241221_161811.jpg"},
            {original: "https://amorsphere.sirv.com/20241118_145745.jpg"},
            {original: "https://amorsphere.sirv.com/20241108_135148.jpg"},
            {original: "https://amorsphere.sirv.com/20241118_145705.jpg"},
            {original: "https://amorsphere.sirv.com/20241115_080517.jpg"},
            {original: "https://amorsphere.sirv.com/20241118_092548.jpg"},
            {original: "https://amorsphere.sirv.com/20241105_104458.jpg"},
            {original: "https://amorsphere.sirv.com/20241105_103832.jpg"},
            {original: "https://amorsphere.sirv.com/20241104_170440.jpg"},
            {original: "https://amorsphere.sirv.com/20241022_154415.jpg"},
            {original: "https://amorsphere.sirv.com/20241018_151451.jpg"},
            {original: "https://amorsphere.sirv.com/20240902_122932.jpg"},
            {original: "https://amorsphere.sirv.com/20240902_122843.jpg"},
            {original: "https://amorsphere.sirv.com/20240827_104621.jpg"},
            {original: "https://amorsphere.sirv.com/20241022_154409.jpg"},
            {original: "https://amorsphere.sirv.com/20240730_155646.jpg"},
            {original: "https://amorsphere.sirv.com/20240712_102156.jpg"}
          
          
       
    ]
    return(
        <div>
            <div >
            <h1 className="text-center pt-3 mt-5 text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-tight">Gallery</h1>
            <p className="text-center mt-4">Explore our range of products and their features.</p>
            </div>
            <div className="container mx-auto mt-10 mb-10">
                <ReactImageGallery showIndex={true} showThumbnails={true} items={images}/>
            </div>
          
        </div>
    )
}